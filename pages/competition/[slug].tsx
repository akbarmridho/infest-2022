import type { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import About from '../../components/About'
import EventBanner from '../../components/EventBanner'
import FAQSingleDeck from '../../components/FAQSingleDeck'
import Pricing from '../../components/Pricing'
import Rewards from '../../components/Rewards'
import Timeline from '../../components/Timeline'
import competitionData from '../../data/competition.json'

export const getStaticPaths : GetStaticPaths = async () => {
  return {
    paths: [ {params: { slug: 'research' }}, {params: { slug: 'trading' }}],
    fallback: false
  }
}

export const getStaticProps : GetStaticProps = async ({ params }) => {
  if (typeof params!.slug === 'string') {
    const slug = params!.slug as 'trading' | 'research'

    return {
      props: {
        ...competitionData[slug]
      }
    }
  }

  throw Error
}

const Competition = ({
  banner,
  about,
  rewards,
  pricing,
  timeline,
  qnas
} : typeof competitionData["research"]) => {
  return (
    <>
      <Head>
        <title>{ `${banner.title} - INFEST 2022` }</title>
        <meta name="description" content="Page competition INFEST 2022. Investment Festival (INFEST) by KSEP ITB. Mata lomba: equity research competition dan trading competition" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <EventBanner title={banner.title} content={banner.content} actions={banner.actions}/>
        <About title={about.title} content={about.content}/>
        <Rewards prizes={rewards}/>
        <Pricing title='Biaya' content={pricing}/>
        <Timeline events={timeline}/>
        <FAQSingleDeck items={qnas} />
      </div>
    </>
  )
}

export default Competition
