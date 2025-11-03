"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStudentIdCard = void 0;
const pdfkit_1 = __importDefault(require("pdfkit"));
const qrcode_1 = __importDefault(require("qrcode"));
const generateStudentIdCard = (res, student) => __awaiter(void 0, void 0, void 0, function* () {
    // 🔹 Prepare PDF
    const doc = new pdfkit_1.default({ size: "A4", margin: 0 });
    // 📤 Response headers
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="${student.firstName}-ID-Card.pdf"`);
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
        .text(`Name: ${student.firstName} ${student.lastName}`, cardX + 15, cardY + 40)
        .text(`Level: ${student.level}`, cardX + 15, cardY + 55)
        .text(`Student ID: ${student.studentId}`, cardX + 15, cardY + 70);
    // 🖼️ Student photo
    if (student.imageUrl) {
        try {
            const response = yield fetch(student.imageUrl);
            const arrayBuffer = yield response.arrayBuffer();
            const imgBuffer = Buffer.from(arrayBuffer);
            doc.image(imgBuffer, cardX + 175, cardY + 45, {
                width: 70,
                height: 85,
            });
        }
        catch (err) {
            console.warn("Could not load student photo:", err);
        }
    }
    // 🔳 QR Code
    const qrDataUrl = yield qrcode_1.default.toDataURL(`https://bendonaldschools.com/admin/students/${student.id}`);
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
});
exports.generateStudentIdCard = generateStudentIdCard;
