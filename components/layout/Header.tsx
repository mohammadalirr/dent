"use client";

import { Box, Burger, Group, Stack, Text, em } from "@mantine/core";
import {
  Icon24Hours,
  IconDental,
  IconTruckDelivery,
  IconUser,
} from "@tabler/icons-react";
import SearchBox from "./etc/etc/SerchBox";
import Link from "next/link";
import { useMediaQuery } from "@mantine/hooks";
import SubHeader from "./etc/SubHeader";

const Header = ({ toggle, opened }: { toggle: () => void, opened: boolean }) => {
  const isLl = useMediaQuery(`(max-width: ${em(1200)})`);
  const isMd = useMediaQuery(`(min-width: ${em(992)}), max-width: ${em(1200)}`)
  const isTablet = useMediaQuery(`(max-width: ${em(992)})`);

  return (
    <Stack style={{ height: "100%" }} gap={0} className="w-full h-full">
      <Group
        align="center"
        px={isTablet? 10 : 30}
        pr={isTablet? 10 : 85}
        justify="space-between"
        gap={5}
        style={{ height: "100%" }}
      >
        <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
        <Group>
          <Text size="lg">DentDent</Text>
          <IconDental size={50} />
        </Group>
        <Box className="w-4/12" visibleFrom="md">
          <SearchBox />
        </Box>
        <Group visibleFrom="md">
          <Icon24Hours size={50} />
          <Stack gap={0}>
            <Text>پشتیبانی 24 ساعته</Text>
            <Link className="text-blue-500 text-sm" href="#">
              09120000000
            </Link>
          </Stack>
        </Group>
        <Group visibleFrom="md">
          <IconTruckDelivery size={40} />
          <Stack gap={0}>
            <Text>ارسال به</Text>
            <Text size="sm" className="text-gray-500">
              تمامی نقاط کشور
            </Text>
          </Stack>
        </Group>
        <Box hiddenFrom="md">
          <IconUser size={40} />
        </Box>
      </Group>
      {/* <Box
        style={{ backgroundColor: "#D0DAE4" }}
        className="h-full w-full grow flex items-center justify-center"
      > */}
        <SubHeader />
      {/* </Box> */}
    </Stack>
  );
};

export default Header;
