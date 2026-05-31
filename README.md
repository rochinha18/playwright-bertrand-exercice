# playwright-bertrand-exercice

Automation project for the Bertrand website using Playwright with TypeScript.

## Requirements

- Node.js
- npm

## Install

```bash
npm ci
npx playwright install
```

## Run tests

Run the full suite:

```bash
npm test
```

Run only Chromium:

```bash
npm run test:chromium
```

Run in headed mode:

```bash
npm run test:headed
```

Open the HTML report after a run:

```bash
npx playwright show-report
```

## Test scenarios

- Scenario 1: searches for `1984` and validates author, ISBN, number of pages and dimensions.
- Scenario 2: searches for `1984` and validates that `A Quinta dos Animais` is authored by `George Orwell`.
- Scenario 3: searches for `Do Not Disturb` and validates author, language and UK/English flag.
- Scenario 4: searches for a non-existing book and validates that there are no results.
- Scenario 5: adds `1984` to the shopping cart and validates the cart counter.

## Assumptions

- The Bertrand website content, product data and element identifiers remain stable.
- Tests depend on internet access and on the Bertrand website being available.
- Cookie consent may appear on first access, so the framework accepts it when visible.
- The selected optional scenarios are no-results search and cart counter update.
