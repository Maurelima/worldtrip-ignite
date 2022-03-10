import { Flex, Img } from '@chakra-ui/react'

export default function Header() {
    return (
        <Flex as="header" w="100%" maxWidth={1440} height={100} mx="auto" >
            <Img src="/Logo.svg" w={184} h={46} m="auto"  />
        </Flex>
    )
}