// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import requestHandler from "@/lib/requestHandler";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { idAnak } = req.query;
    await requestHandler(req, res, {
        allowedRoles: {
            GET: ["USER"],
            PUT: ["USER"],
            POST: ["USER"],
            DELETE: ["USER"],
        },
        GET: async () => {
            const test = await prisma.test.findMany({
                where: {
                    idAnak: idAnak as string
                }
            });
            res.status(200).json(test);
        },
    });
}
