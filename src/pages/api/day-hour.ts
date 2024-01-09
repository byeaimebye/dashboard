// pages/api/clients.ts
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const getClientsData = () => {
  const filePath = path.join(process.cwd(), "public", "day-hour.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = getClientsData();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching clients data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
