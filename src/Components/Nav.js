import React from 'react';
import { Logo } from '../icons_assets';
import { Image, Link, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom"

function Nav () {
    return (
            <HStack
            flexDirection= {{ base: 'column', lg: 'row' }}
            display='flex'
            alignItems='center'
            justifyContent='center'
            fontFamily='Markazi Text'
            fontSize= {{ base: '4vmin', lg:'30px'}}
            >
                <Image
                padding={{ base : '1px', sm: '10px', lg: '40px' }}
                width={{ base: '40vw', lg: '250px', }}
                src={Logo}
                alt='logo'
                />
                <Link
                as={RouterLink}
                color="#495E57"
                padding= {{ base : '2px', sm: '5px', lg: '10px' }}
                to="/homepage"
                >Home</Link>
                <Link
                as={RouterLink}
                color="#495E57"
                padding={{ base : '2px', sm: '5px', lg: '10px' }}
                to="/aboutpage"
                >About</Link>
                <Link
                as={RouterLink}
                color="#495E57"
                padding={{ base : '2px', sm: '5px', lg: '10px' }}
                to="/menupage"
                >Menu</Link>
                <Link
                as={RouterLink}
                color="#495E57"
                padding={{ base : '2px', sm: '5px', lg: '10px' }}
                to="/reservationspage"
                >Reservations</Link>
                <Link
                as={RouterLink}
                color="#495E57"
                padding={{ base : '2px', sm: '5px', lg: '10px' }}
                to="/menupage"
                >Order Online</Link>
                <Link
                as={RouterLink}
                color="#495E57"
                padding={{ base : '2px', sm: '5px', lg: '10px' }}
                to="/homepage"
                >Login</Link>
            </HStack>
    );
};

export default Nav;