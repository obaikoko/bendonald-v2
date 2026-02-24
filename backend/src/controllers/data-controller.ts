import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { prisma } from "../config/db/prisma";
import { levels } from "../utils/classUtils";
const studentsData = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user) {
    res.status(401);
    throw new Error("Unauthorized User");
  }

  let allStudents;

  if (req.user.isAdmin) {
    allStudents = await prisma.student.findMany();
  } else {
    allStudents = await prisma.student.findMany({
      where: {
        level: req.user.level || "",
        subLevel: req.user.subLevel || "",
      },
    });
  }

  const genderCounts: Record<string, number> = { Male: 0, Female: 0 };
  const levelGenderCounts: Record<string, Record<string, number>> = {};

  // Initialize levelGenderCounts
  for (const level of levels) {
    levelGenderCounts[level] = { Male: 0, Female: 0 };
  }

  let paidFees = 0;

  for (const student of allStudents) {
    const gender: string = student.gender;
    const level: string = student.level;

    if (gender === "Male" || gender === "Female") {
      genderCounts[gender]++;
    }

    if (levels.includes(level)) {
      levelGenderCounts[level][gender]++;
    }

    if (student.isPaid) {
      paidFees++;
    }
  }

  const response: {
    totalStudents: number;
    paidFees: number;
    Male: number;
    Female: number;
    // [key: string]: number;
  } = {
    totalStudents: allStudents.length,
    paidFees,
    Male: genderCounts.Male,
    Female: genderCounts.Female,
  };

  // Append each level/gender count to the response
  // for (const level of levels) {
    // const safeKey = level.replace(/\s+/g, "");
    // response[`${safeKey}Males`] = levelGenderCounts[level].Male;
    // response[`${safeKey}Females`] = levelGenderCounts[level].Female;
  // }

  res.json(response);
});

const userData = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const [total, adminUsers, activeUsers, suspendedUsers] = await Promise.all([
      prisma.user.count(),
      prisma.user.count({
        where: {
          isAdmin: true,
        },
      }),
      prisma.user.count({
        where: {
          status: "active",
        },
      }),
      prisma.user.count({
        where: {
          status: "suspended",
        },
      }),
    ]);

    res.status(200).json({
      totalUsers: total,
      adminUsers: adminUsers,
      activeUsers: activeUsers,
      suspendedUsers: suspendedUsers,
    });
  },
);

const levelData = asyncHandler(async (req: Request, res: Response) => {
  const grouped = await prisma.student.groupBy({
    by: ["level", "gender"],
    _count: {
      id: true,
    },
  });

  // Transform into chart-friendly format
  const result: Record<string, { boys: number; girls: number }> = {};

  grouped.forEach((item) => {
    const level = item.level;

    if (!result[level]) {
      result[level] = { boys: 0, girls: 0 };
    }

    if (item.gender === "Male") {
      result[level].boys = item._count.id;
    } else if (item.gender === "Female") {
      result[level].girls = item._count.id;
    }
  });

const levelOrder = [
  "Creche",
  "Lower Reception",
  "Upper Reception",
  "Nursery 1",
  "Nursery 2",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "JSS 1",
  "JSS 2",
  "JSS 3",
  "SSS 1",
  "SSS 2",
  "SSS 3",
  "Graduate",
  "Withdrawn",
];

const chartData = Object.entries(result)
  .map(([level, value]) => ({
    level,
    boys: value.boys,
    girls: value.girls,
  }))
  .sort((a, b) => levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level));
  res.status(200).json({
    success: true,
    data: chartData,
  });
});


export { studentsData, userData, levelData };
