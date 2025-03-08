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




