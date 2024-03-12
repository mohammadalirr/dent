"use client";

import { cartSlice, useDispatch, useSelector } from "@/lib/redux";
import {
  selectDetails,
  selectProducts,
} from "@/lib/redux/slices/cartSlice/selectors";
import {
  Box,
  Button,
  Group,
  Loader,
  NumberFormatter,
  Rating,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconAnalyze,
  IconHeart,
  IconHeartFilled,
  IconShare,
  IconShoppingCartPlus,
} from "@tabler/icons-react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconMinus,
  IconPlus,
  IconStarFilled,
  IconTrash,
} from "@tabler/icons-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Crsl from "./Carousel";
import { selectWcProducts } from "@/lib/redux/slices/wcSlice/selectors";
import clsx from "clsx";

const Context = ({ prop }: { prop: number }) => {
  const products = useSelector(selectWcProducts);
  const prdct = products.find((p: any) => p.id === prop);

  const dispatch = useDispatch();
  const details = useSelector(selectDetails);
  const productIds = useSelector(selectProducts);

  const index = details.findIndex((i: any) => i.product.id === prop);

  const [loved, setLoved] = useState<boolean>(true);

  useEffect(() => {
    // console.log(prop, "getId");
    // console.log(products, "wcProducts");
    // console.log(prdct, "foundProduct");
    // console.log(details, "details");
    // console.log(productIds, "productIds");
    // console.log(index, "index");
    console.log(loved)
  }, [loved]);

  // const id = Number(prop.id);
  // const price = Number(prop.price);

  const calc = useCallback(() => {
    dispatch(cartSlice.actions.calculator());
  }, []);

  return (
    <>
      {prdct ? (
        <Stack gap={5} justify="space-between" className="w-full h-full">
          <Group
            justify="space-between"
            className="w-full bg-white px-7 py-4 rounded-t-lg"
            wrap="nowrap"
            gap={0}
          >
            {/* <Group gap={5} className="text-xs">
            <Link href="../">خانه</Link>/<Link href="#">محصولات</Link>/
            <span>{prop.name}</span>
          </Group> */}
            <Text size="lg" fw="bold">
              {prdct.name}
            </Text>
            <Group gap={5}>
              <Link
                href="#"
                className="text-blue-500 text-xs text-nowrap md:text-sm"
              >
                <Group gap={2}>
                  <Box visibleFrom="xs">
                    <IconArrowNarrowRight size={15} />
                  </Box>
                  قبلی
                </Group>
              </Link>
              <span className="text-blue-500 text-xs">|</span>
              <Link
                href="/"
                className="text-blue-500 text-xs md:text-sm text-nowrap"
              >
                خانه
              </Link>

              <span className="text-blue-500 text-xs">|</span>
              <Link
                href="#"
                className="text-blue-500 text-xs md:text-sm text-nowrap"
              >
                <Group gap={2}>
                  بعدی
                  <Box visibleFrom="xs">
                    <IconArrowNarrowLeft size={15} />
                  </Box>
                </Group>
              </Link>
            </Group>
          </Group>
          <Box hiddenFrom="md">
            <Crsl prdct={prdct} />
          </Box>

          <Stack
            py={30}
            justify="space-between"
            gap={50}
            className="h-full px-7 bg-white py-5 rounded-b-lg"
          >
            <Group justify="space-between">
              <Stack gap={40}>
                <Group gap={5} c="gray">
                  <span>شناسه:</span>
                  <span className="yekan"> {prop}</span>
                </Group>
                <Rating value={prdct.average_rating} readOnly />

                {/* <Group> */}
                {/* <span>امتیاز کاربران :</span> */}
                {/* <Group className="yekan" gap={1}>
                  <span className="text-yellow-400">
                    {" "}
                    <IconStarFilled size={15} />
                  </span>
                  {prop.score}
                </Group> */}
                {/* </Group> */}

                <Group c={prdct.stock_quantity !== 0 ? "green" : "red"}>
                  {/* <span>وضعیت در انبار :</span> */}
                  {!prdct.stock_quantity ? "موجود" : "ناموجود"}
                </Group>
              </Stack>

              <Stack
                visibleFrom="xs"
                c="gray"
                bg="#ffffff"
                style={{ border: "5px solid #F3F4F6" }}
                gap={25}
                className="self-start rounded-lg py-4 px-4 text-sm"
              >
                <Group gap={5} className="hover:text-black cursor-pointer">
                  <IconShare size={18} />

                  <span>اشتراک گذاری</span>
                </Group>
                <Group onClick={() => setLoved(prev => !prev)} className={clsx("hover:text-black cursor-pointer", loved && "text-black")} gap={5}>
                {loved ? (<IconHeartFilled style={{color:"#C5221F"}} size={18} />) : (<IconHeart size={18} />)}

                  <span>افزودن به علاقه مندی ها</span>
                </Group>
                <Group className="hover:text-black cursor-pointer" gap={5}>
                  <IconAnalyze size={18} />
                  <span>مقایسه محصول</span>
                </Group>
              </Stack>
            </Group>
            <Group>
              {/* <span>قیمت :</span> */}
              <Group>
                <Group className="yekan" gap={20}>
                  <Text
                    td={
                      prdct.price !== prdct.regular_price ? "line-through" : ""
                    }
                  >
                    <NumberFormatter
                      thousandSeparator
                      value={prdct.regular_price}
                    />
                    &nbsp; تومان
                  </Text>
                  {prdct.price !== prdct.regular_price ? (
                    <Group>
                      {" "}
                      <Text size="xl" c="teal">
                        <NumberFormatter
                          thousandSeparator
                          value={prdct.price}
                        />
                        &nbsp; تومان
                      </Text>
                    </Group>
                  ) : null}
                </Group>
              </Group>
            </Group>

            {productIds.find((p: any) => p == prop) !== undefined &&
            details[index] !== undefined ? (
              <Stack>
                <Group
                  grow
                  justify="space-between"
                  className="w-full h-9 rounded-md"
                >
                  <Button
                    size="lg"
                    variant="light"
                    onClick={() => {
                      dispatch(cartSlice.actions.increment(prop));
                      calc();
                    }}
                  >
                    <IconPlus size={18} />
                  </Button>
                  <Stack gap={0} align="center" className="yekan">
                    {details[index].qty}
                    <Link
                      href="#"
                      className="text-center text-xs text-blue-300"
                    >
                      در‌سبد‌خرید
                    </Link>
                  </Stack>
                  <Button
                    size="lg"
                    variant="light"
                    c={details[index].qty === 1 ? "red" : "blue"}
                    color={details[index].qty === 1 ? "red" : "blue"}
                    onClick={() => {
                      details[index].qty === 1
                        ? dispatch(cartSlice.actions.remove(prop))
                        : dispatch(cartSlice.actions.decrement(prop));
                      calc();
                    }}
                  >
                    {details[index].qty === 1 ? (
                      <IconTrash size={18} />
                    ) : (
                      <IconMinus size={18} />
                    )}
                  </Button>
                </Group>
                {/* <Link href="#" className="text-center text-sm text-blue-300">
              مشاهده سبد خرید
            </Link> */}
              </Stack>
            ) : (
              <Button
                disabled={prdct.stock_quantity > 0}
                size="lg"
                onClick={() => {
                  dispatch(cartSlice.actions.addToCart(prop));
                  calc();
                }}
              >
                <Group justify="space-between">
                  افزودن به سبد خرید
                  <IconShoppingCartPlus size={18} />
                </Group>
              </Button>
            )}
            <Stack
              hiddenFrom="xs"
              c="gray"
              bg="#ffffff"
              style={{ border: "5px solid #F3F4F6" }}
              gap={25}
              className="self-start rounded-lg py-4 px-4 text-sm w-full"
            >
              <Group gap={5} className="hover:text-black cursor-pointer">
                <IconShare size={18} />

                <span>اشتراک گذاری</span>
              </Group>
              <Group onClick={() => setLoved(false)} className="hover:text-black cursor-pointer" gap={5}>
                {loved ? (<IconArrowNarrowLeft color="#000000" size={18} />) : (<IconHeart size={18} />)}
                <span>افزودن به علاقه مندی ها</span>
              </Group>
              <Group className="hover:text-black cursor-pointer" gap={5}>
                <IconAnalyze size={18} />
                <span>مقایسه محصول</span>
              </Group>
            </Stack>
          </Stack>
        </Stack>
      ) : (
        <Loader type="dots" />
      )}
    </>
  );
};

export default Context;
