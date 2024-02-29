"use client";
import { category } from "@/src/data/category";
import { Carousel } from "@mantine/carousel";
import { Box, Group, Image, Stack, Text, Title } from "@mantine/core";
import { IconArrowNarrowLeft, IconCategory } from "@tabler/icons-react";
import Link from "next/link";

const Category = () => {
  return (
    <>
      <Group px={20} justify="space-between" className="bg-white rounded-t-lg">
        <Text my={20} size="xl">
          دسته بندی های محبوب
        </Text>
        <Link href="#">
          <Group gap={3} c="blue">
            <Text size="sm">مشاهده همه</Text>
            <IconArrowNarrowLeft stroke={1.5} size={20} />
          </Group>
        </Link>
      </Group>
      {/* <Group justify="space-evenly"> */}
      {/* {category.map((i) => (
          <Stack align="center" key={i.id}>
            <div style={{backgroundColor: i.img}} className="w-32 h-32 rounded-full opacity-50"></div>
            <div>{i.name}</div>
            <div style={{color:'gray'}} className="text-sm">{`${i.qty} محصول`}</div>
          </Stack>
        ))} */}

      <Carousel
        dir="ltr"
        withIndicators
        height={230}
        slideSize="20%"
        slideGap="xl"
        loop
        align="start"
        slidesToScroll={1}
        className="w-full border-t-8 bg-white border-gray-100 pt-5 px-4 flex justify-center items-center rounded-b-lg"
      >
        {category.map((i) => (
          <Carousel.Slide key={i.id}>
            <Box h={200} w={250} className="bg-white rounded-xl shadow-md">
              <Stack>
                <div className="absolute top-0 right-0 bg-white rounded-bl-lg px-4 py-2 z-30 shadow-md">
                  <IconCategory />
                </div>
              </Stack>

              <Box
                py={10}
                pl={10}
                pr={0}
                // pl={40}
                pos="relative"
                className="flex flex-row-reverse justify-between h-full w-full"
              >
                <Text
                  style={{ rotate: "-90deg" }}
                  size="sm"
                  c="gray"
                  className="flex flex-row-reverse self-center w-full gap-2 justify-center relative left-1 top-2 yekan"
                >
                  <span>{i.qty} </span>
                  <span>محصول</span>
                </Text>

                {/* <div className="absolute top-0 right-0 bg-white rounded-bl-lg px-4 py-2 z-30 shadow-xl">
                    <IconCategory />
                  </div> */}
                <Image
                  opacity={0.2}
                  alt={i.name}
                  src={i.img}
                  radius="md"
                  className="w-full h-full"
                />
                <div className="absolute bottom-0 left-0 bg-white rounded-tr-lg px-4 py-2 text-sm z-30">
                  {i.name}
                </div>
              </Box>
            </Box>
          </Carousel.Slide>
        ))}
      </Carousel>
      {/* </Group> */}
    </>
  );
};

export default Category;
