import Head from 'next/head'
import LogoBanner from '../components/LogoBanner'
import About from '../components/About'
import Theme from '../components/Theme'
import Teaser from '../components/Teaser'
import CardDeck from '../components/CardDeck'
import Timeline from '../components/Timeline'
import FAQMultipleDeck from '../components/FAQMultipleDeck'
import Sponsor from '../components/Sponsor'
import homeData from '../data/home.json'

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

const Home = ({
  about,
  theme,
  events,
  timeline
} : typeof homeData) => {
  return (
    <>
      <Head>
        <title>INFEST 2022</title>
        <meta name="description" content="Landing page INFEST 2022" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous" />
      </Head>

      <div>
        <LogoBanner/>
        <About title={about.title} content={about.content}/>
        <Theme/>
        <Teaser/>
        <CardDeck />
        <Timeline events={timeline}/>
        <FAQMultipleDeck items={qna}/>
        <Sponsor />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const data = homeData

  return {props: data}
}

export default Home
