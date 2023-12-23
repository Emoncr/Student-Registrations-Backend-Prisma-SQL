import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// ========== Api FOR Find Single student ============//
export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const id = parseInt(searchParams.get("id"));

  const prisma = new PrismaClient();
  try {
    const result = await prisma.Users.findUnique({
      where: { id: id },
    });
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
        message: "Failed",
        error: error.meta.cause,
      },
      { status: 404 }
    );
  }
};

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

// ===========API For Update the student ==========//
export const PATCH = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const targetID = parseInt(searchParams.get("id"));
  const reqBody = await req.json();

  const prisma = new PrismaClient();

  try {
    const updatedStudent = await prisma.Users.update({
      where: { id: targetID },
      data: reqBody,
    });
    return NextResponse.json(
      {
        message: "Student Updated successfully",
        updatedStudent,
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
