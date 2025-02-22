import { Locator, Page } from 'playwright';
import { goToAtroverseHome } from '../helpers/landingPage';
import { AtroverseHeader } from './atroverseHeader';

export class AtroverseHome {
    private page: Page;
    mainHeaderText: Locator;
    subHeaderText: Locator;
    btnGetStarted: Locator;
    textOurServices: Locator;
    linkCustomDevelopment: Locator;
    linkDigitalInnovation: Locator;
    linkTechConsulting: Locator;

    constructor(page: Page) {
        this.page = page;
        this.mainHeaderText = this.page.locator('h1');
        this.subHeaderText = this.page.locator('h2');
        this.btnGetStarted = this.page.locator('button');
        this.textOurServices = this.page.locator('h3');
        this.linkCustomDevelopment = this.page.locator('a[href="/custom-development"]');
        this.linkDigitalInnovation = this.page.locator('a[href="/digital-innovation"]');
        this.linkTechConsulting = this.page.locator('a[href="/tech-consulting"]');
    }

    async navigateToHomePage() {
        await goToAtroverseHome(this.page);
        const header = new AtroverseHeader(this.page);
        await header.assertHeaderIsPresent();
    }
}