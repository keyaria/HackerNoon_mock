import React from 'react'
import { Flex, ButtonGroup, Button } from '@chakra-ui/react'

//Going to need to pass in props based on likes either map or foreach

export const Reactions = (props) => (
  <Flex {...props} width="fit-content">
    <ButtonGroup>
      <Button>sdfds</Button>
      <Button>sfdff</Button>
      <Button>sdfdsf</Button>
      <Button>sdf</Button>
    </ButtonGroup>
  </Flex>
)
