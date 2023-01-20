import Section_01 from "../../components/section_01/Section_01"
import FAQ from '../../components/faq/FAQ'
import Section_02 from "../../components/section_02/Section_02"
import MaxInfo from "../../components/maxInfo/MaxInfo"

function Landing() {
  return (
    <div className="scrollbar-hide">
      <Section_01 />
      <FAQ />
      <Section_02 />
      <MaxInfo />
      <br />
    </div>
  )
}

export default Landing