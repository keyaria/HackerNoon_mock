import Link from 'next/link'
import { Box } from "@chakra-ui/react"
import Layout from '../components/Layout'
import { GridItem } from '@chakra-ui/react'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
  <GridItem colSpan={5}>
  <Box h="900px" bgColor="red" >
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Box>
  </GridItem>
  <GridItem colSpan={1} bg="papayawhip" />
  <GridItem colSpan={3} bg="green" />
  <GridItem colSpan={1} bg="rebeccapurple" />
  </Layout>
)

export default IndexPage
