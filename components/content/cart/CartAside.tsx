"use client";

import { useSelector } from "@/lib/redux";
import { selectPrice } from "@/lib/redux/slices/cartSlice/selectors";
import {
  ActionIcon,
  Box,
  Button,
  Group,
  NumberFormatter,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { IconInputCheck } from "@tabler/icons-react";

const CartAside = () => {
  const total = useSelector(selectPrice);
  return (
    <>
      {total > 0 ? (
        <Stack className="bg-white rounded-lg">
          <Box px={12} py={10} style={{ borderBottom: "7px #F3F4F6 solid" }}>
            <Text>مجموع</Text>
          </Box>
          <Stack px={10} py={10}>
            <Text className="yekan">
              <NumberFormatter value={total} thousandSeparator />
              {"  "}
              تومان
            </Text>
            <Box>
              <Group gap={5} justify="space-between">
                <TextInput
                  className="w-full yekan"
                  rightSection={
                    <ActionIcon>
                      <IconInputCheck />
                    </ActionIcon>
                  }
                  placeholder="کد تخفیف"
                />
              </Group>
            </Box>
            <Button variant="light">ادامه</Button>
          </Stack>
        </Stack>
      ) : null}
    </>
  );
};

export default CartAside;
