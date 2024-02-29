"use client";

import {
  ActionIcon,
  Box,
  Burger,
  Group,
  Popover,
  PopoverTarget,
  Stack,
  Text,
  em,
} from "@mantine/core";
import { IconHeart, IconShoppingCart, IconUser } from "@tabler/icons-react";
import SearchBox from "./etc/SerchBox";
import { subHeader } from "@/src/data/titles";
import { useClickOutside, useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useSelector } from "@/lib/redux";
import {
  selectDetails,
  selectPrice,
  selectQty,
} from "@/lib/redux/slices/cartSlice/selectors";
import { useEffect, useMemo } from "react";

const SubHeader = () => {
  const isLl = useMediaQuery(`(max-width: ${em(1200)})`);
  const isMd = useMediaQuery(`(min-width: ${em(992)}), max-width: ${em(1200)}`);
  const isTablet = useMediaQuery(`(max-width: ${em(992)})`);
  const [opened, { close, open }] = useDisclosure();

  const qty = useSelector(selectQty);
  const price = useSelector(selectPrice);
  const ref = useClickOutside(() => close());

  useMemo(() => {
    if (qty > 0) {
      open();
    }
  }, [qty]);

  return (
    <>
      <Box
        className="flex justify-center items-center w-full h-full"
        hiddenFrom="md"
        style={{ backgroundColor: "#D0DAE4" }}
      >
        <SearchBox />
      </Box>
      <Group
        className="bg-gray-100"
        visibleFrom="md"
        gap={50}
        // style={{ backgroundColor: "#D0DAE4" }}
        justify="space-between"
        px={20}
        pr={50}
        py={5}
      >
        <Box style={{ height: "100%" }}>
          <Group px={25} justify="space-between" className="h-full">
            {/* <Group
              visibleFrom="lg"
              className="bg-white pl-3 pr-1 py-1 rounded-full"
            >
                <Burger size={15} color="white" />
              <Text>دسته بندی محصولات</Text>
            </Group> */}

            {subHeader.map((item) => (
              <Group gap={5} key={item.id}>
                {item.icon}
                <Text size="sm">{item.text}</Text>
              </Group>
            ))}
          </Group>
        </Box>

        <Group visibleFrom="md" justify="center">
          {/* <ActionIcon size="lg" radius={100}>
            <span className="bg-white rounded-full p-0.5">
              <IconHeart color="gray" />
            </span>
          </ActionIcon> */}
          {/* <Box
            // style={{ backgroundColor: "#099CFF" }}
            className="items-center w-24 p-1 pl-2 flex justify-between rounded-full bg-gray-300 text-white"
          > */}
          <Popover opened={opened} withArrow shadow="md" position="right">
            <Popover.Target>
              <div className="relative">
                {qty > 0 ? (
                  <span
                    className="absolute bg-teal-300 rounded-full text-xs text-white yekan"
                    style={{
                      right: -10,
                      top: -10,
                      padding: "3px 6px 1px 6px",
                      zIndex: 9999999,
                    }}
                  >
                    {qty}
                  </span>
                ) : null}
                <ActionIcon
                  variant="white"
                  size="lg"
                  radius={100}
                  onMouseOver={open}
                >
                  <IconShoppingCart color="gray" />
                </ActionIcon>
              </div>
            </Popover.Target>
            <Popover.Dropdown
              ref={ref}
              onMouseDown={close}
              onMouseLeave={close}
              onMouseOutCapture={close}
            >
              <Stack>
                <Group align="center" justify="space-between">
                  <Text className="yekan" size="xs" c="gray">
                    {price > 0 ? `${price} تومان` : null}
                  </Text>
                </Group>
                {/* <Group>
                  <Text size="sm" c="gray">تعداد:</Text>
                  <Text>
                    {" "}
                    {qty > 0 ? <Text size="xs" c="gray" className="">{qty}</Text> : null}
                  </Text>
                </Group> */}
              </Stack>
            </Popover.Dropdown>
          </Popover>
          {/* </Box> */}
          <ActionIcon variant="white" size="lg" radius={100}>
            <IconUser color="gray" />
          </ActionIcon>
        </Group>
      </Group>
    </>
  );
};

export default SubHeader;
