import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const mockups = [
  { file: 'audio-player.html', name: 'audio-player.png', width: 1400, height: 900 },
  { file: 'file-browser.html', name: 'file-browser.png', width: 1400, height: 900 },
  { file: 'secure-sharing.html', name: 'secure-sharing.png', width: 1400, height: 900 },
  { file: 'version-control.html', name: 'version-control.png', width: 1400, height: 900 },
  { file: 'mobile-ios.html', name: 'mobile-ios.png', width: 1400, height: 900 },
  { file: 'mobile-android.html', name: 'mobile-android.png', width: 1400, height: 900 },
  { file: 'collaboration.html', name: 'collaboration.png', width: 1400, height: 900 },
  { file: 'storage-dashboard.html', name: 'storage-dashboard.png', width: 1400, height: 900 },
  { file: 'upload.html', name: 'upload.png', width: 1400, height: 900 },
  { file: 'security-dashboard.html', name: 'security-dashboard.png', width: 1400, height: 900 },
];

async function screenshotMockups() {
  console.log('Starting mockup screenshot process...\n');

  // Create output directory if it doesn't exist
  const outputDir = join(projectRoot, 'public', 'images', 'mockups');
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
    console.log(`Created directory: ${outputDir}\n`);
  }

  // Launch browser
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  console.log('Browser launched\n');

  try {
    for (const mockup of mockups) {
      const mockupPath = join(projectRoot, 'src', 'mockups', mockup.file);
      const outputPath = join(outputDir, mockup.name);

      console.log(`Processing: ${mockup.file}`);
      console.log(`  → Output: ${mockup.name}`);

      const page = await browser.newPage();

      // Set viewport
      await page.setViewport({
        width: mockup.width,
        height: mockup.height,
        deviceScaleFactor: 2  // 2x for retina quality
      });

      // Navigate to mockup
      await page.goto(`file://${mockupPath}`, {
        waitUntil: 'networkidle0'
      });

      // Take screenshot
      await page.screenshot({
        path: outputPath,
        type: 'png'
      });

      await page.close();
      console.log(`  ✓ Screenshot saved\n`);
    }

    console.log('All mockups screenshotted successfully!');
  } catch (error) {
    console.error('Error during screenshot process:', error);
    throw error;
  } finally {
    await browser.close();
    console.log('Browser closed');
  }
}

// Run the script
screenshotMockups().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
