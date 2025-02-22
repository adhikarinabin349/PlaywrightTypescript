import { Page } from 'playwright';

export async function goToAtroverseHome(page: Page): Promise<void> {
    await page.goto('https://atroverse.com');
    const title = await page.title();
    if (title !== 'Atroverse') {
        throw new Error(`Expected title to be 'Atroverse' but got '${title}'`);
    }
}