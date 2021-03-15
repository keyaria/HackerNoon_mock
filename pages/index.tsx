import Link from 'next/link'
import { Flex, Box, Spacer, Image, Text, Avatar, Link as ChakraLink } from '@chakra-ui/react'
import Layout from '../components/Layout'
import { Reactions } from '../components/Reaction'
import { GridItem, Heading, Button } from '@chakra-ui/react'
import moment from 'moment'
import data from './api/index.json'
import parse, { domToReact } from 'html-react-parser'

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
          <GridItem colStart={2} colEnd={-2}>
            {domToReact(children)}
          </GridItem>
          <GridItem colStart={5} colEnd="auto">
            <Reactions />
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
  <Layout title="Home | Next.js + TypeScript Example">
    <GridItem colSpan={5}>
      <Box bgColor="red">
        <Heading> {data.title}</Heading>
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
    <GridItem colSpan={1} bg="papayawhip">
      <Avatar src={data.profile.avatar} />
      <ChakraLink href="/"> @{data.profile.handle} </ChakraLink>
      <Heading as="h6"> {data.profile.displayName} </Heading>
      <Text> {data.profile.bio} </Text>
      <Box>Twitter github</Box>
    </GridItem>
    {parse(data.markup, options)}
    <GridItem colSpan={5} bg="green">
      <Reactions margin="auto" />
    </GridItem>
    <GridItem colStart={2} colEnd={-2} bg="rebeccapurple" border="green 2px solid">
      Block of content
    </GridItem>

    <GridItem colSpan={5} bg="green">
      <Heading> Related </Heading>
      {data.relatedStories.map((story) => (
        <Box> {story.text} </Box>
      ))}
    </GridItem>
    <GridItem colSpan={5} bg="green">
      <Heading> Tags </Heading>

      {data.tags.map((tag) => (
        <Button> {tag} </Button>
      ))}
    </GridItem>
    <GridItem colStart={2} colEnd={-2} bg="rebeccapurple" border="green 2px solid">
      <Button>Call to Action</Button>
      <p> Create your free account to unlock your custom reading experience.</p>
    </GridItem>
  </Layout>
)

export default IndexPage
