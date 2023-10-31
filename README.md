# Books-Management-APIs

It's a backend application made using NodeJs consists for following API's endPoints:

-> POST /book

    Schema
     Request Body:
       title: String
       author: String
       summary: String
    
     Responses:
       "200" : "Book SuccessFully ADDED".
       "400" : "Request body verification Failed".
       "default" : "Error".


-> GET /books/all

    Schema
     Responses:
       "200" : "list of all the added Books".
       "default": "Error".

-> GET /book/{bookId}

    Schema
      Path Parameters:
        bookId: String

      Responses:
        "200": "Book detail for the given id",
        "400": "Path Parameters verification Failed",
        "default": "Error".

-> PATCH /book

    Schema
      Request Body:
         BookId: String
         title: String
         author: String
         summary: String
    
      Reponses:
        "200": "Book Detail SuccessFully Updated",
        "400": "Request body verification Failed",
        "default": "Error".

-> DELETE /book/{bookId}

    Schema
      Path Parameters:
        bookId: String

      Responses:
        "200": "book detail SuccessFully deleted",
        "400": "path Params verification Failed",
        "default": "Error".



## Local Setup

For local setup clone the project using 

```bash
  git clone https://github.com/ritikjain77/Books-Management-APIs.git
```

then, install all the project dependencies using following command

```bash
  npm install
```

Finally run the project using

```bash
  npm run dev
  ```

  Before running the project ensure to add .env.dev file in config folder.

 


## Contributing

Contributions are always welcome!



## Authors

- [@Ritik JAIN]


## Database Reference

use mongo-atlas database to store the data.







## Documentation

[Documentation](https://linktodocumentation)

for Documentation, refer localhost:8000/doc

