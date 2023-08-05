// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import requestHandler from "@/lib/requestHandler";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { clientApp } from "@/lib/firebaseClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await requestHandler(req, res, {
        POST: async () => {
            const email = req.body.email
            const auth = getAuth(clientApp);

            sendPasswordResetEmail(auth, email)
                .then(async () => {
                    res.status(200).json({ emailSent: true, email:email });
                }).catch((error) => {
                    const errorMessage = error.message;
                    res.status(400).json({ emailSent: false, message: errorMessage });
                });
        },
    });
}
