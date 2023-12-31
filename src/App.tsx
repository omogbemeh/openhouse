import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import AppLayout from "./components/app-layout/AppLayout";
import CommunitiesPage from "./pages/CommunitiesPage";
import HomesPage from "./pages/HomesPage";
import CommunityPage from "./pages/community-page/CommunityPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/communities" />,
      },
      {
        path: "/communities/:communityId",
        element: <CommunityPage />,
      },
      {
        path: "/communities",
        element: <CommunitiesPage />,
      },
      {
        path: "/homes",
        element: <HomesPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
