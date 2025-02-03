import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data.json");

// Helper function to read data
function readData() {
  const data = fs.readFileSync(DATA_FILE, "utf8");
  return JSON.parse(data);
}

// Helper function to write data
function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// GET: Fetch coupon URL
export async function GET() {
  const data = readData();
  return NextResponse.json(data.coupons || []);
}

// POST: Add or update coupon URL
export async function POST(request) {
  const { url } = await request.json();
  const data = readData();

  data.coupons = [url];
  writeData(data);

  return NextResponse.json({ message: "Coupon added successfully" });
}

// DELETE: Delete coupon URL
export async function DELETE() {
  const data = readData();
  data.coupons = [];
  writeData(data);

  return NextResponse.json({ message: "Coupon deleted successfully" });
}
