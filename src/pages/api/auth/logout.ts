// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import requestHandler from "@/lib/requestHandler";
import { getAuth, signOut } from "firebase/auth";
import { clientApp } from "@/lib/firebaseClient";
import { serialize } from "cookie";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await requestHandler(req, res, {
        GET: async () => {
            const auth = getAuth(clientApp);
            signOut(auth).then(() => {
                const serializedData = [serialize("accessToken", "", {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    path: "/",
                    sameSite: "strict",
                    maxAge: 0
                }),
                serialize("refreshToken", "", {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    path: "/",
                    sameSite: "strict",
                    maxAge: 0
                })];
                res.setHeader("Set-Cookie", serializedData);
                res.status(200).json({ message: "Logout Success" });
            }).catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                res.status(400).json({ message: errorMessage });
            });
        },
    });
}
