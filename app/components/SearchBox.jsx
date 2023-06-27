"use client";
import Input from "@mui/joy/Input";
const SearchBox = ({setQuery}) => {
  return (
    <div className="w-40 my-4 mx-auto">
      <Input onChange={(e)=>{setQuery(e.target.value)}} placeholder="search robots" variant="outlined" color="info" />
    </div>
  );
};
export default SearchBox;
