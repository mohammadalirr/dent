"use client";

import {
  ActionIcon,
  Box,
  Burger,
  Button,
  Group,
  NumberFormatter,
  Popover,
  Stack,
  Text,
  em,
} from "@mantine/core";
import {
  IconDental,
  IconSearch,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons-react";
import { useClickOutside, useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useSelector } from "react-redux";
import { selectPrice, selectQty } from "@/lib/redux/slices/cartSlice/selectors";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { layoutSlice, useDispatch } from "@/lib/redux";
import { userSlice } from "@/lib/redux/slices/userSlice/userSlice";
import { selectStatus } from "@/lib/redux/slices/userSlice/selectors";
import User from "./User";
import Link from "next/link";

const Header = ({
  toggle,
  opened,
  setIsHidden,
}: {
  toggle: () => void;
  opened: boolean;
  setIsHidden: any;
}) => {
  const isLl = useMediaQuery(`(max-width: ${em(1200)})`);
  const isMd = useMediaQuery(`(min-width: ${em(992)}), max-width: ${em(1200)}`);
  const isTablet = useMediaQuery(`(max-width: ${em(992)})`);

  const [isOpen, { close, open }] = useDisclosure();

  const popRef = useClickOutside(() => close());
  const searchRef = useClickOutside(() => setFocused(false));

  //REDUX NERVES
  const dispatch = useDispatch();
  const qty = useSelector(selectQty);
  const price = useSelector(selectPrice);
  const isAuth = useSelector(selectStatus);

  const [focused, setFocused] = useState<boolean>(false);

  const focusRef = useRef<null | any>(null);

  const handleFocus = () => {
    setTimeout(() => {
      console.log("focused");
      focusRef.current.focus();
    }, 200);
  };

  useEffect(() => {
    if (qty > 0) {
      open();
    }
  }, [qty, focused, open]);

  return (
    <Stack style={{ height: "100%" }} gap={0} className="w-full h-full">
      <Group
        align="center"
        px={isTablet ? 10 : 25}
        pr={isTablet ? 10 : 75}
        justify="space-between"
        gap={5}
        style={{ height: "100%" }}
      >
        {/* <Group> */}
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="md"
            size="md"
            color="gray"
          />

          <Text visibleFrom="md" onMouseOver={() => setIsHidden(false)}>
            دسته بندی محصولات
          </Text>
          <div
            className={clsx(
              "bg-gray-200 w-0.5 h-5",
              isTablet && "display-none"
            )}
          ></div>

          <Group
          visibleFrom="sm"
            gap={0}
            className={clsx(
              "transition-all",
              focused && "custom-shadow pl-2 py-0.5 rounded-full"
            )}
            ref={searchRef}
          >
            <ActionIcon
              p={5}
              radius={999}
              color={
                // focused ?
                //  "blue" :
                "gray"
              }
              size={43}
              variant={
                // focused ?
                //  "filled":
                "subtle"
              }
              c={
                // focused ?
                //  "white" :
                "black"
              }
              onClick={() => {
                setFocused(true);
                handleFocus();
              }}
              style={focused ? { rotate: "90deg" } : {}}
              className="transition-all"
            >
              <IconSearch stroke={1} size={30} className="h-full" />
            </ActionIcon>
            {/* <TextInput /> */}
            <input
              type="text"
              style={{ border: "none", outline: "none" }}
              className={clsx(
                "transition-all px-5",
                !focused && "display-none"
              )}
              ref={focusRef}
              // onFocus={() => setFocused(true)}
            />
          </Group>
        </Group>
        <Link href="/">
          <Group visibleFrom="xs" className="transition-all" gap={5}>
            {/* <Text size="lg">Parts Dental</Text> */}
            <IconDental stroke={1.5} size={50} />
          </Group>
        </Link>
        {/* </Group> */}
        {/* <Box className="w-4/12" visibleFrom="md">
          <SearchBox />
        </Box> */}
        {/* <Group gap={30}>
          <Group gap={0} visibleFrom="md">
            <Stack gap={0}>
              <Text>
                پشتیبانی <span className="yekan">24</span> ساعته
              </Text>
              <Link className="text-blue-500 text-sm yekan" href="#">
                09120000000
              </Link>
            </Stack>

            <IconPhone stroke={1} size={50} />
          </Group>
          <Group gap={0} visibleFrom="md">
            <Stack gap={0}>
              <Text>ارسال به</Text>
              <Text size="sm" className="text-gray-500">
                تمامی نقاط کشور
              </Text>
            </Stack>
            <IconTruckDelivery stroke={1} size={50} />
          </Group>
                  </Group>
 */}
        <Group>
          <Popover opened={isOpen} withArrow shadow="md" position="right">
            <Popover.Target>
              <div className="relative">
                {qty > 0 ? (
                  <span
                    className="absolute bg-opacity-80 bg-red-400 rounded-full text-xs text-white yekan"
                    style={{
                      right: 0,
                      top: 1,
                      padding: "2px 6px .75px 6px",
                      zIndex: 9999999,
                    }}
                  >
                    {qty}
                  </span>
                ) : null}
                <Link href="/cart">
                  <ActionIcon
                    pos="relative"
                    style={{ top: 2 }}
                    p={5}
                    radius={999}
                    color="gray"
                    size={43}
                    variant="subtle"
                    c="black"
                  >
                    <IconShoppingCart stroke={1} size={30} />
                  </ActionIcon>
                </Link>
              </div>
            </Popover.Target>
            {price > 0 && (
              <Popover.Dropdown
                ref={popRef}
                onMouseDown={close}
                onMouseLeave={close}
                onMouseOutCapture={close}
              >
                <Stack>
                  <Group align="center" justify="space-between">
                    <Text className="yekan" size="xs" c="gray">
                      <NumberFormatter value={price} thousandSeparator />
                      {"  "}
                      تومان
                    </Text>
                  </Group>
                </Stack>
              </Popover.Dropdown>
            )}
          </Popover>
          <User />
        </Group>

        {/* <Box hiddenFrom="md">
          <IconUser size={30} />
        </Box> */}
      </Group>
      {/* <Box
        style={{ backgroundColor: "#D0DAE4" }}
        className="h-full w-full grow flex items-center justify-center"
      > */}
      {/* <SubHeader /> */}
      {/* </Box> */}
    </Stack>
  );
};

export default Header;
