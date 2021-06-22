import FirstQuezz from './FirstQuezz/FirstQuezz'
import Section from '../Section/Section'
import SecondRational from './SecondRational/SecondRatonal'
import ThirdPuzzle from './ThirdPuzzle/ThirdPuzzle'
import FourMulti from './FourMulti/FourMulti'
import FifthCom from './FifthCom/FifthCom'
import SixLogic from './SixLogic/SixLogic'
import SeventhAd from './SeventhAd/SeventhAd'
const Second = () => {
  const style = {
    listStyle:'none'
  }
    return(
      <Section>
      <ol style={style}>
          <FirstQuezz />
          <SecondRational />
          <ThirdPuzzle />
          <FourMulti />
          <FifthCom />
          <SixLogic />
          <SeventhAd />
      </ol>
      </Section>
    )
}


export default Second