import { Locator, Page, expect } from '@playwright/test';
import { Fixture, Given, When, Then } from 'playwright-bdd/decorators';
import type { test } from './fixtures';

export
@Fixture<typeof test>('assertTodoPage')
class AssertTodoPage {
  readonly todoItems: Locator;

  constructor(public page: Page, public todoList: string[]) {
    this.todoItems = this.page.getByTestId('todo-item');
  }


  @Then('I assert all todos')
  async addElement() {
    await expect(this.todoItems).toHaveText(this.todoList)
  }
}
