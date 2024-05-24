import { useParams } from "react-router-dom";
import { UseGetBookById } from "../../../hooks/UseGetBooks";

function Book() {
  const { bookId } = useParams();
  const { data, isLoading, isError } = UseGetBookById(bookId!);
  if (isError) {
    return <h1>something bad happened</h1>;
  }
  if (isLoading) {
    return <h1>...loading</h1>;
  }
  return (
    <div className="flex justify-center w-full  items-center mt-20">
      <div className="flex flex-col items-center justify-center border-2 px-10 py-10  rounded-lg bg-blue-100 mb-80 ">
      <img src={data?.imageURL} alt={data?.name} className="w-[200px] h-[200px]"/>
        <div className="mr-4">
          <h1 className="mb-4">نام کتاب: {data?.name}</h1>
          <p>درباره کتاب : {data?.detail}</p>
        </div>
        
      </div>
    </div>
  );
}

export default Book;
