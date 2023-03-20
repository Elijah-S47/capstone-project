import React from 'react'

import { Button, Image, Stack, Card, Text, Heading } from '@chakra-ui/react'
import { Lemondessert, Greeksalad, Restauranfood } from '../icons_assets'

const Highlights = () => {
  return (
    <div>
      <Stack direction='row' display='flex' justifyContent='center' padding= {{ base : '20px', sm: '30px', lg: '40px' }}>
        <Stack alignItems='center'>
          <Heading
          fontSize= {{ base: '10px', sm: '20px', md: '28px', lg:'40px' }}
          paddingEnd= {{ base: '50px', sm:'100px', md: '225px', lg: '325px', xl: '500px' }}
          noOfLines='1'
          >This weeks specials!</Heading>
        </Stack>
        <Button
          borderRadius='30em'
          _hover={{ bg: '#ebedf0' }}
          bg='#F4CE14'
          alignSelf='end'
          color='#000000'
          sx={{ height: { base: '20px', sm: '30px', md: '60px', lg: '60px', }, width: { base: '80px', sm: '100px', md: '200px', lg: '200px' }, fontSize: { base: '4pt', sm: '8pt', md: '14pt', lg: '14pt' } }}
          >Online Menu
        </Button>
      </Stack>
      <Stack
      direction={{ base: 'column', lg: 'row' }}
      px= {{ base : '20px', sm: '30px', lg: '60px', xl:'120px' }}
      display='flex'
      alignItems='center'
      spacing='10'
      paddingBottom='40px'
      >
        <Card borderRadius='2em' bg='#EDEFEE' width='80%' height={{ base: '300px', md: '450px' ,lg:'600px' }}>
          <Image borderRadius='2em' objectFit='cover' src={Greeksalad} alt='greeksalad' height={{ base: '180px', sm: '200px', md:'300px', lg: '400px' }} />
          <Stack display='flex' direction='row'>
            <Heading
            fontSize= {{ base: '16px', md: '22px', lg:'26px' }}
            >
            Greek salad
            </Heading>
            <Heading color='#EE9972' fontSize= {{ base: '16px', md: '22px', lg:'26px' }} alignSelf='end' >$ 12.99</Heading>
          </Stack>
          <Text
          fontSize= {{ base: '12px', md: '20px', lg:'20px' }}
          >
          The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
          </Text>
        </Card>
        <Card borderRadius='2em' bg='#EDEFEE' width='80%' objectFit='stretch' height={{ base: '300px', md: '450px' ,lg:'600px' }} >
          <Image borderRadius='2em' objectFit='cover' src={Restauranfood} alt='restauranfood' height={{ base: '180px', sm: '200px', md:'300px', lg: '400px' }} />
          <Stack direction='row'>
            <Heading
            fontSize= {{ base: '16px', md: '22px', lg:'26px' }}
            >
            Bruschetta
            </Heading>
            <Heading color='#EE9972' fontSize= {{ base: '16px', md: '22px', lg:'26px' }} >$ 5.99</Heading>
          </Stack>
          <Text
          fontSize= {{ base: '12px', md: '20px', lg:'20px' }}
          >
          Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. 
          </Text>
        </Card>
        <Card borderRadius='2em' bg='#EDEFEE' width='80%' height={{ base: '300px', md: '450px' ,lg:'600px' }} >
          <Image borderRadius='2em' objectFit='cover' src={Lemondessert} alt='lemondessert' height={{ base: '180px', sm: '200px', md:'300px', lg: '400px' }} />
          <Stack direction='row'>
            <Heading
            fontSize= {{ base: '16px', md: '22px', lg:'26px' }}
            >
            Lemon Dessert
            </Heading>
            <Heading color='#EE9972' fontSize= {{ base: '16px', md: '22px', lg:'26px' }} >$ 5.00</Heading>
          </Stack>
          <Text
          fontSize= {{ base: '12px', md: '20px', lg:'20px' }}
          >
          This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
          </Text>
        </Card>
      </Stack>
    </div>
  )
}

export default Highlights