import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// ========= Creating Single Student ==============//
export const POST = async (req, res) => {
  const reqBody = await req.json();
  const prisma = new PrismaClient();
  try {
    const createdStudent = await prisma.Users.create({
      data: reqBody,
    });
    return NextResponse.json(
      {
        message: "Student created successfully",
        createdStudent,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Student Registration failed!",
      error,
    });
  }
};

// ========= Delete Single Student ==============//
export const DELETE = async (req, res) => {
  const { searchParams } = new URL(req.url);

  const targetID = parseInt(searchParams.get("id"));

  const prisma = new PrismaClient();
  try {
    const deletedStudent = await prisma.Users.delete({
      where: { id: targetID },
    });
    return NextResponse.json(
      {
        message: "Student Deleted successfully",
        deletedStudent,
      },
      { status: 202 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: error.meta.cause,
      },
      { status: 403 }
    );
  }
};
