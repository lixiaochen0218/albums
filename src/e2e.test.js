const puppeteer = require('puppeteer');

let browser, page;

// jest.setTimeout(5000);

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80
  });
  page = await browser.newPage();
});

afterAll(() => {
  browser.close();
});

test('open albums page', async () => {
  await page.goto('http://localhost:3000/');
});

test('expect title is Albums', async () => {
  await page.waitForSelector('.title');
  const text = await page.$eval('.title', el => el.textContent)
  expect(text).toBe('Albums');
});

test('expect thumbnail count', async () => {
  try{  
    await page.goto('http://localhost:3000/photos/1');
    await page.waitForSelector('.image');
    const elements = await page.$$('.image');
    expect(elements.length).toBe(50);
    await page.evaluate(()=>document.querySelector('.image')[0].click())
  } catch (err) {
    console.error(err);
  }
});