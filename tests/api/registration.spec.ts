import { expect, request, test } from "@playwright/test";

test("New user registration via API", async ({ request }) => {
  const req = await request.post("https://demoqa.com/Account/v1/User", {
    data: {
      password: "1046512@Kliu",
      userName: "kaszulkIns",
    },
  });

  const resp = await req.json();
  const status = req.status();

  expect(status).toBe(201);
  expect(resp.username).toBe("kaszulkIns");

  console.log(resp, status);
});

// test.only("login", async ({ request, page }) => {
//   const req = await request.post("http://localhost:2221/api/login", {
//     data: {
//       username: "admin",
//       password: "Admin123",
//     },
//   });

//   const resp = await req.json();

//   console.log(resp);
//   const token = resp.token;

//   await page.evaluate(
//     ([tok]) => {
//       document.cookie = "token=" + tok;
//     },
//     [token]
//   );
//   await page.goto("http://localhost:2221/my-account");
// });
