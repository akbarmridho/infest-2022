import type { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import About from "../components/About"
import EventBanner from "../components/EventBanner"
import FAQSingleDeck from "../components/FAQSingleDeck"
import Pricing from "../components/Pricing"
import Slideshow from "../components/Slideshow"
import SpeakerDeck from "../components/SpeakerDeck"
import Timeline from "../components/Timeline"
import mainEventData from "../data/mainEvent.json"

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      ...mainEventData,
    },
  }
}

interface Props {
  hidden: boolean
}

const MainEvent = ({
  banner,
  theme,
  speakers,
  benefits,
  pricing,
  timeline,
  qnas,
}: typeof mainEventData & Props) => {
  return (
    <>
      <Head>
        <title>{`${banner.title} - INFEST 2022`}</title>
        <meta
          name="description"
          content="Page main event INFEST 2022. Investment Festival (INFEST) by KSEP ITB. Acara berupa talkshow yang akan diselenggarakan selama dua hari"
        />
      </Head>

      <div>
        <EventBanner
          title={banner.title}
          content={banner.content}
          actions={banner.actions}
        />

        <Slideshow items={theme} />
        <SpeakerDeck speakers={speakers} />
        <Pricing title="Biaya" content={pricing} />
        <Timeline events={timeline} />
        <FAQSingleDeck items={qnas} />
        {banner.actions.length > 0 && (
          <EventBanner
            title={`Tertarik dengan ${banner.title}?`}
            content=""
            actions={banner.actions}
            titleSize="h2"
          />
        )}
      </div>
    </>
  )
}

export default MainEvent
