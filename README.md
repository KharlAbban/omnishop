# OmniShop - Frozen Meat E-Commerce Platform

**OmniShop** is a full-stack e-commerce application for purchasing frozen meat products. It is built with modern web technologies to deliver a responsive, user-friendly, and efficient shopping experience.

---

## Features

- **Authentication**: Secure user authentication using NextAuth.js.
- **Product Management**: View a variety of frozen meat products categorized by type (chicken, beef, tuna, etc.).
- **Shopping Cart**: Add, remove, and manage products in your cart using Redux Toolkit for state management.
- **Responsive Design**: Mobile-first design with TailwindCSS for seamless use across devices.
- **API Integration**: Full backend API built with Node.js and Express.js, powered by MongoDB for data persistence.
- **Horizontal Scrolling for Products**: A clean UI showcasing products in scrollable carousels.

---

## Technologies Used

### Frontend:
- **Next.js**: React-based framework for server-side rendering and static site generation.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Redux Toolkit**: State management for cart, products, and user authentication.
- **NextAuth.js**: User authentication and session management.

### Backend:
- **Node.js**: Backend runtime.
- **Express.js**: Web application framework.
- **MongoDB**: NoSQL database for storing products and user data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KharlAbban/omnishop.git
   cd omnishop
   ```

2. Install required dependencies:
   ```bash
   npm install
   ```

3. Clone the backend repository:
   ```bash
   git clone https://github.com/KharlAbban/omnishop-server.git
   cd omnishop-server
   ```

4. Install dependencies for the backend:
   ```bash
   npm install
   ```

5. Set up environment variables in frontend and backend:
   - Create a `.env.local` file in the frontend and a `.env` file in the backend.
   - Add the required environment variables using the example envs as a guide.

6. Start the backend server:
   ```bash
   npm run dev
   ```

7. Start the frontend:
   ```bash
   npm run dev
   ```

---

## Usage

1. Open the frontend app in your browser at `http://localhost:3000`.
2. Sign in or sign up to create an account.
3. Browse through the available products and add items to your cart.
4. View your cart and proceed to checkout.

---

## Future Enhancements

- Integration with a payment gateway.
- User profile management and order history.
- Reviews and ratings for products.
- Admin dashboard for product management.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

### Contact

If you have questions or need help, reach out to me at `khvngkharl123l@gmail.com`.