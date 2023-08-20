// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import requestHandler from "@/lib/requestHandler";
import { serialize } from "cookie";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await requestHandler(req, res, {
        POST: async () => {
            const accessToken = req.body.accessToken;
            const refreshToken = req.body.refreshToken;
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
            res.status(200).json({ status:"Success" });
        }
    });
}
