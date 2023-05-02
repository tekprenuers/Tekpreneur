// import React from "react";
// import { Helmet } from "react-helmet";

export default function Home(){
    
    return(
        <section className="hero is-medium has-navbar-fixed-top">
                <div className="hero-body p-none">
                    <div className="container is-fluid columns" style={{ top: '2%' }}>
                        <div className="column is-align-self-center">
                            <section className="hero-subcontent">
                                <h1 className="title home-title">Promote Your Business With <span className="text-primary">Tech</span></h1>
                            </section>
                            <section className="hero-subcontent">
                                <p className="content text-gray">Support small business and join the nationwide movement to encourage commercial support for the millions of minority owned businesses helping world economy.</p>
                            </section>
                            <section className="hero-subcontent">
                                <a href="/" className="button btn-cta is-rounded">Get Started</a>
                            </section>
                        </div>
                        <div className="column text-center">
                            <img src="/hero-man.png" />
                        </div>
                    </div>
                </div>
            </section>
    )
}