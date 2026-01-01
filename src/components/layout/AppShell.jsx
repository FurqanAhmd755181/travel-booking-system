import Navbar from "./Navbar";
import Footer from "./Footer";

const AppShell = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default AppShell;
