# SOCIAL_RD_BACKEND

[![Node.js Version](https://img.shields.io/badge/node-v20.5.1-brightgreen.svg)](https://nodejs.org/)
[![npm Version](https://img.shields.io/badge/npm-v9.8.0-blue.svg)](https://www.npmjs.com/)
[![nestjs Version](https://img.shields.io/badge/nestjs-v10.3.0-orange.svg)](https://angular.io/)

This application is a small project, which seeks to show everything I have learned so far as a backend developer.

## Table of Contents

- [Branch Naming Convention](#branch-naming-convention)
- [Environment Variables](#environment-variables)
- [Backend Setup and Dependencies](#backend-setup-and-dependencies)
- [API documentation](#api-documentation)
- [Starting the Backend Server](#starting-the-backend-server)
- [Testing the Backend Serve](#testing-the-backend-serve)

## Branch Naming Convention

In our project, we adhere to well-defined branch naming conventions to ensure a consistent and organized workflow. Our branch names are structured to provide clear information about their purpose and context.

[type]-[hu-name]-[plane]-[responsible]

## Naming Format

Our branch names follow the format:

- **`type`**: Represents the type of branch. We use `FT` for Feature branches.

- **`hu-name`**: Stands for the Hypothetical User Story name, which provides context for the branch.

- **`plane`**: Indicates the plane number associated with the task or issue.


- **`responsible`**: Identifies the person or team responsible for the branch.

## Examples

- **Feature Branch Example :**
  - Branch Name: `ft-DCGP-2-VM`
  - Purpose: Implementation of a feature tied to task DCGP-2, managed by the team responsible for VM.

By adhering to these branch naming conventions, we enhance clarity and traceability within our development process.

## Environment Variables

To configure environment variables for your project, follow these steps according to your desired stage: development, staging, or production.

1. **Copy Template**: Duplicate the `.env.template` file and rename it to one of the following options based on your stage:

   - For **Development** environment, name it `.env.dev`.
   - For **Staging** environment, name it `.env.stage`.
   - For **Production** environment, name it `.env.prod`.

2. **Edit Values**: Open the newly created `.env` file with a text editor and replace the placeholder values with the appropriate configuration specific to your stage.

3. **Git Ignore**: Ensure that the `.env` file (e.g., `.env.dev`, `.env.stage`, or `.env.prod`) is included in your project's `.gitignore` file to prevent it from being tracked by Git. This is essential for security and to keep sensitive information confidential.

By following these steps, you'll configure the necessary environment variables for your project without exposing sensitive information in your version control system, aligning your project with the chosen stage.

## Backend Setup and Dependencies

To set up and run this project, follow these steps:

1.  **Docker Setup**: Ensure that Docker is installed on your system. Docker will be used to manage the database container for the development environment. If you don't have Docker installed, you can download and install it from the Docker website.

2.  **Clone the Repository**: Clone this project repository to your local machine using Git. You can do this by running the following command in your terminal:

```
git clone https://github.com/VictorMMosqueraG/Social_Rd_Backend.git
```
3.  **Install CLI Tools**: Install the necessary command-line tools for the project.
    - Nest CLI: If you haven't already, install the Nest CLI globally by running the following command in your terminal:

```
npm install -g @nestjs/cli
```

4. Install Project Dependencies: Navigate to the project's root directory using your terminal and install the required Node.js dependencies by running:

```
npm install
```

5. Database Setup (Development Environment):

 - Run Database with Docker: In the development environment, the database is managed using Docker. To start the database container, run the following command:

```
docker-compose up -d
``` 

  This command is a one-time operation dedicated to creating the necessary image and container. When you wish to halt the testing, simply terminate the container using the provided command. When needed again, restart the container using the same specific command. This approach ensures  a streamlined and convenient database management process.
      
- View Running Containers: To see a list of running Docker containers, use the following command:

```
docker ps
```

- Start or Stop Containers: To start a stopped container, use:

```
docker start "container-name"
```

- To stop a running container, use:

```
docker stop "container-name"
```

- Open a terminal on your PC to install MSQL in case you don't have it installed

```
brew install mysql
```

## API documentation

we gonna use swagger, in this link:

This document will help you understand how to use our API through Swagger, a powerful tool for API specification. Swagger provides a user-friendly interface for developers to explore and test API endpoints, making it easier to interact with our services.

### Accessing Swagger

To access the Swagger documentation for our API, use the following link:
[Swagger Documentation](http://localhost:3005/api/v1).

- Click on a method to expand it and see more information.
- You can also try out endpoints directly from the Swagger UI by clicking the "Try it out" button. This allows you to send requests and receive responses right from the documentation.

### Response Codes

The API follows standard HTTP response codes to provide clear indications of the outcome of your requests. Familiarizing yourself with these response codes will help you understand the success or failure of each request you make to this API:

**200 OK**: The request was successful, and the response body contains the requested data.

**201 Created**: The request was successful, and a new resource has been created. The response body may contain additional details about the newly created resource.

**400 Bad Request**: If you encounter this status code, it indicates that the request was malformed or contained invalid parameters. Please review your request and ensure it follows the API's expected format.

**401 Unauthorized**: Authentication failed, or the user does not possess the necessary permissions to access the requested resource. Ensure you have the appropriate credentials and permissions.

**404 Not Found**: If you receive this response, it means the requested resource does not exist on the server. Double-check your request URL and parameters.

**500 Internal Server Error**: In the event of an unexpected error occurring on the server, you will receive this status code. If you encounter this error, please report the issue to our support team for prompt resolution.

This Response Documentation will provide you with further insights into how these response codes are utilized within our API, helping you navigate and troubleshoot your interactions effectively. If you have any questions or require assistance, feel free to reach out to our support team for guidance. We are here to ensure a smooth experience as you work with our API.

## Starting the Backend Server

Before running the backend of the GOSPRO project, make sure you have set up the necessary environment variables in the correct manner. These environment variables should be configured based on the specific environment or stage you want to use and can be defined in their respective .env files.

For instructions on configuring environment variables, please refer to the [Environment Variables](#environment-variables) section.

### Development Stage

For the Development Environment, ensure that the following prerequisites are met:

- **Packages Installed**
- **Docker Running**

For instructions on running the database with Docker, please refer to the [Backend Setup and Dependencies](#backend-setup-and-dependencies) section.

Once you've met these prerequisites, you can run the development environment using the following command:

```
npm run start:dev
```

This script will automatically load the environment variables from the .env.dev file and set the NODE_ENV variable to match the development environment. It ensures that the backend runs with the appropriate configuration, connecting to the correct database, and using the environment-specific settings.

By following these steps, you can successfully run the GOSPRO backend in the development environment with the right configuration.


## Testing the Backend Serve

Unit tests are designed to verify the individual behavior of specific units of code, such as functions or methods.

- By running this command, you will get information about whether these drives are working as expected.

```
npm run test
```
- This command not only runs the unit tests but also generates a code coverage report. Code coverage is a metric that indicates what percentage of the source code has been executed during test execution. This report can be useful to identify areas of the code that are not being tested and ensure greater reliability.

```
npm run test:cov
```


