# README #
Practice JSON API REST AUTOMATION
## POSTMAN:
I already have created a new collection on POSTMAN to play with the json server. 

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
In the project root path: 

```shell
Using npm scripts: 
$ npm run server

Pass it to JSON Server CLI
$ npx json-server src/data/db.json -p 3000 --watch
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
http://localhost:3000/creditCart
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
# expect library
For more expect options, please check this [LINK](https://jestjs.io/docs/expect#expectvalue)

```shell
Here are the main forms and options you can use with the expect library:

Matchers
expect(value).toBe(expectedValue): Verifies that the value is equal to the expected value.
expect(value).toEqual(expectedValue): Verifies that the value is deeply equal to the expected value, including objects and arrays.
expect(value).toBeNull(): Verifies that the value is null.
expect(value).toBeUndefined(): Verifies that the value is undefined.
expect(value).toBeTruthy(): Verifies that the value is truthy.
expect(value).toBeFalsy(): Verifies that the value is falsy.
expect(value).toBeGreaterThan(expectedValue): Verifies that the value is greater than the expected value.
expect(value).toBeLessThan(expectedValue): Verifies that the value is less than the expected value.
expect(value).toBeCloseTo(expectedValue): Verifies that the value is close to the expected value (for floating-point numbers).
expect(value).toContain(expectedValue): Verifies that the value contains the expected value (for arrays and strings).
expect(value).toMatch(expectedValue): Verifies that the value matches the expected pattern (for strings).

Arrays and Objects
expect(array).toHaveLength(expectedLength): Verifies that the array has the expected length.
expect(object).toHaveProperty(key): Verifies that the object has the expected property.
expect(object).toHaveProperty(key, value): Verifies that the object has the expected property and value.

Errors
expect(() => { /* code that should throw an error */ }).toThrow(): Verifies that the code throws an error.
expect(() => { /* code that should throw an error */ }).toThrowError(expectedError): Verifies that the code throws a specific error.

Others
expect(value).anything(): Verifies that the value is anything (useful for wildcard tests).
expect(value).not.toBe(expectedValue): Verifies that the value is not equal to the expected value.
You can combine these matchers to create more complex and specific tests.
```


# _repository in construction_ 🚧 🚜 🪚 🔧