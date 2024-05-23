import { useEffect, useState } from "react";
import CardItem, { BookType } from "./CardItem";
import { getProducts } from "../../api/products.api";

function CardWrapper() {
  const [books, setBooks] = useState<BookType[]>([]);
  useEffect(() => {
    getProducts().then((data) => setBooks(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-3 px-4 items-center mt-4 w-full justify-items-center mb-60">
      {books.map((book) => (
        <CardItem book={book} key={book.id} />
      ))}
    </div>
  );
}

export default CardWrapper;
