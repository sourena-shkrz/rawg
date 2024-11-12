import { Input } from "@chakra-ui/react"
import { InputGroup } from "./ui/input-group"
import { IoSearch } from "react-icons/io5";
const SearchBox = () => {
  return (
    <InputGroup flex="1" startElement={<IoSearch />}>
        <Input borderRadius={20} variant='flushed' placeholder="Search Game..." />
    </InputGroup>
  )
}

export default SearchBox