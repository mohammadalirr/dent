"use client";

import Badges from "@/components/content/home/Badges";
import Embla from "@/components/content/home/Embla";
import Category from "@/components/content/home/Category";
import { Box, Button, Group, Space, Stack, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import clsx from "clsx";
import Special from "@/components/content/home/Special";
import Popular from "@/components/content/home/Popular";
import Login from "@/components/auth/Login";
import Auth from "@/components/auth/Auth";
import { ToastContainer } from "react-toastify";
import {
  useCreateProductMutation,
  useGetAllProductsQuery,
} from "./api/store/productApi";
import { useEffect } from "react";
import { wcSlice } from "@/lib/redux/slices/wcSlice/wcSlice";
import { cartSlice, useDispatch } from "@/lib/redux";

const Home = () => {
  const isLg = useMediaQuery(`(max-width: ${em(1400)})`);
  const isMd = useMediaQuery(`(max-width: ${em(1200)})`);
  const isTablet = useMediaQuery(`(max-width: ${em(992)})`);

  //CREATE PRODUCT
  // const [productData, { data, isLoading, error }] = useCreateProductMutation();
  // useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //   } else if (error) {
  //     console.log(error);
  //   }
  // }, [data]);

  //GET PRODUCTS
  const { data, isLoading, status, error } = useGetAllProductsQuery(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch(wcSlice.actions.setProducts(data));
      dispatch(cartSlice.actions.setAllProducts(data));
    } else if (error) {
      console.log(error, "ERROR");
    } else {
      console.log(status, "STATUS");
    }

    // setSkip(true)
  }, [data]);

  const pd = {
    name: " دندان موشی",
    type: "simple",
    price: "124000",
    regular_price: "124000",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    short_description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    categories: [
      {
        id: 7,
      },

      {
        id: 2,
      },
    ],
    images: [
      {
        src: "https://i.natgeofe.com/n/9964c603-567a-4fd8-9a92-42a173f62162/tpc18-outdoor-gallery-1691685-11992122_17_3x2.jpg",
      },
      {
        src: "https://img.freepik.com/premium-vector/photo-icon-picture-icon-image-sign-symbol-vector-illustration_64749-4409.jpg",
      },
    ],
  };

  //CREATE PRODUCT
  // const handle = async () => {
  //   try {
  //     console.log("run", "handle");
  //     console.log(pd, "handle");
  //     await productData(pd);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      {/* <Button loading={isLoading} onClick={() => handle()}>
        ساخت محصول
      </Button> */}

      <Stack className={clsx("w-full h-auto")} align="center">
        <Group
          className={clsx(
            "w-full flex justify-evenly gap-5 z-10",
            isLg && "grow",
            isMd && "flex-col"
          )}
          align="center"
          justify="center"
          grow={!isMd}
        >
          <Box className={clsx(isMd && "w-11/12", !isMd && "w-5/12")}>
            <Embla />
          </Box>
          <Box className={clsx(isMd && "w-11/12", !isMd && "w-5/12")}>
            <Badges isTablet={isTablet} />
          </Box>
        </Group>
        <Box mt={isTablet ? 300 : 50} className="z-10 w-full">
          <Category />
        </Box>
        <Box mt={isTablet ? 100 : 50} className="z-10 w-full">
          <Special data={data} />
        </Box>
        <Box mt={isTablet ? 100 : 50} className="z-10 w-full">
          <Popular data={data} />
        </Box>
      </Stack>
    </>
  );
};

export default Home;
