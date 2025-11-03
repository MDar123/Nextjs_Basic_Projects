import { expect } from "@playwright/test";
import { chromium } from "playwright";

export async function checkoutPageTest() {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    try {
        await page.goto('https://playwright.dev/');

        await expect(page).toHaveTitle(/Playwright/);


        await page.getByRole('link', { name: 'Get started' }).click();
        await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
        await browser.close();

        return {
            status: "PASSED",
            message: "Checkout test completed successfully",
        };
    } catch (error: any) {
        await browser.close();
        return {
            status: "FAILED",
            message: error.message,
        };
    }
}
