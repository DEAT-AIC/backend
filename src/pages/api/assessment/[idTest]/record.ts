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
        POST: async () => {
            const jawaban = req.body.jawaban as string;
            const idPertanyaan = req.body.idPertanyaan;
            const pertanyaan = await prisma.pertanyaan.findUnique({
                where: {
                    uuid: idPertanyaan
                }
            });
            const jawabanBenar = pertanyaan?.kataStr as string;
            let kebenaran = false;
            if (jawaban.toLowerCase() == jawabanBenar.toLowerCase()) kebenaran = true;
            await prisma.pertanyaan.update({
                where: {
                    uuid: idPertanyaan
                },
                data: {
                    jawaban: jawaban,
                    kebenaran: kebenaran
                }
            })
            res.status(200).json({kebenaran: kebenaran});
        },
    });
}
