import React from 'react'
import { Flex, ButtonGroup, Button, Icon } from '@chakra-ui/react'
import { AiOutlineHeart, AiOutlineBulb, AiOutlineMoneyCollect } from 'react-icons/ai'
import { RiShipLine } from 'react-icons/Ri'

//Going to need to pass in props based on likes either map or foreach

export const Reactions = (props) => (
  <Flex {...props} width="fit-content">
    <ButtonGroup>
      <Icon as={AiOutlineHeart} fill="red" />
      <Icon as={AiOutlineBulb} />
      <Icon as={RiShipLine} />
      <Icon as={AiOutlineMoneyCollect} />
    </ButtonGroup>
  </Flex>
)
