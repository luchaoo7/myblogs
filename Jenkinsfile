/* Requires the Docker Pipeline plugin */
pipeline {
    agent { docker { image 'node:18.18.2-alpine3.18' } }
    stages {
        stage('build') {

            input(
                    id: 'userInput',         // A unique identifier for this input
                    message: 'Proceed with the build?',  // Prompt message
                    parameters: [            // Optional input parameters
                        string(name: 'OPTION', description: 'Provide an option')
                    ]
                )

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

