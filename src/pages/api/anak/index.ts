// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import requestHandler from "@/lib/requestHandler";
import prisma from "@/lib/prisma";
import { adminApp } from "@/lib/firebaseAdmin";
import { calculateAge } from "@/lib/helper";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await requestHandler(req, res, {
        allowedRoles: {
            GET: ["USER"],
            PUT: ["USER"],
            POST: ["USER"],
            DELETE: ["USER"],
        },
        GET: async () => {
            let accessToken = req.cookies.accessToken?.replace(/"/g,'') as string;
            await adminApp.auth().verifyIdToken(accessToken).then(async (dt) => {
                const decodedToken = dt;
                const uuid = decodedToken.uid;
                const anak = await prisma.anak.findMany({
                    where: {
                        idUser: uuid
                    }
                });
                for (let i = 0; i < anak.length; i++) {
                    const obj: any = anak[i];
                    const umur = calculateAge(obj.tanggalLahir);
                    obj.umur = umur;
                    obj.idAnak = obj.uuid;
                    delete obj.uuid;
                }
                res.status(200).json(anak);
            })
        },
        POST: async () => {
            const token = req.headers.accesstoken as string;
            let accessToken = token.replace(/%22/g, '');
            await adminApp.auth().verifyIdToken(accessToken).then(async (dt) => {
                const decodedToken = dt;
                const uuid = decodedToken.uid;
                const anak = await prisma.anak.create({
                    data: {
                        idUser: uuid,
                        nama: req.body.nama,
                        tanggalLahir: new Date(req.body.tanggalLahir),
                        jenisKelamin: req.body.jenisKelamin
                    }
                });
                res.status(200).json(anak);
            })
        }
    });
}
