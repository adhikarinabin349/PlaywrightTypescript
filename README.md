# PlaywrightTypescript
Scalable Playwright Test Repository using Typescript

## Environment Setup

Make sure you have [Node.js](https://nodejs.org/) (version X.X or above) installed.

You can check your version with:
```sh
node -v

## Project Setup

1. **Install Dependencies**:
    ```sh
    npm install
    ```

2. **Install Playwright Browsers**:
    ```sh
    npx playwright install
    ```

## Project Structure
.
├── pageFactory
│   ├── helpers
│   │   └── apiHelper.ts
│   └── pages
│       └── atroverseHome.ts
├── tests
│   └── atroverseHome.spec.ts
├── playwright.config.ts
└── README.md


- **pageFactory/helpers/apiHelper.ts**: Contains helper functions for API interactions, such as GET/POST methods.
- **pageFactory/pages/atroverseHome.ts**: Implements the Page Object Model for the Atroverse Home page, which is used to interact with elements on the page.
- **tests/atroverseHome.spec.ts**: Contains test cases for verifying functionality on the Atroverse Home page.
- **playwright.config.ts**: Configuration file for Playwright, including settings for browsers, test retries, and timeouts.
- **README.md**: Project documentation.
- **pageFactory/helpers/apiHelper.ts**: Contains helper functions for API interactions.
- **pageFactory/pages/atroverseHome.ts**: Contains page object model for the Atroverse Home page.
- **tests/atroverseHome.spec.ts**: Contains test cases for the Atroverse Home page.
- **playwright.config.ts**: Configuration file for Playwright.

## Running Tests

1. **Run All Tests**:
    ```sh
    npx playwright test
    ```

2. **Run Specific Test File**:
    ```sh
    npx playwright test tests/atroverseHome.spec.ts
    ```

3. **View Test Report**:
    ```sh
    npx playwright show-report
    ```

## Example Test

Here’s an example of a simple test located in [atroverseHome.spec.ts](tests/atroverseHome.spec.ts):

```typescript
import { test, expect } from '@playwright/test';
import { AtroverseHome } from '../pageFactory/pages/atroverseHome';

test.describe('Verify Home Page', () => {
    test('verify user landed on home page', async ({ page }) => {
        const homePage = new AtroverseHome(page);
        await homePage.navigateToHomePage(); // Navigates to the home page

        await expect(homePage.mainHeaderText).toContainText('Next Generation'); // Checks if the main header contains 'Next Generation'
    });
});

### 5. **Additional Testing Commands**:
Consider tests in parallel or run tests with specific tags, for better flexibility.

Example:
```sh
# Run tests in parallel
npx playwright test --workers=4

# Run tests with a specific tag
npx playwright test --grep @smoke

## Contact

If you have any questions or suggestions, feel free to reach out to [Nabin Adhikari] at [nabin.adhikari349@gmail.com].
