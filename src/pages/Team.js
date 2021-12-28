import React from 'react'
import "./Team.css";
import Img from "../components/images/lorieann.jpg";
import Img1 from "../components/images/meynard.jpg";
import Img2 from "../components/images/richard.jpg";
import Img3 from "../components/images/image.jpg";

function Team() {
    return (
        <div>

            <section class="bg-light mt-5" id="" className="Background-Color">


                <div class="container-fluid px-4 py-5 my-5 text-center">
                    <div class="lc-block d-block mx-auto mb-4">
                        <div class="col-sm-12 col-md-12 mb-4">
                            <h3 class="text-center mt-5 text-secondary" className="text-about-us" >About Us</h3>
                        </div>
                    </div>
                    <div class="avatar mx-auto" className="about-image">
                        <img src={Img3} class=" z-depth-1 img-fluid" />
                    </div>

                    <div className="text-description">
                        <h4 class="font-weight-bold dark-grey-text mt-4">Who are we</h4>
                        <h6 class="font-weight-bold blue-text my-3">Lorem</h6>
                        <p class="font-weight-normal dark-grey-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
                            corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
                    </div>

                    {/* <div class="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center"> <a class="btn btn-primary btn-lg px-4 gap-3" href="#" role="button">Click me, I'm a button</a>
              <a class="btn btn-outline-secondary btn-lg px-4" href="#" role="button">Click me, I'm a button</a>
            </div> */}
                </div>




                <div class="container">
                    <div class="row text-center">
                        <div class="col-sm-12 col-md-12 mb-4">
                            <h3 class="text-center mt-5 text-secondary" className="text-header">Meet Our Team</h3>
                        </div>

                        <div class="col-md-4">
                            <div class="testimonial mb-5">
                                <div class="avatar mx-auto">
                                    <img src={Img1} class="rounded-circle z-depth-1 img-fluid" />
                                </div>
                                <div className="text">
                                    <h4 class="font-weight-bold dark-grey-text mt-4">Meynard Duran</h4>
                                    <h6 class="font-weight-bold blue-text my-3">Web Developer</h6>
                                    <p class="font-weight-normal dark-grey-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                        corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
                                    <a href="#"><button type="button" class="btn btn-secondary">Read More</button></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="testimonial mb-5">
                                <div class="avatar mx-auto">
                                    <img src={Img} class="rounded-circle z-depth-1 img-fluid" />
                                </div>
                                <div className="text">
                                    <h4 class="font-weight-bold dark-grey-text mt-4">Lorie Pascual</h4>
                                    <h6 class="font-weight-bold blue-text my-3">Web Developer</h6>
                                    <p class="font-weight-normal dark-grey-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                        eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                                    <a href="#"><button type="button" class="btn btn-secondary">Read More</button></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="testimonial mb-5">
                                <div class="avatar mx-auto">
                                    <img src={Img2} class="rounded-circle z-depth-1 img-fluid" />
                                </div>
                                <div className="text">
                                    <h4 class="font-weight-bold dark-grey-text mt-4">Richard Ombrog</h4>
                                    <h6 class="font-weight-bold blue-text my-3">Web Developer</h6>
                                    <p class="font-weight-normal dark-grey-text">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque corrupti.</p>
                                    <a href="#"><button type="button" class="btn btn-secondary">Read More</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team