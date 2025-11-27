pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/2300031270/FINALQUIZBUILDERAPP.git', branch: 'main'
            }
        }

        stage('Build Backend') {
            steps {
                bat 'mvn clean package'
            }
        }

        stage('Build Frontend') {
            steps {
                bat 'cd FRONTENDFORPROJECT && npm install && npm run build'
            }
        }

        stage('Docker Build & Run') {
            steps {
                bat 'docker stop finalquizbuilderapp || echo "No container running"'
                bat 'docker build -t finalquizbuilderapp .'
                bat 'docker run -d -p 8080:8080 finalquizbuilderapp'
            }
        }
    }
}
