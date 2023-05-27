/* eslint-disable react/no-unknown-property */
import { useState } from "react"

export default function Quote() {

    const [section, setSection] = useState(1);
    const [showOthers, setShowOthers] = useState(false)

    const NextSection = () => {

        const doNext = () => {
            return setSection(section + 1)
        }
        const doPrevious = () => {
            if (section > 1) return setSection(section - 1)
        }
        return <div className="field">
            <div className="columns">
                <div className="column has-text-left">
                    {
                        (section > 1) &&
                        <button onClick={() => doPrevious()} className="button btn-cta p-4"><i class="fas fa-arrow-left"></i>&nbsp;Previous</button>
                    }
                </div>
                <div className="column has-text-right">
                    {
                        (section < 3) ?
                            <button onClick={() => doNext()} className="button btn-cta p-4">Next&nbsp;<i class="fas fa-arrow-right"></i></button>
                            :
                            <button form="form_quote" className="button btn-cta p-4">
                                Submit
                            </button>
                    }
                </div>
            </div>
        </div>
    }

    const services = ["Web Design & Development", "Search Engine Optimization", "Brand Design & Development", "Social Media Management", "E-commerce", "Others"];

    let choosedServices = [];

    const handleOnChange = (e) => {
        //handle check
        if (e.target.checked && e.target.value !== "Others") {
            console.log('not checked others')
            choosedServices.push(e.target.value);
            //Hide others specification
            setShowOthers(false);            
            //reset the checkbox
            document.querySelectorAll('input[type="checkbox"][name="services"]').forEach( (el) => {
                if(el.checked && el.value == "Others"){
                    el.checked = false;
                }
            })
        } else if(e.target.checked && e.target.value === "Others"){
            console.log('checked others')
            //if others is checked, empty the array
            choosedServices = [];
            //show others specification
            setShowOthers(true);
            //reset the checkbox
            document.querySelectorAll('input[type="checkbox"][name="services"]').forEach( (el) => {
                if(el.checked && el.value !== "Others"){
                    el.checked = false;
                }
            })
        }

        //handle uncheck
        if (e.target.checked === false) {
            //find index 
            const index = choosedServices.findIndex((v) => {
                return v == e.target.value
            })
            console.log("unchecked", choosedServices[index])
            //remove item at that index
            choosedServices.splice(index, 1)
        }
        console.log(choosedServices)
    }
    return (
        <main>
            <section className="hero">
                <div className="hero-body p-0">
                    <div className="container is-fluid columns is-flex-direction-row-reverse" style={{ top: '2%' }}>
                        <div className="column has-text-centered">
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
                                <a href="/quote" className="button btn-cta is-rounded fw-bold">Get A Quote</a>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section mt-5 mb-5 mx-700 radius-20 shadow">
                <form id="form_quote">
                    {(section == 1) &&
                        <>
                            <section className="section-content">
                                <h3 className="title is-3 mb-1">Contact Information</h3>
                                <p>Tell us more about you</p>
                            </section>
                            <div className="field">
                                <label>Full Name</label>
                                <input placeholder="Moses Usman" className="input" name="name" octavalidate="R,NAME" id="inp_name" />
                            </div>
                            <div className="field">
                                <label>Email</label>
                                <input placeholder="hello@thetekpreneurs.com" className="input" name="email" octavalidate="R,EMAIL" id="inp_email" />
                            </div>
                            <div className="field">
                                <label>Phone Number</label>
                                <input placeholder="+234XXXXXXXXXX" className="input" name="phone" octavalidate="R,PHONE" id="inp_phone" />
                            </div>
                            <div className="field">
                                <label>Brand/Company Name</label>
                                <input placeholder="Tekpreneurs" className="input" name="brand_name" octavalidate="R,NAME" id="inp_b_name" />
                            </div>
                            <NextSection />
                        </>
                    }
                    {(section == 2) &&
                        <>
                            <section className="section-content">
                                <h3 className="title is-3 mb-1">Project Information</h3>
                                <p>Tell us more about this project</p>
                            </section>
                            <div className="field">
                                <label>Preferred Website Name</label>
                                <input className="input" placeholder="theTekpreneurs" octavalidate="R" name="web_name" id="inp_w_name" />
                            </div>
                            <div className="field">
                                <h5 className="title is-5">What services do you require?</h5>
                                {services.map((val, ind) => {
                                    return (
                                        <div className="mb-2" key={ind}>
                                            <label className="checkbox">
                                                <input name="services" onChange={handleOnChange} value={val} type="checkbox" />
                                                &nbsp;{val}
                                            </label>
                                        </div>
                                    )
                                })}
                                {

                                    (showOthers) && <>
                                        <div className="field">
                                            <label className="label">Others (Please specify)</label>
                                            <textarea className="textarea" placeholder="I need" name="services"></textarea>
                                        </div>
                                    </>
                                }
                            </div>
                            <NextSection />
                        </>
                    }
                    {(section == 3) &&
                        <>
                            <div className="field">
                                <label className="label">Quick overview of this project</label>
                                <textarea className="textarea" placeholder="I want this website to..."></textarea>
                            </div>
                            <div className="field">
                                <label className="label">Your Budget (In Naira Only)</label>
                                <input className="input" octavalidate="R,NAME" id="inp_name" />
                            </div>
                            <div className="field mb-3">
                                <label className="label">How soon are you ready to start</label>
                                <div class="select is-fullwidth">
                                    <select>
                                        <option>This week</option>
                                        <option>Next week</option>
                                        <option>Undecided</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-5">
                                <label className="checkbox">
                                    <input type="checkbox" />
                                    &nbsp;Sign me up for the PAY AS WE BUILD scheme
                                </label>
                            </div>
                            <NextSection />
                        </>
                    }
                </form>
            </section>
        </main>
    )
}