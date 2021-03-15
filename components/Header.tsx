import React, {useEffect, useState, useRef} from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  ButtonGroup,
  Spacer,
} from "@chakra-ui/react";
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiOutlineSearch,
  AiFillBell,
} from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import {DarkModeSwitch} from './DarkModeSwitch';
import { useViewportScroll } from "framer-motion";

export default function Header() {
  const bg = useColorModeValue("white", "gray.800");
  const navbg = useColorModeValue("rgb(0, 255, 0)", "rgb(0, 187, 0)")
  const mobileNav = useDisclosure();
  const text = useColorModeValue("dark", "light");
  const ref = useRef();
const [y, setY] = useState(0);
const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

const { scrollY } = useViewportScroll();
useEffect(() => {
  return scrollY.onChange(() => setY(scrollY.get()));
}, [scrollY]);

const TabGroup = (props) => (

    <ButtonGroup defaultIndex={1} borderBottomColor="transparent" variant="ghost" {...props} m="auto">
      <Button py={4} m={0} _focus={{ boxShadow: "none" }} href="#">
        Read
      </Button>
      <Button py={4} m={0} _focus={{ boxShadow: "none" }}>
        Top Stories
      </Button>
      <Button py={4} m={0} _focus={{ boxShadow: "none" }}>
        Notifications
      </Button>
      <Button py={4} m={0} _focus={{ boxShadow: "none" }}>
        Usage
      </Button>
      <Button py={4} m={0} _focus={{ boxShadow: "none" }}>
        Billing
      </Button>{" "}
      <Button isDisabled py={4} m={0}>
        Advanced
      </Button>
    </ButtonGroup>
);

const SecondNav = () => (
  <chakra.header
    bg={bg}
    borderColor="gray.600"
    borderBottomWidth={1}
    w="full"
    px={{ base: 2, sm: 3 }}
    py={2}

  >
  <Flex alignItems="center" justifyContent="space-between" mx="auto" flexWarp="wrap">
    <HStack spacing={4} display="flex" alignItems="center" flexBasis="60%">

      <chakra.a
        href="/"
        title="Choc Home Page"
        display="flex"
        alignItems="center"
      >
        <p>Logo</p>
        <VisuallyHidden>Hacker Noon</VisuallyHidden>
      </chakra.a>
      <Button
        variant="solid"
        href="#"
        size="sm"
        display={{ base: "none", md: "inline-flex" }}
      >
        Title
      </Button>
    </HStack>
    <HStack spacing={3} display="flex" alignItems="center">
      <HStack spacing={3} >

        <Button
          variant="ghost"
          href="#"
          size="sm"
          display={{ base: "none", md: "inline-flex" }}
        >
          Twitter
        </Button>
        <Button
          variant="solid"
          href="#"
          size="sm"
          display={{ base: "none", md: "inline-flex" }}
        >
          FaceBook
        </Button>
        <Button
          variant="ghost"
          href="#"
          leftIcon={<AiFillHome />}
          size="sm"
        >
        Linkendn

        </Button>
        <Button
          variant="ghost"
          href="#"
          leftIcon={<AiFillHome />}
          size="sm"
        >
        Email

        </Button>
      </HStack>

    </HStack>
  </Flex>
</chakra.header>


)
  return (

    <Box shadow="md" ref={ref} position="fixed" right="0" left="0" top="0">
    {console.log(scrollY, y, height)}

    {y < 150 ? (
      <div>
      <chakra.header
        bg={navbg}
        borderColor="gray.600"
        borderBottomWidth={1}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}

        opacity={y > 150 ? 0: 1}

      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack spacing={4} display="flex" alignItems="center">

            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <p>Logo</p>
              <VisuallyHidden>Hacker Noon</VisuallyHidden>
            </chakra.a>
          </HStack>
          <HStack spacing={3} display="flex" alignItems="center">
            <HStack spacing={3} >
            <InputGroup display={{ base: "block", lg: "block" }} ml="auto">
              <InputLeftElement
                pointerEvents="none"
                children={<AiOutlineSearch />}
              />
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
              <Button
                variant="ghost"
                href="#"
                size="sm"
                display={{ base: "none", md: "inline-flex" }}
              >
                Start Writing
              </Button>
              <Button
                variant="solid"
                href="#"
                size="sm"
                display={{ base: "none", md: "inline-flex" }}
              >
                Log in
              </Button>
              <Button
                variant="ghost"
                href="#"
                leftIcon={<AiFillHome />}
                size="sm"
              >
              <DarkModeSwitch />

              <VisuallyHidden>Switch Color Mode</VisuallyHidden>

              </Button>
            </HStack>
            <Box display={{ base: "inline-flex", md: "none" }} >
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
                height="100vh"
                bg="green"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <TabGroup display="flex" flexDirection="column" width="100%"/>

              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx={2}
        borderWidth={0}
        overflowX="auto"
        bg="rgb(0, 59, 0)"
        w="100%"
      >
        <TabGroup display={{ base: "none", lg: "block" }}/>
      </Flex>
      </div>
    ): (
      <SecondNav />
    )}
    </Box>
  );
}
