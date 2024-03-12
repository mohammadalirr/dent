import Product from "@/components/content/product/Product";
import { products } from "@/src/data/products";
import { Box, Group, Text } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { randomFill } from "crypto";
import Link from "next/link";

const PopularPage = () => {
  return (
    <>
      <Group px={20} justify="space-between" className="bg-white rounded-t-lg">
        <Group className="text-sm">
          <Link href="../">خانه</Link>
          <span className="">/</span>
          <Link href="#">محصولات پر فروش</Link>
        </Group>

        <Text my={20} size="xl">
          محصولات پرفروش{" "}
        </Text>
        <Link href="specials">
          <Group gap={3} c="blue">
            <Text size="sm">مشاهده همه محصولات</Text>
            <IconArrowNarrowLeft stroke={1.5} size={20} />
          </Group>
        </Link>
      </Group>
      <Group
        justify="space-between"
        gap={30}
        px={25}
        className="w-full border-t-8 bg-white border-gray-100 pt-5 px-4 flex justify-center items-center rounded-b-lg"
      >
        {/* <Group justify="space-between" px={10} gap={30}> */}
        {products.map((p : any) => (
          <Product
            key={`${p.id}popular-${Math.random() * 100}`}
            id={p.id}
            name={p.name}
            img={p.img}
            // disc={p.disc}
            // spec={p.spec}
            // aval={p.aval}
            price={p.price}
            // category={p.category}
            // score={p.score}
          />
        ))}

        {/* </Group> */}
      </Group>
    </>
  );
};

export default PopularPage;
