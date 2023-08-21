import React from 'react'
import TeamImg from '../assets/img/Teachers/team1.jpg'
import Team2Img from '../assets/img/Teachers/team2.jpg'
import Team3Img from '../assets/img/Teachers/team3.jpg'
import Team4Img from '../assets/img/Teachers/team4.jpg'
import Team5Img from '../assets/img/Teachers/team5.jpg'
import Team6Img from '../assets/img/Teachers/team6.jpg'
import Team7Img from '../assets/img/Teachers/team7.jpg'
import Team8Img from '../assets/img/Teachers/team7.jpg'
import Team9Img from '../assets/img/Teachers/team9.jpg'
import Team10Img from '../assets/img/Teachers/team10.jpg'
import Team11Img from '../assets/img/Teachers/team11.jpg'
import Team12Img from '../assets/img/Teachers/team12.jpg'
import Team13Img from '../assets/img/Teachers/team13.jpg'
import Team14Img from '../assets/img/Teachers/team14.jpg'
import Team15Img from '../assets/img/Teachers/team15.jpg'
import Team16Img from '../assets/img/Teachers/team15.jpg'
import Team17Img from '../assets/img/Teachers/team15.jpg'

import Image from 'next/image'
const PopularTeachers = () => {

    // For example: var Team3Img = 'path/to/image.png';

    var teacherArray = [
        {
            images: TeamImg,
            name: "Alice"
        },

        {
            images: Team3Img,
            name: "Charlie"
        },

        {
            images: Team14Img,
            name: "Eva"
        },
        {
            images: Team6Img,
            name: "Frank"
        },

        {
            images: Team8Img,
            name: "Hannah"
        },
        {
            images: Team9Img,
            name: "Isaac"
        },
        {
            images: Team10Img,
            name: "Jack"
        },
        {
            images: Team11Img,
            name: "Katie"
        },
        {
            images: Team12Img,
            name: "Liam"
        },

        {
            images: Team5Img,
            name: "Nathan"
        },
        {
            images: Team15Img,
            name: "Olivia"
        },
        {
            images: Team16Img,
            name: "Peter"
        },
        {
            images: Team17Img,
            name: "Quincy"
        },
    ];



    return (
        <>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ "max-width": "600px" }}>
                        <h1 class="mb-3">Popular Teachers</h1>
                        <p>Meet our renowned and beloved team of popular teachers, known for their exceptional teaching expertise, dedication, and ability to ignite a lifelong passion for learning in students.</p>
                    </div>
                    <div class="row g-4">
                        {teacherArray.map((iteam) => {
                            return <>
                                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div class="team-item position-relative">
                                        <Image class="img-fluid rounded-circle w-75" src={iteam.images} alt />
                                        <div class="team-text">
                                            <h3>{iteam.name}</h3>
                                            <p>Designation</p>
                                            <div class="d-flex align-items-center">
                                                <a class="btn btn-square btn-primary mx-1" href><i
                                                    class="fab fa-facebook-f"></i></a>
                                                <a class="btn btn-square btn-primary  mx-1" href><i class="fab fa-twitter"></i></a>
                                                <a class="btn btn-square btn-primary  mx-1" href><i
                                                    class="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        })}

                        {/* <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="team-item position-relative">
                                <Image class="img-fluid rounded-circle w-75" src={Team2Img} alt />
                                <div class="team-text">
                                    <h3>Full Name</h3>
                                    <p>Designation</p>
                                    <div class="d-flex align-items-center">
                                        <a class="btn btn-square btn-primary mx-1" href><i
                                            class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-square btn-primary  mx-1" href><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-square btn-primary  mx-1" href><i
                                            class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="team-item position-relative">
                                <Image class="img-fluid rounded-circle w-75" src={Team3Img} alt />
                                <div class="team-text">
                                    <h3>Full Name</h3>
                                    <p>Designation</p>
                                    <div class="d-flex align-items-center">
                                        <a class="btn btn-square btn-primary mx-1" href><i
                                            class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-square btn-primary  mx-1" href><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-square btn-primary  mx-1" href><i
                                            class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="team-item position-relative">
                                <Image class="img-fluid rounded-circle w-75" src={Team4Img} alt />
                                <div class="team-text">
                                    <h3>Full Name</h3>
                                    <p>Designation</p>
                                    <div class="d-flex align-items-center">
                                        <a class="btn btn-square btn-primary mx-1" href><i
                                            class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-square btn-primary  mx-1" href><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-square btn-primary  mx-1" href><i
                                            class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularTeachers