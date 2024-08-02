import React, { lazy, Suspense } from "react";
import Layout from "../layout/layout";
import Footer from "../components/Footer";
import ThemeSwitch from "../components/theme-switch";
import { ScrollProgress } from "../components/ScrollProgress";


const LazySiteBarRight = lazy(() => import("../components/SideBarRight"));
const LazySiteBarLeft = lazy(() => import("../components/SiteBarLeft"));

const LazyHeaderIntro = lazy(() => import("../components/HeaderIntro"));


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
          <Suspense fallback={<div>Loading...</div>}>
            <LazySiteBarLeft />
            <LazyHeaderIntro />
            <LazySiteBarRight />
          </Suspense>
        </header>
        <main className="relative">
          x
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default SearchList;
