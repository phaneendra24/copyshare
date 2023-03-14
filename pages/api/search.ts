import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "./prisma";
type Data = {
  User: [];
  username: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      console.log("start");
      const data = prisma.user.findMany();
      console.log(data);
      res.status(200).send("success");
    } catch (e) {
      res.status(500).json("failed");
    }
  }
}
