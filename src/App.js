// import logo from './logo.svg';
import "./global.scss";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
