# Amazon Clone Project

A project that simulates the interface and functionality of the Amazon website, built with vanilla JavaScript.

## Description

This project is a simplified clone of Amazon, focusing on implementing the core features of an e-commerce platform such as product display, shopping cart, checkout, and order tracking.

## Project Structure

```
javascript-amazon-project-main/
├── .vscode/
│   └── settings.json
├── backend/
│   └── products.json
├── data/
│   ├── cart-oop.js
│   ├── cart.js
│   ├── deleveryOptions.js
│   └── products.js
├── images/
├── scripts/
│   ├── checkout/
│   │   ├── orderSummary.js
│   │   └── paymentSummary.js
│   ├── utils/
│   │   └── money.js
│   ├── amazon.js
│   └── checkout.js
├── styles/
│   ├── pages/
│   │   └── checkout/
│   ├── shared/
│   │   ├── amazon-header.css
│   │   └── general.css
│   ├── amazon.css
│   ├── orders.css
│   └── tracking.css
└── html/
    ├── amazon.html
    ├── checkout.html
    ├── orders.html
    └── tracking.html
```

## Features

- **Product Homepage**: Displays list of products from JSON data
- **Shopping Cart**: Add/remove products, update quantities
- **Delivery Options**: Allows users to select shipping methods
- **Order Summary**: Displays information about selected products
- **Payment Summary**: Calculates and displays costs
- **Order Tracking**: Tracks the status of placed orders

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Day.js (time handling library)
- Money.js utility for currency formatting

## Installation and Running

1. Clone the repository:
   ```
   git clone https://github.com/your-username/javascript-amazon-project-main.git
   ```

2. Open the `amazon.html` file in a web browser to start

   Or use Live Server if you're using Visual Studio Code:
   - Install the Live Server extension
   - Right-click on the `amazon.html` file and select "Open with Live Server
