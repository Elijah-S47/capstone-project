import React from 'react'

import { Stack, VStack, Box, Heading, Image, Text, } from '@chakra-ui/react'
import { Mario } from '../icons_assets'

const About = () => {
  return (
    <Stack display='flex' flexDirection= 'collumn' justifyContent='center' >
    <VStack alignItems='start' alignContent='start' display='flex' sx={{ padding: { base : '20px', sm: '30px', lg: '40px' }  }} >
      <Heading
      sx={{ fontSize: { base: '28px', sm: '35px', md: '50px', lg:'80px'} }}
      color='#000000'
      >Little Lemon</Heading>
      <Heading
      sx={{ fontSize: { base: '20px', sm: '30px', md: '40px', lg:'70px'} }}
      color='#000000'
      >Chicago
      </Heading>
      <Text
      sx={{ fontSize: { base: '10px', sm: '15px', md: '20px', lg:'30px'} }}
      color='#000000'
      >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
      </Text>
    </VStack>
    <Box alignSelf='start' sx={{ padding: { base : '20px', sm: '30px', lg: '40px' }  }} >
      <Image src={Mario} alt='mario' borderRadius='30em' objectFit='cover' sx={{  width: { base: '180px', sm: '300px', md: '300px', lg: '398px' } }}/>
    </Box>
  </Stack>
  )
}

export default About