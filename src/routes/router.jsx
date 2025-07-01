import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Auth from "../pages/Auth/Auth";
import Assignments from "../pages/Assignments/Assignments";
import PendingAssignments from "../pages/PendingAssignments/PendingAssignments";
import CreateAssignment from "../pages/CreateAssignments/CreateAssignment";
import MyAttemptedAssignments from "../pages/MyAttemptedAssignments/MyAttemptedAssignments";
import PrivateRoute from "../contexts/AuthContext/PrivateRoute";
import UpdateAssignment from "../pages/UpdateAssignment/UpdateAssignment";
import AssignmentDetails from "../pages/AssignmentDetails/AssignmentDetails";

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
            <CreateAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-assignment/:id",
        element: (
          <PrivateRoute>
            <UpdateAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: "/assignment-details/:id",
        element: (
          <PrivateRoute>
            <AssignmentDetails />
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
