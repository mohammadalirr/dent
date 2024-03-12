"use client";

import {
  Box,
  Button,
  Card,
  Group,
  Image,
  NumberFormatter,
  Rating,
  Stack,
  Text,
} from "@mantine/core";
import { cartSlice, useDispatch, useSelector } from "@/lib/redux";
import {
  selectDetails,
  selectProducts,
} from "@/lib/redux/slices/cartSlice/selectors";
import { useCallback, useEffect, useState } from "react";
import {
  IconCategory,
  IconCheck,
  IconMinus,
  IconPlus,
  IconShoppingCartPlus,
  IconTrash,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import { theme } from "@/mantineTheme";

const Product = ({
  id,
  name,
  img,
  // disc,
  // spec,
  // aval,
  price,
}: // category,
// score,
{
  id: number;
  name: string;
  img: string;
  // disc: number;
  // spec: boolean;
  // aval: boolean;
  price: number;
  // category: string;
  // score: number;
}) => {
  // const [btn, setBtn] = useState<React.ReactNode>()

  const dispatch = useDispatch();
  const details = useSelector(selectDetails);
  const products = useSelector(selectProducts);

  const index = details.findIndex((i: any) => i.product.id === id);

  const calc = useCallback(() => {
    // setBtn()
    // const valid = products.find((item) => item === id)
    // if (valid !== undefined) {
    //   setBtn
    // }
    dispatch(cartSlice.actions.calculator());
    // console.log(products);
  }, []);

  return (
    <Card dir="rtl" shadow="md" style={{ width: "15em", margin: "auto" }}>
      <Card.Section>
        <Link href={`/product/${id}`}>
          <Image h={220} alt={name} src={img} className="w-full" />
          <div className="flex flex-col gap-2 absolute right-2 top-2">
            {/* {disc !== 0 ? (
              <span className="flex justify-center items-center rounded-full w-16 h-7 bg-teal-400 text-white text-xs py-0.5 px-1">{`${disc}%`}</span>
            ) : null}
            {spec ? (
              <span className="flex justify-center items-center rounded-full w-16 h-7 bg-red-400 text-white text-xs py-0.5 px-1">
                ویژه
              </span>
            ) : null} */}
          </div>
        </Link>
      </Card.Section>

      <Stack p={5}>
        <Group gap={10} justify="space-between">
          <Text>{name}</Text>
          <Box
            px={7}
            py={2}
            c="white"
            className="rounded-full bg-gray-400 hover:bg-gray-500 text-sm"
          >
            {/* <Group px={2} gap={3}>
              <IconCategory size={18} /> {category}
            </Group> */}
          </Box>
        </Group>
        {/* <Rating dir="ltr" value={score} fractions={2} readOnly /> */}
        <Text>
          {/* {aval ? (
            <span className="text-green-500 flex items-center justify-start">
              موجود
            </span>
          ) : (
            <span className="text-red-500 flex items-center justify-start">
              ناموجود
            </span>
          )} */}
        </Text>
        <Text className="yekan">
          <NumberFormatter thousandSeparator value={price} />
          {"  "}
          تومان
        </Text>
        {/* <Button onClick={() => dispatch(cartSlice.actions.addToCart(id))}>افزودن به سبد خرید</Button> */}
        {products.find((p: any) => p === id) !== undefined &&
        details[index] !== undefined ? (
          <Stack>
            <Group
              grow
              justify="space-between"
              className="w-full h-9 rounded-md"
            >
              <Button
                variant="light"
                onClick={() => {
                  dispatch(cartSlice.actions.increment(id));
                  calc();
                }}
              >
                <IconPlus size={18} />
              </Button>
              <Stack gap={0} align="center" className="yekan">
                {details[index].qty}
                <Link
                  href="./cart"
                  className="text-center text-xs text-blue-300"
                >
                  در‌سبد‌خرید
                </Link>
              </Stack>
              <Button
                variant="light"
                c={details[index].qty === 1 ? "red" : "blue"}
                color={details[index].qty === 1 ? "red" : "blue"}
                onClick={() => {
                  details[index].qty === 1
                    ? dispatch(cartSlice.actions.remove(id))
                    : dispatch(cartSlice.actions.decrement(id));
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
          variant="light"
            onClick={() => {
              dispatch(cartSlice.actions.addToCart(id));
              calc();
            }}
          >
            <Group justify="space-between">
              افزودن به سبد خرید
              <IconShoppingCartPlus size={18} />
            </Group>
          </Button>
        )}
      </Stack>
    </Card>
  );
};

export default Product;
