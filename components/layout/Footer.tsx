import { category } from "@/src/data/category";
import { Box, Grid, Group, Stack, Text } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconDental,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <>
      <Group
        pl={20}
        pr={{ base: 20, md: 90 }}
        py={50}
        bg="#ffffff"
        justify="space-between"
        align="flex-start"
        gap={20}
      >
        <Stack flex={{ sm: 3, md: 2, lg: 2 }} align="center">
          <IconDental size={50} />
          <Text c="gray" className="text-start">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده،
          </Text>
        </Stack>
        <Stack flex={{ sm: 1, md: 1 }} align="center">
          <Stack>
            <Text fw="bold">خدمات مشتریان</Text>
            <Stack align="flex-start">
              <Text c="gray">پشتیبانی</Text>
              <Text c="gray">تماس یا ما</Text>
              <Text c="gray">درباره ما</Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack align="center" flex={{ sm: 1, md: 1 }}>
          <Stack>
            <Text fw="bold">دسته بندی ها</Text>
            <Stack>
              {category.map((c : any) => (
                <Text c="gray" key={`${c.id}categoryFooterItems-${Math.random() * 100}`}>
                  {c.name}
                </Text>
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Stack align="center" flex={{ sm: 3, md: 1 }}>
          <Stack>
            <Text fw="bold">ارتباط با ما</Text>
            <Group>
              <IconBrandWhatsapp color="#2AB13F" />
              <IconBrandTelegram color="#27A5E5" />
              <IconBrandInstagram color="#F34E46" />
            </Group>
          </Stack>
        </Stack>
      </Group>
      <Box
        bg="#ffffff"
        c="gray"
        py={15}
        className="flex justify-center items-center border-t-2 border-gray"
      >
        تمامی حقوق برای سایت پارت دنتال محفوظ است.
      </Box>
    </>
  );
};

export default Footer;
