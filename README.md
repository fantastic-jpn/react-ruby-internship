# react-ruby-fullstack

backend environment setup

1. docker compose build
2. docker compose up
3. go into docker container for backend
4. inside terminal "gem install bundler && bundle install"
5. "rails new . --api -d mysql"
6. change db settings of config/database.yml(db password and host settings to docker db container service name)
7. "rails db:create && rails db:migrate"
8. "rails s -b '0.0.0.0'"
9. open localhost:3000 from your local computer 

frontend environment setup

1. inside docker container terminal "cd match-app && npm i "
2. "npm run dev" -> localhost:3000 for docker container (To view webpage, go to localhost:3001 from your local computer browser) 
