// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import requestHandler from "@/lib/requestHandler";
import prisma from "@/lib/prisma";
import { adminApp } from "@/lib/firebaseAdmin";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await requestHandler(req, res, {
    GET: async () => {
      try {
        const token = req.body.accesstoken as string;
        let accessToken = token.replace(/%22/g, '');
        const rt = req.body.refreshtoken as string;
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
                  const url = process.env.NEXT_PUBLIC_BASE_URL + "/api/v1/auth/setToken";
                  const token = {
                    accessToken: accessToken,
                    refreshToken: refreshToken
                  }
                  await axios.post(url, token);
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
