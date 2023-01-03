import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Timeline from "./layouts/Timeline/Timeline";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/timeline" exact element={<PrivateRoute><Timeline/></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

