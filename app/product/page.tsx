"use client";

import Product from "@/components/content/product/Product";
import { products } from "@/src/data/products";
import { Box, Button, Group, Text } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import {
  useCreateProductMutation,
  useGetAllProductsQuery,
} from "../api/store/productApi";
import { useEffect, useState } from "react";
import { cartSlice, useDispatch } from "@/lib/redux";
import { wcSlice } from "@/lib/redux/slices/wcSlice/wcSlice";

const ProductsPage = () => {
  const [skip, setSkip] = useState(true);

  const { data, isLoading, status } = useGetAllProductsQuery(null, { skip });
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(data);
    dispatch(wcSlice.actions.setProducts(data));
    dispatch(cartSlice.actions.setAllProducts(data));
    // setSkip(true)
  }, [data]);

  return (
    <>
      <Group px={20} justify="space-between" className="bg-white rounded-t-lg">
        <Group gap={5} className="text-sm">
          <Link href="/">خانه</Link>
          <span className="">/</span>
          <Link href="#">محصولات اختصاصی</Link>
        </Group>

        <Text my={20} size="xl">
          همه محصولات
        </Text>
        {/* <Link href="specials"> */}
          <Group  gap={3} c="blue">
            <Button variant="light" loading={isLoading} onClick={() => setSkip(false)}>
              دریافت
            </Button>

            {/* <Text size="sm">مشاهده همه محصولات</Text>
            <IconArrowNarrowLeft stroke={1.5} size={20} /> */}
          </Group>
        {/* </Link> */}
      </Group>
      <Group
        justify="space-between"
        gap={30}
        px={25}
        className="w-full border-t-8 bg-white border-gray-100 pt-5 px-4 flex justify-center items-center rounded-b-lg"
      >
        {/* <Group justify="space-between" px={10} gap={30}> */}
        {/* {products.map((p: any) => (
          <Product
            key={`${p.id}special-${Math.random() * 100}`}
            id={p.id}
            name={p.name}
            img={p.img}
            disc={p.disc}
            spec={p.spec}
            aval={p.aval}
            price={p.price}
            category={p.category}
            score={p.score}
          />
        ))} */}
        {skip === false && status === "fulfilled"
          ? data.map((p: any) => (
              <Product
                key={`${p.id}special-${Math.random() * 100}`}
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
            ))
          : null}

        {/* </Group> */}
      </Group>
    </>
  );
};

export default ProductsPage;
