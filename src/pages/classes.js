import Facilities from '@/Components/Facilities'
import Footer from '@/Components/Nav/Footer'
import Header from '@/Components/Nav/Header'
import SchoolClasses from '@/Components/SchoolClasses'
import React from 'react'

const classes = () => {
    return <>
        <Header />
        <Facilities />
        <SchoolClasses />
        <Footer />
    </>
}

export default classes