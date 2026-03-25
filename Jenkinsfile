pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t vue-app .'
            }
        }

        stage('Tag Image') {
            steps {
                sh 'docker tag vue-app prateekshashukla/vue-app:latest'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                    sh 'docker push prateekshashukla/vue-app:latest'
                }
            }
        }
    }
}
