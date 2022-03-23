import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/global/Navbar'
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { HomeInterface } from '../lib/homeInterface';
import { PageArr } from '../lib/pageInterface';
import { ProjectArr } from '../lib/projectInterface';
import ProjectList from './projects/index'


const Home: NextPage<HomeInterface> = (props: any) => {
  const pages: PageArr = props.pages;
  const projects: ProjectArr = props.projects;

  return (
    <div>
      <Head>
        <title>Joshua Onwezen - Portfolio</title>
        <meta name="description" content="Portfolio 2022 - Joshua Onwezen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container m-auto">
        <nav>
          <Navbar pages={pages}/>
        </nav>
        <article className="flex justify-center">
          <ProjectList projects={projects}/>
        </article>
      </main>
    </div>
  )
}

export default Home


export async function getStaticProps() {

  const { data } = await client.query({
    query: gql`
      query getHomeData {
        projects {
          id
          title
          description
          github
          url
          image {
            id
          }
        }
        pages {
          title
          description
        }
      }
    `,
  });

  return {
    props: {
      pages: data.pages,
      projects: data.projects
    }
  }
}