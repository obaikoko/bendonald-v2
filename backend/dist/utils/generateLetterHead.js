"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLetterHeadHTML = void 0;
const generateLetterHeadHTML = (result) => {
    var _a;
    const fullName = [result.firstName, result.otherName, result.lastName]
        .filter(Boolean)
        .join(" ");
    return `
    <div style="margin-bottom: 20px; font-family: Arial, sans-serif;">
      <!-- Header Section -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
      
       <!-- School Logo -->
        <div>
          <img src="${process.env.SCHOOL_LOGO}" alt="School Logo" style="height: 80px;" />
        </div>

        <!-- School Info -->
        <div style="flex-grow: 1; text-align: center;">
          <h2 style="margin: 0;">Bendonalds International Schools</h2>
          <p style="margin: 0; color: #E22777; font-size: 20px;">
            NO. 9 BY MTN MAST, ODUKPANI CLOSE, IKOT ENEOBONG <br />   F.H.E 8 MILES, CALABAR, C.R.S NIGERIA<br />
            
          </p>
          <p> TEL:   07038307768, 08169866808 </p>
        </div>
 

          <!-- Student Passport -->
        <div>
          <img src="${result.image || "https://via.placeholder.com/80"}" alt="Student Passport" style="height: 80px; width: 80px; object-fit: cover; border: 1px solid #ccc; border-radius: 4px;" />
        </div>
       
      </div>

      <!-- Student Info Table -->
      <table style="width: 100%; margin-bottom: 20px; font-size: 14px; border-collapse: collapse;">
        <tr>
          <td><strong>STUDENT NAME:</strong> ${fullName}</td>
          <td><strong>CLASS:</strong> ${result.level}${result.subLevel}</td>
        </tr>
        <tr>
          <td><strong>SESSION:</strong> ${result.session} </td>
          <td><strong>TERM:</strong> ${result.term}</td>
        </tr>
        <tr>
          <td><strong>STUDENT'S TOTAL SCORE:</strong> ${result.totalScore}</td>
          <td><strong>STUDENT AVERAGE:</strong> ${(_a = result.averageScore) === null || _a === void 0 ? void 0 : _a.toFixed(2)}%</td>
        </tr>
      </table>
    </div>
  `;
};
exports.generateLetterHeadHTML = generateLetterHeadHTML;
