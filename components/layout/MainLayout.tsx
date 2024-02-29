"use client";

import { AppShell, em, rem } from "@mantine/core";
import { useClickOutside, useDisclosure, useHeadroom, useMediaQuery } from "@mantine/hooks";
// import Header from "./Header";

import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { relative } from "path";

// const Header = dynamic(() => import("./Header"), { ssr: false });
import Header from "./header/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();
  const isLg = useMediaQuery(`(max-width: ${em(1200)})`);
  const isMd = useMediaQuery(`(min-width: ${em(992)}), max-width: ${em(1200)}`);
  const isTablet = useMediaQuery(`(max-width: ${em(992)})`);
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const ref = useClickOutside(() => isHidden === false ? setIsHidden(true) : null);

  useEffect(() => {
    if (isTablet) {
      setIsHidden(false);
    }
  }, [isTablet, isHidden]);

  const mouseOn = (param: boolean) => {
    setIsHidden(param);
    toggle();
  };

  // const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <>
      <AppShell
        // pos="relative"
        // layout={isTablet ? "alt" : "default"}
        header={{ height: 80, offset: isTablet ? true : false }}
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
          style={{ boxShadow: "0px 3px 10px -8px gray" }}
          className={clsx(
            "flex items-center",
            !isHidden && !isTablet && "blurTrans",
            isHidden && "noneBlur"
          )}
        >
          {/* <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div>Logo</div> */}
          <Header setIsHidden={setIsHidden} toggle={toggle} opened={opened} />
        </AppShell.Header>

        {isTablet ? (
          <AppShell.Navbar
          
            style={{ boxShadow: "-3px 0px 10px -8px gray" }}
            px={10}
            py={20}
          >
            <Navbar
              isHidden={isHidden}
              toggle={toggle}
              opened={opened}
              setIsHidden={setIsHidden}
            />
          </AppShell.Navbar>
        ) : (
          <AppShell.Navbar
          ref={ref}
            onMouseLeave={() => mouseOn(true)}
            onMouseOver={() => mouseOn(false)}
            className={!isHidden ? "animate" : "leave"}
            p="md"
            // pos="absolute"
            // right={0}
            // top={0}
            zIndex={100}
          >
            <Navbar
              isHidden={isHidden}
              toggle={toggle}
              opened={opened}
              setIsHidden={setIsHidden}
            />
          </AppShell.Navbar>
        )}

        <AppShell.Main
          px={0}
          className={clsx(
            "z-10 bg-gray-100",
            !isHidden && !isTablet && "blurTrans",
            isHidden && "noneBlur"
          )}
          pt={isTablet ? 0 : 115  }
          pl={!isTablet ? 30 : 0}
          pr={!isTablet ? 90 : 0}
  
        >
          {children}
        </AppShell.Main>
      </AppShell>
    </>
  );
};

export default MainLayout;
