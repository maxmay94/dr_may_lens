import { Canvas } from '@react-three/fiber'
import { Stars, Float, Sparkles } from '@react-three/drei'

import UseCase from '../useCase/useCase'
import './Section_02.css'

function Section_02() {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-slate-200 to-slate-900 relative overflow-y-scroll">
      <div className='relative'>
        <div class="red-curve z-10">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
      </div>
      <Canvas>
        <Sparkles color="black" size={20} noise={200}  scale={10}/>
        {/* <Float>
          <Stars/>
        </Float> */}
      </Canvas>
      <div className='absolute top-0 w-screen '>
        <div className='pt-36'>
          <div className='text-center text-3xl bg-slate-600/20 rounded mx-auto w-3/4 backdrop-blur-md p-3'>
            Who Can Benefit From LENS?
            <div className='text-base text-left'>

              <UseCase 
                title='Anxiety' 
                content='LENS is exceptionally effective at reducing of anxiety. Most clients begin to experience improvement within 4-6 sessions. LENS also improves resilience, the ability to handle stress, and helps create a sense of calm in difficult situations.' 
              />

              <UseCase 
                title='Depression' 
                content='LENS helps lift depression—sometimes even when it has been resistant to other treatments. Energy and motivation can also increase and a client may once again experience a positive sense of health and well being.' 
              />

              <UseCase 
                title='Traumatic Brain Injury (TBI)' 
                content='In mild and moderate TBI, clarity, concentration/focus, memory, multi-tasking and energy can significantly and quickly improve.' 
              />

              <UseCase 
                title='ADD/ADHD' 
                content='LENS decreases impulsivity, distractibility and hyperactivity. The world becomes easier to navigate. Life becomes less of a struggle for the patient and parent.' 
              />

              <UseCase 
                title='Substance Abuse' 
                content='Because LENS is so effective at treating anxiety, depression and poor impulse control, it can be tremendously helpful for people withdrawing from, and working at staying away from, addictive substances.' 
              />
              
              <UseCase 
                title='Autism, Aspergers, OCD, Hair Pulling, Eating Disorders' 
                content='Autism, Aspergers, OCD, Hair Pulling, Eating Disorders
                Again, because LENS is so effective at treating anxiety, depression and poor impulse control, there is often dramatic improvement in a variety of disorders where these symptoms are present.' 
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section_02