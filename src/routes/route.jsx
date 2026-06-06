import { createBrowserRouter, Navigate } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import { TermsPage } from "../pages/TermsPage";
import { PrivacyPage } from "../pages/PrivacyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "terms",
        element: <TermsPage />,
      },
      {
        path: "privacy",
        element: <PrivacyPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default router;

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Mainlayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "terms",
//         element: <TermsPage />,
//       },
//       {
//         path: "privacy",
//         element: <PrivacyPage />,
//       },
//       {
//         path: "*",
//         element: <ErrorPage />,
//       },
//     ],
//   },
// ]);

// export default router;
