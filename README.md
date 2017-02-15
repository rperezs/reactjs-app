# reactjs-app
Simple ReactJS app

# Environment Setup

## Install NodeJS (Linux)

```sh
$ cd /tmp
$ wget http://nodejs.org/dist/v6.3.1/node-v6.3.1-linux-x64.tar.gz
$ tar xvfz node-v6.3.1-linux-x64.tar.gz
$ mkdir -p /usr/local/nodejs
$ mv node-v6.3.1-linux-x64/* /usr/local/nodejs
```
* Add **/usr/local/nodejs/bin** to the PATH environment variable.

## Install Global packages
```
npm install -g babel
```

```
npm install -g babel-cli
```

## Add dependencies and plugin

* Inside the root folder (reactjs-app)
```
$ npm init
```
```
$ npm install webpack --save
```
```
$ npm install webpack-dev-server --save
```
```
$ npm install react --save
```
```
$ npm install react-dom --save
```
```
$ npm install babel-core
```
```
$ npm install babel-loader
```
```
$ npm install babel-preset-react
```
```
$ npm install babel-preset-es2016
```

## Running the Server

```
$ npm start
```
