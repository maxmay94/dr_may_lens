import { Canvas } from '@react-three/fiber'
import { Stars, Float, Sparkles } from '@react-three/drei'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper'
import Sphere from '../animatedSphere/AnimatedSphere'

import UseCase from '../useCase/useCase'
import './Section_02.css'

function Section_02() {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-orange-600 to-amber-300 relative">
      <div className='relative'>
        <div className="red-curve z-10">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>

      <Canvas>
        {/* <ambientLight intensity={0.1} />
        <directionalLight position={[-10, 0 , 2]} intensity={.5} /> */}
        <Sphere scale={.5} position={[-2,-2,0]}/>
        <Sphere scale={2} position={[2,2,0]}/>
        <Sparkles color='black' size={2} amount={300} scale={10} />
      </Canvas>

      <div className='absolute top-0 w-screen sm:my-20 my-10'>
        <div className='pt-36'>
          <p className='ms:text-6xl text-3xl font-black sm:py-10 py-4 text-slate-200'>
            LENS can be useful for those suffering with...
          </p>
          <div className='bg-slate-900/50 rounded mx-auto lg:w-2/3 sm:w-3/4 w-[90%] backdrop-blur-sm p-3'>
            <div className='text-base text-left'>

              <Swiper         
                slidesPerView={1}
                loop={true}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <UseCase 
                    title='Anxiety' 
                    content='LENS is exceptionally effective at reducing of anxiety. Most clients begin to experience improvement within 4-6 sessions. LENS also improves resilience, the ability to handle stress, and helps create a sense of calm in difficult situations.' 
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <UseCase 
                    title='Depression' 
                    content='LENS helps lift depression—sometimes even when it has been resistant to other treatments. Energy and motivation can also increase and a client may once again experience a positive sense of health and well being.' 
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <UseCase 
                    title='Traumatic Brain Injury (TBI)' 
                    content='In mild and moderate TB4I, clarity, concentration/focus, memory, multi-tasking and energy can significantly and quickly improve.' 
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <UseCase 
                    title='ADD/ADHD' 
                    content='LENS decreases impulsivity, distractibility and hyperactivity. The world becomes easier to navigate. Life becomes less of a struggle for the patient and parent.' 
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <UseCase 
                    title='Substance Abuse' 
                    content='Because LENS is so effective at treating anxiety, depression and poor impulse control, it can be tremendously helpful for people withdrawing from, and working at staying away from, addictive substances.' 
                  />  
                </SwiperSlide>

                <SwiperSlide>
                  <UseCase 
                    title='Autism, Aspergers, OCD, Hair Pulling, Eating Disorders'
                    content='Again, because LENS is so effective at treating anxiety, depression and poor impulse control, there is often dramatic improvement in a variety of disorders where these symptoms are present.' 
                  />
                </SwiperSlide>

              </Swiper>






            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section_02