import { Footer, GoToTop, NavBar } from "../../components";

const AuthLayout = ({
  children,
  showModal,
  setShowModal,
  connectWalletModal,
  setConnectWalletModal,
}) => {
  return (
    <>
      <NavBar
        connectWalletModal={connectWalletModal}
        setConnectWalletModal={setConnectWalletModal}
      />
      {children}
      <GoToTop />
      <Footer />
    </>
  );
};

export { AuthLayout };
