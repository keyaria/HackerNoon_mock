import React from 'react'
import { Flex, ButtonGroup, Icon } from '@chakra-ui/react'
import { AiOutlineHeart, AiOutlineBulb, AiOutlineMoneyCollect } from 'react-icons/ai'
import { RiShipLine } from 'react-icons/ri'


export const Reactions = (props: any) => (
  <Flex {...props} width="fit-content">
    <ButtonGroup>
      <Icon as={AiOutlineHeart} _hover={{ fill: 'red', width: '8', height: '8' }} w={6} h={6} />
      <Icon as={AiOutlineBulb} w={6} h={6} />
      <Icon as={RiShipLine} w={6} h={6} />
      <Icon as={AiOutlineMoneyCollect} w={6} h={6} />
    </ButtonGroup>
  </Flex>
)
