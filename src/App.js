import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import GlobalStyle from "./components/GlobalStyle";
import Timeline from "./layouts/Timeline/Timeline";
import FrontPage from "./layouts/FrontPage";


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
      </Routes>
    </BrowserRouter>
  );
}
