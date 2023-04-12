import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';

import { appRouter } from './router';

const app: Application = express();
app.use(cors());

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  }),
);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello world!' });
});

const PORT: number = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on Port: ${PORT}`);
});
