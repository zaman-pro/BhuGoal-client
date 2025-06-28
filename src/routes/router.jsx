import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Auth from "../pages/Auth/Auth";
import Assignments from "../pages/Assignments/Assignments";
import PendingAssignments from "../pages/PendingAssignments/PendingAssignments";
import CreateAssignments from "../pages/CreateAssignments/CreateAssignments";
import MyAttemptedAssignments from "../pages/MyAttemptedAssignments/MyAttemptedAssignments";
import PrivateRoute from "../contexts/AuthContext/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <PendingAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: "/create-assignment",
        element: (
          <PrivateRoute>
            <CreateAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-attempted-assignments",
        element: (
          <PrivateRoute>
            <MyAttemptedAssignments />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
