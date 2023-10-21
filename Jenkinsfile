/* Requires the Docker Pipeline plugin */
pipeline {
    agent { docker { image 'node:18.18.2-alpine3.18' } }
    stages {
        stage('build') {

            input {
                message: "What is your name?"
                ok "Submit"
                parameters {
                    string(defaultValue: 'Dave', name: 'FIRST_NAME', trim: true)
                }
            }
            options {
                timeout(time: 10, unit: 'SECONDS')
            }

            steps {
                sh 'node --version'
                sh '''
                    echo "Multiline shell steps works too"
                    ls -lah
                '''
            }
        }
    }
}

