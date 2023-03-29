import React, { useState } from 'react'

import { Box, Input, FormControl, FormLabel, Select, VStack, Heading } from '@chakra-ui/react'
import { Greeksalad } from '../icons_assets'

const BookingForm = ( props ) => {
    const [ formDate, setFormDate ] = useState("")
    const [ noGuests, setNoGuests ] = useState("")
    const [ formTimes, setFormTimes ] = useState("")
    const [ occasions, setOccasions ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formDate, noGuests, formTimes, occasions)
        setFormDate("")
        setFormTimes("")
        setNoGuests("")
        setOccasions("")
    }

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
    p='10vmin'
    >
        <VStack
        padding='2vmax'
        bg='#FFFFFF'
        borderRadius='1em'
        w='80vmax'
        maxWidth='800px'
        >
            <Heading as='h1' p='1vmax' fontFamily='MarkaziText' fontSize={{ base: '8vmin', lg:'80px'}} >Reserve a table:</Heading>
            <FormControl
            display='flex'
            flexDirection='column'
            alignItems='center'
            alignContent='center'
            onSubmit={handleSubmit}
            gap='1vmax'
            >
                    <FormLabel
                    fontSize= {{ base: '5vmin', lg:'30px'}}
                    htmlFor="res-date"
                    fontFamily='MarkaziText'
                    >Choose date</FormLabel>
                    <Input
                    value={formDate}
                    onChange={(e) => {
                        setFormDate(e.target.value)
                        props.dispatch({ formTimes: props.availableTimes} )
                    }}
                    type="date"
                    />
                    <FormLabel
                    fontSize={{base: 'xl', md: '2xl'}}
                    htmlFor="res-time"
                    fontFamily='MarkaziText'
                    >Choose time</FormLabel>
                    <Select
                    value={formTimes}
                    onChange={(e) => {
                        setFormTimes(e.target.value)
                    }}
                    id="res-time ">
                        {props.availableTimes?.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </Select>
                    <FormLabel
                    fontSize={{base: 'xl', md: '2xl'}}
                    htmlFor="guests"
                    fontFamily='MarkaziText'
                    >Number of guests</FormLabel>
                    <Input
                    placeholder='1'
                    type="number"
                    value={noGuests}
                    onChange={e => setNoGuests(e.target.value)}
                    min="1"
                    max="10"
                    />
                    <FormLabel
                    fontSize={{base: 'xl', md: '2xl'}}
                    htmlFor="occasion"
                    fontFamily='MarkaziText'
                    >Occasion</FormLabel>
                    <Select
                    value={occasions}
                    onChange={e => setOccasions(e.target.value)}
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </Select>
                    <Input data-testid="button-submit" fontFamily='MarkaziText' borderRadius='30em' fontSize={{base: 'xl', md: '2xl'}} bg='#F4CE14' type="submit" onClick={handleSubmit} value="Make Your reservation" />
            </FormControl>
        </VStack>
    </Box>
  )
}

export default BookingForm