import React from 'react'
import TeamImg from '../assets/img/team-1.jpg'
import Team2Img from '../assets/img/team-2.jpg'
import Team3Img from '../assets/img/team-3.jpg'
import Image from 'next/image'
const PopularTeachers = () => {
    return (
        <>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ "max-width": "600px" }}>
                        <h1 class="mb-3">Popular Teachers</h1>
                        <p>Meet our renowned and beloved team of popular teachers, known for their exceptional teaching expertise, dedication, and ability to ignite a lifelong passion for learning in students.</p>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="team-item position-relative">
                                <Image class="img-fluid rounded-circle w-75" src={TeamImg} alt />
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
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularTeachers