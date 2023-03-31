import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { httpBatchLink } from '@trpc/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Navigation } from './components/navigation/Navigation';
import { trpc } from './lib/trpc';

import { BodyContainer, GlobalStyles } from './App.styled';
import PageRouter from './pages/router';

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc',
        }),
      ],
    }),
  );

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <trpc.Provider queryClient={queryClient} client={trpcClient}>
          <QueryClientProvider client={queryClient}>
            <Navigation />
            <BodyContainer>
              <PageRouter />
            </BodyContainer>
          </QueryClientProvider>
        </trpc.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
