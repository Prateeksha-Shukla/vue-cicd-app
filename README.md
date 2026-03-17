# CI/CD Pipeline for Vue.js Application

This project demonstrates the implementation of a **CI/CD pipeline for a Vue.js web application** using Docker and AWS EC2.  
The goal of this project is to automate the build, containerization, and deployment process.


##  Technologies Used

- Vue.js – Frontend framework
- GitHub – Version control
- GitHub Actions – CI/CD automation
- Docker – Containerization
- AWS EC2 – Cloud hosting


## Project Structure

vue-cicd-app
│
├── src
├── public
├── Dockerfile
├── package.json
├── .github/workflows/deploy.yml
└── README.md


## Installation (Local Development)

Install dependencies:
npm install


Run development server:
npm run serve


Application will run on:
http://localhost:8080


##  Build for Production

Create production build:
npm run build


This will generate the `dist/` folder.

## Docker Setup

Build Docker image:
docker build -t vue-cicd-app .

Run Docker container:
docker run -d -p 8080:8080 vue-cicd-app

Open in browser:
http://localhost:8080


## AWS Deployment

Steps:

1. Launch AWS EC2 instance
2. Install Docker
3. Clone the GitHub repository
4. Build Docker image
5. Run Docker container

Example commands:

git clone https://github.com/your-username/vue-cicd-app.git
cd vue-cicd-app
docker build -t vue-cicd-app .
docker run -d -p 80:8080 vue-cicd-app


Then access the application using the **EC2 public IP**.


## CI/CD Workflow

The pipeline follows this architecture:
VS Code → GitHub → CI/CD Pipeline → Docker Image → Docker Container → AWS EC2 → Live Application


Whenever code is pushed to GitHub:

1. Application is built
2. Docker image is created
3. Container is deployed


## Author :

Project developed as part of a **DevOps / CI-CD implementation project**.
