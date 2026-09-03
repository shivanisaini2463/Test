import { chromium } from 'playwright-core';

const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox'],
});
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
const errors = [];
page.on('pageerror', e => errors.push(String(e)));
page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });

await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' });

const height = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < height; y += 400) {
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await page.waitForTimeout(50);
}

await page.evaluate(() => {
  const el = document.querySelector('img[src*="DesignSystemCover"]');
  if (el) {
    const rect = el.getBoundingClientRect();
    window.scrollTo(0, window.scrollY + rect.top - 150);
  }
});
await page.waitForTimeout(400);
await page.screenshot({ path: '/Users/redrob/Desktop/Portfolio/Test/case_home.png' });

console.log('CONSOLE_ERRORS:', JSON.stringify(errors));
await browser.close();
