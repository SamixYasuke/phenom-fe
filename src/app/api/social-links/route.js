import { NextResponse } from "next/server";
import mongoose from "mongoose";
import dbConnect from "@/utils/dbConnect";

await dbConnect();

const socialLinkSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  url: { type: String, required: true },
});

const SocialLink =
  mongoose.models.SocialLink || mongoose.model("SocialLink", socialLinkSchema);

// GET: Fetch all social links
export async function GET() {
  const socialLinks = await SocialLink.find();
  return NextResponse.json(socialLinks);
}

// POST: Add a new social link
export async function POST(request) {
  const { name, url } = await request.json();
  const existing = await SocialLink.findOne({ name });
  if (existing) {
    return NextResponse.json(
      { message: "Social media already exists" },
      { status: 400 }
    );
  }
  await SocialLink.create({ name, url });
  return NextResponse.json({ message: "Added successfully" });
}

// PUT: Update a social link
export async function PUT(request) {
  const { name, url } = await request.json();
  const updated = await SocialLink.findOneAndUpdate(
    { name },
    { url },
    { new: true }
  );
  if (!updated) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ message: "Updated successfully" });
}

// DELETE: Delete a social link
export async function DELETE(request) {
  const { name } = await request.json();
  await SocialLink.deleteOne({ name });
  return NextResponse.json({ message: "Deleted successfully" });
}
