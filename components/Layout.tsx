import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import { GreenLink } from '../styles/common'
import { Grid, GridItem, Flex, List, ListItem } from '@chakra-ui/react'
type Props = {
  children?: ReactNode
  title?: string,
  handle?: string
}


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
        <ListItem mr="20px" >
          <GreenLink>Help</GreenLink>
        </ListItem>
        <ListItem mr="20px"  mt="0px !important">
          <GreenLink>About</GreenLink>
        </ListItem>
        <ListItem mr="20px"  mt="0px !important">
          <GreenLink>Start Writing</GreenLink>
        </ListItem>
        <ListItem mr="20px" mt="0px !important">
          <GreenLink>Sponser:</GreenLink>
        </ListItem>
        <ListItem mr="20px"  mt="0px !important">
          <GreenLink>Brand as Author</GreenLink>
        </ListItem>
      </List>

    </Flex>
  </div>
)

export default Layout
