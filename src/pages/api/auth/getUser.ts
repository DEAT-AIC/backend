// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import requestHandler from "@/lib/requestHandler";
import prisma from "@/lib/prisma";
import { adminApp } from "@/lib/firebaseAdmin";
import axios from "axios";
import { serialize } from "cookie";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await requestHandler(req, res, {
    POST: async () => {
      try {
        const token = req.body.accessToken as string;
        let accessToken = token.replace(/%22/g, '');
        const rt = req.body.refreshToken as string;
        const refreshToken = rt.replace(/%22/g, '');
        let decodedToken: any;
        await adminApp.auth().verifyIdToken(accessToken).then(async (dt) => {
          decodedToken = dt;
          const email = decodedToken.email;
          const user = await prisma.user.findUnique({
            where: {
              email: email
            }
          });
          const serializedData = [serialize("accessToken", JSON.stringify(accessToken), {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            sameSite: "strict"
          }),
          serialize("refreshToken", JSON.stringify(refreshToken), {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            sameSite: "strict"
          })];
          res.setHeader("Set-Cookie", serializedData);
          res.status(200).json({ user: user, accessToken: accessToken });
        }).catch(async (error) => {
          if (error.code === 'auth/id-token-expired') {
            const apiKey = process.env.FIREBASE_API_KEY;
            const secureTokenEndpoint = `https://securetoken.googleapis.com/v1/token?key=` + apiKey;

            const data = {
              grant_type: 'refresh_token',
              refresh_token: refreshToken,
            };

            await axios.post(secureTokenEndpoint, data)
              .then(async (response) => {
                accessToken = response.data.id_token;
                await adminApp.auth().verifyIdToken(accessToken).then(async (dt) => {
                  decodedToken = dt;
                  const email = decodedToken.email;
                  const role = decodedToken.role;
                  const serializedData = [serialize("accessToken", JSON.stringify(accessToken), {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    path: "/",
                    sameSite: "strict"
                  }),
                  serialize("refreshToken", JSON.stringify(refreshToken), {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    path: "/",
                    sameSite: "strict"
                  })];
                  res.setHeader("Set-Cookie", serializedData);
                  const user = await prisma.user.findUnique({
                    where: {
                      email: email
                    }
                  });
                  res.status(200).json({ user: user, accessToken: accessToken });
                })
              })
              .catch((error) => {
                console.error('Error refreshing ID token:', error);
                res.status(200).json({ user: "Unathorized" });
              });
          }
        });
      } catch (error) {
        res.status(200).json({ user: "Unathorized" });
      }
    }
  });
}
