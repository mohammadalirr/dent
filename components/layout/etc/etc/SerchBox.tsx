"use client";

import { ActionIcon, TextInput, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";



const SearchBox = () => {

  const isMobile = useMediaQuery(`(max-width: ${em(1025)})`);


  const actionButton = (
    <ActionIcon size="lg" radius={100} variant="filled" aria-label="search">
      <IconSearch />
    </ActionIcon>
  );

  return (
    <TextInput
      placeholder="جستجو برای محصولات"
      size="md"
      radius={100}
      rightSection={actionButton}
      style={{ fontFamily: "Vazirmatn" }}
      className={isMobile? 'w-11/12' : 'w-full'}
    />
  );
};

export default SearchBox;
