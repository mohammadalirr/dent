"use client";

import { airMotor, angle, turbine } from "@/src/data/subTitles";
import { subHeader } from "@/src/data/titles";
import {
  ActionIcon,
  Box,
  Burger,
  Group,
  Popover,
  Stack,
  Text,
  em,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconChevronLeft } from "@tabler/icons-react";
import clsx from "clsx";
import React, { SetStateAction, useEffect, useState } from "react";

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

  const [pop, setPop] = useState<any>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // const burger = () => {
  //   setIsHidden((prev) => !prev);
  //   toggle();
  // }

  useEffect(() => {
    if (isHidden) {
      setIsOpen(false);
    }
  }, [isHidden]);

  const handlePop = (id: number) => {
    switch (id) {
      case 1:
        setPop(turbine);
        setIsOpen(true);
        break;
      case 2:
        setPop(angle);
        setIsOpen(true);
        break;
      case 3:
        setPop(airMotor);
        setIsOpen(true);
        break;
      default:
        setPop([]);
        setIsOpen(false);
    }
  };

  return (
    <Stack pt={6} align={isHidden ? "center" : "flex-start"} className="drawer w-full">
      <Box
        // pos="relative"
        // left={5}
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
      <Popover
      
        width={200}
        position="right"
        withArrow
        shadow="md"
        opened={isOpen}
      >
        <Popover.Target>
          <Stack pr={isHidden ? 0 : 10} align={isHidden ? "center" : "normal"} className="w-full">
            {subHeader.map((i: any) => (
              <Group
                // className="w-full"
                onMouseOver={() => {
                  handlePop(i.id);

                  // final(i.id);
                }}
                // onMouseLeave={() => handleMouse}
                key={i.id}
                justify="space-between"
              >
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
        </Popover.Target>
        <Popover.Dropdown
          pos="absolute"
          right={300}
          onMouseOver={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          style={{ transition: "all .3s" }}
          className="rounded-lg"
          // style={{ pointerEvents: "none" }}
        >
          <Stack
          //  onMouseOver={() => handleMouse(true)} onMouseLeave={() => handlePop(0)}
          >
            {pop.map((i: any) => (
              <Text key={i.id}>{i.text}</Text>
            ))}
          </Stack>
        </Popover.Dropdown>
      </Popover>
    </Stack>
  );
};

export default Navbar;
