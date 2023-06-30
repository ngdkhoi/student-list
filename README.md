How to run
###
- install nestjs, yarn
### createdb
- `docker-compose up db -d`
- create database name `aideavn`
- `npx prisma migrate dev` to migrate database
- import test db from .sql file


###
- `yarn start:dev` to run project
- `http://localhost/api` to view api document