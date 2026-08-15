const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateIcons() {
  const publicDir = path.join(__dirname, '..', 'public');

  // 创建 SVG 图标
  const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="20" fill="#705d00"/>
  <text x="50" y="70" font-family="Arial, sans-serif" font-size="50" font-weight="bold" fill="white" text-anchor="middle">OYL</text>
</svg>
  `;

  const svgPath = path.join(publicDir, 'favicon.svg');
  fs.writeFileSync(svgPath, svgContent);
  console.log('Created favicon.svg');

  // 生成不同尺寸的 PNG
  const sizes = [
    { width: 16, height: 16, filename: 'favicon-16x16.png' },
    { width: 32, height: 32, filename: 'favicon-32x32.png' },
    { width: 180, height: 180, filename: 'apple-touch-icon.png' },
    { width: 512, height: 512, filename: 'icon-512x512.png' }
  ];

  for (const { width, height, filename } of sizes) {
    try {
      await sharp(svgPath)
        .resize(width, height)
        .png()
        .toFile(path.join(publicDir, filename));
      console.log(`Created ${filename}`);
    } catch (error) {
      console.error(`Error generating ${filename}:`, error);
    }
  }

  // 生成 .ico 文件 - 使用多尺寸 PNG 组合
  try {
    // 生成 16x16, 32x32, 48x48 的组合
    const multiSizes = [
      { width: 16, height: 16 },
      { width: 32, height: 32 },
      { width: 48, height: 48 }
    ];

    const images = [];
    for (const { width, height } of multiSizes) {
      const resizedBuffer = await sharp(svgPath)
        .resize(width, height)
        .png()
        .toBuffer();
      images.push(resizedBuffer);
    }

    // 将多个图像合并为 .ico
    const icoBuffer = await sharp(images)
      .ico()
      .toBuffer();

    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
    console.log('Created favicon.ico');
  } catch (error) {
    console.error('Error creating favicon.ico:', error);
  }

  console.log('All icons generated successfully!');
}

generateIcons().catch(console.error);
