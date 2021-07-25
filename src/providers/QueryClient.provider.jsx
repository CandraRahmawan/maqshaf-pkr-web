import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { element } from "prop-types";
import { isDevelopment } from "constants/common.constant";

export default function ReactQueryClientProvider({ children }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={isDevelopment} />
    </QueryClientProvider>
  );
}

ReactQueryClientProvider.propTypes = {
  children: element.isRequired,
};
