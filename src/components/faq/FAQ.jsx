import Question from "../question/Question"
import Answer from "../answer/Answer"

const FAQ = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-yellow-600 w-screen to-red-900 pt-[64px] px-3">
        <div className="h-[1px]">
        </div>

        <div className="text-6xl font-black sm:text-center sm:m-10 text-slate-200">
          Frequently Asked Questions.
        </div>
        <div className="md:w-3/4 lg:text-lg md:text-base text-sm md:bg-amber-700/40 rounded-sm md:p-5 p-2 pt-5 mx-auto">

          <Question question={'Who Can Benefit From LENS?'}/>
          <Answer size={true} answer={'LENS is not diagnosis-based. We are treating a dysfunctional brain, one that is stuck in maladaptive brainwave patterns and the associated neurochemistry. LENS does not give one a new brain. It can only help optimize the one you have. It works best on patients who, at one point, were normal functioning in their lives, and then something (a singular episode, multiple or repeated exposures) happened to change them. Interestingly, it doesn’t seem to matter how long ago that was.'} />
          <br />

          <Question question={'Do You Work With Children?'} />
          <Answer answer={'Yes. A large part of my practice is devoted to children, adolescents, and teens, largely with issues such as ADD/ADHD, anxiety, explosive behavior and anger. Interestingly, after a few sessions, most children describe themselves as happier.'} />
          <br />

          <Question question={'How effective is LENS'} />
          <Answer answer={'The success rate is remarkable. Over 75% of clients benefit significantly, often noticing improvement within 6 visits! Once a full course of treatments (usually 10-20 sessions) is completed, for most people treatment is done.  And, the changes are enduring. There is no need to receive LENS on an ongoing basis.'} />
          <br />

          <Question question={'How Does LENS work?'} />
          <Answer answer={'While performing a standard 21-site EEG, sophisticated computer technology and software captures and analyzes brainwaves, and coverts them into an infinitesimal electromagnetic radio wave signal that is fed back to the brain for a fraction of a second. The signal interrupts dysfunctional brainwave patterns, allowing the brain to re-boot back to normal brainwave patterns and the associated neurochemistry. It is analogous to optimizing the hardware, which makes the programs run better!'} />
          <br />

          <Question question={'How Safe Is LENS?'} />
          <Answer answer={'LENS is extremely safe. In over 75,000 clients treated with LENS, there has not been a single reported case of enduring negative effects.'} />
          <br />
        
        </div>
      </div>
    </>
  )
}

export default FAQ