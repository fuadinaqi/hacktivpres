# hacktivpres

## a simple blog apps by fuadi naqi

### Routes

Authors :

| Route | HTTP | Description |
| ----- | ---- | ----------- |
| /users/signin | POST | login using email and password |
| /users/signup | POST | signup using field email, password |

Articles :

| Route | HTTP | Description |
| ----- | ---- | ----------- |
| /articles/ | GET | Get his articles in database (user login only) |
| /articles/add | POST | Create a new article (user login only) |
| /articles/:id | GET | Get one specific articles in database (user login only) |
| /articles/:id | PUT | Update / edit an article (user login only) |
| /articles/:id | DELETE | Delete a specific article by params id (user login only) |

### Installation and Usage

HacktivPress requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd hacktivpres/server
$ npm install
$ npm run dev
```

```sh
$ hacktivpres/client
$ npm install
$ npm run serve
```

### Jsonwebtoken Key
You need to use your free permission jwt key for decode or sign jsonwebtoken by create .dotenv file and write 'SECRET_KEY=//yourkey//'

for example in your .env file:
```sh
SECRET_KEY=123409253628
```

### .env requirements

```sh
SECRET_KEY=<your key>
CLOUD_BUCKET=<your bucket on gcp>
GCLOUD_PROJECT=<your gcloud project id>
KEYFILE_PATH=keyfile.json(use your credential on your gcp)
```
