import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { menuItems } from "../components/LeftMenu/util";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";

export const RootRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        {menuItems.map(({ pathName }) => (
          <Route
            key={`${pathName}${Math.random()}`}
            path={pathName}
            element={<Dashboard />}
          />
        ))}
        {menuItems
          ?.filter(({ children }) => children)
          .map(({ children }) => children)
          .flat(1)
          ?.map((item) => (
            <Route
              key={`${item?.pathName}${Math.random()}`}
              path={item?.pathName}
              element={<Dashboard />}
            />
          ))}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
