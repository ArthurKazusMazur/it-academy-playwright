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

test("login with token", async ({ request }) => {
  // generate token
  const req = await request.post(
    "https://demoqa.com/Account/v1//GenerateToken",
    {
      data: {
        password: "1046512@Kliu",
        userName: "kaszulkIns",
      },
    }
  );

  const resp = await req.json();

  console.log(resp);

  await request.post("https://demoqa.com/Account/v1/Login", {
    data: {
      password: "1046512@Kliu",
      userName: "kaszulkIns",
    },
  });

  await request.storageState({ path: "./auth.data.json" });
});
