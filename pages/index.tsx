import Link from 'next/link'
import {
  Flex,
  Icon,
  Box,
  Spacer,
  Wrap,
  Image,
  Text,
  Avatar,
  VStack,
  SimpleGrid,
  Grid,
  Link as ChakraLink,
} from '@chakra-ui/react'
import Layout from '../components/Layout'
import { Reactions } from '../components/Reaction'
import { GridItem, Heading, Button } from '@chakra-ui/react'
import moment from 'moment'
import data from './api/index.json'
import parse, { domToReact } from 'html-react-parser'
import styled from '@emotion/styled'
import { SquareAvatar, SectionDivider, CallToAction, GreenLink } from '../styles/common.ts'
import { AiOutlineTwitter, AiFillGithub } from 'react-icons/ai'
console.log(data)
console.log(moment(data.publishedAt).format('MMMM Do YYYY'))

const options = {
  replace: ({ attribs, children }) => {
    if (!attribs) {
      return <GridItem colSpan={5}>{domToReact(children)}</GridItem>
    }

    if (attribs.class === 'paragraph') {
      return (
        <>
          <GridItem colStart={2} colEnd={-2} onHover>
            {domToReact(children)}
          </GridItem>
          <GridItem colStart={5} colEnd="auto" onHover>
            <Reactions display="none" />
          </GridItem>
        </>
      )
    }

    if (attribs.class === 'code-container') {
      return <GridItem colSpan={5}>{domToReact(children)}</GridItem>
    }

    if (attribs.class === 'gist-container') {
      return (
        <GridItem colStart={2} colEnd={-2}>
          {domToReact(children)}
        </GridItem>
      )
    }
    return (
      <GridItem colStart={2} colEnd={-2}>
        {domToReact(children)}
      </GridItem>
    )
  },
}

const IndexPage = () => (
  <Layout title={data.title} handle={data.profile.handle}>
    <GridItem colSpan={5}>
      {console.log(data)}
      <Box bgColor="red">
        <Heading textAlign="center"> {data.title}</Heading>
      </Box>
    </GridItem>
    <GridItem colSpan={5} bg="pink">
      <Flex>
        {moment(data.publishedAt).format('MMMM Do YYYY')}
        <Button>Favorite</Button>

        <Spacer />

        <Reactions justifyContent="flex-end" />
      </Flex>
    </GridItem>
    <GridItem colSpan={5}>
      <Image src={data.mainImage} />
    </GridItem>
    <GridItem colSpan={1} bg="papayawhip" pr="10px">
      <SquareAvatar src={data.profile.avatar} />
      <Box>
        <Box display="inline-flex" flexDirection="column">
          <GreenLink href="/" display="block">
            {' '}
            @{data.profile.handle}{' '}
          </GreenLink>
          <small display="block"> {data.profile.displayName} </small>
        </Box>
        <Text> {data.profile.bio} </Text>
        <Box>
          <Icon as={AiOutlineTwitter} color="green.500" w={6} h={6} mr="6px" />
          <Icon as={AiFillGithub} color="green.500" w={6} h={6} />
        </Box>
      </Box>
    </GridItem>
    {parse(data.markup, options)}
    <GridItem colSpan={5} bg="green">
      <Reactions margin="auto" />
    </GridItem>
    <GridItem colStart={2} colEnd={-2} bg="rebeccapurple" border="green 2px solid">
      Block of content
    </GridItem>

    <GridItem colSpan={5} bg="green">
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
                    {story.profile.estimatedTime}
                    {moment(story.profile.publishedAt).format('MMMM Do YYYY')}
                  </Box>
                </Flex>
              </>
            )}
          </VStack>
        ))}
      </SimpleGrid>
    </GridItem>
    <GridItem colStart={2} colEnd={-2} bg="green" mb="50px">
      <SectionDivider> Tags </SectionDivider>
      <Wrap justify="center">
        {data.tags.map((tag) => (
          <Button> {tag} </Button>
        ))}
      </Wrap>
    </GridItem>
    <GridItem
      colStart={2}
      colEnd={-2}
      bg="rebeccapurple"
      border="green 2px solid"
      mt="25px"
      textAlign="center"
    >
      <CallToAction href="https://app.hackernoon.com/signup" fontSize="3rem !important">
        {' '}
        Call to Action
      </CallToAction>
      <Text m="0" fontSize="1.6rem">
        {' '}
        Create your free account to unlock your custom reading experience.
      </Text>
    </GridItem>
  </Layout>
)

export default IndexPage
