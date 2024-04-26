import { Box, Flex, Heading, Text, Image, SimpleGrid, Button } from '@chakra-ui/react';
import { FaCalendarAlt, FaMusic } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" h="100vh" bg="brand.800" color="white">
        <Heading as="h1" size="4xl" mb="4">The Rockers</Heading>
        <Text fontSize="xl" mb="8">Join us on our world tour!</Text>
        <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" variant="solid">
          View Tour Dates
        </Button>
      </Flex>
      <Box p="8">
        <Heading as="h2" size="xl" mb="4">About The Band</Heading>
        <Text fontSize="lg">
          The Rockers have been electrifying audiences worldwide with their unique blend of rock and roll. With over a decade of performances, they continue to be a powerhouse in the music industry.
        </Text>
      </Box>
      <Box p="8">
        <Heading as="h2" size="xl" mb="4">Tour Dates</Heading>
        <SimpleGrid columns={3} spacing={10}>
          <Box bg="gray.100" p="4" borderRadius="md">
            <Text fontWeight="bold">New York</Text>
            <Text>Sept 20, 2023</Text>
          </Box>
          <Box bg="gray.100" p="4" borderRadius="md">
            <Text fontWeight="bold">London</Text>
            <Text>Oct 5, 2023</Text>
          </Box>
          <Box bg="gray.100" p="4" borderRadius="md">
            <Text fontWeight="bold">Tokyo</Text>
            <Text>Oct 25, 2023</Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box p="8">
        <Heading as="h2" size="xl" mb="4">Photo Gallery</Heading>
        <SimpleGrid columns={3} spacing={4}>
          <Image src="/images/band-live1.jpg" alt="The Rockers live in concert" />
          <Image src="/images/band-live2.jpg" alt="The Rockers performing on stage" />
          <Image src="/images/band-group.jpg" alt="The Rockers group photo" />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Index;