import Fastify from 'fastify';
import AutoLoad from '@fastify/autoload';
import Swagger from '@fastify/swagger';
import SwaggerUI from '@fastify/swagger-ui';

const server = Fastify();

server.register(Swagger);
server.register(SwaggerUI);

server.register(AutoLoad, {
  dir: `${__dirname}/routes`,
});

server.listen({ port: 3000 })
