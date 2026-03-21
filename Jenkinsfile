pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/Prateeksha-Shukla/vue-cicd-app.git'
            }
        }

        stage('Build App') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t vue-cicd-app .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker run -d -p 80:80 vue-cicd-app'
            }
        }
    }
}