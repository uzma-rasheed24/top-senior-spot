import { Routes, Route } from "react-router-dom";
import { WebsiteRoutes } from "./WebsiteRoutes";
import NotFoundPage from "../pages/NotFoundPage";

const Router = () => {
  return (
    <Routes>
      {/* Website Public Routes */}
      {WebsiteRoutes.map(({ path, element, children }) => (
        <Route key={path} path={path} element={element}>
          {children?.map((child) => (
            <Route
              key={child.path || "index"}
              path={child.path}
              element={child.element}
              index={child.path === "" ? true : undefined}
            />
          ))}
        </Route>
      ))}

      {/* 404 Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;