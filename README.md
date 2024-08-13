# README #

19-Practicing-http-responses_2024 Use this folder to Practice JSON API REST AUTOMATION

## Resources: 
- Follow this [video](https://www.youtube.com/watch?v=1xcKP__PxsY) to install JSON SERVER

### What is this repository for?

* This repository was created to practice Javascript 
* This repository was created to install a server to practice API REST automation
* Version: 1.0.0

### How do I get set up? ###

* Some practice in javascript from Udemy course. 
* Dependencies
* How to run tests 
* Deployment instructions

### How to run the json server to practice json API REST
* After installing the node package: from this [page](https://www.npmjs.com/package/json-server)

Install the json server using this command line: 
```shell
$ npm install json-server
```

- This is the expected result: 

```shell
added 58 packages, and audited 59 packages in 5s

18 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

### Next step: Create json fake data
- First option: create new data in a external page like this option: 
You can get this using json generator fake data [page](https://app.json-generator.com/A2TMUqblHYPI), after getting the final db json file, add this on this path: 19-Practicing-http-responses_2024/data/db.json to be used as example database: 

- Second option: Just continue with created data form json server(I am using this option):

### How to run JSON SERVER (keep in mind the path to be used)
Pass it to JSON Server CLI
```shell
$ npx json-server data/db.json -p 3000 --watch
``` 
Response: 
```shell
JSON Server started on PORT :3000
Press CTRL-C to stop
Watching data/db.json...

♡( ◡‿◡ )

Index:
http://localhost:3000/

Static files:
Serving ./public directory if it exists

Endpoints:
http://localhost:3000/posts
http://localhost:3000/comments
http://localhost:3000/profile
```

Based on the example db.json, you'll get the following routes:
```shell
GET    /posts
GET    /posts/:id
POST   /posts
PUT    /posts/:id
PATCH  /posts/:id
DELETE /posts/:id
```

# Same for comments
```shell
GET   /profile
PUT   /profile
PATCH /profile
```

# _repository in construction_ 🚧 🚜 🪚 🔧