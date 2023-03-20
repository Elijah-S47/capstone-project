import React from 'react'

import { Image, Box, Stack, Heading, Text, } from '@chakra-ui/react'
import { Dishicon } from '../icons_assets'

const Testimonials = () => {
  return (
    <div>
      <Box bg='#495E57' display='flex' justifyContent='center'>
        <Heading color='#333333' size='xl' pt='40px'>Testimonials:</Heading>
      </Box>
      <Stack px= {{ base : '20px', sm: '30px', lg: '40px' }} p= {{ base : '20px', sm: '30px', lg: '40px' }} spacing='20' height='80vh' bg='#495E57' direction={{ base: 'column', lg: 'row' }} display='flex' justifyContent='center' alignItems='center'>
        <Box borderRadius='1em' bg='#FFFFFF' boxSize='300px'>
          <Heading padding='2px' fontSize= {{ base: '12px', md: '20px', lg:'20px' }} >Rating: 9/10 </Heading>
          <Stack direction='row'>
            <Heading fontSize= {{ base: '12px', md: '20px', lg:'20px' }} >Ted</Heading>
            <Image src={Dishicon} alt='dishicon' boxSize={{ base: '20px' }} />
          </Stack>
          <Text fontSize= {{ base: '12px', md: '20px', lg:'20px' }} >Amazing place to eat!</Text>
        </Box>
        <Box borderRadius='1em' bg='#FFFFFF' boxSize='300px'>
          <Heading padding='2px' fontSize= {{ base: '12px', md: '20px', lg:'20px' }} >Rating: 9/10 </Heading>
          <Stack direction='row'>
            <Heading fontSize= {{ base: '12px', md: '20px', lg:'20px' }} >Billy</Heading>
            <Image src={Dishicon} alt='dishicon' boxSize={{ base: '20px' }} />
          </Stack>
          <Text fontSize= {{ base: '12px', md: '20px', lg:'20px' }} >Love the food!</Text>
        </Box>
        <Box borderRadius='1em' bg='#FFFFFF' boxSize='300px'>
          <Heading padding='2px' fontSize= {{ base: '12px', md: '20px', lg:'20px' }} >Rating: 9/10 </Heading>
          <Stack direction='row'>
            <Heading fontSize= {{ base: '12px', md: '20px', lg:'20px' }} >Joe</Heading>
            <Image src={Dishicon} alt='dishicon' boxSize={{ base: '20px' }} />
          </Stack>
          <Text fontSize= {{ base: '12px', md: '20px', lg:'20px' }} >Good Drinks</Text>
        </Box>
        <Box borderRadius='1em' bg='#FFFFFF' boxSize='300px'>
          <Heading padding='2px' fontSize= {{ base: '12px', md: '20px', lg:'20px' }} >Rating: 9/10 </Heading>
          <Stack direction='row'>
            <Heading fontSize= {{ base: '12px', md: '20px', lg:'20px' }} >Gale</Heading>
            <Image src={Dishicon} alt='dishicon' boxSize={{ base: '20px' }} />
          </Stack>
          <Text fontSize= {{ base: '12px', md: '20px', lg:'20px' }} >I'm a potato</Text>
        </Box>
      </Stack>
    </div>
  )
}

export default Testimonials