import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
export const DarkModeSwitch = () => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')

  const SwitchIcon = useColorModeValue(FaSun, FaMoon)

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="green"
      ml={{ base: '0', md: '3' }}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    />
  )
}
