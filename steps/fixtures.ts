import { test as base } from 'playwright-bdd';
import { TodoPage } from './TodoPage';
import { AssertTodoPage } from './AssertTodoPage';

export const test = base.extend<{ todoPage: TodoPage, assertTodoPage: AssertTodoPage, todoList: string[], browserSpecificTest: void }>({
  todoList: [],
  todoPage: async ({ page, todoList }, use) => use(new TodoPage(page, todoList)),
  assertTodoPage: async ({ page, todoList }, use) => use(new AssertTodoPage(page, todoList)),
  browserSpecificTest: [async ({ $tags }, use, testInfo) => {
    if ($tags.includes('@firefox') && testInfo.project.name !== 'firefox') {
      testInfo.skip();
    }
    await use();
  }, { auto: true }],
});
