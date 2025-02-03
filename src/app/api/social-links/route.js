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

// GET: Fetch all social links
export async function GET() {
  const data = readData();
  return NextResponse.json(data.socialLinks);
}

// POST: Add a new social link
export async function POST(request) {
  const { name, url } = await request.json();
  const data = readData();

  // Prevent duplicate social media names
  if (data.socialLinks.some((link) => link.name === name)) {
    return NextResponse.json(
      { message: "Social media already exists" },
      { status: 400 }
    );
  }

  data.socialLinks.push({ name, url });
  writeData(data);

  return NextResponse.json({ message: "Added successfully" });
}

// PUT: Update a social link
export async function PUT(request) {
  const { name, url } = await request.json();
  const data = readData();

  const index = data.socialLinks.findIndex((link) => link.name === name);
  if (index === -1) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  data.socialLinks[index].url = url;
  writeData(data);

  return NextResponse.json({ message: "Updated successfully" });
}

// DELETE: Delete a social link
export async function DELETE(request) {
  const { name } = await request.json();
  const data = readData();

  data.socialLinks = data.socialLinks.filter((link) => link.name !== name);
  writeData(data);

  return NextResponse.json({ message: "Deleted successfully" });
}
