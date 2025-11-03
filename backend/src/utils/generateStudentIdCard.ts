import PDFDocument from "pdfkit";
import QRCode from "qrcode";
import { Response } from "express";
import { Student } from "../schemas/studentSchema";
export const generateStudentIdCard = async (
  res: Response,
  student: Student
): Promise<void> => {
  // 🔹 Prepare PDF
  const doc = new PDFDocument({ size: "A4", margin: 0 });

  // 📤 Response headers
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename="${student.firstName}-ID-Card.pdf"`
  );

  // 📡 Pipe output
  doc.pipe(res);

  // 📏 Dimensions
  const cardWidth = 260;
  const cardHeight = 170;
  const A4_WIDTH = 595;
  const A4_HEIGHT = 842;
  const cardX = (A4_WIDTH - cardWidth) / 2;
  const cardY = (A4_HEIGHT - cardHeight) / 2;

  // 🔲 Card background
  doc.save();
  doc
    .rect(cardX, cardY, cardWidth, cardHeight)
    .fillAndStroke("#f9fafb", "#003366");
  doc.restore();

  // 🔹 Header bar
  doc.save();
  doc.rect(cardX, cardY, cardWidth, 25).fill("#003366");
  doc.restore();

  doc
    .fillColor("white")
    .fontSize(12)
    .text("Bendonalds International Schools", cardX + 15, cardY + 8);

  // 🧑 Student info
  doc
    .fillColor("black")
    .fontSize(10)
    .text(
      `Name: ${student.firstName} ${student.lastName}`,
      cardX + 15,
      cardY + 40
    )
    .text(`Level: ${student.level}`, cardX + 15, cardY + 55)
    .text(`Student ID: ${student.studentId}`, cardX + 15, cardY + 70);

  // 🖼️ Student photo
  if (student.imageUrl) {
    try {
      const response = await fetch(student.imageUrl);
      const arrayBuffer = await response.arrayBuffer();
      const imgBuffer = Buffer.from(arrayBuffer);
      doc.image(imgBuffer, cardX + 175, cardY + 45, {
        width: 70,
        height: 85,
      });
    } catch (err) {
      console.warn("Could not load student photo:", err);
    }
  }

  // 🔳 QR Code
  const qrDataUrl = await QRCode.toDataURL(
    `https://bendonaldschools.com/admin/students/${student.id}`
  );
  const qrImage = qrDataUrl.replace(/^data:image\/png;base64,/, "");
  const qrBuffer = Buffer.from(qrImage, "base64");
  doc.image(qrBuffer, cardX + 15, cardY + 100, { width: 60, height: 60 });

  // 🔹 Footer
  doc
    .moveTo(cardX, cardY + 160)
    .lineTo(cardX + cardWidth, cardY + 160)
    .stroke("#003366");

  doc
    .fontSize(7)
    .fillColor("#003366")
    .text("www.bendonaldschools.com", cardX, cardY + 162, {
      align: "center",
      width: cardWidth,
    });

  // ✅ Finalize PDF
  doc.end();
};
