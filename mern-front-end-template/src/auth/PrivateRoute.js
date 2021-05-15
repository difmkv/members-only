import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ isAuthed, isLoading, ...props }) => {
  if (isLoading) return <p>Loading...</p>;

  if (!isAuthed) return <Redirect to="/sign-in" />;

  return <Route {...props} />;
};
