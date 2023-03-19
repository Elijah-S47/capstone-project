import React from 'react';
import { Logo } from '../icons_assets';
import { Image, Link, HStack, } from '@chakra-ui/react';

function Nav () {
    return (
            <HStack sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Markazi Text', }}>
                <Image sx={{ padding: { base : '2px', sm: '10px', lg: '40px' }, width: { base: '30px', sm: '100px', md: '100px', lg: '250px', } }} src={Logo} alt='logo' />
                <Link color="#495E57" sx={{ padding: { base : '2px', sm: '5px', lg: '10px' }, fontSize: { base: '5px', sm: '15px', md: '20px', lg:'30px'} }} a href="" >Home</Link>
                <Link color="#495E57" sx={{ padding: { base : '2px', sm: '5px', lg: '10px' }, fontSize: { base: '5px', sm: '15px', md: '20px', lg:'30px'} }} a href="" >About</Link>
                <Link color="#495E57" sx={{ padding: { base : '2px', sm: '5px', lg: '10px' }, fontSize: { base: '5px', sm: '15px', md: '20px', lg:'30px'} }} a href="">Menu</Link>
                <Link color="#495E57" sx={{ padding: { base : '2px', sm: '5px', lg: '10px' }, fontSize: { base: '5px', sm: '15px', md: '20px', lg:'30px'} }} >Reservations</Link>
                <Link color="#495E57" sx={{ padding: { base : '2px', sm: '5px', lg: '10px' }, fontSize: { base: '5px', sm: '15px', md: '20px', lg:'30px'} }} >Order Online</Link>
                <Link color="#495E57" sx={{ padding: { base : '2px', sm: '5px', lg: '10px' }, fontSize: { base: '5px', sm: '15px', md: '20px', lg:'30px'} }} >Login</Link>
            </HStack>
    );
};

export default Nav;