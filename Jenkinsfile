rm Jenkinsfile
cat > Jenkinsfile << 'EOF'
pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Code checked out by Jenkins automatically'
            }
        }
        
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
        
        stage('Verify Deployment') {
            steps {
                echo 'App running at http://localhost:3000'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
EOF