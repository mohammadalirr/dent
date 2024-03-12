"use client";

import { cartSlice, useDispatch, useSelector } from "@/lib/redux";
import { selectDetails } from "@/lib/redux/slices/cartSlice/selectors";
import {
  Box,
  Button,
  Group,
  Image,
  NumberFormatter,
  Space,
  Stack,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { IconMinus } from "@tabler/icons-react";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { useCallback } from "react";

const CartTable = () => {
  const calc = useCallback(() => {
    dispatch(cartSlice.actions.calculator());
  }, []);

  const dispatch = useDispatch();
  const inCart = useSelector(selectDetails);
  return (
    <>
      {inCart.length > 0 ? (
        <Table withRowBorders={false}>
          <Table.Thead style={{ borderBottom: "7px #F3F4F6 solid" }}>
            <Table.Tr>
              <Table.Th pr={{ base: 0, md: 10 }}>نام محصول</Table.Th>
              <Table.Th>قیمت</Table.Th>
              <Table.Th>تعداد</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Space h={20} />
          <Table.Tbody>
            {inCart.map((p: any) => (
              <Table.Tr key={`${p.product.id}tableBody-${Math.random() * 100}`}>
                <Table.Td>
                  <Link href={`/product/${p.product.id}`}>
                    <Group>
                      <Image
                        h={{ base: 30, xs: 60 }}
                        w={{ base: 30, xs: 60 }}
                        src={p.product.images[0].src}
                        alt={p.product.name}
                      />
                      {p.product.name}
                    </Group>
                  </Link>
                </Table.Td>
                <Table.Td>
                  <Text size="sm" className="yekan">
                    <NumberFormatter
                      value={p.product.price}
                      thousandSeparator
                    />
                    {"  "}
                    تومان
                  </Text>
                </Table.Td>
                <Table.Td w={100} className="yekan">
                  <Group
                    grow
                    justify="space-between"
                    className="h-9 rounded-md"
                    w={90}
                  >
                    <Button
                      display="contents"
                      px={0}
                      variant="light"
                      onClick={() => {
                        dispatch(cartSlice.actions.increment(p.product.id));
                        calc();
                      }}
                    >
                      <IconPlus size={18} />
                    </Button>
                    <Box className="yekan text-center">{p.qty}</Box>
                    <Button
                      display="contents"
                      variant="light"
                      c={p.qty === 1 ? "red" : "blue"}
                      color={p.qty === 1 ? "red" : "blue"}
                      onClick={() => {
                        p.qty === 1
                          ? dispatch(cartSlice.actions.remove(p.product.id))
                          : dispatch(cartSlice.actions.decrement(p.product.id));
                        calc();
                      }}
                    >
                      {p.qty === 1 ? (
                        <IconTrash size={18} />
                      ) : (
                        <IconMinus size={18} />
                      )}
                    </Button>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      ) : (
        <Text size="xl" py={10} className="text-center">
          سبد خرید خالی ست
        </Text>
      )}
    </>
  );
};
export default CartTable;
