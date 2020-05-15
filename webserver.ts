import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

const server = serve({ port: 3000 });

//your ide likely will complain about this await statement but it will work !
for await (const req of server) {
  console.log('Incoming request');
  req.respond({body: 'Message from Deno!'});
}