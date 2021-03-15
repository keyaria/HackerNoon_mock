import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'
import { Grid, GridItem } from '@chakra-ui/react'
type Props = {
  children?: ReactNode
  title?: string
}
{/*<header>
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>{' '}
    |{' '}
    <Link href="/about">
      <a>About</a>
    </Link>{' '}
    |{' '}
    <Link href="/users">
      <a>Users List</a>
    </Link>{' '}
    | <a href="/api/users">Users API</a>
  </nav>
</header>*/}
const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Grid
    templateRows="repeat(2, 1fr)"
    templateColumns="repeat(5, 1fr)"
    gap={4}
    bg="blue"
    maxWidth="1200px"
    width="100%"
    mt="7rem !important"
    m="3.5rem auto"
    >
    {children}
    </Grid>
    <GridItem colSpan={2} bg="papayawhip" />
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
