import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import { Box, SimpleGrid, Image, Text, Flex ,Input,Button} from "@chakra-ui/react";
import Search from "./Search";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://www.omdbapi.com/?&apikey=722a3818&s=ted")
      .then((res) => {
        // console.log(res.data.Search)
        setData(res.data.Search);
      });
  }, []);
  console.log(data);
  return (<>
  
    <Search/>
    <SimpleGrid columns={[1, 2, 4]} spacing="20px" p="5px">
      {data.map((el) => {
        return (
          
          <Box border="1px" borderRadius="5px" key={el.imdbID}>
       <Link to ={`/movies/${el.imdbID}`}>
       
            <Image
              src={el.Poster}
              height="300px"
              width="100%"
              borderRadius="5px"
            />
            
            <Text textAlign={"left"} marginLeft="5px" >
             {el.Title}
            </Text>
            <Flex fontSize='sm' >
              <Text width="50%" textAlign={"left"} marginLeft="5px">
                type - {el.Type}
              </Text>

              <Text width="50%" textAlign={"left"} marginLeft="5px">
                year - {el.Year}
              </Text>
            </Flex>
            </Link> 
          </Box>
     
          
        );
      })}
    </SimpleGrid>
    </>);
 
};

export default Home;
