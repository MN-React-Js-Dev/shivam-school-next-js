import BecomeTeacher from '@/Components/BecomeTeacher'
import Facilities from '@/Components/Facilities'
import HeroSection from '@/Components/HeroSection'
import LearnMore from '@/Components/LearnMore'
import MakeAppointment from '@/Components/MakeAppointment'
import Footer from '@/Components/Nav/Footer'
import Header from '@/Components/Nav/Header'
import PopularTeachers from '@/Components/PopularTeachers'
import SchoolClasses from '@/Components/SchoolClasses'
import React from 'react'

const HomePage = () => {
  return <>
    <Header />
    <section className='cst-kand-img'></section>
    <HeroSection />
    <Facilities />
    <LearnMore />
    <BecomeTeacher />
    <SchoolClasses />
    <MakeAppointment />
    <PopularTeachers />
    <Footer />
  </>
}

export default HomePage