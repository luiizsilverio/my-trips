import { GetStaticProps } from "next";
import { useRouter } from "next/router"; //'next/dist/client/router'

import client from "@/graphql/client";
import { GET_PLACES, GET_PLACE_BY_SLUG } from "@/graphql/queries";
import PlacesTemplate, { PlaceTemplateProps } from "@/templates/Places";

function Place({ place }: PlaceTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <PlacesTemplate place={ place } />
}

export default Place

export async function getStaticPaths() {
  const { places } = await client.request(GET_PLACES, {
    first: 3
  })

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }))

	return {
		paths,
		fallback: true
	}
}

// export async function getStaticProps({ params }) {
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request(GET_PLACE_BY_SLUG, {
    slug: `${ params?.slug }`
  })

  if (!place) return { notFound: true }

  return {
    props: { place },
    revalidate: 60 * 5  // 5 minutos
  }
}
