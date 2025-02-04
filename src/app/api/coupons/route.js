import { NextResponse } from "next/server";
import mongoose from "mongoose";
import dbConnect from "@/utils/dbConnect";

await dbConnect();
// Define Mongoose schemas
const couponSchema = new mongoose.Schema({
  url: { type: String, required: true },
});

const Coupon = mongoose.models.Coupon || mongoose.model("Coupon", couponSchema);

// GET: Fetch coupon URL
export async function GET() {
  const coupon = await Coupon.findOne();
  return NextResponse.json(coupon ? coupon.url : "");
}

// POST: Add or update coupon URL
export async function POST(request) {
  const { url } = await request.json();
  await Coupon.findOneAndUpdate({}, { url }, { upsert: true, new: true });
  return NextResponse.json({ message: "Coupon added successfully" });
}

// DELETE: Delete coupon URL
export async function DELETE() {
  await Coupon.deleteMany({});
  return NextResponse.json({ message: "Coupon deleted successfully" });
}
