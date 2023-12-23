import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// ========== Api FOR Find All students ============//
export const GET = async (req, res) => {
  const prisma = new PrismaClient();
  try {
    const result = await prisma.Users.findMany();
    return NextResponse.json(
      {
        message: "Success",
        result,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed!",
        error: error.meta.cause,
      },
      { status: 404 }
    );
  }
};

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
