/* eslint-disable react/no-unknown-property */
// import React from "react";
import { octaValidate } from "octavalidate-reactjs"
import { toast } from "react-toastify"
// import { Helmet } from "react-helmet";

export default function Home() {

    const handleSubmit = (e) => {
        const btn = e.target.querySelector('button[form='+e.target.id+']');
        //remove innertext
        btn.innerText = "";
        //set loading class
        btn.classList.add('is-loading');
        //disable the button
        btn.setAttribute('disabled', 'disabled');
        //prevent the page from reloading
        e.preventDefault();
        // e.target.classList.toggle("is-loading");
        const ov = new octaValidate(e.target.id, {
            strictMode: true
        })
        if (ov.validate()) {
            //init form data
            const fd = new FormData(e.target);
            //init fetch
            fetch("https://server.thetekpreneurs.com/sendMail.php", {
                method : "post",
                mode : "cors",
                body : fd
            })
            .then(res => res.json())
            .then((res) => {
                if(res.success){
                    toast.success(res.data.message);
                    //add innertext
                    btn.innerText = "Sent!";
                    //remove loading class
                    btn.classList.remove('is-loading');
                }else{
                    toast.error(res.data.message);
                    //add innertext
                    btn.innerText = "Try again";
                    //remove loading class
                    btn.classList.remove('is-loading');
                    //remove attribute
                    btn.removeAttribute('disabled');
                }
            }).catch((err) => {
                console.log(err);
                toast.error("Please check your network connection and try again");
                 //add innertext
                btn.innerText = "Try again";
                //remove loading class
                btn.classList.remove('is-loading');
                //remove attribute
                btn.removeAttribute('disabled');
            })
        } else {
            toast.error("Form validation failed!");
             //add innertext
            btn.innerText = "Try again";
            //remove loading class
            btn.classList.remove('is-loading');
            //remove attribute
            btn.removeAttribute('disabled');
        }
    }
    return (
        <main>
            <section className="hero">
                <div className="hero-body p-0">
                    <div className="container is-fluid columns is-flex-direction-row-reverse" style={{ top: '2%' }}>
                        <div className="column text-center">
                            <img src="/hero-man.png" />
                        </div>
                        <div className="column is-align-self-center">
                            <section className="section-content">
                                <h1 className="title home-title">Promote Your Business With <span className="text-primary">Tech</span></h1>
                            </section>
                            <section className="section-content">
                                <p className="content text-gray">Support small business and join the nation-wide movement to encourage commercial support for the millions of minority owned businesses helping world economy.</p>
                            </section>
                            <section className="section-content">
                                <a href="#" className="button btn-cta is-rounded fw-bold">Get A Quote</a>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section is-medium">
                <div className="columns">
                    <div className="column is-4">
                        <section className="section-content">
                            <p className="text-tertiary mb-3">SERVICES</p>
                            <h3 className="title is-3">Our Capabilities</h3>
                        </section>
                        <div className="section-content">
                            <p className="content text-gray">We will bring the breathe of our experience and industry knowledge to help you succeed</p>
                        </div>
                    </div>
                    <div className="column is-8">
                        <div className="columns">
                            <div className="column is-4">
                                <p className="mb-3">
                                    <i className="fa-duotone fa-2x fa-money-bill-trend-up ico-purple"></i>
                                </p>
                                <h5 className="title is-5">Increase In Revenue</h5>
                                <p className="text-gray">61% of SMEs that have undergone digital transformation see increased profits compared to companies that do not use digital tech.</p>
                            </div>
                            <div className="column is-4">
                                <p className="mb-3">
                                    <i className="fa-duotone fa-2x fa-lightbulb-on ico-green"></i>
                                </p>
                                <h5 className="title is-5">Promoting Innovation</h5>
                                <p className="text-gray">Companies constantly seeking methods to optimize and simplify processes also contribute to various innovations.</p>
                            </div>
                            <div className="column is-4">
                                <p className="mb-3">
                                    <i className="fa-duotone fa-2x fa-chart-mixed ico-red"></i>
                                </p>
                                <h5 className="title is-5">Increase In Productivity</h5>
                                <p className="text-gray">Increase the productivity of your brand by up to 120%.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section bg-pri-dark">
                <div className="columns is-flex-direction-arow-reverse">
                    <div className="column text-center">
                        <img className="why-woman" src="/why-woman.png" />
                    </div>
                    <div className="column is-align-self-center">
                        <section className="section-content">
                            <p className="text-tertiary mb-3">WHY CHOOSE US</p>
                            <h3 className="title is-3 has-text-white space-2x">Get your business ready For the complete Tech Takeover</h3>
                        </section>
                        <section className="section-content">
                            <div className="mb-3">
                                <p className="list-flex">
                                    <span className="icon">
                                        <i className="fs-one-half fa-duotone fa-circle-check"></i>
                                    </span><span className="text-ash">120% Increase in Productivity</span></p>
                            </div>
                            <div className="mb-3">
                                <p className="list-flex">
                                    <span className="icon">
                                        <i className="fs-one-half fa-duotone fa-circle-check"></i>
                                    </span><span className="text-ash">Development of Technical Models</span></p>
                            </div>
                            <div className="mb-3">
                                <p className="list-flex">
                                    <span className="icon">
                                        <i className="fs-one-half fa-duotone fa-circle-check"></i>
                                    </span><span className="text-ash">Better Customer Experience</span></p>
                            </div>
                            <section className="section-content">
                                <a href="/" className="button btn-cta is-light fw-bold is-rounded">Get A Quote</a>
                            </section>
                        </section>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="columns is-sflex-direction-row-reverse">
                    <div className="column text-center is-align-self-center">
                        <img src="/hero-man.png" />
                    </div>
                    <div className="column is-align-self-center">
                        <section className="section-content">
                            <p className="text-tertiary mb-3">CONTACT US</p>
                            <h3 className="title is-3 fw-bolder">Let&apos;s Collaborate Now!</h3>
                        </section>
                        <section className="section-content">
                            <form id="form_contact" method="post" onSubmit={handleSubmit}>
                                <div className="field">
                                    <label className="label">Full Name</label>
                                    <input name="name" className="input" placeholder="Enter your name" id="inp_name" octavalidate="R,NAME" />
                                </div>
                                <div className="field">
                                    <label className="label">Email Address</label>
                                    <input className="input" name="email" placeholder="Enter your email address" id="inp_email" octavalidate="R,EMAIL" />
                                </div>
                                <div className="field">
                                    <label className="label">Message</label>
                                    <textarea name="body" className="textarea" placeholder="Enter your message" id="inp_msg" octavalidate="R,TEXT"></textarea>
                                </div>
                                <div className="field">
                                    <button form="form_contact" className="btn-cta button is-rounded fw-bold space-1x">Send Message</button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    )
}