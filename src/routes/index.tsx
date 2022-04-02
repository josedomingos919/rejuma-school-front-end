import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";

export const RootRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={Login} />
        <Route path="/login" element={Login} />
        <Route path="/dashboard" element={Dashboard} />
      </Routes>
    </Router>
  );
};
