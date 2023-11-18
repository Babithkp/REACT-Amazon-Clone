import MainContent from "./pages/MainContent";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./store/dataFetch";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VerticalResult from "./components/VerticalResult";
import LandingPage from "./pages/LandingPage";
import ClickResults from "./components/ClickResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },{
        path: "/products/:verticalProductId",
        element: <VerticalResult/>
      },{
        path: ":productId",
        element: <ClickResults/>
      }
    ],
  },
]);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <MainContent />
      </RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
