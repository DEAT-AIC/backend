// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import requestHandler from "@/lib/requestHandler";
import prisma from "@/lib/prisma";
import { calculateAge } from "@/lib/helper";

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
            const anak: any = await prisma.anak.findUnique({
                where: {
                    uuid: idAnak as string
                },
                include: {
                    test: true
                }
            });
            const umur = calculateAge(anak?.tanggalLahir);
            anak.umur = umur;
            res.status(200).json(anak);
        },
        PUT: async () => {
            const anakUpdated = await prisma.anak.update({
                where: {
                    uuid: idAnak as string
                },
                data: {
                    nama: req.body.nama,
                    tanggalLahir: new Date(req.body.tanggalLahir),
                    jenisKelamin: req.body.jenisKelamin
                }
            });
            res.status(200).json(anakUpdated);
        }
    });
}
