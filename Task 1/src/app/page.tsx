import CommonSectionComponent from '@/components/CommonSectionComponent'
import FirstSection from '@/components/FirstSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Plans from '@/components/Plans'
import QualityBox from '@/components/QualityBox'
import Questions from '@/components/Questions'
import SecondSection from '@/components/SecondSection'
import Subscribe from '@/components/Subscribe'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="px-5 lg:px-40">
        <FirstSection />
        <SecondSection />
        <CommonSectionComponent {...{ image: '/2.png' }} />
        <CommonSectionComponent {...{ image: '/3.png', direction: "rtl" }} />
        <CommonSectionComponent {...{ image: '/4.png' }} />
        <QualityBox />
        <Plans />
      </div>
      <Questions />
      <Subscribe />
      <Footer />
    </div>
  )
}
