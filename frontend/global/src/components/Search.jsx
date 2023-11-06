import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Flex,
  Input,
} from "@chakra-ui/react";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const [data, setData] = useState([]);

  const [timeoutId, updateTimeoutId] = useState();

  const fetchData = async (searchMovies) => {
    const res = await axios.get(
      `https://www.omdbapi.com/?s=${searchMovies}&apikey=722a3818`
    );
    setData(res.data.Search);
  };

  const handleSearch = (e) => {
    clearTimeout(timeoutId);
    setSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <div>
      <Box width={"70%"} m="auto" mt="15px" mb="10px">
        <Input
          placeholder="Enter Movies Name"
          value={searchQuery}
          onChange={handleSearch}
          border='2px'
        />
      </Box>
      <SimpleGrid columns={[1, 2, 4]} spacing="20px" p="5px">
        {data.map((el) => {
          return (
            <Box border="1px" borderRadius="5px">
              <Image
                src={el.Poster}
                height="300px"
                width="100%"
                borderRadius="5px"
              />
              <Text textAlign={"left"} marginLeft="5px">
                {el.Title}
              </Text>
              <Flex fontSize="sm">
                <Text width="50%" textAlign={"left"} marginLeft="5px">
                  {el.Type}
                </Text>

                <Text width="50%" textAlign={"left"} marginLeft="5px">
                  {el.Year}
                </Text>
              </Flex>
            </Box>
          );
        })}
      </SimpleGrid>
    </div>
  );
}

export default Search;
