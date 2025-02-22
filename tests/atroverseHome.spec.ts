import { test, expect } from '@playwright/test';
import { AtroverseHome } from '../pageFactory/pages/atroverseHome';

test.describe('Verify Home Page', () => {
    test('verify user landed on home page', async ({ page }) => {
        const homePage = new AtroverseHome(page);
        await homePage.navigateToHomePage();

        await expect(homePage.mainHeaderText).toContainText('Next Generation');

    })
});
