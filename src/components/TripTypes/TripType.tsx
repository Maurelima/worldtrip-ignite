import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface CaracteristicaProps {
  icon: string;
  text: string;
}

export default function TripType({icon, text}:CaracteristicaProps ) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
      <Flex direction={["row","column"]} align="center" justify="center">
        { isWideVersion ? <Image src={`./${icon}.svg`} w="85px" h="85px" mb="6" alt="Trip Type" /> : <Text color="yellow.400" fontSize="4xl" mr="2">•</Text>}
        
        <Text fontWeight="600" color="gray.700" fontSize={["md", "xl","2xl"]}>{text}</Text>
      </Flex>
  )
}