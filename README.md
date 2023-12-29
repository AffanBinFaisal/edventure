# Edventure - Online Learning Platform

## Table of Contents
1. [Introduction](#1-introduction)
   - [Project Overview](#11-project-overview)
   - [Key Features](#12-key-features)
2. [Web Technologies](#2-web-technologies)
   - [Backend Technologies](#21-backend-technologies)
   - [Frontend Technologies](#22-frontend-technologies)
   - [Middleware and Tools](#23-middleware-and-tools)
   - [Additional Dependencies](#24-additional-dependencies)
3. [Getting Started](#3-getting-started)
   - [Installation](#31-installation)
   - [Running the Application](#32-running-the-application)
4. [Project Structure](#4-project-structure)
5. [Contributors](#5-contributors)

---

## 1. Introduction

### 1.1 Project Overview

Edventure is an innovative online learning platform that offers a diverse range of courses to learners worldwide. Built using the MERN (MongoDB, Express.js, React, Node.js) stack, Edventure provides a dynamic and user-friendly learning experience for both students and course creators.

### 1.2 Key Features

- **Diverse Course Catalog:** Explore a wide variety of courses, covering technology, business, arts, sciences, and more.

- **User Authentication:** Register, log in, and manage your profile securely.

- **Course Creation:** Empower educators to create and publish courses with chapters, lessons, quizzes, and multimedia content.

- **Interactive Learning:** Engage in interactive lessons, collaborate with peers, and seek guidance from instructors.

- **Enrollment and Progress Tracking:** Enroll in courses and monitor your progress through intuitive dashboards.

- **User-Friendly Dashboard:** Access enrolled courses and personalized learning journeys with ease.

---

## 2. Web Technologies

### 2.1 Backend Technologies

- **Node.js and Express.js:**
   - Node.js for efficient handling of multiple user requests.
   - Express.js for simplified routing, middleware, and API development.

- **MongoDB (NoSQL Database):**
   - Flexible and scalable database for course content, user profiles, and interactions.

- **Authentication Middleware:**
   - Custom middleware for secure user authentication and session management.

### 2.2 Frontend Technologies

- **React.js:**
   - Component-based library for interactive user interfaces and real-time updates.

- **EJS (Embedded JavaScript):**
   - View engine for server-side rendering of dynamic content.

- **HTML and CSS:**
   - Fundamentals for responsive and user-friendly design.

### 2.3 Middleware and Tools

- **express-session for Session Management:**
   - Secure management of user sessions.

- **Body-parser:**
   - Parsing incoming JSON and URL-encoded data for data handling.

- **Mongoose (MongoDB ODM):**
   - Schema-based solution for data validation and consistency.

### 2.4 Additional Dependencies

- **express.static Middleware for Serving Static Assets:**
   - Optimizing load times by serving static assets such as images, stylesheets, and scripts.

---

## 3. Getting Started

### 3.1 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AffanBinFaisal/edventure.git

2. Change directory to the project folder:
   ```bash
   cd edventure

3. Install dependencies:
   ```bash
   npm install

### 3.2 Running the Application

1. Start the server:
   ```bash
   npm start

2. Open your web browser and access the application at http://localhost:5000.

---

## 4. Project Structure

The Edventure project follows a well-organized directory structure for efficient development and maintenance. Below is an overview of the key files and directories:

- **db.js:** MongoDB connection and database setup.

- **authenticationMiddleware.js:** Custom authentication middleware for user security.

### Models

- **user.js:** User schema and model.
- **course.js:** Course, chapter, and video schemas and models.
- **enrollments.js:** Enrollment schema and model.

### Routes

Express.js routes for various application functionalities:

- **addcourse.js:**
- **courses.js:** 
- **dashboard.js:** 
- **editcourse.js:** 
- **enrollment.js:** 
- **home.js:** 
- **login.js:** 
- **register.js:** 

### views

HTML and EJS templates for rendering dynamic content:

- **index.js:** 
- **about.html:** 
- **contact.html:** 

### public

Static assets, including images and CSS:

- **assets:** Directory for storing assets like images.
- **css:** Directory for CSS stylesheets.

- **index.js:** Main application file with routing and server setup.

This structured approach simplifies code management and enhances collaboration among team members during the development and maintenance of the Edventure platform.

---

## 5. Contributors
 
- **Affan Bin Faisal** 
- **Muhammad Taha Khan**

---