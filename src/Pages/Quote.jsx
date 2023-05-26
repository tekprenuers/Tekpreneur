/* eslint-disable react/no-unknown-property */
// import React from "react"

export default function Quote(){
    return(
        <>
            <section className="section">
                <form>
                    <section className="section-content">
                        <h3 className="title is-3 mb-1">Contact Information</h3>
                        <p>Tell us more about you</p>                      
                    </section>
<div className="field">
                            <label>Full Name</label>
                            <input className="input" octavalidate="R,NAME" id="inp_name" />
                        </div>
                    <div className="field">
                        <label>Email</label>
                        <input className="input" octavalidate="R,NAME" id="inp_name" />
                    </div>
                    <div className="field">
                        <label>Phone Number</label>
                        <input className="input" octavalidate="R,NAME" id="inp_name" />
                    </div>
                    <div className="field">
                        <label>Brand/Company Name</label>
                        <input className="input" octavalidate="R,NAME" id="inp_name" />
                    </div>
                    <hr />
                    <section className="section-content">
                        <h3 className="title is-3 mb-1">Project Information</h3>
                        <p>Tell us more about this project</p>                      
                    </section>
                    <div className="field">
                        <label>Preferred Website Name</label>
                        <input className="input" octavalidate="R,NAME" id="inp_name" />
                    </div>
                    <div className="field">
                        <label><input type="checkbox" />Web Design & Development</label>
                    </div>
                </form>
            </section>
        </>
    )
}