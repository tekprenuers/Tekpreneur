// import React from "react";
// import { Helmet } from "react-helmet";

export default function Home(){
    
    return(
        <main>
            <section className="hero">
                <div className="hero-body p-none">
                    <div className="container is-fluid columns  is-flex-direction-row-reverse" style={{ top: '2%' }}>
                        <div className="column text-center">
                            <img src="/hero-man.png" />
                        </div>
                        <div className="column is-align-self-center">
                            <section className="section-content">
                                <h1 className="title home-title">Promote Your Business With <span className="text-primary">Tech</span></h1>
                            </section>
                            <section className="section-content">
                                <p className="content text-gray">Support small business and join the nationwide movement to encourage commercial support for the millions of minority owned businesses helping world economy.</p>
                            </section>
                            <section className="section-content">
                                <a href="/" className="button btn-cta is-rounded">Get Started</a>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section is-medium">
                <div className="columns">
                    <div className="column is-half">
                    <section className="section-content">
                        <p className="text-tertiary mb-3">SERVICES</p>
                        <h3 className="title is-3">Our Capabilities</h3>
                    </section>
                    <div className="section-content">
                        <p className="content text-gray">We will bring the breathe of our experience and industry knowledge to help you succeed</p>
                    </div>
                    </div>
                    <div className="column is-half">
                        
                    </div>
                </div>
            </section>
        </main>

    )
}