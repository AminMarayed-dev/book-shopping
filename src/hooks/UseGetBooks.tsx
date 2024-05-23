import { useEffect, useState } from "react";
import { getProductById } from "../api/products.api";
import { BookType } from "../components/card/CardItem";

export function UseGetBookById(bookId: string) {
    const [book, setBook] = useState<BookType>();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
      setIsLoading(true);
      setIsError(false);
      getProductById(bookId!)
        .then((data) => {
          setBook(data);
        })
        .catch((error) => {
          setIsError(true);
        })
        .finally(() => setIsLoading(false));
    }, [bookId]);
    return {
      data: book,
      isLoading,
      isError,
    };
}