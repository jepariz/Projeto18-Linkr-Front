import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Timeline from "./layouts/Timeline/Timeline";
import GlobalStyle from "./components/GlobalStyle";

export default function App() {

  return (
    <BrowserRouter>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={<Timeline />} />
        <Route path="/timeline" exact element={<PrivateRoute><Timeline/></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

