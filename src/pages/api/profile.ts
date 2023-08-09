// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import requestHandler from "@/lib/requestHandler";
import prisma from "@/lib/prisma";
import { adminApp } from "@/lib/firebaseAdmin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await requestHandler(req, res, {
        allowedRoles: {
            GET: ["USER"],
            PUT: ["USER"],
            POST: ["USER"],
            DELETE: ["USER"],
        },
        GET: async () => {
            const token = req.headers.accesstoken as string;
            let accessToken = token.replace(/%22/g, '');
            await adminApp.auth().verifyIdToken(accessToken).then(async (dt) => {
                const decodedToken = dt;
                const uuid = decodedToken.uid;
                const user = await prisma.user.findUnique({
                    where: {
                        uuid: uuid
                    }
                });
                res.status(200).json(user);
            })
        },
        PUT: async () => {
            const token = req.headers.accesstoken as string;
            let accessToken = token.replace(/%22/g, '');
            await adminApp.auth().verifyIdToken(accessToken).then(async (dt) => {
                const decodedToken = dt;
                const uuid = decodedToken.uid;
                const user = await prisma.user.update({
                    where: {
                        uuid: uuid
                    },
                    data: {
                        nama: req.body.nama,
                        phone: req.body.phone,
                        address: req.body.address
                    }
                });
                res.status(200).json(user);
            })
        }
    });
}
