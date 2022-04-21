import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/client';
import client from "../apollo-client";

const Page = (props: any) => {
    const router = useRouter()
    const { slug } = router.query
    console.log('hi')
    console.log(slug)
    const [pages, setPages] = useState({});
    return (
        <li>
            Hi
            {pages}
        </li>
    );
};

export default Page;


export async function getServerSideProps(context: any) {
   //console.log(context.params.id)
    const slug: string = context.params.id
    console.log(slug)

    const { data } = await client.query({
      query: gql`
        query getPageData($slug: String!) {
          pages(where: {slug: $slug}) {
            title
            description
          }
        }
      `, context: slug
    });
  
    return {
      props: {
        pages: data.pages,
      }
    }
  }