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
  useToast,
} from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";

import { useState, useEffect } from "react";

const VALID_RATINGS = [1, 2, 3, 4, 5];

export default function LibraryBook({ book, fetchData }) {
  const bookMovedToast = useToast();
  const moveBook = (book, newSection) => {
    const body = JSON.stringify({
      volume_id: book.volume_id,
      new_state: newSection,
    });
    fetch("http://127.0.0.1:8000/books/update_book_state", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((response) => response.json())
      .then((data) => {
        bookMovedToast({
          title: "Moved",
          description: "Book moved to a different section",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        console.log("Going to fetch data again!");
        fetchData();
      });
  };

  const ratingChanged = (new_rating, book) => {
    const body = JSON.stringify({
      volume_id: book.volume_id,
      new_rating: new_rating,
    });
    fetch("http://127.0.0.1:8000/books/update_rating", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((response) => response.json())
      .then((data) => {
        bookMovedToast({
          title: "Rated!",
          description: "Book rated successfully!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        console.log("Going to fetch data again!");
        fetchData();
      });
  };

  return (
    <VStack
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      spacing={8}
      key={book.id}
      padding={4}
    >
      <Image src={book.thumbnail} width={40} height={60} paddingTop={2} />
      <Center>
        <Heading size="sm">{book.title}</Heading>
      </Center>
      {book.state == 0 && !book.rating && (
        <Text fontSize="sm"> Rate Book? </Text>
      )}
      {book.state == 0 && (
        <ReactStars
          count={5}
          onChange={(new_rating) => ratingChanged(new_rating, book)}
          size={24}
          activeColor="#ffd700"
          value={book.rating}
        />
      )}
      {book.state == 1 && (
        <Button
          variant="outline"
          colorScheme="red"
          size="sm"
          onClick={() => moveBook(book, 0)}
        >
          Completed Book?
        </Button>
      )}
      {book.state == 2 && (
        <Button
          variant="outline"
          colorScheme="red"
          size="sm"
          onClick={() => moveBook(book, 1)}
        >
          Purchased Book?
        </Button>
      )}
    </VStack>
  );
}
