import React from 'react';
import { Logo } from '../icons_assets';
import { Image, Link, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom"

function Nav () {
    return (
            <HStack
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Markazi Text', }}>
                <Image sx={{ padding: { base : '2px', sm: '10px', lg: '40px' }, width: { base: '60px', sm: '100px', md: '100px', lg: '250px', } }} src={Logo} alt='logo' />
                <Link as={RouterLink} color="#495E57" sx={{ padding: { base : '2px', sm: '5px', lg: '10px' }, fontSize: { base: '8px', sm: '15px', md: '20px', lg:'30px'} }} to="/homepage" >Home</Link>
                <Link as={RouterLink} color="#495E57" sx={{ padding: { base : '2px', sm: '5px', lg: '10px' }, fontSize: { base: '8px', sm: '15px', md: '20px', lg:'30px'} }} to="/aboutpage" >About</Link>
                <Link as={RouterLink} color="#495E57" sx={{ padding: { base : '2px', sm: '5px', lg: '10px' }, fontSize: { base: '8px', sm: '15px', md: '20px', lg:'30px'} }} to="/menupage">Menu</Link>
                <Link as={RouterLink} color="#495E57" sx={{ padding: { base : '2px', sm: '5px', lg: '10px' }, fontSize: { base: '8px', sm: '15px', md: '20px', lg:'30px'} }} to="/reservationspage" >Reservations</Link>
                <Link as={RouterLink} color="#495E57" sx={{ padding: { base : '2px', sm: '5px', lg: '10px' }, fontSize: { base: '8px', sm: '15px', md: '20px', lg:'30px'} }} to="/menupage" >Order Online</Link>
                <Link as={RouterLink} color="#495E57" sx={{ padding: { base : '2px', sm: '5px', lg: '10px' }, fontSize: { base: '8px', sm: '15px', md: '20px', lg:'30px'} }} to="/homepage" >Login</Link>
            </HStack>
    );
};

export default Nav;