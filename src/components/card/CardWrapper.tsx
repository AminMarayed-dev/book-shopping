import { useEffect, useState } from "react";
import CardItem, { BookType } from "./CardItem";
import { getProducts } from "../../api/products.api";
import "swiper/css";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../index.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function CardWrapper() {
  const [books, setBooks] = useState<BookType[]>([]);
  useEffect(() => {
    getProducts().then((data) => setBooks(data));
  }, []);
  return (
    <div className="">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper p-0 m-0"
      >
        {" "}
        <SwiperSlide>
          <img
            src="https://www.eurokidsindia.com/blog/wp-content/uploads/2023/08/funny-books.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.dribbble.com/users/1282369/screenshots/17319359/media/48a606d6ed848d81a687be0c83516a5d.jpg?resize=1000x750&vertical=center"
            alt=""
          />
        </SwiperSlide>

      </Swiper>
      <div className="mt-10 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3   gap-8 px-2 items-center  w-full justify-items-center  mb-60">
        {books.map((book) => (
          <CardItem book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
}

export default CardWrapper;
