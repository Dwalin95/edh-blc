import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ActiveSectionContextProvider from "./context/active-section-context";
import ThemeContextProvider from "./context/theme-context";
import LanguageContextProvider from "./context/language-context";
import { Provider } from "react-redux";
import {store} from "./store/index";
import { SpeedInsights } from '@vercel/speed-insights/react';
function App() {
  return (
    <>
      <BrowserRouter>
      <Provider store={store}>
        <ThemeContextProvider>
          <LanguageContextProvider>
            <ActiveSectionContextProvider>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/imprint" element={<Home />}></Route>
                <Route path="/privacy" element={<Home />}></Route>
              </Routes>
            </ActiveSectionContextProvider>
          </LanguageContextProvider>
        </ThemeContextProvider>
        </Provider>
        <SpeedInsights/>
      </BrowserRouter>
    </>
  );
}

export default App;
