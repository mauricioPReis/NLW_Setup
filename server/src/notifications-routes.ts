import { FastifyInstance } from 'fastify';
import WebPush from 'web-push'
import { z } from 'zod';

const publicKey = 'BJRKnUBh-UAlrVOguCSj0cYnmyK35tUyp1xpkvVP1nWHNrvoee5eqwsLDTpkDFLGA2ob5RqzpeDkCoQVfl2ZVVM'
const privateKey = 'R3BXQnb9gMKpAIz-071utvmKpcCASq4jP0dYAFxiWvQ'

WebPush.setVapidDetails('http://localhost:3333', publicKey, privateKey)

export async function notificationRoutes(app: FastifyInstance){
  app.get('/push/public_key', ()=> {
    return {
      publicKey,
    }
  })

  app.post('/push/register', (resquest, reply) => {
    console.log(resquest.body)

    return reply.status(201).send()
  })

  app.post('/push/send', async (resquest, reply) => {
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string(),
        })
      })
    })

    const { subscription } = sendPushBody.parse(resquest.body)

    setTimeout(() => {
      WebPush.sendNotification(subscription, 'HELLO FROM BACKEND')
    }, 5000)
 
    return reply.status(201).send()
  })
}