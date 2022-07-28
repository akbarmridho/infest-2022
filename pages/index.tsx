import Head from 'next/head'
import LogoBanner from '../components/LogoBanner'
import About from '../components/About'
import Theme from '../components/Theme'
import Teaser from '../components/Teaser'
import CardDeck from '../components/CardDeck'
import Timeline from '../components/Timeline'
import FAQMultipleDeck from '../components/FAQMultipleDeck'
import homeData from '../data/home.json'

const Home = ({
  about,
  theme,
  events,
  teaser,
  timeline,
  qnas
} : typeof homeData) => {
  return (
    <>
      <Head>
        <title>INFEST 2022</title>
        <meta name="description" content="Landing page INFEST 2022. Investment Festival (INFEST) by KSEP ITB. Mata acara: equity research competition, trading competition, webinar, dan workshop" />
      </Head>

      <div>
        <LogoBanner/>
        <About title={about.title} content={about.content}/>
        <Theme title={theme.title} content={theme.content}/>
        {
          teaser && <Teaser url={teaser}/>
        }
        <CardDeck events={events}/>
        <Timeline events={timeline}/>
        <FAQMultipleDeck items={qnas}/>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const data = homeData

  return {props: data}
}

export default Home
