import CartAside from "@/components/content/cart/CartAside";
import CartTable from "@/components/content/cart/CartTable";
import { useSelector } from "@/lib/redux";
import {
  selectDetails,
  selectProducts,
} from "@/lib/redux/slices/cartSlice/selectors";
import {
  Box,
  Button,
  Flex,
  Group,
  Image,
  Space,
  Table,
  TextInput,
} from "@mantine/core";

const CartPage = () => {
  return (
    <>
      <Flex gap={{base: 50, md: 10}} direction={{base: "column", md:"row"}}>
        <Box mx={{base: 0, xs: 50, md: 0}} flex={3} className="rounded-lg bg-white">
          <Space h={10} />
          <CartTable />
        </Box>
        {/* <Space h={50} /> */}

        <Box mx={{base: 0, xs: 50, md: 0}} flex={1}>
          <CartAside />
        </Box>
      </Flex>
    </>
  );
};

export default CartPage;
