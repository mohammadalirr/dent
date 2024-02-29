"use client";

import Badges from "@/components/content/home/Badges";
import Embla from "@/components/content/home/Embla";
import Category from "@/components/content/home/Category";
import { Box, Group, Space, Stack, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import clsx from "clsx";
import Special from "@/components/content/home/Special";
import Popular from "@/components/content/home/Popular";
import Login from "@/components/auth/Login";
import Auth from "@/components/auth/Auth";

const Home = () => {
  const isLg = useMediaQuery(`(max-width: ${em(1400)})`);
  const isMd = useMediaQuery(`(max-width: ${em(1200)})`);
  const isTablet = useMediaQuery(`(max-width: ${em(992)})`);

  return (
    <>
      <Auth />
      <Stack
        className={clsx("w-full h-auto", isTablet && "pt-36")}
        align="center"
      >
        <Group
          className={clsx(
            "w-full flex justify-evenly gap-5 z-10",
            isLg && "grow",
            isMd && "flex-col"
          )}
          align="center"
          justify="center"
          grow={!isMd}
        >
          <Box className={clsx(isMd && "w-11/12", !isMd && "w-5/12")}>
            <Embla />
          </Box>
          <Box className={clsx(isMd && "w-11/12", !isMd && "w-5/12")}>
            <Badges isTablet={isTablet} />
          </Box>
        </Group>
        <Box mt={isTablet ? 300 : 50} className="z-10 w-full">
          <Category />
        </Box>
        <Box mt={isTablet ? 100 : 50} className="z-10 w-full">
          <Special />
        </Box>
        <Box mt={isTablet ? 100 : 50} className="z-10 w-full">
          <Popular />
        </Box>
      </Stack>
    </>
  );
};

export default Home;
