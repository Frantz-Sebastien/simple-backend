## Checkpoint 1: Understanding Project Setup

- What is the purpose of npm init-y
- Why do we need express, cors, pg-promise, and dotenv?
- What does the .env file do?

#### Answer:
1. The purpose of npm init-y is to create a repository.
2. Express is a package used to make HTTP requests to the backend.
3. .env hides files that you do not want to accidently push to a gitHub repository. It it used to store sensitive, personal and/or private data. 


## Checkpoint 2: Understanding Database Setup

- What does pg-promise do?
- Why do we use an object to configure the database connection instead of a single connection string?

#### Answer:
1. pg-promise makes it easier to use SQL syntaxes in a javascript file.
2. Object makes the database connection easier to read, easier to configure and modify. 


## Checkpoint 3: Understanding Express Server

- What does app.use(cors()) do?
- Why do we need express.json()?
- How can you change the port number of the server?

### Answer:
1. app.use(cors()) enables CORS so that frontend and backend from different ports can communicate with each other and will not get blocked. 
2. We need express.json() so that the data sent in JSON format can be converted into a simple JavaScript object. 
3. By updating app.listen. example: 
```
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
```


## Checkpoint 4: Understanding Routes
- What is the difference between GET and POST requests?
- What does $1 do in the SQL query?
- What happens if a request is made to the POST route without a body?

#### Answer:
1. GET request is to retrieve data. And POST request is to send/request data.
2. $1 is a parameter placeholder
3. If a request is made to the POST without a body, it will return as undefined or and empty object. 


## Checkpoint 5: Understanding API Testing
- How can you test the GET route using Postman?
- What is the purpose of the -H and -d flags in the curl command?
- What should you expect in the response when adding an item successfully?

#### Answer:
1. Set it to 'GET', place 'http://localhost:3000/items' to the search bar, click 'Send'
2. The -H flag is used to set HTTP headers in the request. The -d flag sends data in the request body, typically for HTTP requests.
3. The server should respond with:the newly created item