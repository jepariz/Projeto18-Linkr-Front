import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import GlobalStyle from "./components/GlobalStyle";
import Timeline from "./pages/Timeline/Timeline";
import FrontPage from "./layouts/FrontPage";
import UserPosts from "./pages/UserPosts/UserPosts";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/signup" element={<FrontPage />} />
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
      </Routes>
    </BrowserRouter>
  );
}
