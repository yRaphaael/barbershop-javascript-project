## Barbershop Appointment Scheduling System

This project is a Node.js application for managing appointments in a barbershop. It allows users to create, view, update, and delete appointment schedules.

**Features:**

* Create new appointments
* View details of existing appointments
* Update appointment information
* Delete appointments

**Prerequisites:**

* **Node.js:** Download and install Node.js from [nodejs.org](https://nodejs.org/).
* **MongoDB:** Install and run MongoDB. See instructions on [mongodb.com](https://www.mongodb.com/).

**Installation:**

1. Clone the repository:

```bash
git clone https://github.com/yRaphaael/barbershop-scheduling-system.git
cd barbershop-scheduling-system
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and configure your MongoDB connection:

```
MONGO_URI=your-mongodb-uri
PORT=3000
```

Replace `your-mongodb-uri` with your actual MongoDB connection string.

**Running the Project:**

1. Start the MongoDB server.

2. Run the application:

```bash
npm start
```

The server should start on port 3000 (default). You'll see a message confirming it's running.

**API Endpoints:**

* **Create a new schedule:**

  ```http
  POST /api/barbershop/schedules
  ```

  **Request Body:**

  ```json
  {
      "service": "Haircut",
      "price": 30,
      "customerName": "John Doe",
      "email": "john@example.com",
      "barberName": "Jane Doe",
      "appointmentDate": "2023-07-15T10:00:00Z",
      "notes": "Prefers a classic cut"
  }
  ```

* **Get a schedule by ID:**

  ```http
  GET /api/barbershop/schedules/:id
  ```

* **Get all schedules:**

  ```http
  GET /api/barbershop/schedules
  ```

* **Update a schedule:**

  ```http
  PUT /api/barbershop/schedules/:id
  ```

  **Request Body:** (Same structure as creating a new schedule)

* **Delete a schedule:**

  ```http
  DELETE /api/barbershop/schedules/:id
  ```

**Contributing:**

1. Fork the repository.
2. Create a new branch for your feature.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Create a pull request.

**License:**

This project is licensed under the MIT License. See the LICENSE file for details.

**Contact:**

Feel free to reach out with any questions or feedback.
