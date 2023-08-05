// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import requestHandler from "@/lib/requestHandler";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { clientApp } from "@/lib/firebaseClient";
import { adminApp } from "@/lib/firebaseAdmin";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await requestHandler(req, res, {
        POST: async () => {
            const email = req.body.email
            const password = req.body.password
            const auth = getAuth(clientApp);

            createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    const uid = user.uid;
                    const claims = { role: "USER" }
                    await adminApp.auth().setCustomUserClaims(uid, claims);
                    const accessToken = await user.getIdToken(true);
                    const refreshToken = user.refreshToken;
                    const userExist = await prisma.user.findUnique({
                        where: {
                            uuid: uid
                        }
                    })
                    if (!userExist) {
                        await prisma.user.create({
                            data: {
                                uuid: uid,
                                email: email,
                                nama: req.body.name,
                                phone: req.body.phone,
                                address: req.body.address
                            }
                        })
                        res.status(200).json({ uid: uid, email: user.email, accessToken: accessToken, refreshToken: refreshToken });
                    }
                }).catch((error) => {
                    const errorMessage = error.message;
                    res.status(400).json({ error: errorMessage });
                });
        },
    });
}
