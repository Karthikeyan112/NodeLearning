const fastify = require('fastify')({
  // logger: true
});

// Declare Route
fastify.get("/",async (req, reply) => {
  console.log(req.query);
  const {name} = req.query;
  reply.status(200).send(`Hello ${name}`);
});

// Run the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  }catch(err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
start();
