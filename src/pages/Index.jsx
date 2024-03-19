import { useState, useEffect } from "react";
import { Box, Button, Flex, Heading, Image, Input, Select, Text } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaSearch, FaWheelchair } from "react-icons/fa";

const Index = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [destination, setDestination] = useState("");
  const [placeType, setPlaceType] = useState("");
  const [userDisabilities, setUserDisabilities] = useState([]);
  const [accessibleLocations, setAccessibleLocations] = useState([]);
  const [shortestRoute, setShortestRoute] = useState(null);

  useEffect(() => {
    // Get user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting current location:", error);
      },
    );
  }, []);

  const handleSearch = () => {
    // TODO: Implement search functionality
    // 1. Find accessible locations based on current location, destination, place type, and user disabilities
    // 2. Calculate the shortest route between current location and destination
    // 3. Update accessibleLocations and shortestRoute state
  };

  const handleRegisterProperty = () => {
    // TODO: Implement property registration functionality
  };

  const handleRegisterDisabilities = () => {
    // TODO: Implement user disabilities registration functionality
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Accessible Locations App
      </Heading>

      {/* Current Location */}
      <Flex align="center" mb={4}>
        <FaMapMarkerAlt />
        <Text ml={2}>Current Location: {currentLocation ? "Detected" : "Not Available"}</Text>
      </Flex>

      {/* Destination Input */}
      <Flex mb={4}>
        <Input placeholder="Enter destination" value={destination} onChange={(e) => setDestination(e.target.value)} mr={2} />
        <Select placeholder="Select place type" value={placeType} onChange={(e) => setPlaceType(e.target.value)} mr={2}>
          <option value="hospital">Hospital</option>
          <option value="park">Park</option>
          {/* Add more place types */}
        </Select>
        <Button leftIcon={<FaSearch />} onClick={handleSearch}>
          Search
        </Button>
      </Flex>

      {/* Map */}
      <Box mb={4}>
        <Image src="https://images.unsplash.com/photo-1577086664693-894d8405334a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXAlMjB3aXRoJTIwYWNjZXNzaWJsZSUyMGxvY2F0aW9uc3xlbnwwfHx8fDE3MTA4NzE4OTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Map" />
      </Box>

      {/* Accessible Locations */}
      <Box mb={4}>
        <Heading as="h2" size="lg" mb={2}>
          Accessible Locations
        </Heading>
        {/* TODO: Display accessible locations */}
      </Box>

      {/* Shortest Route */}
      <Box mb={4}>
        <Heading as="h2" size="lg" mb={2}>
          Shortest Route
        </Heading>
        {/* TODO: Display shortest route */}
      </Box>

      {/* Property Registration */}
      <Box mb={4}>
        <Heading as="h2" size="lg" mb={2}>
          Register Your Property as Accessible
        </Heading>
        <Button leftIcon={<FaWheelchair />} onClick={handleRegisterProperty}>
          Register Property
        </Button>
      </Box>

      {/* User Disabilities Registration */}
      <Box>
        <Heading as="h2" size="lg" mb={2}>
          Register Your Disabilities
        </Heading>
        <Button leftIcon={<FaWheelchair />} onClick={handleRegisterDisabilities}>
          Register Disabilities
        </Button>
      </Box>
    </Box>
  );
};

export default Index;
