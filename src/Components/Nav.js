import React from 'react';
import { Logo } from '../icons_assets';
import { Image, Link, HStack, } from '@chakra-ui/react';

function Nav () {
    return (
        <nav>
            <HStack sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Markazi Text', }}>
                <Link>
                    <Image sx={{ padding: { base : '2px', sm: '10px', lg: '40px' }, width: { base: '30px', sm: '100px', md: '100px', lg: '250px', } }} src={Logo} alt='logo' class="nav-item" />
                </Link>
                <Link sx={{ padding: { base : '2px', sm: '5px', lg: '10px' }, fontSize: { base: '5px', sm: '15px', md: '20px', lg:'35px'} }} class="nav-item" a href="">Home</Link>
                <Link padding={{ base : '2px', sm: '5px', lg: '10px' }} fontSize={{ xs: '5px', sm: '15px', md: '20px', lg:'35px'}} class="nav-item" a href="">About</Link>
                <Link padding={{ base : '2px', sm: '5px', lg: '10px' }} fontSize={{ xs: '5px', sm: '15px', md: '20px', lg:'35px'}} class="nav-item" a href="">Menu</Link>
                <Link padding={{ base : '2px', sm: '5px', lg: '10px' }} fontSize={{ xs: '5px', sm: '15px', md: '20px', lg:'35px'}} class="nav-item" a href="">Reservations</Link>
                <Link padding={{ base : '2px', sm: '5px', lg: '10px' }} fontSize={{ xs: '5px', sm: '15px', md: '20px', lg:'35px'}} class="nav-item" a href="">Order Online</Link>
                <Link padding={{ base : '2px', sm: '5px', lg: '10px' }} fontSize={{ xs: '5px', sm: '15px', md: '20px', lg:'35px'}} class="nav-item" a href="">Login</Link>
            </HStack>
        </nav>
    );
};

export default Nav;