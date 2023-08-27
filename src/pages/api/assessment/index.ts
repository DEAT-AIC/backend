// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import requestHandler from "@/lib/requestHandler";
import prisma from "@/lib/prisma";
import { calculateAge } from "@/lib/helper";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await requestHandler(req, res, {
        allowedRoles: {
            GET: ["USER"],
            PUT: ["USER"],
            POST: ["USER"],
            DELETE: ["USER"],
        },
        POST: async () => {
            const idAnak = req.body.idAnak;
            const test = await prisma.test.create({
                data : {
                    idAnak: idAnak as string
                }
            });
            const anak = await prisma.anak.findUnique({
                where: {
                    uuid: idAnak
                }
            })
            const umur = calculateAge(anak?.tanggalLahir)
            res.status(200).json({idTest : test.uuid, umurAnak: umur});
        }
    });
}
