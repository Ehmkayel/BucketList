import React from 'react'
import DestinationForm from './DestinationForm'

const DestinationHero = () => {
  return (
    <main>
        <section>
            <div class="relative w-full h-[70vh]">
                <video class="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                    <source src="https://res.cloudinary.com/drphumgcb/video/upload/v1722434988/4782416-uhd_3840_2160_30fps_2_online-video-cutter.com_r4yrn8.mp4" type="video/mp4"/>
                </video>
            </div>
            <div>
                <DestinationForm/>
            </div>

        </section>
    </main>
   
  )
}

export default DestinationHero