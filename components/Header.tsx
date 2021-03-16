import React, { useEffect, useState, useRef } from 'react'
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
  InputRightElement,
  Input,
  Icon,
  Avatar,
  ButtonGroup,
  Spacer,
  Image,
  Heading,
} from '@chakra-ui/react'
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineSearch,
  AiOutlineMenu,
  AiFillHome,
} from 'react-icons/ai'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { DarkModeSwitch } from './DarkModeSwitch'
import { useViewportScroll } from 'framer-motion'
import { GreenLink } from '../styles/common.ts'

export default function Header({ title, handle }) {
  const bg = useColorModeValue('white', 'gray.800')
  const navbg = useColorModeValue('rgb(0, 255, 0)', 'rgb(0, 187, 0)')
  const mobileNav = useDisclosure()
  const text = useColorModeValue('dark', 'light')
  const ref = useRef()
  const [y, setY] = useState(0)
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {}

  const { scrollY } = useViewportScroll()
  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()))
  }, [scrollY])

  const TabGroup = (props) => (
    <ButtonGroup
      defaultIndex={1}
      borderBottomColor="transparent"
      variant="ghost"
      {...props}
      m="auto"
    >
      <Button py={4} m={0} _focus={{ boxShadow: 'none' }} href="#">
        Read
      </Button>
      <Button py={4} m={0} _focus={{ boxShadow: 'none' }}>
        Top Stories
      </Button>
      <Button py={4} m={0} _focus={{ boxShadow: 'none' }}>
        Notifications
      </Button>
      <Button py={4} m={0} _focus={{ boxShadow: 'none' }}>
        Usage
      </Button>
      <Button py={4} m={0} _focus={{ boxShadow: 'none' }}>
        Billing
      </Button>{' '}
      <Button isDisabled py={4} m={0}>
        Advanced
      </Button>
    </ButtonGroup>
  )

  const SecondNav = (props) => (
    <chakra.header bg={bg} borderColor="gray.600" w="full" px={{ base: 2, sm: 3 }} py={2}>
      <Flex alignItems="center" justifyContent="space-between" mx="auto" flexWarp="wrap">
        <HStack spacing={4} display="flex" alignItems="center" flexBasis="70%">
          <chakra.a href="/" title="Hacker Noon" display="flex" alignItems="center">
            <img src="/hn-icon.png" height="24px" width="24px" />
            <VisuallyHidden>Hacker Noon</VisuallyHidden>
          </chakra.a>
          <Heading size="md">
            {' '}
            {props.title} by <GreenLink> @{props.handle}</GreenLink>{' '}
          </Heading>
        </HStack>
        <HStack spacing={3} display="flex" alignItems="center">
          <HStack spacing={3}>
            <Icon
              as={AiOutlineTwitter}
              color="green.500"
              w={6}
              h={6}
              mr="6px"
              display={{ base: 'none', md: 'inline-flex' }}
            />
            <Icon
              as={AiOutlineFacebook}
              color="green.500"
              w={6}
              h={6}
              mr="6px"
              display={{ base: 'none', md: 'inline-flex' }}
            />
            <Icon
              as={AiOutlineLinkedin}
              color="green.500"
              w={6}
              h={6}
              mr="6px"
              display={{ base: 'none', md: 'inline-flex' }}
            />
            <Icon
              as={AiOutlineMail}
              color="green.500"
              w={6}
              h={6}
              mr="6px"
              display={{ base: 'none', md: 'inline-flex' }}
            />
          </HStack>
        </HStack>
      </Flex>
    </chakra.header>
  )
  return (
    <Box shadow="md" ref={ref} position="fixed" right="0" left="0" top="0">
      {y < 150 ? (
        <div>
          <chakra.header
            bg={navbg}
            borderColor="gray.600"
            borderBottomWidth={1}
            w="full"
            px={{ base: 2, sm: 4 }}
            py={4}
            opacity={y > 150 ? 0 : 1}
          >
            <Flex alignItems="center" justifyContent="space-between" mx="auto">
              <HStack spacing={4} display="flex" alignItems="center">
                <chakra.a href="/" title="Hacker Noon" display="flex" alignItems="center">
                  <Image src="/hn-logo.png" h="40px" w="248px" />
                  <VisuallyHidden>Hacker Noon</VisuallyHidden>
                </chakra.a>
              </HStack>
              <HStack spacing={3} display="flex" alignItems="center">
                <HStack spacing={3}>
                  <InputGroup display={{ base: 'block', lg: 'block' }} ml="auto" color="green.300">
                    <Input
                      type="tel"
                      placeholder="Search..."
                      background="black"
                      color="green.300"
                    />
                    <InputRightElement pointerEvents="none" children={<AiOutlineSearch />} />
                  </InputGroup>
                  <Button
                    variant="outline"
                    colorScheme="black"
                    href="#"
                    size="md"
                    display={{ base: 'none', md: 'inline-flex' }}
                    mx="1rem"
                    w="200px !important"
                  >
                    Start Writing
                  </Button>
                  <Button
                    variant="ghost"
                    href="#"
                    size="sm"
                    display={{ base: 'none', md: 'inline-flex' }}
                  >
                    Log in
                  </Button>
                  <DarkModeSwitch />
                </HStack>
                <Box display={{ base: 'inline-flex', md: 'none' }}>
                  <IconButton
                    display={{ base: 'flex', md: 'none' }}
                    aria-label="Open menu"
                    fontSize="20px"
                    color={useColorModeValue('gray.800', 'inherit')}
                    variant="ghost"
                    icon={<AiOutlineMenu />}
                    onClick={mobileNav.onOpen}
                  />
                  <VStack
                    pos="absolute"
                    top={0}
                    left={0}
                    right={0}
                    display={mobileNav.isOpen ? 'flex' : 'none'}
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
                    <TabGroup display="flex" flexDirection="column" width="100%" />
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
            <TabGroup display={{ base: 'none', lg: 'block' }} color="white" />
          </Flex>
        </div>
      ) : (
        <SecondNav title={title} handle={handle} />
      )}
    </Box>
  )
}
