import BrainScene from '../brain/BrainScene'
import './Section_01.css'

function Section_01() {
  return (
    <div className="w-screen h-screen bg-slate-900">
      <div className="bg-slate-200 h-1/3 flex">
        <div className='m-auto'>
          <p className='text-center text-slate-900 text-2xl'>
            Head in the clouds?
          </p>
          <p className='text-center text-slate-700'>
            anxiety, ADHD, post-concussion syndrome, brain fog...
          </p>
        </div>
      </div>

      <div className='h-1/3 relative'>
        <div className="wave z-10">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
        <BrainScene />
        <div className="wave-bottom z-10">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>

      <div className="bg-slate-200 h-1/3 flex">
        <div className='m-auto'>
          <p className='text-center text-slate-900 text-2xl'>
            Get help with LENS Neurofeedback
          </p>
          <p className='text-center text-slate-700 text-sm px-10'>
            Low Energy Neurofeedback System (LENS) is a unique type of neurofeedback that nudges the brain out of maladaptive brainwave patterns it is stuck in, allowing it to restore homeostatis, to reset itself for optimal performance.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section_01