import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  // Standard A4 page: 595.28 x 841.89 points
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const page = pdfDoc.addPage([pageWidth, pageHeight]);

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Colors
  const darkNavy = rgb(15 / 255, 30 / 255, 60 / 255); // #0f1e3c
  const textDark = rgb(20 / 255, 25 / 255, 35 / 255); // #141923
  const textMuted = rgb(70 / 255, 80 / 255, 95 / 255); // #46505f
  const lightGray = rgb(225 / 255, 230 / 255, 238 / 255);
  const tableHeaderBg = rgb(245 / 255, 247 / 255, 250 / 255);
  const accentColor = rgb(14 / 255, 116 / 255, 144 / 255); // Teal / Dark Cyan accent

  const marginX = 50;
  let currentY = pageHeight - 48;

  // Helper function to wrap text
  function wrapText(text, maxWidth, font, fontSize) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const width = font.widthOfTextAtSize(testLine, fontSize);
      if (width > maxWidth) {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  // --- HEADER ---
  const nameText = 'S NIKHIL';
  const nameFontSize = 22;
  const nameWidth = fontBold.widthOfTextAtSize(nameText, nameFontSize);
  page.drawText(nameText, {
    x: (pageWidth - nameWidth) / 2,
    y: currentY,
    size: nameFontSize,
    font: fontBold,
    color: darkNavy,
  });
  currentY -= 16;

  const subtitleText = 'Bengaluru, Karnataka, India  •  Aspiring Software / Electronics Engineer';
  const subtitleFontSize = 9.5;
  const subtitleWidth = fontRegular.widthOfTextAtSize(subtitleText, subtitleFontSize);
  page.drawText(subtitleText, {
    x: (pageWidth - subtitleWidth) / 2,
    y: currentY,
    size: subtitleFontSize,
    font: fontRegular,
    color: textMuted,
  });
  currentY -= 20;

  // Helper for Section Titles
  function drawSectionTitle(title) {
    page.drawText(title, {
      x: marginX,
      y: currentY,
      size: 10.5,
      font: fontBold,
      color: darkNavy,
    });
    currentY -= 4;
    page.drawLine({
      start: { x: marginX, y: currentY },
      end: { x: pageWidth - marginX, y: currentY },
      thickness: 0.75,
      color: lightGray,
    });
    currentY -= 12;
  }

  // --- SECTION: PROFILE ---
  drawSectionTitle('PROFILE');
  const profileText =
    'Motivated engineering student with hands-on experience in programming, electronics, embedded systems, and basic web deployment. Comfortable learning new technologies and building practical projects. Interested in software development, embedded systems, and technology-driven problem solving.';
  
  const profileLines = wrapText(profileText, pageWidth - marginX * 2, fontRegular, 9);
  for (const line of profileLines) {
    page.drawText(line, {
      x: marginX,
      y: currentY,
      size: 9,
      font: fontRegular,
      color: textDark,
    });
    currentY -= 12.5;
  }
  currentY -= 8;

  // --- SECTION: TECHNICAL SKILLS ---
  drawSectionTitle('TECHNICAL SKILLS');
  
  const skillsTable = [
    { label: 'Programming', value: 'C, Python' },
    { label: 'Web & Tools', value: 'HTML/CSS, GitHub, Vercel, basic web deployment' },
    { label: 'Embedded / Electronics', value: 'Arduino Nano, HC-05 Bluetooth, relay modules, solenoid locks, circuit fundamentals' },
    { label: 'Core Concepts', value: 'Data structures basics, memory allocation in C, problem solving, basic digital electronics' },
  ];

  const col1Width = 125;
  const col2Width = pageWidth - marginX * 2 - col1Width;
  const tableX = marginX;
  const tableWidth = pageWidth - marginX * 2;
  const tableTopY = currentY + 2;

  let rowY = currentY;

  for (const row of skillsTable) {
    const valueLines = wrapText(row.value, col2Width - 14, fontRegular, 8.5);
    const rowHeight = Math.max(18, valueLines.length * 11 + 7);

    // Row border
    page.drawRectangle({
      x: tableX,
      y: rowY - rowHeight + 2,
      width: tableWidth,
      height: rowHeight,
      borderColor: lightGray,
      borderWidth: 0.5,
      color: rgb(253 / 255, 254 / 255, 255 / 255),
    });

    // Col 1 bg
    page.drawRectangle({
      x: tableX,
      y: rowY - rowHeight + 2,
      width: col1Width,
      height: rowHeight,
      borderColor: lightGray,
      borderWidth: 0.5,
      color: tableHeaderBg,
    });

    // Col 1 Text
    page.drawText(row.label, {
      x: tableX + 7,
      y: rowY - 10,
      size: 8.5,
      font: fontBold,
      color: darkNavy,
    });

    // Col 2 Text
    let valY = rowY - 10;
    for (const vline of valueLines) {
      page.drawText(vline, {
        x: tableX + col1Width + 7,
        y: valY,
        size: 8.5,
        font: fontRegular,
        color: textDark,
      });
      valY -= 11;
    }

    rowY -= rowHeight;
  }

  currentY = rowY - 10;

  // --- SECTION: PROJECT EXPERIENCE ---
  drawSectionTitle('PROJECT EXPERIENCE');

  // Project 1
  page.drawText('Smart Lock — Arduino-Based Security Prototype', {
    x: marginX,
    y: currentY,
    size: 9.5,
    font: fontBold,
    color: darkNavy,
  });
  currentY -= 12;

  const proj1Bullets = [
    'Developed a smart locking prototype using an Arduino Nano, HC-05 Bluetooth module, relay, and solenoid lock.',
    'Worked on the control flow, hardware integration, and Bluetooth-based access concept.',
    'Prepared project documentation covering aim, problem statement, methodology, components, results, advantages, and future scope.',
  ];

  for (const bullet of proj1Bullets) {
    const bulletLines = wrapText(bullet, pageWidth - marginX * 2 - 14, fontRegular, 8.5);
    page.drawText('•', {
      x: marginX + 2,
      y: currentY,
      size: 8.5,
      font: fontBold,
      color: accentColor,
    });
    for (let i = 0; i < bulletLines.length; i++) {
      page.drawText(bulletLines[i], {
        x: marginX + 12,
        y: currentY,
        size: 8.5,
        font: fontRegular,
        color: textDark,
      });
      currentY -= 11.5;
    }
  }
  currentY -= 4;

  // Project 2
  page.drawText('Personal Web Project — GitHub & Vercel Deployment', {
    x: marginX,
    y: currentY,
    size: 9.5,
    font: fontBold,
    color: darkNavy,
  });
  currentY -= 12;

  const proj2Bullets = [
    'Worked with a web project and used GitHub for source-code management.',
    'Explored deployment through Vercel and troubleshooting of repository/deployment issues.',
  ];

  for (const bullet of proj2Bullets) {
    const bulletLines = wrapText(bullet, pageWidth - marginX * 2 - 14, fontRegular, 8.5);
    page.drawText('•', {
      x: marginX + 2,
      y: currentY,
      size: 8.5,
      font: fontBold,
      color: accentColor,
    });
    for (let i = 0; i < bulletLines.length; i++) {
      page.drawText(bulletLines[i], {
        x: marginX + 12,
        y: currentY,
        size: 8.5,
        font: fontRegular,
        color: textDark,
      });
      currentY -= 11.5;
    }
  }
  currentY -= 8;

  // --- SECTION: ACADEMIC / PRACTICAL EXPERIENCE ---
  drawSectionTitle('ACADEMIC / PRACTICAL EXPERIENCE');

  const expBullets = [
    'Hands-on practice with C programming, including dynamic memory allocation using malloc, calloc, realloc, and free.',
    'Python programming practice involving lists, functions, and problem-solving exercises.',
    'Academic exposure to digital electronics topics such as multiplexers and ripple-carry adders.',
  ];

  for (const bullet of expBullets) {
    const bulletLines = wrapText(bullet, pageWidth - marginX * 2 - 14, fontRegular, 8.5);
    page.drawText('•', {
      x: marginX + 2,
      y: currentY,
      size: 8.5,
      font: fontBold,
      color: accentColor,
    });
    for (let i = 0; i < bulletLines.length; i++) {
      page.drawText(bulletLines[i], {
        x: marginX + 12,
        y: currentY,
        size: 8.5,
        font: fontRegular,
        color: textDark,
      });
      currentY -= 11.5;
    }
  }
  currentY -= 8;

  // --- SECTION: STRENGTHS ---
  drawSectionTitle('STRENGTHS');
  const strengthsText = 'Problem solving  •  Practical learning  •  Technical curiosity  •  Project development  •  Adaptability';
  page.drawText(strengthsText, {
    x: marginX,
    y: currentY,
    size: 8.8,
    font: fontRegular,
    color: textDark,
  });
  currentY -= 18;

  // --- SECTION: CAREER INTERESTS ---
  drawSectionTitle('CAREER INTERESTS');
  const interestsText = 'Software Development  •  Embedded Systems  •  IoT  •  Web Technologies  •  Electronics & Automation';
  page.drawText(interestsText, {
    x: marginX,
    y: currentY,
    size: 8.8,
    font: fontRegular,
    color: textDark,
  });
  currentY -= 24;

  // --- FOOTER NOTE ---
  const footerNote = 'References and detailed academic information available on request.';
  page.drawText(footerNote, {
    x: marginX,
    y: currentY,
    size: 8,
    font: fontOblique,
    color: textMuted,
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve('public', 'S_Nikhil_Resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Resume successfully generated at: ${outputPath}`);
}

generateResume().catch(console.error);
