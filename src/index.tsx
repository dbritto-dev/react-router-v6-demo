import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools as QueryDevTools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import App from "~/app";

const queryClient = new QueryClient();
const root = createRoot(document.getElementById("root") as never);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <QueryDevTools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
