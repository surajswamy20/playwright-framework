import { mytest, expect } from "../../fixtures/learningFixtures";

mytest("login page works from a .test.ts file", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByPlaceholder("Username")).toBeVisible();

    await expect(
        page.getByRole("button", { name: "Login", exact: true })
    ).toBeVisible();
});