export class CanvasGenerator {
  static createCanvasDesign(designNumber) {
    const designs = {
      1: `// Modern Gradient Background
const gradient = ctx.createLinearGradient(0, 0, 800, 600);
gradient.addColorStop(0, '#667eea');
gradient.addColorStop(1, '#764ba2');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 800, 600);

// Decorative border
ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
ctx.lineWidth = 2;
ctx.strokeRect(20, 20, 760, 560);

// Inner border
ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
ctx.lineWidth = 1;
ctx.strokeRect(40, 40, 720, 520);

// Main title with shadow
ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
ctx.shadowBlur = 4;
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 48px "Segoe UI", Arial, sans-serif';
ctx.textAlign = 'center';
ctx.fillText('Certificate of Achievement', 400, 120);

// Reset shadow
ctx.shadowColor = 'transparent';
ctx.shadowBlur = 0;
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;

// Category name
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 36px "Segoe UI", Arial, sans-serif';
ctx.fillText(categoryName, 400, 200);

// Decorative line
ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(200, 250);
ctx.lineTo(600, 250);
ctx.stroke();

// Description with word-by-word wrapping (like design 2)
const words = description.split(' ');
let line = '';
let y = 300;
ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
ctx.font = '20px "Segoe UI", Arial, sans-serif';
ctx.textAlign = 'center';

for (let word of words) {
  const testLine = line + word + ' ';
  const metrics = ctx.measureText(testLine);
  if (metrics.width > 600 && line !== '') {
    ctx.fillText(line, 400, y);
    line = word + ' ';
    y += 30;
  } else {
    line = testLine;
  }
}
ctx.fillText(line, 400, y);

// Decorative elements
ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
ctx.beginPath();
ctx.arc(100, 100, 30, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(700, 500, 40, 0, Math.PI * 2);
ctx.fill();`,

      2: `// Elegant Dark Theme
ctx.fillStyle = '#1a1a1a';
ctx.fillRect(0, 0, 800, 600); 

// Gold gradient border
const borderGradient = ctx.createLinearGradient(0, 0, 800, 600);
borderGradient.addColorStop(0, '#ffd700');
borderGradient.addColorStop(0.5, '#ffed4e');
borderGradient.addColorStop(1, '#ffd700');
ctx.strokeStyle = borderGradient;
ctx.lineWidth = 8;
ctx.strokeRect(15, 15, 770, 570);

// Inner border
ctx.strokeStyle = 'rgba(255, 215, 0, 0.3)';
ctx.lineWidth = 2;
ctx.strokeRect(35, 35, 730, 530);

// Main title
ctx.fillStyle = '#ffd700';
ctx.font = 'bold 52px "Georgia", serif';
ctx.textAlign = 'center';
ctx.fillText('Certificate of Excellence', 400, 140);

// Category name
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 32px "Georgia", serif';
ctx.fillText(categoryName, 400, 220);

// Decorative flourish
ctx.strokeStyle = '#ffd700';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(150, 280);
ctx.lineTo(650, 280);
ctx.stroke();

// Description with better formatting
const words = description.split(' ');
let line = '';
let y = 350;
ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
ctx.font = '18px "Georgia", serif';
ctx.textAlign = 'center';

for (let word of words) {
  const testLine = line + word + ' ';
  const metrics = ctx.measureText(testLine);
  if (metrics.width > 600 && line !== '') {
    ctx.fillText(line, 400, y);
    line = word + ' ';
    y += 30;
  } else {
    line = testLine;
  }
}
ctx.fillText(line, 400, y);

// Corner decorations
ctx.fillStyle = '#ffd700';
ctx.beginPath();
ctx.arc(80, 80, 15, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(720, 520, 20, 0, Math.PI * 2);
ctx.fill();`,

      3: `// Modern Minimalist
ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, 800, 600);

// Subtle background pattern
ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
for (let i = 0; i < 800; i += 40) {
  for (let j = 0; j < 600; j += 40) {
    ctx.fillRect(i, j, 1, 1);
  }
}

// Border
ctx.strokeStyle = '#333333';
ctx.lineWidth = 3;
ctx.strokeRect(30, 30, 740, 540);

// Main title
ctx.fillStyle = '#333333';
ctx.font = 'bold 56px "Helvetica Neue", Arial, sans-serif';
ctx.textAlign = 'center';
ctx.fillText('Certificate of Completion', 400, 160);

// Category name
ctx.fillStyle = '#666666';
ctx.font = 'bold 28px "Helvetica Neue", Arial, sans-serif';
ctx.fillText(categoryName, 400, 240);

// Clean line
ctx.strokeStyle = '#333333';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(600, 300);
ctx.stroke();

// Description with word-by-word wrapping (like design 2)
const words = description.split(' ');
let line = '';
let y = 330;
ctx.fillStyle = '#555555';
ctx.font = '16px "Helvetica Neue", Arial, sans-serif';
ctx.textAlign = 'center';

for (let word of words) {
  const testLine = line + word + ' ';
  const metrics = ctx.measureText(testLine);
  if (metrics.width > 600 && line !== '') {
    ctx.fillText(line, 400, y);
    line = word + ' ';
    y += 25;
  } else {
    line = testLine;
  }
}
ctx.fillText(line, 400, y);

// Minimal corner accents
ctx.fillStyle = '#333333';
ctx.fillRect(50, 50, 4, 4);
ctx.fillRect(746, 546, 4, 4);`,

      4: `// Vibrant Colorful Design
const gradient = ctx.createLinearGradient(0, 0, 800, 600);
gradient.addColorStop(0, '#ff6b6b');
gradient.addColorStop(0.5, '#4ecdc4');
gradient.addColorStop(1, '#45b7d1');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 800, 600);

// White overlay for readability
ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
ctx.fillRect(0, 0, 800, 600);

// Border
ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
ctx.lineWidth = 6;
ctx.strokeRect(25, 25, 750, 550);

// Main title
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 50px "Arial", sans-serif';
ctx.textAlign = 'center';
ctx.fillText('Certificate of Achievement', 400, 130);

// Category name
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 32px "Arial", sans-serif';
ctx.fillText(categoryName, 400, 200);

// Decorative elements
ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
ctx.beginPath();
ctx.arc(150, 150, 25, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(650, 450, 30, 0, Math.PI * 2);
ctx.fill();

// Description with word-by-word wrapping (like design 2)
const words = description.split(' ');
let line = '';
let y = 260;
ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
ctx.font = '20px "Arial", sans-serif';
ctx.textAlign = 'center';

for (let word of words) {
  const testLine = line + word + ' ';
  const metrics = ctx.measureText(testLine);
  if (metrics.width > 600 && line !== '') {
    ctx.fillText(line, 400, y);
    line = word + ' ';
    y += 30;
  } else {
    line = testLine;
  }
}
ctx.fillText(line, 400, y);

// Bottom accent
ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
ctx.fillRect(200, 450, 400, 3);`,

      5: `// Professional Corporate Style
ctx.fillStyle = '#2c3e50';
ctx.fillRect(0, 0, 800, 600);

// Gold accent border
ctx.strokeStyle = '#f39c12';
ctx.lineWidth = 10;
ctx.strokeRect(20, 20, 760, 560);

// Inner border
ctx.strokeStyle = 'rgba(243, 156, 18, 0.3)';
ctx.lineWidth = 2;
ctx.strokeRect(40, 40, 720, 520);

// Main title
ctx.fillStyle = '#f39c12';
ctx.font = 'bold 54px "Times New Roman", serif';
ctx.textAlign = 'center';
ctx.fillText('Certificate of Recognition', 400, 140);

// Category name
ctx.fillStyle = '#ecf0f1';
ctx.font = 'bold 30px "Times New Roman", serif';
ctx.fillText(categoryName, 400, 220);

// Professional line
ctx.strokeStyle = '#f39c12';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(180, 280);
ctx.lineTo(620, 280);
ctx.stroke();

// Description with word-by-word wrapping (like design 2)
const words = description.split(' ');
let line = '';
let y = 320;
ctx.fillStyle = '#bdc3c7';
ctx.font = '18px "Times New Roman", serif';
ctx.textAlign = 'center';

for (let word of words) {
  const testLine = line + word + ' ';
  const metrics = ctx.measureText(testLine);
  if (metrics.width > 600 && line !== '') {
    ctx.fillText(line, 400, y);
    line = word + ' ';
    y += 28;
  } else {
    line = testLine;
  }
}
ctx.fillText(line, 400, y);

// Corporate corner elements
ctx.fillStyle = '#f39c12';
ctx.fillRect(60, 60, 8, 8);
ctx.fillRect(732, 532, 8, 8);`
    };

    return designs[designNumber] || designs[1];
  }
}