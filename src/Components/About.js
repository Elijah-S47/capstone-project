import React from 'react'

import { Box, Stack, VStack, Heading, Image, Text, } from '@chakra-ui/react'
import { Mario } from '../icons_assets'

const About = () => {
  return (
    <Stack
    display='flex'
    flexDirection='collumn'
    justifyContent='center'
    >
    <VStack
    alignItems='start'
    alignContent='start'
    display='flex'
    padding= {{ base : '20px', sm: '30px', lg: '40px' }}
    >
      <Heading
      fontSize={{ base: '28px', sm: '35px', md: '50px', lg:'80px'}}
      color='#000000'
      >Little Lemon</Heading>
      <Heading
      fontSize={{ base: '20px', sm: '30px', md: '40px', lg:'70px'}}
      color='#000000'
      >Chicago
      </Heading>
      <Text
      fontSize={{ base: '10px', sm: '15px', md: '20px', lg:'30px'}}
      color='#000000'
      >aliqua dolor do amet sint. Velit officia <br />
      deserunt ullamco est sit <br />
      Amet minim mollit non  <br />
      consequat duis enim velit <br />
      mollit. Exercitation veniam <br />
      consequat sunt nostrud amet
      </Text>
    </VStack>
    <Box
    alignSelf='start'
    padding={{ base : '20px', sm: '30px', lg: '40px' }}
    >
      <Image
      borderRadius='30em'
      objectFit='cover'
      width={{ base: '180px', sm: '300px', md: '300px', lg: '398px' }}
      src={Mario}
      alt='mario'
      />
    </Box>
  </Stack>
  )
}

export default About