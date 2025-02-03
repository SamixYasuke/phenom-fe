import { NextResponse } from "next/server";
import { fetchData, updateData } from "@/utils/jsonBin";

// GET: Fetch all social links
export async function GET() {
  const data = await fetchData();
  return NextResponse.json(data.socialLinks || []);
}

// POST: Add a new social link
export async function POST(request) {
  const { name, url } = await request.json();
  const data = await fetchData();

  if (data.socialLinks?.some((link) => link.name === name)) {
    return NextResponse.json(
      { message: "Social media already exists" },
      { status: 400 }
    );
  }

  data.socialLinks = [...(data.socialLinks || []), { name, url }];
  await updateData(data);

  return NextResponse.json({ message: "Added successfully" });
}

// PUT: Update a social link
export async function PUT(request) {
  const { name, url } = await request.json();
  const data = await fetchData();

  const index = data.socialLinks?.findIndex((link) => link.name === name);
  if (index === -1) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  data.socialLinks[index].url = url;
  await updateData(data);

  return NextResponse.json({ message: "Updated successfully" });
}

// DELETE: Delete a social link
export async function DELETE(request) {
  const { name } = await request.json();
  const data = await fetchData();

  data.socialLinks = data.socialLinks?.filter((link) => link.name !== name);
  await updateData(data);

  return NextResponse.json({ message: "Deleted successfully" });
}
