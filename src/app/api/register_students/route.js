import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const reqBody = await req.json();
  const prisma = new PrismaClient();
  try {
    const createdStudent = await prisma.Users.createMany({
      data: reqBody, // Expect An Array of Objects
    });
    return NextResponse.json(
      {
        message: "Students created successfully",
        createdStudent,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Students Registration failed!",
      error,
    });
  }
};
