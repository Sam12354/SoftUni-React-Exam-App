# Installation and Setup Guide

## 1. Install Dependencies for the Server and Client

### **Server Setup:**
1. Navigate to the server directory:

    ```bash
    cd server
    ```
2. Install the server dependencies:

    ```bash
    npm install
    ```

### **Client Setup:**
1. Navigate to the client directory:

    ```bash
    cd client
    ```
2. Install the client dependencies:

    ```bash
    npm install
    ```


## 2. Set Up Environment Variables

Since this project utilizes cookies for authentication, you need to create a `.env` file to store sensitive information, such as the `JWT_TOKEN`.

### **Steps to Set Up the .env File:**

1. Create a `.env` file in the root directory of the server (if it doesn't already exist).

2. Add the following environment variable to the `.env` file:

    ```env
    JWT_TOKEN=your_secret_key_here
    ```

   Replace `your_secret_key_here` with a strong, secure secret key used for signing JWT tokens.

3. Ensure that the server is able to read environment variables by using the `dotenv` package (which should already be included in the server dependencies).

### **Important Note:**

- The `.env` file is **not** included in version control (e.g., Git) by default. It’s important to ensure that this file is added to `.gitignore` to prevent accidental exposure of sensitive data.


## 3. Running the Application

### **Server:**

The server handles the API requests and is set to run on `http://localhost:7777`.

1. Open a terminal and navigate to the `server` directory:

    ```bash
    cd server
    ```

2. Install the server dependencies (if you haven't already):

    ```bash
    npm install
    ```

3. Start the server by running the following command:

    ```bash
    npm run dev
    ```

   The server should now be running at `http://localhost:7777`.

### **Client:**

The client is a React-based front-end application that communicates with the server. It runs on `http://localhost:5173`.

1. Open a new terminal and navigate to the `client` directory:

    ```bash
    cd client
    ```

2. Install the client dependencies (if you haven't already):

    ```bash
    npm install
    ```

3. Start the client by running the following command:

    ```bash
    npm run dev
    ```

   The client should now be accessible at `http://localhost:5173`.

### **Note:**

- You must run the server and client in separate terminal windows. Both need to be running simultaneously to interact with each other.

   Make sure you have both terminals open and executing the `npm run dev` command in their respective directories (`client` and `server`).



## Online Store - [Go to the Application](http://localhost:5173/)


## Public Part 

Here are the public parts of the application:

- ✅ **Home Page**
- ✅ **Register Page**
- ✅ **Login Page**
- ✅ **Catalog Page**
- ✅ **Details Page**



## Private Part 

- 🔒 **Personal Catalog/Profile**: A space where users can view and manage their own products.


## Features and Implementation 🛠️

### **Custom Hooks:**
In the application, custom hooks are used to handle various tasks like authentication, form management, and CRUD operations for products:

- **useLogin**: Handles user login and updates the authentication state.
- **useRegister**: Handles user registration and updates the authentication state.
- **useLogout**: Handles user logout by clearing authentication data.
- **useForm**: Manages form states and submission.
- **usePersistedState**: Persists authentication state in `localStorage` and fetches user data.
- **useGetAllItems**: Fetches and displays all items from the server.
- **useGetOneItem**: Fetches details of a specific item and handles error states.
- **useCreateItem**: Handles creating a new product.


### **Context API:**
The application uses **Context API** to manage global authentication state across the app. The authentication context is shared with all components to handle user login, registration, and logout.

- **AuthContext**: This context holds authentication data such as `userId`, `email`, and `isAuthenticated` and provides methods for changing authentication state and logging out.


### **Route Guards:**

The application has route guards to manage access for different users.

    Guest Access: Unauthenticated users (guests) can access the following pages without any restrictions:
        Home
        Register
        Login
        Catalog
        Details (view items with no buttons for editing or deleting)

    User Access: Authenticated users (logged in) can access the following pages, along with additional features:
        Home
        Catalog (with full management capabilities)
        Logout
        Details (view items with Edit and Delete buttons if the user is the owner, or Buy button if they are not the owner)
        Create (to add new items)
        Edit (to modify their existing items)
        Personal Space (to manage their own catalog)

This setup ensures that guests can view content but cannot make any changes, while logged-in users have full access to manage their items.