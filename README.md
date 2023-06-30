How to run
##
- install nestjs, yarn
## createdb
- `docker-compose up db -d`
- create database name `aideavn`
- `npx prisma migrate dev` to migrate database
- create test data

db role
#### in educationLevel: 
level {
1: 'primary school'
2: 'secondary school'
3: 'high school'
}

#### in teacher
role{
  1: pricipal
  2: teacher
}




##
- `yarn start:dev` to run project
- `http://localhost/api` to view api document