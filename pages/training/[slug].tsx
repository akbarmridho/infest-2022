import type { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import About from '../../components/About'
import EventBanner from '../../components/EventBanner'
import FAQSingleDeck from '../../components/FAQSingleDeck'
import Pricing from '../../components/Pricing'
import SpeakerDeck from '../../components/SpeakerDeck'
import Timeline from '../../components/Timeline'
import trainingData from '../../data/training.json'

export const getStaticPaths : GetStaticPaths = async () => {
    return {
        paths: [ {params: { slug: 'webinar' }}, {params: { slug: 'workshop' }}],
        fallback: false
    }
}

export const getStaticProps : GetStaticProps = async ( {params }) => {
    if (typeof params!.slug === 'string') {
        const slug = params!.slug as 'webinar' | 'workshop'

        return {
            props: {
                ...trainingData[slug]
            }
        }
    }

    throw Error
}
const Training = ({
    banner,
    about,
    speakers,
    benefits,
    pricing,
    timeline,
    qnas
} : typeof trainingData["webinar"]) => {
  return (
    <>
      <Head>
        <title>{ `${banner.title} - INFEST 2022` }</title>
        <meta name="description" content="Page webinar atau training INFEST 2022. Investment Festival (INFEST) by KSEP ITB. Terdapat dua training: webinar dan workshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <EventBanner title={banner.title} content={banner.content} actions={banner.actions}/>
        <About title={about.title} content={about.content}/>
        <SpeakerDeck speakers={speakers} />
        <Pricing title='Biaya' content={pricing}/>
        <Timeline events={timeline}/>
        <FAQSingleDeck items={qnas} />
        {
          banner.actions.length > 0 && <EventBanner title={`Tertarik dengan ${banner.title}?`} content='' actions={banner.actions} titleSize='h2'/>
        }
      </div>
    </>
  )
}

export default Training
