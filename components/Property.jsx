import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons';
import { GoVerified } from 'react-icons';
import millify from "millify";

export default function Property ({ property:{ wikiDataId, name } }) {
    return (
            <div>
                <Link href={`/property/${wikiDataId}`} passHref>
                    <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
                        <Box>
                            <Image  />
                        </Box>
                    </Flex>
                </Link>
            </div>
    )
}
