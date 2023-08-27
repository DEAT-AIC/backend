// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import requestHandler from "@/lib/requestHandler";
import prisma from "@/lib/prisma";
import { getRandomItems } from "@/lib/helper";

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
            let umur = req.body.levelUmur;
            const correctSeq = req.body.correctSeq;
            const wrongSeq = req.body.wrongSeq;
            if (correctSeq >= 5) umur++;
            if (wrongSeq >= 5) umur--;
            if (umur <= 4) umur = 4;
            else if (umur >= 9) umur = 9;
            const excludedNumbers = req.body.excludedNumbers;
            const soal = await prisma.kata.findMany({
                where: {
                    usia: umur
                }
            });
            const selected = getRandomItems(soal, excludedNumbers);
            const randomNumber = selected[1];
            const pertanyaan = await prisma.pertanyaan.create({
                data: {
                    idTest: idTest as string,
                    kataStr: selected[0].kata
                },
                include: {
                    kata: {
                        select: {
                            imgLink: true,
                            usia: true
                        }
                    }
                }
            });
            res.status(200).json({pertanyaan, randomNumber});
        },
    });
}
