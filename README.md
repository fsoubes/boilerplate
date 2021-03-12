# MERN boilerplate with Next.js & Apollo~GraphQL

![alt text](https://static.geekyants.com/image-resize-cache/eyJpZCI6OTA5LCJ0IjoicmVzaXplIiwidyI6MTIwMCwiaCI6ODAwLCJxIjo5MCwidiI6MX0=.png)

<div align="center"><strong>Every time you start a project you have to configure the tools before you can start and it can be quite time-consuming.</strong></div>

<br />

To make life easier, this repository contains my configuration to start an application quickly using for the front (Apollo Client, Material-ui, React, Next.js and SASS) and for the back (Apollo Server, Express, GraphQL, MongoDB and Redis). It also offers examples of functionalities (Authentication, Themes, Pagination, Routing, Error generation ...). It makes full use of Typescript to facilitate integration in order to provide a richer environment for spotting common errors as you type code. Moreover, the use of type-graphql allows to avoid duplicity with MongoDB and GraphQL.

I will try to keep this repository up to date but nothing is guaranteed.

<br />

## Features

#### Docker

Developing apps today requires so much more than writing code. Multiple languages, frameworks, architectures, and discontinuous interfaces between tools for each lifecycle stage creates enormous complexity. Docker simplifies and accelerates your workflow, while giving developers the freedom to innovate with their choice of tools, application stacks, and deployment environments for each project.

#### Express

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

#### GraphQL

GraphQL is a query language for APIs used for fulfilling queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time and enables powerful developer tools.

#### MongoDB

MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

#### Next.js

Next.js extends React to provide a powerful method for loading a page's initial data, no matter where it is coming from. With a single place to prepopulate page context, server-side rendering with Next.js seamlessly integrates with any existing data-fetching strategy.

#### React

React makes it painless to create interactive UIs. Design simple views for each state in your application and React will efficiently update and render just the right components when your data changes.

#### React Apollo

React Apollo allows you to fetch data from your GraphQL server and use it in building complex and reactive UIs using the React framework. React Apollo may be used in any context that React may be used; in the browser, in React Native, or in Node.js when you want to do server-side rendering.

#### Redis

Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker.

#### TypeScript

TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for development of large applications and trans-compiles to JavaScript.

## Getting started

First make sure that you have nodejs and npm installed on your machine.
if its not the case follow the tutorial [here](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/) you can select your own OS if you are not using Ubuntu 18.04.

This app is running on the version 12.12.1 of nodejs and using npm 6.11.3
You can verifiy your version.

```
node --version
npm --v
```

You will also need to have MongoDB installed [locally](https://docs.mongodb.com/manual/installation/) and redis [here](https://redis.io/download). 

Finally, you must also check that the docker is installed on your machine.
1. [Docker for Ubuntu/Debian](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
2. [Docker for Windows/Mac](https://www.docker.com/)

## Installing app

First you need to clone the repository

```
git clone https://github.com/fsoubes/pro-frsoweb
cd boilerplate
```

The structure of the application is divided in two folders client for the front-end and server for the back-end.

```
.
+-- LICENSE
+-- README.md
+-- server/*
+-- client/*
```

### Front-end installation

To install the dependencies :

```
cd client
npm install
```

Configure the .env.local file

```
touch .env.local
nano .env.local
```

and add the following line 
```
NEXT_PUBLIC_API_URL=http://localhost:4000/graphql
```

### Back-end installation

In the same way as for the front, this command allows you to install the back-end dependencies.

```
cd server
npm install
```

Then, you'll have to configure your .env file

```
touch .env
nano .env
```

and add the following fields:

```
DATABASE_URL=mongodb://custom:custom@dokku-mongo-custom:27017/custom
REDIS_URL=127.0.0.1:6379
PORT=4000
SESSION_SECRET=your_secret_session
CORS_ORIGIN=http://localhost:3000
```

To generate the env types

```
npm run gen-env
```

## Running the app

### Front-end

To check if the installation was successful.

```
npm run dev
```

That will display the following message:

```
ready - started server on http://localhost:3000
event - compiled successfully
```

### Back-end

There are two ways to deal with the back end.

1- If you want to run your typescript code and modify it on the fly.
```
npm run dev2
```
2- If you wish to transpose TypeScript code into JavaScript and modify it on the fly, execute the following commands in two separate terminals

```
npm run watch
npm run dev
```

As a result, this should generate a dist folder.

```
.
+-- server
|   +-- index.ts
|   +-- dist/*
|   +-- ...
+-- client/*
```

### Browser

If everything works perfectly.
You can now visit your application in your browser at http://localhost:3000 for the front and http://localhost:4000/graphql for the back

## Test

```
npm run test
```

## Deploy

### Front-end 

Deploy on Vercel

```
vercel now
vercel --prod
```

### Back-end

First create an account on [DigitalOcean](https://www.digitalocean.com/) and then create a droplet and configure it with [dokku](https://dokku.com/).

What is a Droplet? A DigitalOcean Droplet is a virtual machine, a VPS. The thing we want to create. Everything on DigitalOcean revolves around Droplets.

#### How to connect to your vps

First create a new ssh key pair.

```
ssh-keygen
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
cat ~/.ssh/id_rsa.pub
```

Then copy your generate ssh key to the textinput area of DigitalOcean.

Connect to your vps with your ipv4.

```
ssh root@ipv4
```

Create your dokku application in the vps and add the backing services.

```
dokku apps:create api
sudo dokku plugin:install https://github.com/dokku/dokku-mongo.git mongo # install MongoDB
dokku mongo:create boiler_mongo
dokku mongo:link boiler_mongo api
sudo dokku plugin:install https://github.com/dokku/dokku-redis.git redis # install redis
dokku redis:create boiler_redis api
dokku redis:link boiler_redis api
```

deploy.sh allows you to dock and deploy your application directly on your vps.
You must however create an account on [docker hub](https://hub.docker.com/)

```
docker login
chmod u+x deploy.sh
./deploy.sh
```


Your app is now live

### Configure DNS

```
dokku domains:report api
dokku domains:remove api old_settings
dokku domains add-global your_DNS
```


#### TODO

* Add CI with CircleCI
* Automatic persisted queries for small request with Redis

## Contact

You can contact me (frsoweb@gmail.com)
