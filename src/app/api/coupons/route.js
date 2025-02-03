import { NextResponse } from "next/server";
import { fetchData, updateData } from "@/utils/jsonBin";

// GET: Fetch coupon URL
export async function GET() {
  const data = await fetchData();
  return NextResponse.json(data.coupon || "");
}

// POST: Add or update coupon URL
export async function POST(request) {
  const { url } = await request.json();
  const data = await fetchData();

  data.coupon = url;
  await updateData(data);

  return NextResponse.json({ message: "Coupon added successfully" });
}

// DELETE: Delete coupon URL
export async function DELETE() {
  const data = await fetchData();
  data.coupon = "";
  await updateData(data);

  return NextResponse.json({ message: "Coupon deleted successfully" });
}
