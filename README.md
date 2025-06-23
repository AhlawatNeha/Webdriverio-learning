# Ecommerce Application WebdriverIO Test

## Description
This project contains an end-to-end WebdriverIO test for an Ecommerce Application.  
The test automates login, product selection, checkout, and verifies the total price on the website [rahulshettyacademy.com](https://rahulshettyacademy.com/loginpagePractise/).

---

## Test Details

- Navigates to the login page and logs in with valid credentials.
- Selects specific products (`iphone X` and `Blackberry`) from the product list.
- Adds selected products to the cart.
- Proceeds to checkout and validates that the sum of individual product prices matches the total price.
- Completes the purchase by selecting the country and submitting the order.
- Verifies the success message after submission.

---

## Prerequisites

- Node.js installed (recommended version: v22.13.0)
- WebdriverIO and required dependencies installed in the project.

---

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/AhlawatNeha/Webdriverio-learning.git
    cd your-repo
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

---

## Running the Test

Run the test with the following command:

```bash
npx wdio run ./wdio.conf.js --spec eCommerceE2E.js
