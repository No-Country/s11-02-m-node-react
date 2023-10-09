## Description

API documentation

## Installation

```bash
#Install dependences
$ npm install
#Generate Prisma client
$ npx prisma generate
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Products API Documentation

## Endpoints

### Create a Product

- **Endpoint:** `POST /products`
- **Description:** Create a new product.
- **Request Body:** A JSON object representing the product to be created.
**Request Parameters**

  | Field       | Type     | Description                                           |
  | :---------- | :------- | :---------------------------------------------------- |
  | `name` | `string` | **Required**. Product name                            |
  | `description`  | `string` | **Required**. Product Description                               |
  | `img`     | `array of strings` | **Required**. Product img url                                   |
  | `currentOffer`  | `number` | **Required**. Product price                                |
  | `userId`     | `string` | **Required**. User id owner                                   |
  | `endDate`  | `string` | **Required**. Date in formart ISO 8601 (YYYY-MM-DDTHH:MM:SS)                               |
  | `tags`      | `array of strings` | **Required**. Product tags        |
   `status`   | `'ACTIVE' 'ENDED' 'CANCELLED'` | **Optional (default ACTIVE)**. Product status |
- **Request Example:**
  ```json
  {
    "name": "Product Name",
    "description": "Product Description",
    "img": ["image_url_1", "image_url_2"],
    "currentOffer": 100,
    "userId": "5f78e66347b723456c55d5e8",
    "endDate": "2023-12-31T23:59:59Z",
    "tags": ["tag1", "tag2"]
  }
  ```
- **Response:** If successful, returns the newly created product and a success message.
- **Response Example:**
  ```json
    {
      "product": {
        "id": "5f78e66347b723456c55d5e8",
        "name": "Product Name",
        "description": "Product Description",
        "img": ["image_url_1", "image_url_2"],
        "currentOffer": 100,
        "userId": "5f78e66347b723456c55d5e8",
        "endDate": "2023-12-31T23:59:59Z",
        "tags": ["tag1", "tag2"],
        "status": "ACTIVE"
      },
      "message": "Product created successfully"
    }
    ```
### Retrieve All Products
- **Endpoint:** `GET /products`
- **Description:** Retrieve a list of all products.
- **Responde:** If successful, returns an array of products and a success message.
- **Response Example:**
  ```json
    {
      "products": [
        {
          "id": "5f78e66347b723456c55d5e8",
          "name": "Product 1",
          "description": "Description 1",
          "img": ["image_url_1"],
          "currentOffer": 50,
          "userId": "5f78e66347b723456c55d5e8",
          "endDate": "2023-12-31T23:59:59Z",
          "tags": ["tag1"],
          "status": "ACTIVE"
        },
        {
          "id": "5f78e66347b723456c55d5e8",
          "name": "Product 2",
          "description": "Description 2",
          "img": ["image_url_2"],
          "currentOffer": 75,
          "userId": "5f78e66347b723456c55d5e8",
          "endDate": "2023-12-31T23:59:59Z",
          "tags": ["tag2"],
          "status": "ACTIVE"
        }
      ],
      "message": "Products found successfully"
    }
    ```
### Retrieve a Product by ID
- **Endpoint:** `GET /products/:id`
- **Description:** Retrieve a product by its unique ID.
- **Response:** If successful and the product exists, returns the product and a success message.
- **Response Example:**
  ```json
    {
      "product": {
        "id": "5f78e66347b723456c55d5e8",
        "name": "Product Name",
        "description": "Product Description",
        "img": ["image_url_1", "image_url_2"],
        "currentOffer": 100,
        "userId": "5f78e66347b723456c55d5e8",
        "endDate": "2023-12-31T23:59:59Z",
        "tags": ["tag1", "tag2"],
        "status": "ACTIVE"
      },
      "message": "Product found successfully"
    }
    ```
### Update a Product

- **Endpoint:** `PACTH /products/:id`
- **Description:** Update an existing product by its unique ID.
- **Request Body:** A JSON object representing the product updates.
- **Request Example:**
  ```json
  {
    "name": "Updated Product Name",
    "currentOffer": 120
  }
  ```
- **Response:** If successful and the product exists, returns the updated product and a success message.
- **Response Example:**
  ```json
    {
      "product": {
        "id": "5f78e66347b723456c55d5e8",
        "name": "Updated Product Name",
        "description": "Product Description",
        "img": ["image_url_1", "image_url_2"],
        "currentOffer": 120,
        "userId": "5f78e66347b723456c55d5e8",
        "endDate": "2023-12-31T23:59:59Z",
        "tags": ["tag1", "tag2"],
        "status": "ACTIVE"
      },
      "message": "Product updated successfully"
    }
    ```
### Delete a Product

- **Endpoint:** `DELETE /products/:id`
- **Description:** Delete a product by its unique ID.
- **Response:** If successful, returns a success message.
- **Response Example:**
  ```json
    {
      "message": "Product id 5f78e66347b723456c55d5e8 deleted"
    }
    ```

## Environment Variables

To run this project, you need to set up the following environment variables. Create a file named `.env` in the root of /API and add the required variables with their values.

```json
#DATABASE CONNECTION
DATABASE_URL="MONGODB URI"
#API PORT
PORT=3001
``````