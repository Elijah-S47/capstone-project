import React from 'react'


import { Restauranfood } from '../icons_assets'
import { Box, Button, Heading, Image, Text, Stack, VStack } from '@chakra-ui/react'

const Hero = () => {
  return (
    <Stack bg='#495E57' display='flex' flexDirection= 'collumn' justifyContent='center' >
      <VStack alignItems='start' alignContent='start' display='flex' sx={{ padding: { base : '20px', sm: '30px', lg: '40px' }  }} >
        <Heading sx={{ px: { base : '10px', sm: '20px', lg: '30px' }, fontSize: { base: '20px', sm: '35px', md: '50px', lg:'80px'} }} color='#F4CE14' >Little Lemon</Heading>
        <Heading sx={{ px: { base : '10px', sm: '20px', lg: '30px' }, fontSize: { base: '16px', sm: '30px', md: '40px', lg:'70px'} }} color='#EDEFEE' >Chicago</Heading>
        <Text sx={{ px: { base : '10px', sm: '20px', lg: '30px' }, fontSize: { base: '5px', sm: '15px', md: '20px', lg:'30px'} }} color='#EDEFEE' >We are a family owned Mediterranean restaurant, <br /> focused on traditional <br /> recipes served with a modern <br /> twist.</Text>
        <Box sx={{ px: { base : '10px', sm: '20px', lg: '30px' } }}  >
          <Button bg='#F4CE14' alignSelf='start' color='#000000' sx={{ boxSize: { base: '10px' }, fontSize: { base: '4px' } }}>Reserve A Table</Button>
        </Box>
      </VStack>
      <Box alignSelf='start' sx={{ padding: { base : '20px', sm: '30px', lg: '40px' }  }} >
        <Image borderRadius='60%' objectFit='contain' sx={{ width: { base: '100px', sm: '200px', md: '300px', lg: '398px' } , px: { base : '10px', sm: '20px', lg: '30px' }  }} src={Restauranfood} alt='logo' />
      </Box>
    </Stack>
  )
}

export default Hero