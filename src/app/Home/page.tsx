import React from 'react'

import HeroSection from '@/components/Hero'
import SubjectSection from '@/components/sub-section'
import Webinar from '@/components/webinars'
import AchievementsSection from '@/components/AchievementQA'
import QuestionAnswer from "@/components/Question&Ans"
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div className=''>
       <Navbar/>
        <HeroSection/>
        <SubjectSection />
        <Webinar />
        <AchievementsSection/>
        <QuestionAnswer />
        <Contact />
        <Footer />
    
        


    </div>
  )
}

export default Home