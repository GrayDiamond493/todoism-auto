import { expect, Locator, Page } from "@playwright/test"

export class LoginPage {
    readonly page: Page


    constructor(page: Page) {
        this.page = page
    }

    async navigate() {
        await this.page.goto('http://127.0.0.1:5000/');
    }

    async LoginWithNewUser() {
        await this.page.click('//li//a[@class="waves-effect waves-light btn red"]')
        await this.page.click('//div[@class="login-form"]//descendant::a[@id="register-btn"]')
        await this.page.waitForTimeout(2000)
        await this.page.click('//div[@class="login-form"]//descendant::a[@id="login-btn"]')
    }
}