"use client";

import { AppShell, em } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
// import Header from "./Header";

import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Header = dynamic(() => import("./Header"), { ssr: false });

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();
  const isLg = useMediaQuery(`(max-width: ${em(1200)})`);
  const isMd = useMediaQuery(`(min-width: ${em(992)}), max-width: ${em(1200)}`);
  const isTablet = useMediaQuery(`(max-width: ${em(992)})`);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    if (isTablet) {
      setIsHidden(false);
    }
  }, [isTablet, isHidden]);

  const mouseOn = (param : boolean) => {
    setIsHidden(param);
    toggle();
  }

  return (
    <>
      <AppShell
        layout={isTablet ? "alt" : "default"}
        header={{ height: 140, offset: isTablet ? true : false }}
        navbar={{
          width: {
            sm: 200,
            md: isHidden ? 60 : 300,
            lg: isHidden ? 60 : 300,
          },

          breakpoint: "md",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header
          className={clsx(
            "flex items-center",
            !isHidden && !isTablet && "blurTrans",
            isHidden && "noneBlur"
          )}
        >
          {/* <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div>Logo</div> */}
          <Header toggle={toggle} opened={opened} />
        </AppShell.Header>

        {isTablet ? (
          <AppShell.Navbar px={10} py={20}>
            <Navbar isHidden={isHidden} toggle={toggle} opened={opened} setIsHidden={setIsHidden} />
          </AppShell.Navbar>
        ) : (
          <AppShell.Navbar
            onMouseLeave={() => mouseOn(true)}
            onMouseOver={() => mouseOn(false)}
            className={!isHidden ? "animate" : "leave"}
            p="md"
          >
            <Navbar isHidden={isHidden} toggle={toggle} opened={opened} setIsHidden={setIsHidden} />
          </AppShell.Navbar>
        )}

        <AppShell.Main
          className={clsx(
            !isHidden && !isTablet && "blurTrans",
            isHidden && "noneBlur"
          )}
        >
          {children}
        </AppShell.Main>
      </AppShell>
    </>
  );
};

export default MainLayout;
