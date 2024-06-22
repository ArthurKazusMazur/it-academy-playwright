import { test as base, expect } from "@playwright/test";

let x;

type newFixture = {
  fixtureOne: any;
  fixtureTwo: any;
};

const test = base.extend<newFixture>({
  fixtureOne: async ({}, use) => {
    const fixtureOne = undefined;
    x = 1;
    await use(fixtureOne);
  },
  fixtureTwo: async ({}, use) => {
    const fixtureTwo = undefined;
    x = 2;
    await use(fixtureTwo);
  },
});

test("Test one", async ({ fixtureOne }) => {
  expect(x).toEqual(1);
});

test("Test two", async ({ fixtureTwo }) => {
  expect(x).toBe(2);
});
