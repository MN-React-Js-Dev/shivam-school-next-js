import React from 'react'
import TeamImg from '../assets/img/Teachers/003894c5-734f-4cfb-b0ff-a3267928a7cd.png'
import Team2Img from '../assets/img/Teachers/066e0252-5f5b-4638-bae2-c53307e291db.png'
import Team3Img from '../assets/img/Teachers/0c00a371-e7ad-45f5-a06f-0f9451a31042.png'
import Team4Img from '../assets/img/Teachers/191ed4a8-3b4a-4313-b48a-4939a2d0b439.png'
import Team5Img from '../assets/img/Teachers/3b34cbfd-e73d-4971-bb9a-e8edeffd5d63.png'
import Team6Img from '../assets/img/Teachers/4cd0d080-baa1-4e23-a637-c48866899692.png'
import Team7Img from '../assets/img/Teachers/5d7e79af-b46a-42d7-ac4c-ea5136d9503b.png'
import Team8Img from '../assets/img/Teachers/5d7e79af-b46a-42d7-ac4c-ea5136d9503b.png'
import Team9Img from '../assets/img/Teachers/6c16f083-8513-4e68-b0b0-93afb4f12a14.png'
import Team10Img from '../assets/img/Teachers/77755dcc-59c9-47d9-ae5d-f66370caba1c.png'
import Team11Img from '../assets/img/Teachers/7cb1ad89-8a6a-42e1-b1e2-9ec01a03d4cd.png'
import Team12Img from '../assets/img/Teachers/825492c6-a59c-49b4-a83d-ff31ba84f368.png'
import Team13Img from '../assets/img/Teachers/825492c6-a59c-49b4-a83d-ff31ba84f368.png'
import Team14Img from '../assets/img/Teachers/8c6d3709-a145-4eba-9ed3-1b396917a904.png'
import Team15Img from '../assets/img/Teachers/98ac428e-8f81-4794-ad42-88c65946bc26.png'
import Team16Img from '../assets/img/Teachers/a6fbb350-c34f-4aa2-84d0-2c7b198d494e.png'
import Team17Img from '../assets/img/Teachers/abdea766-a3c6-457b-92bd-fcef60902870.png'

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