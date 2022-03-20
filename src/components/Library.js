import { Text, Heading, VStack, SimpleGrid } from "@chakra-ui/react";

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
            } else {
              return null;
            }
          })}
      </SimpleGrid>
      <Heading size="md">Unfinished</Heading>
      <SimpleGrid columns={6} spacing={8}>
        {allBooks.length !== 0 &&
          allBooks.map((book) => {
            if (book.state === 1) {
              return <LibraryBook book={book} fetchData={refreshData} />;
            } else {
              return null;
            }
          })}
      </SimpleGrid>
      <Heading size="md">Wishlist</Heading>
      <SimpleGrid columns={6} spacing={8}>
        {allBooks.length !== 0 &&
          allBooks.map((book) => {
            if (book.state === 2) {
              return <LibraryBook book={book} fetchData={refreshData} />;
            } else {
              return null;
            }
          })}
      </SimpleGrid>
    </VStack>
  );
}
