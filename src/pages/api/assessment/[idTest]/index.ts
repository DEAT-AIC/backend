// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import requestHandler from "@/lib/requestHandler";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { idTest } = req.query;
    await requestHandler(req, res, {
        allowedRoles: {
            GET: ["USER"],
            PUT: ["USER"],
            POST: ["USER"],
            DELETE: ["USER"],
        },
        GET: async () => {
            const test = await prisma.test.findUnique({
                where: {
                    uuid: idTest as string
                }
            });
            res.status(200).json(test);
        },
    });
}
