import { Box, Button, Flex, Group, Stack, Text } from "@mantine/core";
import { IconZoomMoney } from "@tabler/icons-react";
import clsx from "clsx";

const Badges = ({ isTablet } : { isTablet: boolean | undefined }) => {
  return (
    <Stack h={400} className="w-full">
      <Group
        justify="space-evenly"
        h={250}
        className=" rounded-lg bg-white"
      >
        <span className="text-3xl">آخرین بروزرسانی قیمت ها</span>
        <IconZoomMoney size={120} />
      </Group>
      <Group justify="space-between" grow={isTablet? false : true} h={150} wrap="wrap" className="w-full">
        <Group grow className={clsx("w-5/12 h-full rounded-lg bg-white px-5", isTablet && "w-full mb-1")}>
          <Stack>
            <span className="text-white">
              بلبرینگ‌های <br />
              Low-Speed
            </span>
            <Button variant="light">مشاهده جزئیات</Button>
          </Stack>
          <Box className="box-4 w-24 h-24"></Box>
        </Group>
        <Group grow className={clsx("w-5/12 h-full rounded-lg bg-white px-5", isTablet && "w-full")}>
          <Stack>
            <Text>
              بلبرینگ‌های <br />
              High-Speed
            </Text>

            <Button variant="light">مشاهده جزئیات</Button>
          </Stack>
          <Box className="box-5 w-24 h-24"></Box>
        </Group>
      </Group>
    </Stack>
  );
};

export default Badges;
