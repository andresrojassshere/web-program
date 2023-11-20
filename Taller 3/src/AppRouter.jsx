import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { LoginPage } from "./auth/pages/LoginPage";
import { RegisterPage } from "./auth/pages/RegisterPage";
import { LandingPage } from "./website/pages/LandingPage";
import { PageNotFound } from "./website/pages/PageNotFound";
import { MultiversePage } from "./website/pages/MultiversePage";
import { MultiverseDetailsPage } from "./website/pages/MultiverseDetailsPage";
import { SearchPage } from "./website/pages/SearchPage";
import { useAuth } from "./context/AuthContext";
import { AboutPage } from "./website/pages/AboutPage";

function PrivateRoute({ element }) {
  const { isLogged } = useAuth();

  return isLogged ? element : <Navigate to="/login" />;
}

export function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/" element={<Navbar />}>
        <Route index element={<LandingPage />} />
        <Route
          path="/multiverse"
          element={<PrivateRoute element={<MultiversePage />} />}
        />
        <Route path="/character/:id" element={<MultiverseDetailsPage />} />
        <Route
          path="/search"
          element={<PrivateRoute element={<SearchPage />} />}
        />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
