## Project Name: Event Snap

### Running the Project

To run the project, use the following commands:

- Development Mode: `npm run dev`
  - This will run the project on port 8000.

- Production Mode: `npm run start`
  - This will run the project in production mode.

### API Endpoints

#### User Registration

- **Endpoint:** `/api/v1/user/signup`
- **Method:** `POST`

##### Request Body

```json
{
  "name": "test user 2",
  "email": "test2@email.com",
  "password": "1234",
  "confirmPassword": "1234"
}
```

##### Expected Response

```json
{
  "status": "success",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "data": {
    "name": "test user 2",
    "email": "test2@email.com",
    "role": "user",
    "_id": "65bff21d64572263e89af641",
    "createdAt": "2024-02-04T20:22:53.952Z",
    "updatedAt": "2024-02-04T20:22:53.952Z",
    "__v": 0
  }
}
```


#### User Login

- **Endpoint:** `/api/v1/user/signin`
- **Method:** `POST`

##### Request Body

```json
{
  "email": "test2@email.com",
  "password": "1234",
}
```

##### Expected Response

```json
{
    "status": "success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6I....",
    "data": {
        "_id": "65bff21d64572263e89af641",
        "name": "test user 2",
        "email": "test2@email.com",
        "role": "user",
        "createdAt": "2024-02-04T20:22:53.952Z",
        "updatedAt": "2024-02-04T20:22:53.952Z",
        "__v": 0
    }
}
```


#### Get My User 

- **Endpoint:** `/api/v1/user/me`
- **Method:** `GET`
- **Authorization:** `Bearer token.....`


##### Expected Response

```json
{
    "status": "success",
    "data": {
        "_id": "65bfed1319d45f6b009c74b4",
        "name": "test user",
        "email": "test@email.com",
        "phoneNumber": 9009009001,
        "admissionNumber": 78907,
        "admissionYear": 2019,
        "role": "user",
        "createdAt": "2024-02-04T20:01:23.816Z",
        "updatedAt": "2024-02-04T20:01:23.816Z",
        "__v": 0
    }
}
```


#### User Update

- **Endpoint:** `/api/v1/user/me`
- **Method:** `PATCH`

##### Request Body

```json
{
    "name": "test user",
    "email": "test@email.com",
    "phoneNumber": 9009009001,
    "admissionNumber": 78907,
    "admissionYear": 2018,
    "avatar": "image.png" // choose image file
}
```

##### Expected Response

```json
{
    "status": "success",
    "data": {
        "_id": "65bfed1319d45f6b009c74b4",
        "name": "test user 123",
        "email": "test123@email.com",
        "phoneNumber": 9000090000,
        "admissionNumber": 23456,
        "admissionYear": 2000,
        "role": "user",
        "createdAt": "2024-02-04T20:01:23.816Z",
        "updatedAt": "2024-02-04T23:06:53.369Z",
        "__v": 0,
        "avatar": "/public/images/users/782040589.jpg"
    }
}
```


#### Delete My User 

- **Endpoint:** `/api/v1/user/me`
- **Method:** `DELETE`
- **Authorization:** `Bearer token.....`


##### Expected Response

```json
{
    "status": "success",
    "data": "User deleted successfully"
}
```
