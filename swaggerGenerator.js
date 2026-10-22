import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Threech',
    description: 'Auto-generated docs',
  },
  host: 'http://localhost:3000'
};

const outputFile = './swagger-output.json';
const routes = ['./app.js'];

swaggerAutogen({openapi: '3.0.0'})(outputFile, routes, doc);

// https://swagger-autogen.github.io/docs/getting-started/advanced-usage