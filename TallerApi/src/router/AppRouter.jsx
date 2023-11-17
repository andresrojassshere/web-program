import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { LandingPage } from "../website/pages/LandingPage";
import { LoginPage } from "../authorization/pages/LoginPage";
import { SignUpPage } from "../authorization/pages/SignUpPage";
import { DashboardPage } from "../website/pages/DashboardPage";
import { PrivateRoute } from "./PrivateRouter";

export function AppRouter() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </main>
  );
}
