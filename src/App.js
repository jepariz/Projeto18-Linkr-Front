import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import GlobalStyle from "./components/GlobalStyle";
import Timeline from "./pages/Timeline/Timeline";
import UserPosts from "./pages/UserPosts/UserPosts";
import Hashtag from "./pages/Hashtag/Hashtag";
import LoginForm from "./components/Forms/LoginForm";
import RegisterForm from "./components/Forms/RegisterForm";
import PublicRoute from "./components/Forms/PublicRoute";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <LoginForm />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <RegisterForm />
            </PublicRoute>
          }
        />
        <Route
          path="/timeline"
          exact
          element={
            <PrivateRoute>
              <Timeline />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/:id"
          exact
          element={
            <PrivateRoute>
              <UserPosts />
            </PrivateRoute>
          }
        />
        <Route
          path="/hashtag/:hashtag"
          element={
            <PrivateRoute>
              <Hashtag />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
