
import type { GetStaticProps, NextPage } from 'next'
import { Flex, Heading } from '@chakra-ui/react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import TripTypes from '../components/TripTypes'
import Separator from '../components/Separator'
import Slider from "../components/Slider";
import api from '../services/api'

interface HomeProps {
  continents:{
    slug: string;
    name: string;
    title: string;
    image: string;
  }[]
}


export default function Home({ continents }: HomeProps) {
  return (
    <Flex direction="column">
      <Header />

      <Banner />
      <TripTypes />

      <Separator />

      <Heading
        textAlign="center"
        fontWeight="500"
        lineHeight="54px"
        mb={["6","14"]}
        fontSize={["lg",
        "3xl",
        "4xl"]}
      >
        Vamos nessa?<br/>Então escolha seu continente
      </Heading>

      <Slider continents={continents} />
    </Flex>
  )
}
// http://localhost:3333/paises?id_continente=1

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/continentes');


  const continents = data.map((continent: any) => {
    return {
      slug: continent.slug,
      name: continent.name,
      title: continent.title,
      image: continent.image
    }
  })
  return {
    props: {
      continents,
    }
  }
}