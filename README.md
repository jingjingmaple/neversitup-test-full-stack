# Test No. 1

My standard project structure for API project written on typescript

- **deployment** --- *Store Docker file, CI/CD configuration file*
- **src** --- *Store the source code of typescript files*
    - **config** --- *Store configuration, Shares variable*
    - **controllers** --- *Store the API controller file (aka. router)* 
        - **[module_name]** --- *The group of API controller by module (feature)*
    - **cronjob** --- *Store cronjob script*
    - **db** --- *Store Database connector* 
    - **log** --- *Store Logging service connector* 
    - **models** --- *Store sequelize data model and repository*
    - **services** --- *Store business logic code*
        - **externals** --- *Store API connection function with another microservice*
    - **types** --- *Store TypeScript defining type*
    - **test** --- *Store Jest unit test*
    - **utils** --- *Store reuseable function*
    - app.ts --- *The Entry point of Koa server*
    - index.ts --- *The Entry point module*
- .env --- *Dot ENV file for local running*
- .prettierrc.json --- *Prettier configuration file to enforce code style to be the same for every developer*




# Test No. 2-4

Installation
This test has been written on NodeJS v.20.10.0
> npm i

How to run each function

> ts-node filename.ts

How to run unit test

> npm run test
