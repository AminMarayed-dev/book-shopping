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
    <div className="flex justify-center">
      <div className="flex items-center justify-center border-2 px-2 py-4 mt-4 rounded-lg bg-blue-100">
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
