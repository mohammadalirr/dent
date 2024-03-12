"use client";

import { useSelector } from "@/lib/redux";
import { selectWcProducts } from "@/lib/redux/slices/wcSlice/selectors";
import { Box, Group, Image, Loader, Stack } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

const Gallery = ({ prop }: { prop: number }) => {
  const products = useSelector(selectWcProducts);
  const product = products.find((p: any) => p.id === prop);
  

  const [image, setImage] = useState(product.images[0].src);

  return (
    <>
      {product ? (
        <Group align="flex-start" className="rounded-lg h-full" gap={15}>
          <Stack
            w={100}
            flex={1}
            justify="flex-start"
            align="flex-start"
            className=" h-full"
            visibleFrom="lg"
          >
            <Image
              onClick={() => setImage(product.images[0].src)}
              className={clsx(
                "",
                image === product.images[0].src
                  ? "shadow-md shadow-current opacity-100"
                  : "opacity-50 hover:opacity-80"
              )}
              radius={10}
              h={100}
              alt={product.name}
              src={product.images[0].src}
            />
            {/* <Image
              onClick={() => setImage(product.images[0].src)}
              className={clsx(
                "",
                image === product.images[0].src
                  ? "shadow-md shadow-current opacity-100"
                  : "opacity-50 hover:opacity-80"
              )}
              radius={10}
              h={100}
              alt={product.name}
              src={product.images[0].src}
            /> */}
            <Image
              onClick={() => setImage(product.images[1].src)}
              className={clsx(
                "",
                image === product.images[1].src
                  ? "shadow-md shadow-current opacity-100"
                  : "opacity-50 hover:opacity-80"
              )}
              radius={10}
              h={100}
              alt={product.name}
              src={product.images[1].src}
            />
          </Stack>
          <Box flex={4} w={400} className="h-full rounded-lg">
            <Image
              radius={10}
              // style={{ height: "100%" }}
              alt={product.name}
              src={image}
              h={452}
              bgp="center"
            />
          </Box>
        </Group>
      ) : (
        <Loader type="dots" />
      )}
    </>
  );
};

export default Gallery;
