import { Box, Group, Loader, Text, Title } from "@mantine/core";
import Product from "../product/Product";
import { products } from "@/src/data/products";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import { IconArrowNarrowLeft } from "@tabler/icons-react";

const Popular = ({ data }: { data: Array<any> }) => {
  return (
    <>
      <Group px={20} justify="space-between" className="bg-white rounded-t-lg">
        <Text my={20} size="xl">
          محصولات پر فروش
        </Text>
        <Link href="populars">
          <Group gap={3} c="blue">
            <Text size="sm"> همه</Text>
            <IconArrowNarrowLeft stroke={1.5} size={20} />
          </Group>
        </Link>
      </Group>
      {data ? (
        <Carousel
          dir="ltr"
          withIndicators
          height={470}
          slideSize="10%"
          slideGap="lg"
          loop
          align="start"
          slidesToScroll={2}
          className="w-full border-t-8 bg-white border-gray-100 pt-5 px-4 flex justify-center items-center rounded-b-lg"
        >
          {/* <Group grow gap={30} justify="flex-start" align="center"> */}
          {data.map((p: any) => (
            <Carousel.Slide
              key={`${p.id}popularCrslItems-${Math.random() * 100}`}
            >
              <Product
                id={p.id}
                name={p.name}
                img={p.images[0].src}
                // disc={p.disc}
                // spec={p.spec}
                // aval={p.aval}
                price={p.price}
                // category={p.category}
                // score={p.score}
              />
              
            </Carousel.Slide>
          ))}
          {/* </Group> */}

          {/* ...other slides */}
        </Carousel>
      ) : (
        <Box h={300} bg="#ffffff" className="flex justify-center items-center w-full">
          <Loader type="dots" />
        </Box>
      )}
    </>
  );
};

export default Popular;
