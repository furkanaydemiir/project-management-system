import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import CreateProject from "./pages/CreateProject";
import Assign from "./pages/Assign";
import OnGoing from "./pages/OnGoing";
import TeamLayout from "./layout/TeamLayout";
import Teams from "./pages/Teams";
import CreateTeam from "./pages/CreateTeam";
import TeamDetail from "./pages/TeamDetail";
import AdjustTeam from "./pages/AdjustTeam";
import DeleteTeam from "./pages/DeleteTeam";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "createProject", element: <CreateProject /> },
        {
          path: "teams",
          element: <TeamLayout />,
          children: [
            {
              index: true,
              element: <Teams />,
            },
            {
              path: "createTeam",
              element: <CreateTeam />,
            },
            {
              path: "teamDetail",
              element: <TeamDetail />,
            },
            {
              path: "adjustTeam",
              element: <AdjustTeam />,
            },
            {
              path: "deleteTeam",
              element: <DeleteTeam />,
            },
          ],
        },
        { path: "assign", element: <Assign /> },
        { path: "onGoing", element: <OnGoing /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
