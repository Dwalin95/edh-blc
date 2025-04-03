import React, { lazy, Suspense } from "react";
import Layout from "../layout/layout";
import Footer from "../components/Footer";
import ThemeSwitch from "../components/theme-switch";
import { ScrollProgress } from "../components/ScrollProgress";
import CommanderSearch from "../components/ricercaPerComandante/RicercaTotale";
const LazySiteBarRight = lazy(() => import("../components/SideBarRight"));
const LazySiteBarLeft = lazy(() => import("../components/SiteBarLeft"));

const LazyHeaderIntroRicerca = lazy(
  () => import("../components/HeaderIntroRicerca")
);

const SearchList: React.FC = () => {
  return (
    <>
      <Layout>
        <ThemeSwitch />
        <header className="h-screen">
          <ScrollProgress
            position={"left"}
            color={"orange"}
            height={10}
            smoothness={true}
          />
          <Suspense fallback={<div className="flex flex-col items-center py-10">
            <iframe
              src="https://giphy.com/embed/13hzdQ3QCID172"
              className="w-full max-w-xs sm:max-w-md h-auto"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className="italic text-gray-600 dark:text-gray-400 mt-4">
              Sto Caricando le liste!
            </p>
            
          </div>}>
            <LazySiteBarLeft />
            <LazyHeaderIntroRicerca />
            <LazySiteBarRight />
          </Suspense>
        </header>
        <body>
          <CommanderSearch />
        </body>

        <Footer />
      </Layout>
    </>
  );
};

export default SearchList;
