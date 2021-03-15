import Link from 'next/link'
import { Box } from "@chakra-ui/react"
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
  <Box h="900px" bgColor="red">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Box>
  </Layout>
)

export default IndexPage
