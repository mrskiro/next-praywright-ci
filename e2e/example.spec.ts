import { test, expect } from "@playwright/test"

test("example", async ({ page }) => {
  await page.goto("/")

  await expect(page).toHaveTitle(/Next App/)
  await expect(page).toHaveScreenshot()
})
