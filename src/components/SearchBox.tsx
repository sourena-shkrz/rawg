import { Input } from "@chakra-ui/react"
import { InputGroup } from "./ui/input-group"
import { IoSearch } from "react-icons/io5";
import { useRef } from "react";

interface Probs {
  onSerach : (searchText : string) => void;
}

const SearchBox = ({onSerach} : Probs) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form  onSubmit={(e)=>{
      e.preventDefault();
      if (ref.current) onSerach(ref.current.value);
      }}>
      <InputGroup width='100%' flex="1" startElement={<IoSearch />}>
          <Input ref={ref} borderRadius={20} variant='flushed' placeholder="Search Game..." />
      </InputGroup>
    </form>
  )
}

export default SearchBox