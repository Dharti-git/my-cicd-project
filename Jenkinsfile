pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t my-simple-app .'
            }
        }
        stage('Run Container') {
            steps {
                echo 'Starting container...'
                sh 'docker stop my-app || true'
                sh 'docker rm my-app || true'
                sh 'docker run -d --name my-app -p 3000:3000 my-simple-app'
            }
        }
    }
}
