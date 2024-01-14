import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Layout } from "components/Layout/Layout";
import { Loader } from "components/Loader/Loader";

const Home = lazy(() => import("../../pages/Home/Home"));
const Nannies = lazy(() => import("../../pages/Nannies/Nannies"));
const Favorites = lazy(() => import("../../pages/Favorites"));

export const App = () => (
  <Routes>
    <Route path="/" index element={<Suspense fallback={<Loader />}>
            <Home />
          </Suspense>} />
    <Route path="/" element={<Layout />}>
      <Route path="nannies" element={<Nannies />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="*" element={<Home />} />
    </Route>
  </Routes>
);
