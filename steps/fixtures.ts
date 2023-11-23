import { test as base } from 'playwright-bdd';
import { TodoPage } from './TodoPage';
import { OtherTodoPage } from './otherTodoPage';

export const test = base.extend<{ todoPage: TodoPage, otherTodoPage: OtherTodoPage, browserSpecificTest: void }>({
  todoPage: async ({ page }, use) => use(new TodoPage(page)),
  otherTodoPage: async ({ page }, use) => use(new OtherTodoPage(page)),
  browserSpecificTest: [async ({ $tags }, use, testInfo) => {
    if ($tags.includes('@firefox') && testInfo.project.name !== 'firefox') {
      testInfo.skip();
    }
    await use();
  }, { auto: true }],
});
