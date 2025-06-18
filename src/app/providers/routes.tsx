import { createBrowserRouter } from "react-router";

import { Main } from "pages/main";
import { MainLayout } from "app/ui/mainLayout";
import { Profile } from "pages/profile";
import { UploadPage } from "pages/uploadPage";
import { ErrorPage } from "pages/404";
import { MyVideos } from "pages/myVideos";
import { EditVideoPage } from "pages/editVideo";
import { Video } from "pages/player";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/upload",
        element: <UploadPage />,
      },
      {
        path: "/my-videos",
        element: <MyVideos />,
      },
      {
        path: "/edit-video/:id",
        element: <EditVideoPage />,
      },
      {
        path: "/video/:id",
        element: <Video />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
