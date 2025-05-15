import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public", "/messages.json");

export async function POST(req: Request) {
  const { name, message } = await req.json();
  const newMessage = { name, message, date: new Date().toISOString() };

  try {
    let messages = [];

    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      messages = JSON.parse(data);
    }

    messages.push(newMessage);
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: "Failed to save." }, { status: 500 });
  }
}

export async function GET() {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const messages = JSON.parse(data);
    return NextResponse.json(messages);
  } catch (err) {
    return NextResponse.json({ error: "No messages found." }, { status: 404 });
  }
}
