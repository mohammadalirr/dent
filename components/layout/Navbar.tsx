import { subHeader } from "@/src/data/titles";
import { ActionIcon, Box, Burger, Group, Stack, Text, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconChevronLeft } from "@tabler/icons-react";
import clsx from "clsx";
import React, { SetStateAction } from "react";

const Navbar = ({
  isHidden,
  toggle,
  opened,
  setIsHidden,
}: {
  isHidden: boolean;
  toggle: () => void;
  opened: boolean;
  setIsHidden: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const isLg = useMediaQuery(`(max-width: ${em(1200)})`);
  const isMd = useMediaQuery(`(min-width: ${em(992)}), max-width: ${em(1200)}`);
  const isTablet = useMediaQuery(`(max-width: ${em(992)})`);

  // const burger = () => {
  //   setIsHidden((prev) => !prev);
  //   toggle();
  // }

  return (
    <Stack align="flex-start" className="drawer">
      <Box
        pos="relative"
        left={5}
        className={clsx(
          "bg-blue-500 w-8 h-8 flex  items-center rounded-full p-2",
          !isHidden && "flex justify-start w-full",
          isHidden && "justify-center leaveItem"
        )}
      >
        {isTablet ? (
          <Burger color="white" opened={opened} onClick={toggle} size="sm" />
        ) : (
          <Burger color="white" size="sm" />
        )}
        <h3
          className={clsx(
            "text-white pr-5",
            isHidden && "display-none",
            !isHidden && "item"
            // isTablet && "item"
          )}
        >
          دسته بندی محصولات
        </h3>
      </Box>
      {subHeader.map((i) => (
        <Group key={i.id} justify="space-between">
          <Group justify="center">
            <Box>{i.icon}</Box>
            <Text
              className={clsx(
                isHidden && "display-none leaveItem",
                !isHidden && "item"
                // isTablet && "item"
              )}
            >
              {i.text}
            </Text>
          </Group>
          <Box
            className={clsx(
              isHidden && "display-none leaveItem",
              !isHidden && "item"
              // isTablet && "item"
            )}
          >
            <IconChevronLeft
              size={20}
              color="gray"
              style={{ display: `${i.nav}` }}
            />
          </Box>
        </Group>
      ))}
    </Stack>
  );
};

export default Navbar;
