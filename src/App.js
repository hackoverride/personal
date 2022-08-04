import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home"));
const Blog = React.lazy(() => import("./pages/Blog"));
const Pi = React.lazy(() => import("./pages/Pi"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Home />
            </React.Suspense>
          }
        >
          <Route
            path="blog"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Blog />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="pi"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Pi />
              </React.Suspense>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
