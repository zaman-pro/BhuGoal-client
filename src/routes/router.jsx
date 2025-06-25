import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Auth from "../pages/Auth/Auth";
import Assignments from "../pages/Assignments/Assignments";
import PendingAssignments from "../pages/PendingAssignments/PendingAssignments";
import CreateAssignments from "../pages/CreateAssignments/CreateAssignments";
import MyAttemptedAssignments from "../pages/MyAttemptedAssignments/MyAttemptedAssignments";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/auth",
        Component: Auth,
      },
      {
        path: "/assignments",
        Component: Assignments,
      },
      {
        path: "/pending-assignments",
        Component: PendingAssignments,
      },
      {
        path: "/create-assignment",
        Component: CreateAssignments,
      },
      {
        path: "/my-attempted-assignments",
        Component: MyAttemptedAssignments,
      },
    ],
  },
]);

export default router;
