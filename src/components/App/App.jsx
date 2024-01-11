import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "components/Layout/Layout";

const Home = lazy(() => import("../../pages/Home/Home"));
const Nannies = lazy(() => import("../../pages/Nannies"));
const Favorites = lazy(() => import("../../pages/Favorites"));

export const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="nannies" element={<Nannies />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="*" element={<Home />} />
    </Route>
  </Routes>
);
