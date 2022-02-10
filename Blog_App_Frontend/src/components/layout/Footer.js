import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div class="d-flex flex-column h-100">

        <footer class="w-100 py-4 flex-shrink-0">
            <div class="container py-4">
                <div class="row gy-4 gx-5">
                    <div class="col-lg-4 col-md-6">
                        <h5 class="text-white mb-3">About Company</h5>
                        <ul class="list-unstyled text-muted">
                            <li><p>NeoSOFT Technologies is here at your quick and easy service for shopping</p></li>
                            <li><p>Contact Information</p></li>
                            <li><p>Email : apurva.khurud@neosofttech.com</p></li>
                            <li><p>Phone : +919876543210</p></li>
                            <li><p>PUNE,INDIA</p></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <h5 class="text-white mb-3">Information</h5>
                        <ul class="list-unstyled text-muted">
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Guarantee and Return Policy</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="https://www.google.com/maps/place/NeoSOFT+Technologies/@18.5790021,73.7387793,15z/data=!4m5!3m4!1s0x0:0x316090d140dfd0b3!8m2!3d18.579388!4d73.7388023">Locate Us</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <h5 class="text-white mb-3">Newsletter</h5>
                        <p class="small text-muted">Signup to get exclusive offer from our favorite brands and to be well up in the news</p>
                        <form action="#">
                            <div class="input-group mb-3">
                                <input class="form-control" type="email" placeholder="Your Email..." aria-label="Recipient's Email" aria-describedby="button-addon2" />
                                <button class="btn btn-primary" id="button-addon2" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <p class="small text-muted mb-0">&copy; Copyright 2021 NeoSOFT Technologies All rights reserved | Design by Apurva Khurud.</p>
            </div>
        </footer>
    </div>
    )
}

export default Footer
