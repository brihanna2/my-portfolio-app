import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthLayout } from "../layout";
import { authRoutes } from "./routes";
import { AnimatePresence } from "framer-motion";

export const AppRouter = ({
  showModal,
  setShowModal,
  connectWalletModal,
  setConnectWalletModal,
}) => {
  return (
    <Router>
      {/* UnAuthenticated Routes */}
      <AnimatePresence exitBeforeEnter>
        <Routes>
          {authRoutes.map((route) => (
            <Route
              exact
              key={route.name}
              {...route}
              element={
                <AuthLayout
                  showModal={showModal}
                  SetShowModal={setShowModal}
                  connectWalletModal={connectWalletModal}
                  setConnectWalletModal={setConnectWalletModal}
                >
                  {route.element}
                </AuthLayout>
              }
            />
          ))}
          {/* Authenticated Routes */}
          <Route path="*" exact element={<div>Not Found</div>} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};
