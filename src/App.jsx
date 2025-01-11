import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  ServicesPage,
  HomeLayout,
  AboutPage,
  Landing,
  WorkPage,
  ProcessPage,
  CareerPage,
  ContactPage,
} from "./pages";

import { ErrorElement } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/work",
        element: <WorkPage />,
      },
      {
        path: "/process",
        element: <ProcessPage />,
      },
      {
        path: "/careers",
        element: <CareerPage />,
      },
      {
        path: "/contactPage",
        element: <ContactPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
