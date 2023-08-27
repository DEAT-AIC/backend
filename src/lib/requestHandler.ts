// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { adminApp } from "./firebaseAdmin";
import Cookies from "cookies";
import axios from "axios";

type Role = "USER" | "THERAPIST";

type HandlerType = {
  allowedRoles?: {
    GET?: Role[];
    POST?: Role[];
    PUT?: Role[];
    DELETE?: Role[];
  };
  GET?: () => Promise<void>;
  POST?: () => Promise<void>;
  PUT?: () => Promise<void>;
  DELETE?: () => Promise<void>;
};

export default async function requestHandler(req: NextApiRequest, res: NextApiResponse, handler: HandlerType) {
  try {
    const { allowedRoles } = handler;
    switch (req.method) {
      case "GET":
        if (allowedRoles && allowedRoles?.GET) {
          try {
            const cookies = req.cookies;
            let accessToken = cookies.accessToken?.replace(/"/g,'') as string;
            let refreshToken = cookies.refreshToken?.replace(/"/g,'') as string;
            const roles = allowedRoles.GET;
            let decodedToken: any;
            await adminApp.auth().verifyIdToken(accessToken, true).then((dt) => {
              decodedToken = dt;
            }).catch(async (error) => {
              if (error.code === 'auth/id-token-expired') {
                const apiKey = process.env.FIREBASE_API_KEY;
                const secureTokenEndpoint = `https://securetoken.googleapis.com/v1/token?key=` + apiKey;

                const data = {
                  grant_type: 'refresh_token',
                  refresh_token: refreshToken,
                };

                await axios.post(secureTokenEndpoint, data)
                  .then(async (response) => {
                    accessToken = response.data.id_token;
                    await adminApp.auth().verifyIdToken(accessToken).then(async (dt) => {
                      decodedToken = dt;
                      const url = process.env.NEXT_PUBLIC_BASE_URL + "/api/v1/auth/setToken";
                      const token = {
                        accessToken: accessToken,
                        refreshToken: refreshToken
                      }
                      await axios.post(url, token);
                    })
                  })
                  .catch((error) => {
                    console.error('Error refreshing ID token:', error);
                    res.status(200).json({ user: "Unathorized" });
                  });
              }
            });
            const role = decodedToken.role;
            if (!roles.includes(role) && roles.length > 0) {
              const message = `Role ${role} is not allowed to access this API route.`;
              res.status(400).json({ message: message });
            } else {
              handler.GET ? await handler.GET() : res.status(405).json({ message: "Method not allowed" });
            }
          } catch (error) {
            console.log(error)
            res.status(400).json({ user: "Unathorized" });
          }
        } else {
          handler.GET ? await handler.GET() : res.status(405).json({ message: "Method not allowed" });
        }
        break;
      case "POST":
        if (allowedRoles && allowedRoles?.POST) {
          try {
            const cookies = req.cookies;
            let accessToken = cookies.accessToken?.replace(/"/g,'') as string;
            let refreshToken = cookies.refreshToken?.replace(/"/g,'') as string;
            const roles = allowedRoles.POST;
            let decodedToken: any;
            await adminApp.auth().verifyIdToken(accessToken, true).then((dt) => {
              decodedToken = dt;
            }).catch(async (error) => {
              if (error.code === 'auth/id-token-expired') {
                const apiKey = process.env.FIREBASE_API_KEY;
                const secureTokenEndpoint = `https://securetoken.googleapis.com/v1/token?key=` + apiKey;

                const data = {
                  grant_type: 'refresh_token',
                  refresh_token: refreshToken,
                };

                await axios.post(secureTokenEndpoint, data)
                  .then(async (response) => {
                    accessToken = response.data.id_token;
                    await adminApp.auth().verifyIdToken(accessToken).then(async (dt) => {
                      decodedToken = dt;
                      const url = process.env.NEXT_PUBLIC_BASE_URL + "/api/v1/auth/setToken";
                      const token = {
                        accessToken: accessToken,
                        refreshToken: refreshToken
                      }
                      await axios.post(url, token);
                    })
                  })
                  .catch((error) => {
                    console.error('Error refreshing ID token:', error);
                    res.status(200).json({ user: "Unathorized" });
                  });
              }
            });
            const role = decodedToken.role;
            if (!roles.includes(role) && roles.length > 0) {
              const message = `Role ${role} is not allowed to access this API route.`;
              res.status(400).json({ message: message });
            } else {
              handler.POST ? await handler.POST() : res.status(405).json({ message: "Method not allowed" });
            }
          } catch (error) {
            console.log(error)
            res.status(400).json({ user: "Unathorized" });
          }
        } else {
          handler.POST ? await handler.POST() : res.status(405).json({ message: "Method not allowed" });
        }
        break;
      case "PUT":
        if (allowedRoles && allowedRoles?.PUT) {
          try {
            const cookies = req.cookies;
            let accessToken = cookies.accessToken?.replace(/"/g,'') as string;
            let refreshToken = cookies.refreshToken?.replace(/"/g,'') as string;
            const roles = allowedRoles.PUT;
            let decodedToken: any;
            await adminApp.auth().verifyIdToken(accessToken, true).then((dt) => {
              decodedToken = dt;
            }).catch(async (error) => {
              if (error.code === 'auth/id-token-expired') {
                const apiKey = process.env.FIREBASE_API_KEY;
                const secureTokenEndpoint = `https://securetoken.googleapis.com/v1/token?key=` + apiKey;

                const data = {
                  grant_type: 'refresh_token',
                  refresh_token: refreshToken,
                };

                await axios.post(secureTokenEndpoint, data)
                  .then(async (response) => {
                    accessToken = response.data.id_token;
                    await adminApp.auth().verifyIdToken(accessToken).then(async (dt) => {
                      decodedToken = dt;
                      const url = process.env.NEXT_PUBLIC_BASE_URL + "/api/v1/auth/setToken";
                      const token = {
                        accessToken: accessToken,
                        refreshToken: refreshToken
                      }
                      await axios.post(url, token);
                    })
                  })
                  .catch((error) => {
                    console.error('Error refreshing ID token:', error);
                    res.status(200).json({ user: "Unathorized" });
                  });
              }
            });
            const role = decodedToken.role;
            if (!roles.includes(role) && roles.length > 0) {
              const message = `Role ${role} is not allowed to access this API route.`;
              res.status(400).json({ message: message });
            } else {
              handler.PUT ? await handler.PUT() : res.status(405).json({ message: "Method not allowed" });
            }
          } catch (error) {
            console.log(error)
            res.status(400).json({ user: "Unathorized" });
          }
        } else {
          handler.PUT ? await handler.PUT() : res.status(405).json({ message: "Method not allowed" });
        }
        break;
      case "DELETE":
        if (allowedRoles && allowedRoles?.DELETE) {
          try {
            const cookies = req.cookies;
            let accessToken = cookies.accessToken?.replace(/"/g,'') as string;
            let refreshToken = cookies.refreshToken?.replace(/"/g,'') as string;
            const roles = allowedRoles.DELETE;
            let decodedToken: any;
            await adminApp.auth().verifyIdToken(accessToken, true).then((dt) => {
              decodedToken = dt;
            }).catch(async (error) => {
              if (error.code === 'auth/id-token-expired') {
                const apiKey = process.env.FIREBASE_API_KEY;
                const secureTokenEndpoint = `https://securetoken.googleapis.com/v1/token?key=` + apiKey;

                const data = {
                  grant_type: 'refresh_token',
                  refresh_token: refreshToken,
                };

                await axios.post(secureTokenEndpoint, data)
                  .then(async (response) => {
                    accessToken = response.data.id_token;
                    await adminApp.auth().verifyIdToken(accessToken).then(async (dt) => {
                      decodedToken = dt;
                      const url = process.env.NEXT_PUBLIC_BASE_URL + "/api/v1/auth/setToken";
                      const token = {
                        accessToken: accessToken,
                        refreshToken: refreshToken
                      }
                      await axios.post(url, token);
                    })
                  })
                  .catch((error) => {
                    console.error('Error refreshing ID token:', error);
                    res.status(200).json({ user: "Unathorized" });
                  });
              }
            });
            const role = decodedToken.role;
            if (!roles.includes(role) && roles.length > 0) {
              const message = `Role ${role} is not allowed to access this API route.`;
              res.status(400).json({ message: message });
            } else {
              handler.DELETE ? await handler.DELETE() : res.status(405).json({ message: "Method not allowed" });
            }
          } catch (error) {
            console.log(error)
            res.status(400).json({ user: "Unathorized" });
          }
        } else {
          handler.DELETE ? await handler.DELETE() : res.status(405).json({ message: "Method not allowed" });
        }
        break;
      default:
        res.status(405).json({ message: "Method not allowed" });
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({
        statusCode: 400,
        message: err.message,
      });
    } else {
      res.status(500).json({
        statusCode: 500,
        message: "Something went wrong.",
      });
    }
  }
}
