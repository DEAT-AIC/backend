// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { adminApp } from "./firebaseAdmin";

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
            const token = req.headers.accesstoken as string;
            const accessToken = token.replace(/%22/g, '');
            const roles = allowedRoles.GET;
            const decodedToken = await adminApp.auth().verifyIdToken(accessToken, true);
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
            const token = req.headers.accesstoken as string;
            const accessToken = token.replace(/%22/g, '');
            const roles = allowedRoles.POST;
            const decodedToken = await adminApp.auth().verifyIdToken(accessToken);
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
            const token = req.headers.accesstoken as string;
            const accessToken = token.replace(/%22/g, '');
            const roles = allowedRoles.PUT;
            const decodedToken = await adminApp.auth().verifyIdToken(accessToken);
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
            const token = req.headers.accesstoken as string;
            const accessToken = token.replace(/%22/g, '');
            const roles = allowedRoles.DELETE;
            const decodedToken = await adminApp.auth().verifyIdToken(accessToken);
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
