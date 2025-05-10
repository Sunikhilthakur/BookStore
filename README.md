
# 📚 BookStore

An intuitive and responsive online bookstore built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This application allows users to browse, search, and purchase books seamlessly, providing a user-friendly interface and efficient backend operations.

🔗 **Live Demo**: [book-store-tau-ecru.vercel.app](https://book-store-tau-ecru.vercel.app)

---

## 🚀 Features

- **User Authentication**: Secure login and registration system.
- **Book Catalog**: Browse through a collection of books with detailed information.
- **Search Functionality**: Quickly find books by title or author.
- **Shopping Cart**: Add books to the cart and manage quantities.
- **Order Processing**: Seamless checkout process for purchasing books.
- **Responsive Design**: Optimized for various devices and screen sizes.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, CSS, HTML
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Vercel (Frontend), Render (Backend)

---

## 📁 Project Structure

```
BookStore/
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── README.md
└── package.json
```

---

## ⚙️ Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Backend Setup

1. Navigate to the `Backend` directory:

   ```bash
   cd Backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and add your MongoDB URI:

   ```
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the server:

   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `Frontend` directory:

   ```bash
   cd Frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

---

## 📬 API Endpoints

| Method | Endpoint           | Description                  |
|--------|--------------------|------------------------------|
| GET    | `/api/books`       | Retrieve all books           |
| GET    | `/api/books/:id`   | Retrieve a specific book     |
| POST   | `/api/users/register` | Register a new user       |
| POST   | `/api/users/login` | Authenticate a user          |
| POST   | `/api/orders`      | Create a new order           |

---

## 📸 Screenshots

*Include screenshots of your application here.*

---

## 📌 Future Enhancements

- **Admin Panel**: Manage books and orders.
- **User Reviews**: Allow users to review and rate books.
- **Wishlist**: Enable users to save books for later.
- **Payment Integration**: Integrate payment gateways for real transactions.

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 📫 Contact

**Developer**: Sunikhil Thakur  
**GitHub**: [Sunikhilthakur](https://github.com/Sunikhilthakur)
