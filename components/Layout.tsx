import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import styled from '@emotion/styled'
import { Grid, GridItem, Flex, List, ListItem } from '@chakra-ui/react'
type Props = {
  children?: ReactNode
  title?: string,
  handle?: string
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

const Layout = ({ children, title, handle }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header title={title} handle={handle} />
    <Grid
      templateColumns="repeat(5, 1fr)"
      gap={4}
      maxWidth="1200px"
      width="100%"
      mt="8rem !important"
      m="3.5rem auto"
    >
      {children}
    </Grid>
    <GridItem colSpan={2} />
    <Flex bg="rgb(246, 247, 249)">
      <List spacing={3} style={{ listStyleType: `none` }} display="flex" flexWarp="wrap">
        <ListItem mr="20px" mt="0px">
          <GreenLink>Help</GreenLink>
        </ListItem>
        <ListItem mr="20px">
          <GreenLink>About</GreenLink>
        </ListItem>
        <ListItem mr="20px">
          <GreenLink>Start Writing</GreenLink>
        </ListItem>
        <ListItem mr="20px">
          <GreenLink>Sponser:</GreenLink>
        </ListItem>
        <ListItem mr="20px">
          <GreenLink>Brand as Author</GreenLink>
        </ListItem>
      </List>

    </Flex>
  </div>
)

export default Layout
