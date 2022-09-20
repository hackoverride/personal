import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home"));

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
