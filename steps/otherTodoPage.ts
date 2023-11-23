import { Locator, Page, expect } from '@playwright/test';
import { Fixture, Given, When, Then } from 'playwright-bdd/decorators';
import type { test } from './fixtures';

export
@Fixture<typeof test>('otherTodoPage')
class OtherTodoPage {
  readonly inputBox: Locator;
  readonly todoItems: Locator;

  constructor(public page: Page) {
    this.inputBox = this.page.locator('input.new-todo');
    this.todoItems = this.page.getByTestId('todo-item');
  }

  @When('I add todo {string}')
  async addToDo(text: string) {
    await this.inputBox.fill(text);
    await this.inputBox.press('Enter');
  }
}
