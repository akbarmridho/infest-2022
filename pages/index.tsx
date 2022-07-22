import type { NextPage } from 'next'
import Head from 'next/head'
import LogoBanner from '../components/LogoBanner'
import About from '../components/About'
import Theme from '../components/Theme'
import Teaser from '../components/Teaser'
import CardDeck from '../components/CardDeck'
import Timeline from '../components/Timeline'
import FAQMultipleDeck from '../components/FAQMultipleDeck'
import Sponsor from '../components/Sponsor'

const timelines = [
  {
      name: 'Event 1',
      date: '24 Juli 2022'
  },
  {
      name: 'Event 2',
      date: '30 Juli 2022'
  }
]

const qna = {
  webinar: [
    {
        question: 'lorem ipsum dos color sit amet',
        answer: 'this is some fucking answer loooong answer as;ldkjasdmsaoi asldjaslkdas asldkjashdkljas aslkjdas askljdhasljkd aslkjdhas'
    },
    {
        question: 'lorem ipsum dos color sit amet',
        answer: 'this is some fucking answer loooong answer as;ldkjasdmsaoi asldjaslkdas asldkjashdkljas aslkjdas askljdhasljkd aslkjdhas'
    },
    {
        question: 'lorem ipsum dos color sit amet',
        answer: 'this is some fucking answer loooong answer as;ldkjasdmsaoi asldjaslkdas asldkjashdkljas aslkjdas askljdhasljkd aslkjdhas'
    }
  ],
  'Trading Competition': [
    {
      question: 'Anjaayyy qt',
      answer: 'hehe btul'
    }
  ]
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>INFEST 2022</title>
        <meta name="description" content="Landing page INFEST 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <LogoBanner/>
        <About/>
        <Theme/>
        <Teaser/>
        <CardDeck />
        <Timeline events={timelines}/>
        <FAQMultipleDeck items={qna}/>
        <Sponsor />
      </div>
    </>
  )
}

export default Home
