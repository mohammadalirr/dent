"use client"
import Crsl from "@/components/content/product/etc/Carousel";
import Context from "@/components/content/product/etc/Context";
import Gallery from "@/components/content/product/etc/Gallery";
import { products } from "@/src/data/products";
import { Box, Grid, Stack } from "@mantine/core";
import { useEffect } from "react";

const ProductPage = ({ params }: { params: {id : number} }) => {
  // const product = products.find((p) => p.id == params.id);
  useEffect(() => {
    console.log(params, "PARAMS");
  }, [params]);

  return (
    <Stack style={{ overflow: "hidden" }}>
      <Grid mx={{ base: 10, md: 0 }}>
        <Grid.Col visibleFrom="sm" span={{ xs: 12, md: 6 }}>
          <Box visibleFrom="md" className="h-full">
            <Gallery prop={Number(params.id)} />
          </Box>
        </Grid.Col>
        <Grid.Col span={{ xs:12, md: 6 }}>
          <Context prop={Number(params.id)} />
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default ProductPage;
