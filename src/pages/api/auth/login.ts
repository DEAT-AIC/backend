// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import requestHandler from "@/lib/requestHandler";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { clientApp } from "@/lib/firebaseClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await requestHandler(req, res, {
        POST: async () => {
            const email = req.body.email
            const password = req.body.password
            const auth = getAuth(clientApp);

            signInWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    const accessToken = await user.getIdToken(true)
                    const refreshToken = user.refreshToken;
                    res.status(200).json({ uid: user.uid, email: user.email, accessToken: accessToken, refreshToken: refreshToken });
                }).catch((error) => {
                    const errorMessage = error.message;
                    res.status(400).json({ error: errorMessage });
                });
        },
    });
}
