import { Flex } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Cities from '../../components/Cities';
import Content from '../../components/Content';
import ContinentBanner from '../../components/ContinentBanner';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import api from '../../services/api';

export interface ContinentProps {
  continent: {
    slug: string;
    name: string;
    title: string;
    description: string;
    banner: string;
    qtd_countries: number;
    qtd_languages: number;
    qtd_cities: number;
    cities: {
      id: number;
      name: string;
      country: string;
      slug_continent: string;
      thumbnail: string;
    }[]
  }
}

export default function Continente({ continent }: ContinentProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />
  }
  console.log(continent);
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner continent={continent} />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
            <Content continent={continent} />
            <Cities continent={continent} />
          </Flex>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const { data } = await api.get(`/continentes?slug=${slug}`);
  const cities = await api.get(`/cidades?slug_continent=${slug}`);
  return {
    props: {
      continent: {
        slug: data[0].slug,
        name: data[0].name,
        title: data[0].title,
        description: data[0].description,
        banner: '/ContinentsSlide.svg',
        qtd_countries: data[0].qtd_countries,
        qtd_languages: data[0].qtd_languages,
        qtd_cities: data[0].qtd_cities,
        cities: cities.data,
      }
    },
    revalidate: 60 * 30, // 30 minutos,
  };
}