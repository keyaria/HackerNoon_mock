import { useState } from 'react'
import {
  Flex,
  Icon,
  Box,
  Spacer,
  Wrap,
  Image,
  Text,
  VStack,
  SimpleGrid,
  Grid,
  Link as ChakraLink,
} from '@chakra-ui/react'
import Layout from '../components/Layout'
import { Reactions } from '../components/Reaction'
import { GridItem, Heading, Button } from '@chakra-ui/react'
import moment from 'moment'
import data from '../api/index.json'
import parse, { domToReact } from 'html-react-parser'
import { SquareAvatar, SectionDivider, CallToAction, GreenLink, Bar, Bars, BorderBox } from '../styles/common'
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineMail
} from 'react-icons/ai'

import { RiBookmarkLine } from 'react-icons/ri'

const IndexPage = () => {
  const [isShown, setIsShown] = useState(false)
  const options = {
    replace: ({ attribs, children}: any) => {
      if (!attribs) {
        return <GridItem colSpan={5}>{domToReact(children)}</GridItem>
      }

      if (attribs.class === 'paragraph') {
        return (
          <>
            <GridItem
              colStart={{ base: 1, md: 2 }}
              colEnd={-2}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              {domToReact(children)}
            </GridItem>
            <GridItem colStart={5} colEnd="auto" display={{ base: 'none', md: 'block' }}>
              <Flex
                alignItems="center"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                <Bars>
                  <Bar />
                </Bars>
                <Reactions display={isShown ? 'inherit' : 'none'} />
              </Flex>
            </GridItem>
          </>
        )
      }

      if (attribs.class === 'code-container') {
        return <GridItem colSpan={5}>{domToReact(children)}</GridItem>
      }

      if (attribs.class === 'gist-container') {
        return (
          <GridItem colStart={{ base: 1, md: 2 }} colEnd={-2}>
            {domToReact(children)}
          </GridItem>
        )
      }
      return (
        <GridItem colStart={{ base: 1, md: 2 }} colEnd={-2}>
          {domToReact(children)}
        </GridItem>
      )
    },
  }

  return (
    <Layout title={data.title} handle={data.profile.handle}>
      <GridItem colSpan={5}>
        {console.log(data)}
        <Box>
          <Heading textAlign="center"> {data.title}</Heading>
        </Box>
      </GridItem>
      <GridItem colSpan={5}>
        <Flex>
          {moment(data.publishedAt).format('MMMM Do YYYY')}
          <Icon as={RiBookmarkLine} w={4} h={4} ml="6px" />
          <Spacer />

          <Reactions justifyContent="flex-end" />
        </Flex>
      </GridItem>
      <GridItem
        positon="relative"
        colSpan={5}
      >
        <Image src={data.mainImage} />
      </GridItem>
      <GridItem colSpan={{ base: 5, md: 1 }}  pr="10px">
        <SquareAvatar src={data.profile.avatar} />
        <Box>
          <Box display="inline-flex" flexDirection="column">
            <GreenLink href="/">
              {' '}
              @{data.profile.handle}{' '}
            </GreenLink>
            <small> {data.profile.displayName} </small>
          </Box>
          <Text> {data.profile.bio} </Text>
          <Box>
            <Icon as={AiOutlineTwitter} color="green.500" w={6} h={6} mr="6px" />
            <Icon as={AiFillGithub} color="green.500" w={6} h={6} />
          </Box>
        </Box>
      </GridItem>
      {parse(data.markup, options)}
      <GridItem colSpan={5}>
        <Reactions margin="auto" />
      </GridItem>
      <GridItem colStart={2} colEnd={-2} border="green 2px solid">
        <Flex justifyContent="flex-end" mb="20px">
          Share This Story
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
        </Flex>

        <BorderBox>
          <Flex flexDirection="column">
            <SquareAvatar src={data.profile.avatar} />
            <Box>
              <Box display="inline-flex" flexDirection="column" my="10px">
                <GreenLink href="/">
                  {' '}
                  @{data.profile.handle}{' '}
                </GreenLink>
                <small> {data.profile.displayName} </small>
              </Box>
            </Box>
          </Flex>
          <Flex>
            <ChakraLink href={data.profile.adLink}>
              <Icon
                as={AiOutlineMail}
                color="green.500"
                w={6}
                h={6}
                mr="6px"
                display={{ base: 'none', md: 'inline-flex' }}
              />
              {data.profile.adText}
            </ChakraLink>
          </Flex>
        </BorderBox>
      </GridItem>

      <GridItem colSpan={5}>
        <SectionDivider> Related </SectionDivider>
        <SimpleGrid columns={3} spacing="30px" minChildWidth="300px">
          {data.relatedStories.map((story) => (
            <VStack border="2px solid rgb(246, 247, 249)" borderRadius="2px">
              {story.title && (
                <>
                  <Heading as="h3" fontSize="1.2rem" p="10px">
                    {' '}
                    {story.title}
                  </Heading>

                  <Image src={story.mainImage} h="200px" w="100%" />
                  <Flex p="15px 10px 0px" justifyContent="space-between" alignItems="center">
                    <Grid gap="20px" templateColumns="50px 1fr" placeItems="start" pr="10px">
                      <SquareAvatar src={story.profile.avatar} />
                      <Box>
                        <h3>{story.profile.handle}</h3>

                        <h3>{story.profile.displayName}</h3>
                      </Box>
                    </Grid>
                    <Box textAlign="right" fontSize="1.4rem">
                      {story.estimatedTime}min
                      {moment(story.publishedAt).format('MMMM Do YYYY')}
                    </Box>
                  </Flex>
                </>
              )}
            </VStack>
          ))}
        </SimpleGrid>
      </GridItem>
      <GridItem colStart={{ base: 1, md: 2 }} colEnd={{ base: -1, md: -2 }} mb="50px">
        <SectionDivider> Tags </SectionDivider>
        <Wrap justify="center">
          {data.tags.map((tag) => (
            <Button
              style={{
                boxShadow: `rgb(194 202 214) 0px 0.2em, rgb(194 202 214) 0px -0.2em, rgb(194 202 214) 0.2em 0px, rgb(194 202 214) -0.2em 0px`,
              }}
              _hover={{ bg: 'green.300' }}
            >
              {' '}
              {tag}{' '}
            </Button>
          ))}
        </Wrap>
      </GridItem>
      <GridItem
        colStart={{ base: 1, md: 2 }}
        colEnd={{ base: -1, md: -2 }}
        mt="25px"
        textAlign="center"
      >
        <CallToAction href="https://app.hackernoon.com/signup">
          {' '}
          Join Hacker Noon
        </CallToAction>
        <Text m="0" fontSize="1.6rem">
          {' '}
          Create your free account to unlock your custom reading experience.
        </Text>
      </GridItem>
    </Layout>
  )
}

export default IndexPage
