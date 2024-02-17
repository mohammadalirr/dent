"use client";

import { ActionIcon, Box, Burger, Group, Text, em } from "@mantine/core";
import {
  IconHeart,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons-react";
import SearchBox from "./etc/SerchBox";
import { subHeader } from "@/src/data/titles";
import { useMediaQuery } from "@mantine/hooks";

const SubHeader = () => {
  const isLl = useMediaQuery(`(max-width: ${em(1200)})`);
  const isMd = useMediaQuery(`(min-width: ${em(992)}), max-width: ${em(1200)}`)
  const isTablet = useMediaQuery(`(max-width: ${em(992)})`);

  return (
    <>
      <Box
        className="flex  justify-center items-center w-full h-full"
        hiddenFrom="md"
        style={{ backgroundColor: "#D0DAE4" }}
      >
        <SearchBox />
      </Box>
      <Group
        gap={50}
        style={{ backgroundColor: "#D0DAE4" }}
        justify="space-between"
        px={20}
        pr={50}
        py={5}
      >
        <Box style={{ height: "100%" }} visibleFrom="md">
          <Group px={25} justify="space-between" className="h-full">
            <Group visibleFrom="lg" className="bg-white pl-3 pr-1 py-1 rounded-full">
              <ActionIcon size="lg" radius={100}>
                <Burger size={15} color="white" />
              </ActionIcon>
              <Text>دسته بندی محصولات</Text>
            </Group>

            {subHeader.map((item) => (
                <Group gap={5} key={item.id}>
                  {item.icon}
                  <Text size="sm">{item.text}</Text>
                </Group>
            ))}
          </Group>
        </Box>

        <Group visibleFrom="md" justify="center">
          <ActionIcon variant="white" size="lg" radius={100}>
            <IconUser color="gray" />
          </ActionIcon>
          <ActionIcon size="lg" radius={100}>
            <Box className="bg-white rounded-full p-0.5">
              <IconHeart color="gray" />
            </Box>
          </ActionIcon>
          <Box style={{backgroundColor:'#099CFF'}} className="items-center w-24 p-1 pl-2 flex justify-between rounded-full text-white">
            <ActionIcon variant="white" size="md" radius={100}>
              <IconShoppingCart color="gray" />
            </ActionIcon>
            <Text size="sm">0 تومان</Text>
          </Box>
        </Group>
      </Group>
    </>
  );
};

export default SubHeader;
