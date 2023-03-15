import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="50px" />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default NavBar;