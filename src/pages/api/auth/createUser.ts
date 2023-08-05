// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import requestHandler from "@/lib/requestHandler";
import prisma from "@/lib/prisma";
import { adminApp } from "@/lib/firebaseAdmin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await requestHandler(req, res, {
        POST: async () => {
            const email = req.body.email;
            let name = email.split("@")[0];
            if (req.body.name) name = req.body.name
            const uid = req.body.uid;
            if (uid) {
                const claims = { role: "USER" };
                await adminApp.auth().setCustomUserClaims(uid, claims);
            }
            try {
                const user = await prisma.user.findUnique({
                    where: {
                        email: email
                    }
                })
                res.status(200).json({ user, 'status':"Failed to create user. User already exist!" });
            } catch (error) {
                const newUser = await prisma.user.create({
                    data: {
                        email: email,
                        nama: name,
                        phone: req.body.phone,
                        address: req.body.address
                    }
                })
                res.status(200).json({ newUser, 'status':"Successfully create new user!" });
            }
        },
    });
}
