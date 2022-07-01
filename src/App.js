import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home"));
const Blog = React.lazy(() => import("./pages/Blog"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Home />
          </React.Suspense>
        }>
        </Route>
        <Route path="/blog" element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Blog />
          </React.Suspense>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
