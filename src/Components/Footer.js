import React from 'react'

import { Box, Text, Stack, Image, Link, } from '@chakra-ui/react'
import { Restaurant } from '../icons_assets'

const Footer = () => {
  return (
    <Stack
    py={{ base: '50px', lg:'120px' }}
    spacing={{base: '5', md: '10', lg: '100px' }}
    bg='#495E57'
    display='flex'
    direction={{ base: 'column', lg:'row' }}
    alignItems='center'
    justifyContent='center'>
      <Image
      objectFit='cover'
      borderRadius='1em'
      src={Restaurant}
      alt='restaurant'
      width={{ base:'60vw', lg: '350px' }}
      />
      <Stack direction='row' >
        <nav>
          <Stack fontFamily='MarkaziText' >
            <Link a href='./' fontSize={{ base: '12px', lg: '20px' }}>Home</Link>
            <Link a href='./' fontSize={{ base: '12px', lg: '20px' }} >About</Link>
            <Link a href='./' fontSize={{ base: '12px', lg: '20px' }} >Menu</Link>
            <Link a href='./' fontSize={{ base: '12px', lg: '20px' }} >Reservations</Link>
            <Link a href='./' fontSize={{ base: '12px', lg: '20px' }} >Order Online</Link>
            <Link a href='./' fontSize={{ base: '12px', lg: '20px' }} >Login</Link>
          </Stack>
        </nav>
      </Stack>
      <Box fontFamily='MarkaziText' >
        <Text
        fontSize={{ base: '12px', lg: '20px' }} >Adress - <br /> 1234 Lemon Ln. Chicago, Illinois
        </Text>
        <Text
        fontSize={{ base: '12px', lg: '20px' }} >Phone Number - <br /> 1-234-567-8900
        </Text>
        <Text
        fontSize={{ base: '12px', lg: '20px' }} >email - <br /> littlelemonchicago@lemon.com
        </Text>
      </Box>
    </Stack>
  )
}

export default Footer