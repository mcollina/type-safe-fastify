import { Type } from '@sinclair/typebox';
import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'

const plugin: FastifyPluginAsyncTypebox = async function(fastify, _opts) {
  fastify.get('/', {
    schema: {
      querystring: Type.Object({
        name: Type.String({ default: 'world' })
      }),
      response: {
        200: Type.Object({
          hello: Type.String()
        })
      }
    }
  }, (req) => {
    const { name } = req.query;
    return { hello: name };
  });

  fastify.post('/', {
    schema: {
      body: Type.Object({
        name: Type.String()
      }),
      response: {
        200: Type.Object({
          hello: Type.String()
        })
      }
    }
  }, async (request) => {
    const { name } = request.body;
    return { hello: name || 'world' };
  });
}

export default plugin;
