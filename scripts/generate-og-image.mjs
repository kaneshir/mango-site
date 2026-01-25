import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

// Create OG image with gradient background and text
async function generateOgImage() {
  const width = 1200;
  const height = 630;

  // Create gradient background (mango colors)
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#020617"/>
          <stop offset="100%" style="stop-color:#0f172a"/>
        </linearGradient>
        <linearGradient id="mango" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#F77F00"/>
          <stop offset="50%" style="stop-color:#FCBF49"/>
          <stop offset="100%" style="stop-color:#2A9D8F"/>
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="100%" height="100%" fill="url(#bg)"/>

      <!-- Decorative orbs -->
      <circle cx="100" cy="100" r="200" fill="#F77F00" opacity="0.15" filter="blur(60px)"/>
      <circle cx="1100" cy="530" r="200" fill="#2A9D8F" opacity="0.15" filter="blur(60px)"/>

      <!-- Main text -->
      <text x="600" y="240" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="72" font-weight="800" fill="url(#mango)">
        AI-Powered Development
      </text>
      <text x="600" y="330" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="56" font-weight="700" fill="white">
        for the Modern Era
      </text>

      <!-- Subtitle -->
      <text x="600" y="420" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="28" fill="#94a3b8">
        25+ years enterprise experience • Production-grade platforms in months
      </text>

      <!-- Brand -->
      <text x="600" y="540" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="36" font-weight="600" fill="url(#mango)">
        MANGO SOFTWARE
      </text>

      <!-- URL -->
      <text x="600" y="585" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="22" fill="#64748b">
        mangosoft.co
      </text>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(join(publicDir, 'og-image.png'));

  console.log('Generated og-image.png');
}

generateOgImage().catch(console.error);
