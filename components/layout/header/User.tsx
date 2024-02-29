"use client";

import { layoutSlice, useDispatch, useSelector } from "@/lib/redux";
import {
  selectStatus,
  selectUserData,
} from "@/lib/redux/slices/userSlice/selectors";
import {
  ActionIcon,
  Button,
  ButtonGroup,
  Group,
  Popover,
  Stack,
  Text,
} from "@mantine/core";
import { useClickOutside, useDisclosure } from "@mantine/hooks";
import { IconLogin, IconUser } from "@tabler/icons-react";
import clsx from "clsx";
import { useEffect } from "react";

const User = () => {
  const isAuth = useSelector(selectStatus);
  const user = useSelector(selectUserData);
  const dispatch = useDispatch();

  const [opened, { close, open }] = useDisclosure();
  const ref = useClickOutside(() => close());

  //   useEffect(() => {
  //     console.log(user);
  //   }, [user])

  return (
    <>
      {isAuth ? (
        <Popover opened={opened}>
          <Popover.Target>
            <ActionIcon
              p={5}
              radius={999}
              color="gray"
              size={43}
              variant="subtle"
              c="black"
              onMouseOver={() => open()}
            >
              <IconUser stroke={1} size={30} />
            </ActionIcon>
          </Popover.Target>
          <Popover.Dropdown ref={ref} onMouseLeave={() => close()}>
            <Stack align="center">
              <Text>
                <em>{user.name}</em>
              </Text>
              <Button size="sm" variant="subtle" color="black">
                پسند ها
              </Button>
              <Button fullWidth size="sm" variant="subtle" color="red">
                خروج
              </Button>
            </Stack>
          </Popover.Dropdown>
        </Popover>
      ) : (
        <Group gap={10} className={clsx(isAuth && "display-none")}>
          <Button
            onClick={() => dispatch(layoutSlice.actions.setPortal("login"))}
            px={4}
            radius={10}
            color="gray"
            c="black"
            variant="subtle"
            py={1}
          >
            <Stack gap={0}>
              <Group justify="space-between" gap={1}>
                <Text size="sm">ورود</Text>
                <IconLogin stroke={1.5} size={20} />
              </Group>
              <Text c="gray" size="xs">
                یا ثبت نام
              </Text>
            </Stack>
          </Button>
          {/* <div className="w-0.5 h-5 bg-gray-200"></div>
          <Button
            onClick={() => dispatch(layoutSlice.actions.setPortal("signup"))}
            px={4}
            radius={10}
            color="gray"
            w={50}
            c="black"
            variant="subtle"
          >
            <Text className="text-nowrap w-full" size="sm">
              ثبت نام
            </Text>
          </Button> */}
        </Group>
      )}
    </>
  );
};

export default User;
