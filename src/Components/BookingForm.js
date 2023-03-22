import React from 'react'

import { Box, Input, FormControl, FormLabel, Select } from '@chakra-ui/react'
import { Greeksalad } from '../icons_assets'

const BookingForm = () => {
  return (
    <Box
    display='flex'
    justifyContent='center'
    alignItems='center'
    maxHeight='80vh'
    bgImg={Greeksalad}
    bgSize='150em'
    bgRepeat='no-repeat'
    objectFit='cover'
    bgPos='center'
    p='2em'
    >
        <Box
        padding='2em'
        bg='#FFFFFF'
        borderRadius='1em'
        height={{ base: '60vh', md:'70vh' }}
        width={{ base: '30vh', md: '50vh' }}>
            <FormControl
            display='flex'
            flexDirection='column'
            alignItems='center'
            alignContent='center'>
                    <FormLabel fontSize={{base: 'xl', md: '2xl'}} htmlFor="res-date" fontFamily='MarkaziText' >Choose date</FormLabel>
                    <Input type="date" id="res-date" />
                    <FormLabel fontSize={{base: 'xl', md: '2xl'}} for="res-time" fontFamily='MarkaziText'>Choose time</FormLabel>
                    <Select id="res-time ">
                        <option>5:00pm</option>
                        <option>6:00pm</option>
                        <option>7:00pm</option>
                        <option>8:00pm</option>
                        <option>10:00pm</option>
                        <option>11:00pm</option>
                    </Select>
                    <FormLabel fontSize={{base: 'xl', md: '2xl'}} htmlFor="guests" fontFamily='MarkaziText'>Number of guests</FormLabel>
                    <Input type="number" placeholder="1" min="1" max="10" id="guests" />
                    <FormLabel fontSize={{base: 'xl', md: '2xl'}} htmlFor="occasion" fontFamily='MarkaziText'>Occasion</FormLabel>
                    <Select id="occasion">
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </Select>
                    <Box p='2.5em'>
                        <Input fontFamily='MarkaziText' fontSize={{base: 'xl', md: '2xl'}} bg='#F4CE14' type="submit" value="Make Your reservation" />
                    </Box>
            </FormControl>
        </Box>
    </Box>
  )
}

export default BookingForm