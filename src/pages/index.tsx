import { MapProps } from "@/components/Map";
import client from "@/graphql/client";
import { GET_PLACES } from "@/graphql/queries";
import HomeTemplate from "@/templates/Home";

function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export default Home;

export const getStaticProps = async() => {
  const { places } = await client.request(GET_PLACES)

  return {
    props: {
      places
    }
  }
}
