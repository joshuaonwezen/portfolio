import type { NextPage } from 'next'
import React, { useState } from 'react';
import Head from 'next/head'
import Navbar from '../components/global/Navbar'
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { HomeInterface } from '../lib/interfaces/homeInterface';
import { PageArr } from '../lib/interfaces/pageInterface';
import { ProjectArr } from '../lib/interfaces/projectInterface';
import ProjectList from './projects/index'


const Home: NextPage<HomeInterface> = ({pages, projects}: any) => {
  const pageArr: PageArr = pages;
  const projectArr: ProjectArr = projects;
  const [pageState, setPageState] = useState({});
  // setPageState(pageArr)
  const [projectState, setProjectState] = useState({});
  // setProjectState(projectArr)


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


export async function getServerSideProps() {

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
          slug
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