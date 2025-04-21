FROM ruby:3.3.8

WORKDIR /workspace

COPY ./Gemfile /workspace/

RUN apt-get update && apt-get install -y build-essential nodejs default-mysql-client 

RUN gem install bundler

RUN bundle install

COPY . /workspace/

EXPOSE 3000