// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "./prisma";

type Data = {
  username: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "POST") {
    const exists = await prisma.user.findMany();
    console.log("exits", exists);

    if (exists == null) {
      try {
        await prisma.user.create({
          data: {
            username: req.body.username,
          },
        });
        res.status(200).json({ username: req.body.username });
      } catch (e) {
        console.log("not working");
        console.log(e);
      }
    } else {
      res.status(200).json({ username: req.body.username });
    }
  }
}
