// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "POST") {
    const exists = await prisma.user.findUnique({
      where: { username: req.body.username },
    });
    console.log("exits", exists);
    if (exists == null) {
      try {
        await prisma.user.create({
          data: {
            username: req.body.username,
          },
        });
      } catch (e) {
        console.log(e);
      }
    }
    res.status(200).json(req.body);
  }
}
