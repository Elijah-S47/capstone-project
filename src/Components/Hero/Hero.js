import { Heading, Box, VStack } from '@chakra-ui/react'
import React from 'react'
import './Hero.css';

const Hero = () => {
  return (
    <VStack>
      <Box>
        <Heading as='h1'>Little Lemon</Heading>
        <Heading as='h2'>Chicago</Heading>
      </Box>
      <Box>
      </Box>
    </VStack>
  )
}

export default Hero