import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TodoListPage } from '../pages/TodoListPage';


test.describe("Todoism", () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.navigate();  
        await loginPage.LoginWithNewUser();  
      });

    test('Add task', async ({ page }) => {
        const todoListPage = new TodoListPage(page)
        await todoListPage.AddNewTask('Hacer Tarea')
      });

    test('Complete Task', async ({ page }) => {
        const todoListPage = new TodoListPage(page)
        await todoListPage.completeTask('Witness something truly majestic')
    });

    test('Clear Task', async ({ page }) => {
        const todoListPage = new TodoListPage(page)
        await todoListPage.clearTask('Help a complete stranger')
    });

})