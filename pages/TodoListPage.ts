import { expect, Locator, Page } from "@playwright/test"

export class TodoListPage {
    readonly page: Page


    constructor(page: Page) {
        this.page = page
    }

    async AddNewTask(task) {
        const searchBar = '//div[@id="main"]//descendant::input[@id="item-input"]'
        await this.page.fill(searchBar,task)
        await this.page.press(searchBar,'Enter')
        await expect(this.page.locator(`//div[@class="items"]//div[@data-body="${task}"]`)).toBeVisible()
    }

    async completeTask(task){
        const taskRecord = `//div[@class="items"]//div[@data-body="${task}"]`
        await expect(this.page.locator(taskRecord)).toBeVisible()
        await this.page.locator(taskRecord.concat('//descendant::a[@class="button done-btn"]')).locator('i').click()
        await expect(this.page.locator('span').filter({ hasText: `check_box ${task}` }).locator('i')).toBeVisible()
        await this.page.click('//ul[@class="tabs"]//descendant::a[@id="completed-item"]');
        await expect(this.page.locator(`//div[@class="items"]//div[@data-body="${task}"]`)).toBeVisible()
    }

    async clearTask(task){
        const taskRecord = `//div[@class="items"]//div[@data-body="${task}"]`
        await expect(this.page.locator(taskRecord)).toBeVisible()
        await this.page.locator(taskRecord.concat('//descendant::a[@class="button done-btn"]')).locator('i').click()
        await this.page.locator('//div[@id="dashboard"]//descendant::a[@id="clear-btn"]').locator('i').click()
        await expect(this.page.locator('//div[@id="toast-container"]//div[@class="toast rounded"]')).toBeVisible()
        await expect(this.page.getByText('All clear!')).toBeVisible();
    }
}