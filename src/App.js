import { useEffect, useState } from "react";
import { Box, Center, Heading, Spinner, SimpleGrid } from "@chakra-ui/react";
import PokimonCard from "./components/PokimonCard";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=10`
    );
    const json = await response.json();
    setData((data) => [...data, ...json.data]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    if (!isLoading) setPage((prev) => prev + 1);
  };

  return (
    <Box bg={"#66EDFF"} p={4}>
      <Box>
        <Heading>Pokimon</Heading>
        <Box mt={10} pb={4} m={"0 auto"} maxW={"6xl"}>
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10}>
            {data.map((item, idx) => {
              return <PokimonCard key={idx} item={item} />;
            })}
          </SimpleGrid>
        </Box>
      </Box>

      {isLoading && (
        <Center mt={40} mb={12}>
          <Spinner size={"lg"} />
        </Center>
      )}
    </Box>
  );
}

export default App;
