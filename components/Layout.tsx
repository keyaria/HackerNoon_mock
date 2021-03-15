import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'
import styled from '@emotion/styled'
import { Grid, GridItem, Flex } from '@chakra-ui/react'
type Props = {
  children?: ReactNode
  title?: string
}

const GreenLink = styled.a`
  padding: 2px 0px 1px;
  cursor: pointer;
  background-image: linear-gradient(
    transparent 0%,
    transparent calc(50% - 9px),
    rgba(0, 255, 0, 0.35) calc(50% - 9px),
    rgba(0, 255, 0, 0.35) 100%
  );
  background-size: 100% 200%;
  background-position: 0px 0px;
  word-break: break-word;
  transition: all 120ms ease-in-out 0s;
  &:hover {
    background-size: 100%;
    background-image: linear-gradient(
      transparent 0%,
      transparent calc(60% - 9px),
      rgba(0, 255, 0, 0.35) calc(60% - 9px),
      rgba(0, 255, 0, 0.35) 100%
    );
  }
`
{
  /*<header>
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
</header>*/
}
const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Grid
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
    <Flex bg="rgb(246, 247, 249)">
      <ul style={{ listStyleType: `none` }}>
        <li>
          <GreenLink>Help</GreenLink>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Start Writing</a>
        </li>
        <li>
          <a>Sponser:</a>
        </li>
        <li>
          <a>Brand as Author</a>
        </li>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
      </ul>
      <ul>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
      </ul>
    </Flex>
  </div>
)

export default Layout
