import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import GlobalStyle from "./components/GlobalStyle";
import Timeline from "./pages/Timeline/Timeline";
import FrontPage from "./layouts/FrontPage";
import UserPosts from "./pages/UserPosts/UserPosts";
import Hashtag from "./pages/Hashtag/Hashtag";

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
        <Route path="/hashtag/:hashtag" element={<Hashtag />} />
      </Routes>
    </BrowserRouter>
  );
}
