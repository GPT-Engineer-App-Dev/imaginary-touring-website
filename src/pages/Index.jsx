import { Box, Flex, Heading, Text, Image, SimpleGrid, Button } from '@chakra-ui/react';
import { FaCalendarAlt, FaMusic } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" h="100vh" bgGradient="linear(to-r, purple.500, pink.500)" color="white">
        <Heading as="h1" size="4xl" mb="4">The Cosmic Journeys</Heading>
        <Text fontSize="xl" mb="8">Join us on our interstellar tour!</Text>
        <Button leftIcon={<FaCalendarAlt />} colorScheme="pink" variant="solid">
          View Tour Dates
        </Button>
      </Flex>
      <Box p="8">
        <Heading as="h2" size="xl" mb="4">About The Band</Heading>
        <Text fontSize="lg">
          The Cosmic Journeys bring a fusion of futuristic sounds and high-energy performances. Known for their spectacular live shows, they transport audiences to another dimension with their music.
        </Text>
      </Box>
      <Box p="8">
        <Heading as="h2" size="xl" mb="4">Tour Dates</Heading>
        <SimpleGrid columns={3} spacing={10}>
          <Box bg="purple.200" p="4" borderRadius="md">
            <Text fontWeight="bold">New York</Text>
            <Text>Sept 20, 2023</Text>
          </Box>
          <Box bg="purple.200" p="4" borderRadius="md">
            <Text fontWeight="bold">London</Text>
            <Text>Oct 5, 2023</Text>
          </Box>
          <Box bg="purple.200" p="4" borderRadius="md">
            <Text fontWeight="bold">Tokyo</Text>
            <Text>Oct 25, 2023</Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box p="8">
        <Heading as="h2" size="xl" mb="4">Photo Gallery</Heading>
        <SimpleGrid columns={3} spacing={4}>
          <Image src="/images/band-live1.jpg" alt="The Cosmic Journeys live in concert" />
          <Image src="/images/band-live2.jpg" alt="The Cosmic Journeys performing on stage" />
          <Image src="/images/band-group.jpg" alt="The Cosmic Journeys group photo" />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Index;