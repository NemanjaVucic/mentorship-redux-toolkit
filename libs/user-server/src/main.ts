import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';

import { appRouter } from './router';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app: Application = express();
app.use(cors());

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  }),
);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello API' });
});

app.listen(port, host, () => {
  console.log(`[ ready 🚀 ] http://${host}:${port}`);
});
