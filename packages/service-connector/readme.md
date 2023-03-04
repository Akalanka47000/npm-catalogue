# @sliit-foss/service-connector

### A microservice connector for node.js that uses axios under the hood and makes the process of debugging and logging API requests easier.

<br/>

## Installation

```js
# using npm
npm install @sliit-foss/service-connector

# using yarn
yarn add @sliit-foss/service-connector
```

## Usage

```js
# using require
const serviceConnector = require("@sliit-foss/service-connector");

# using import
import serviceConnector from "@sliit-foss/service-connector";
```

## Example<br/>

```js
const connector = serviceConnector({
  // any configuration you want to pass to axios

  baseUrl: "http://localhost:3000",
  timeout: 1000,

  // optional module specific configurations

  service: "service-name",
  headerIntercepts: {
    "x-api-key": "1234567890",
  },
  loggable: (response) => {
    // do something with the response, both success and error
  },
});

// use the service connector as you would use axios
const response = await connector.get("/api/v1/users");
```