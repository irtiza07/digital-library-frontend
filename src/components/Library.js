import {
  Center,
  Text,
  Heading,
  VStack,
  Button,
  Input,
  HStack,
  Container,
  SimpleGrid,
  Image,
  Spinner,
  Box,
  Badge,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import LibraryBook from "./LibraryBook";

export default function Library({ allBooks, refreshData }) {
  return (
    <VStack spacing={7}>
      {" "}
      <Text>
        This is your digital library! Add new books here, browse them and even
        review them!
      </Text>
      <Heading size="md">Completed</Heading>
      <SimpleGrid columns={6} spacing={8}>
        {allBooks.length !== 0 &&
          allBooks.map((book) => {
            if (book.state === 0) {
              return <LibraryBook book={book} fetchData={refreshData} />;
            }
          })}
      </SimpleGrid>
      <Heading size="md">Unfinished</Heading>
      <SimpleGrid columns={6} spacing={8}>
        {allBooks.length !== 0 &&
          allBooks.map((book) => {
            if (book.state === 1) {
              return <LibraryBook book={book} fetchData={refreshData} />;
            }
          })}
      </SimpleGrid>
      <Heading size="md">Wishlist</Heading>
      <SimpleGrid columns={6} spacing={8}>
        {allBooks.length !== 0 &&
          allBooks.map((book) => {
            if (book.state === 2) {
              return <LibraryBook book={book} fetchData={refreshData} />;
            }
          })}
      </SimpleGrid>
    </VStack>
  );
}
