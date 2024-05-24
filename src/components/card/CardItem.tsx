import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export type BookType = {
  id: string;
  name: string;
  imageURL: string;
  price: number;
  detail: string;
};

function CardItem({ book }: { book: BookType }) {
  const navigate = useNavigate();
  const handleNavigate = (id: string) => {
    navigate(`/book/${id}`);
  };
  return (
    <Card width={"400px"} className="shadow-2xl shadow-black bg-white">
      <CardBody className="flex flex-col justify-center items-center  truncate">
        <Image src={book.imageURL} alt={book.name} borderRadius="lg" width={"150px"} height={"200px"}/>
        <Stack mt="6" spacing="3">
          <Heading size="md">{book.name}</Heading>
          <Text>{book.detail}</Text>
          <Text color="blue.600" fontSize="2xl">
           قیمت: {book.price  } ریال  
          </Text>
        </Stack>
      </CardBody>

      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => handleNavigate(book.id)}
          >
            اطلاعات بیشتر
          </Button>
          <Button variant="ghost" colorScheme="blue">
            افزودن به سبد خرید
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default CardItem;
