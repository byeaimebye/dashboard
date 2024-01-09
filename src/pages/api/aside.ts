// pages/api/aside.ts
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const getAsideData = () => {
  const filePath = path.join(process.cwd(), "public", "aside.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = getAsideData();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching aside data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
