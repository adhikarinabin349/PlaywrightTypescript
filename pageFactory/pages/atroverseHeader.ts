import { Locator, Page } from 'playwright';

export class AtroverseHeader {
    private page: Page;
    headerIcom: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerIcom = this.page.locator('[alt="Company Logo"]');
    }

    async assertHeaderIsPresent() {
        return await this.headerIcom.isVisible();
    }
}