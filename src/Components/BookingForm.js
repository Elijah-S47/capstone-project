import React, { useEffect ,useState } from 'react'
import dayjs from 'dayjs'

import { Box, Input, FormControl, FormLabel, Select, VStack, Heading } from '@chakra-ui/react'
import { Greeksalad } from '../icons_assets'

const BookingForm = ( props ) => {
    const [formBooking, setFormBooking] = useState({
        date: dayjs(new Date()).format("YYYY-MM-DD"),
        time: "",
        guests: 0,
        occasion: "",
      });

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit form");
    props.submitForm(formBooking);
    };

    const handleChangeForm = (name, value) => {
        setFormBooking((state) => ({
          ...state,
          [name]: value,
        }));
      };

    useEffect(() => {
    handleChangeForm("time", "");
    }, [props.availableTimes]);

    const disableSubmit =
    formBooking.time === "" ||
    !props.availableTimes.includes(formBooking.time) ||
    formBooking.guests < 1 ||
    formBooking.guests > 10 ||
    formBooking.occasion === "";
    console.log(new Date(formBooking.date).getDate(), new Date().getDate());

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
                    type='date'
                    required
                    min={dayjs(new Date()).format("YYYY-MM-DD")}
                    value={formBooking.date}
                    onChange={(e) => {
                        props.dispatch({ date: new Date(e.target.value) });
                        handleChangeForm("date", e.target.value);
                    }}
                    />
                    <FormLabel
                    fontSize={{base: 'xl', md: '2xl'}}
                    htmlFor="res-time"
                    fontFamily='MarkaziText'
                    >Choose time</FormLabel>
                    <Select
                    required
                    value={formBooking.time}
                    onChange={(e) => handleChangeForm("time", e.target.value)}
                    id="res-time ">
                        <option value="" disabled>
                            Choose time
                        </option>
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
                    value={formBooking.guests}
                    onChange={(e) => handleChangeForm("guests", e.target.value)}
                    min="1"
                    max="10"
                    />
                    <FormLabel
                    fontSize={{base: 'xl', md: '2xl'}}
                    htmlFor="occasion"
                    fontFamily='MarkaziText'
                    >Occasion</FormLabel>
                    <Select
                    value={formBooking.occasion}
                    onChange={(e) => handleChangeForm("occasion", e.target.value)}
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </Select>
                    <Input disabled={disableSubmit} onClick={handleSubmit} data-testid="button-submit" fontFamily='MarkaziText' borderRadius='30em' fontSize={{base: 'xl', md: '2xl'}} bg='#F4CE14' type="submit" value="Make Your reservation" />
            </FormControl>
        </VStack>
    </Box>
  )
}

export default BookingForm