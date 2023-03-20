import React from 'react'


import { Restauranfood } from '../icons_assets'
import { Box, Button, Heading, Image, Text, Stack, VStack } from '@chakra-ui/react'

const Hero = () => {
  return (
    <Stack bg='#495E57' display='flex' flexDirection= 'collumn' justifyContent='center' >
      <VStack alignItems='start' alignContent='start' display='flex' sx={{ padding: { base : '20px', sm: '30px', lg: '40px' }  }} >
        <Heading
        sx={{ fontSize: { base: '28px', sm: '35px', md: '50px', lg:'80px'} }}
        color='#F4CE14'
        >Little Lemon</Heading>
        <Heading
        sx={{ fontSize: { base: '20px', sm: '30px', md: '40px', lg:'70px'} }}
        color='#EDEFEE'
        >Chicago
        </Heading>
        <Text
        sx={{ fontSize: { base: '10px', sm: '15px', md: '20px', lg:'30px'} }}
        color='#EDEFEE'
        >We are a family owned Mediterranean restaurant, <br /> focused on traditional <br /> recipes served with a modern <br /> twist.
        </Text>
        <Button
        borderRadius='30em'
        _hover={{ bg: '#ebedf0' }}
        bg='#F4CE14'
        alignSelf='start'
        color='#000000'
        sx={{ height: { base: '20px', sm: '30px', md: '60px', lg: '60px', }, width: { base: '80px', sm: '100px', md: '200px', lg: '200px' }, fontSize: { base: '4pt', sm: '8pt', md: '14pt', lg: '14pt' } }}
        >Reserve A Table
        </Button>
      </VStack>
      <Box alignSelf='start' sx={{ padding: { base : '20px', sm: '30px', lg: '40px' }  }} >
        <Image borderRadius='30em' objectFit='cover' sx={{  width: { base: '180px', sm: '300px', md: '300px', lg: '398px' } }} src={Restauranfood} alt='logo' />
      </Box>
    </Stack>
  )
}

export default Hero