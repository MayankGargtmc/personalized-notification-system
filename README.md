# Personalized Notification System

## Overview

The **Personalized Notification System** is a microservices-based application that delivers personalized recommendations and notifications to users. The system incorporates user preferences, recommendation engines, and schedulers to ensure timely delivery of notifications. It is designed to be modular, scalable, and easy to deploy.

---

## Features

1. **User Management**:

   - Create, update, and fetch user details.
   - Store user preferences to personalize notifications.

2. **Recommendation Engine**:

   - Generate recommendations based on user activities (mock data).
   - Store and retrieve recommendations for individual users.

3. **Notification System**:

   - Manage notifications for users (order updates, promotions, etc.).
   - Retrieve unread notifications.

4. **Scheduler**:

   - Automate sending notifications based on schedules (e.g., daily promotions, hourly updates).

5. **Databases**:

   - MySQL: Used for structured data like users and recommendations.
   - MongoDB: Used for flexible storage of notifications.

---

## Tech Stack

- **Backend**: Node.js with TypeScript
- **Databases**: MySQL, MongoDB
- **Scheduling**: Cron Jobs (Node-Cron)
- **Authentication**: JWT
- **Orchestration**: Docker, Docker Compose
- **APIs**: RESTful APIs
- **Monitoring**: Prometheus (optional for metrics, Not yet done)

---

## Project Structure

The project follows a modular microservices architecture with the following services:

### 1. **User Service**

Handles user-related operations:

- API: `http://localhost:5001`
- Database: MySQL
- Key Endpoints:
  - `POST /users`: Create a new user.
  - `GET /users/:id`: Fetch user details.

### 2. **Notification Service**

Manages notifications:

- API: `http://localhost:5002`
- Database: MongoDB
- Key Endpoints:
  - `POST /notifications`: Create a notification.
  - `GET /notifications/unread/:userId`: Fetch unread notifications.

### 3. **Recommendation Service**

Generates personalized recommendations:

- API: `http://localhost:5003`
- Database: MySQL
- Key Endpoints:
  - `POST /recommendations/generate`: Generate recommendations for a user.
  - `GET /recommendations/:userId`: Fetch user recommendations.

### 4. **Scheduler Service**

Automates notification dispatch:

- API: `http://localhost:5004`
- Features:
  - Scheduled order updates (hourly).
  - Scheduled promotional notifications (daily).

---

## Installation & Running Locally

### Prerequisites

- Node.js (v16 or above)
- MySQL
- MongoDB
- Docker & Docker Compose (optional for containerized setup)
- passwords set up for databases in .env files of respective services

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-repo/personalized-notification-system.git
   cd personalized-notification-system
   ```

2. **Install Dependencies** (for each service):

   ```bash
   cd services/<service-name>
   npm install
   ```

3. **Set Up Databases**:

   - MySQL:
     ```sql
     CREATE DATABASE notification_system;
     ```
   - MongoDB: Ensure MongoDB is running locally or via a cloud provider.

4. **Update Environment Variables**:

   - Copy `.env.example` to `.env` in each service directory and update the values.

5. **Run Each Service Locally**:

   ```bash
   npm run dev
   ```

   Start all services (User, Notification, Recommendation, Scheduler) in separate terminals.

6. **(Optional) Run with Docker**:

   ```bash
   docker-compose up --build
   ```

---

## API Testing

Use tools like Postman or cURL to test the endpoints.

### Example API Requests

- **Create a User**:

  ```bash
  POST http://localhost:5001/users
  Body:
  {
    "name": "Boss no 1"
    "email": "boss1@gmail.com",
    "preferences": ["promotions", "order_updates"]
  }
  ```

- **Fetch Unread Notifications**:

  ```bash
  GET http://localhost:5002/notifications/unread/123
  ```

- **Generate Recommendations**:

  ```bash
  POST http://localhost:5003/recommendations/generate
  Body:
  {
    "userId": "123"
  }
  ```

- **Trigger Scheduler Tasks** (optional endpoint):

  ```bash
  POST http://localhost:5004/schedule/promotions
  ```

---

## Known Issues

1. Ensure MySQL and MongoDB are running before starting the services.
2. Scheduler may fail if Notification Service is not reachable.

---

## Future Enhancements

1. Add GraphQL Gateway for unified APIs.
2. Introduce metrics monitoring with Prometheus and Grafana.
3. Implement OAuth for secure authentication.
4. Scale services using Kubernetes.

---

## Contributors

- [Mayank Garg](https://github.com/MayankGargtmc)

---
