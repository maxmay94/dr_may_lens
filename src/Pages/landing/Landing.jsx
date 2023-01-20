import Section_01 from "../../components/section_01/Section_01"
import FAQ from '../../components/faq/FAQ'
import MaxInfo from "../../components/maxInfo/MaxInfo"

function Landing() {
  return (
    <div className="scrollbar-hide">
      <Section_01 />
      <FAQ />
      <MaxInfo />
      <br />
    </div>
  )
}

export default Landing