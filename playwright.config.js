
import { chromium, defineConfig, devices } from '@playwright/test';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  
  
  // fullyParallel: true,
  
  // forbidOnly: !!process.env.CI,
  // /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,
  
  // workers: process.env.CI ? 1 : undefined,
 
  reporter: 'html',
  
  use: {
    browserName: 'chromium',
    headless: true,
    actionTimeout: 10000,
   

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    

    

    
  ],

  
});

