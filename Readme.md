
# Memory Manager

Memory Manager is webapp which solve problem of storing memories of a person.
A user can create his/her account on our platform and add his/her memory in the form of small tiny cards.




## Tech Stack

**Client:** React, Bootstrap, 

**Server:** Node, Express

**Database:** MongoDB cloud


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```DATABASE_URL```

```DATABASE_PASSWORD```

```PORT```


## API Reference
.get("/post/:id", getPosts)
  .get("/post/:id", getById)
  .post("/post/:id", createPost)
  .put("/post/:id", updatePost)
  .delete("/post/:id", deletePost);

#### Update Memory

```http
  PUT /api/post/:${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to update |


#### Delete Memory

```http
  Delete /api/post/:${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to delete |

#### Create Memory

```http
  POST /api/post
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| title      | `string` | **Required**. Title of memory |
| story      | `string` | **Required**. Description of memory |
| mood      | `string` | **Required**. Mood for that memory |


#### Get all memories

```http
  GET /api/post/
```

#### Get particular memory

```http
  GET /api/post/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |






## Run Locally

Clone the project

```bash
  git clone https://github.com/rajankumar2000/memory-manager.git
```

Go to the ```client``` directory

```bash
  cd my-project/client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
Go to the ```server``` directory

```bash
  cd my-project/server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Screenshots


`Landing Page`
![App Screenshot](https://github.com/rajankumar2000/memory-manager/blob/master/screenshots/Screenshot%20(4).png?raw=true)

`Register`
![App Screenshot](https://github.com/rajankumar2000/memory-manager/blob/master/screenshots/Screenshot%20(9).png?raw=true)

`Login Modal`
![App Screenshot](https://github.com/rajankumar2000/memory-manager/blob/master/screenshots/Screenshot%20(10).png?raw=true)

`Image Gallery`
![App Screenshot](https://github.com/rajankumar2000/memory-manager/blob/master/screenshots/Screenshot%20(5).png?raw=true)

`Memory List`
![App Screenshot](https://github.com/rajankumar2000/memory-manager/blob/master/screenshots/Screenshot%20(8).png?raw=true)


