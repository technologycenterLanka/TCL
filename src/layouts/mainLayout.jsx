import Navbar from "../components/Navbar";
import Background from "../components/Background";
import AppRoutes from "../routes/AppRoutes";
import LanguageSwitcher from "../components/LanguageSwitcher";

const MainLayout = () => {
  return (
    <>
      <Background />
      <Navbar />
      <LanguageSwitcher />
      <AppRoutes />
    </>
  );
};

export default MainLayout;