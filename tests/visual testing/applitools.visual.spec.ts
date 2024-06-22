import { test } from "@playwright/test";
import {
  BatchInfo,
  BrowserType,
  Configuration,
  DeviceName,
  Eyes,
  EyesRunner,
  ScreenOrientation,
  Target,
  VisualGridRunner,
} from "@applitools/eyes-playwright";

let Batch: BatchInfo;
let Config: Configuration;
let Runner: EyesRunner;
let APPLITOOLS_API_KEY: string = "pn99Yrdf8J7roclIs3dTJKfBAixEVS5C470AmI7Jm107jw110";

test.describe("Visual testing with applitools", () => {
  test.beforeAll("Applitools configuration", async () => {
    Runner = new VisualGridRunner();
    Batch = new BatchInfo("Visaul test starter");

    Config = new Configuration();
    Config.setApiKey(APPLITOOLS_API_KEY);
    Config.setBatch(Batch);
    Config.addBrowsers(
      { name: BrowserType.CHROME, width: 800, height: 600 },
      {
        chromeEmulationInfo: {
          deviceName: DeviceName.iPhone_11,
          screenOrientation: ScreenOrientation.PORTRAIT,
        },
      },
      {
        chromeEmulationInfo: {
          deviceName: DeviceName.Galaxy_S10_Plus,
          screenOrientation: ScreenOrientation.LANDSCAPE,
        },
      }
    );
  });

  // // Eyes will be opened before avery test in suite
  let eyes: Eyes;

  test.beforeEach(async ({ page }) => {
    // Start visaul testing with applitools and eyes
    eyes = new Eyes(Runner, Config);

    // Arguments: page instance, 'Yuor application name', viewport resolution
    await eyes.open(page, "Applitools sandbox", "Initial applitools test", {
      width: 800,
      height: 600,
    });
  });

  test("Visual test with applitools", async ({ page }) => {
    //navigation to the pag
    await page.goto("https://sandbox.applitools.com/bank?layoutAlgo=true");

    // take a screenshot of login page full size
    await eyes.check("Login page", Target.window().fully());

    // login to the application
    await page.locator("#username").fill("user");
    await page.locator("#password").fill("password");
    await page.locator("#log-in").click();
    await page
      .locator("div .dashboard_dashboardContent__BUrjL")
      .waitFor({ state: "attached" });

    //take a screenshot of main page
    await eyes.check("Main page", Target.window().fully());
    await eyes.close();
  });
});
