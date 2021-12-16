import { GetStaticProps } from "next";
import { useRouter } from "next/router"; //'next/dist/client/router'

import client from "@/graphql/client";
import { GET_PAGES, GET_PAGE_BY_SLUG } from "@/graphql/queries";
import MyPagesTemplate, { PageProps } from "@/templates/MyPages";

function Page({ heading, body }: PageProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <MyPagesTemplate heading={heading} body={body} />
}

export default Page

export async function getStaticPaths() {
  // const { pages } = await client.request(GET_PAGES)
  const { pages } = await client.request(GET_PAGES, {
    first: 3
  })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

	return {
		paths,
		fallback: 'blocking'
	}
}

// export async function getStaticProps({ params }) {
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request(GET_PAGE_BY_SLUG, {
    slug: `${ params?.slug }`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    },
    revalidate: 60 * 60 * 8
  }
}
