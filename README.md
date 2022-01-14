## Table of Contents

* [Getting Started](#getting-started)
  * [Enviroment Variables](enviroment-variables)
  * [Local](#local)
  * [Production](#production)
    * [Migration](#migration)
    * [Deployment](#deployment)
    * [Run](#run)
* [TODO](#todo)

<!-- ABOUT THE PROJECT -->
## Enviroment Variables:

Add these keys as environment variable

`TOKEN_SECRET_KEY`: Use to sign jwt tokens

`DB_HOST`: Database host

`DB_USER`: Database User

`DB_PASSWORD`: Database Password

`DB_NAME`: Database name

`PORT`: Api server port(default = 5000)

## Getting started:

#### Local

No need to run migration in local as db sync is true.

    yarn watch-ts  


#### Production

##### Migration

    yarn migration:generate -- -n "<migration name>"

    yarn migration:run

##### Deployment
    yarn build-ts
##### Run
    yarn start  
    
#### Test
##### Unit tests
    yarn test

PS: using `pm2` for production environment

## TODO:
- [x] Use yarn instead of npm
