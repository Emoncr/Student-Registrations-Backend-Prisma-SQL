import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const reqBody = await req.json();
  const prisma = new PrismaClient();
  try {
    const createdStudent = await prisma.Users.create({
      studentData: reqBody,
    });
    return NextResponse.json(
      {
        message: "Student created successfully",
        createdStudent,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Student Registration failed!" });
  }

};
