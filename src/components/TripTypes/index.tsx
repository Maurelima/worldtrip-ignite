import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import TripType from './TripType';

export default function TripTypes() {
    return (
        <Grid
            templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
            w="100%"
            justify="space-between"
            align="center"
            mt={["10", "32"]}
            mx="auto"
            maxW="1160px"
            flexWrap="wrap"
            gap={[1, 5]}
        >

            <GridItem>
                <TripType icon="cocktail" text="vida noturna" />
            </GridItem>
            <GridItem>
                <TripType icon="surf" text="praia" />
            </GridItem>
            <GridItem>
                <TripType icon="building" text="moderno" />
            </GridItem>
            <GridItem>
                <TripType icon="museum" text="clássico" />
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
                <TripType icon="earth" text="e mais..." />
            </GridItem>
        </Grid>
    )
}