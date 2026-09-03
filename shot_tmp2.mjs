import { chromium } from 'playwright-core';

const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox'],
});
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
page.on('response', res => {
  if (res.status() === 404) console.log('404:', res.url());
});
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
await browser.close();
