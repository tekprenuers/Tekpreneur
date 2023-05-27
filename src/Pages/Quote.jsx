/* eslint-disable react/no-unknown-property */
import { octaValidate } from "octavalidate-reactjs";
import { useState } from "react"
import { toast } from "react-toastify";

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
            <div className="is-flex" style={{ "justify-content": "space-between" }}>
                <div className="has-text-left">
                    {
                        (section > 1) &&
                        <button onClick={() => doPrevious()} className="button btn-cta p-4"><i class="fas fa-arrow-left"></i>&nbsp;Previous</button>
                    }
                </div>
                <div className="has-text-right">
                    {
                        (section < 3) ?
                            <button onClick={() => doNext()} className="button btn-cta p-4">Next&nbsp;<i class="fas fa-arrow-right"></i></button>
                            :
                            <button form="form_quote" className="button btn-cta is-outline p-4">
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
            document.querySelectorAll('input[type="checkbox"][name="services"]').forEach((el) => {
                if (el.checked && el.value == "Others") {
                    el.checked = false;
                }
            })
        } else if (e.target.checked && e.target.value === "Others") {
            console.log('checked others')
            //if others is checked, empty the array
            choosedServices = [];
            //show others specification
            setShowOthers(true);
            //reset the checkbox
            document.querySelectorAll('input[type="checkbox"][name="services"]').forEach((el) => {
                if (el.checked && el.value !== "Others") {
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

    const handleSubmit = (e) => {
        e.preventDefault();

        const btn = e.target.querySelector('button[form=' + e.target.id + ']');
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

        ov.customRule('PHONE', `^(\\+?234|0)([789]\\d{9})$`, 'You must provide a valid Nigerian Phone Number');
        if (ov.validate()) {
            //init form data
            const fd = new FormData(e.target);
            //init fetch
            fetch("https://server.thetekpreneurs.com/sendProposal.php", {
                method: "post",
                mode: "cors",
                body: fd
            })
                .then(res => res.json())
                .then((res) => {
                    if (res.success) {
                        toast.success(res.data.message);
                        //add innertext
                        btn.innerText = "Submitted!";
                        //remove loading class
                        btn.classList.remove('is-loading');
                    } else {
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
            <section className="hero is-medium not-home bg-pri-dark">
                <div className="hero-body">
                    <div className="container m-none" style={{ "top": "30%" }}>
                        <section className="section-content">
                            <h1 className="title home-title has-text-light">Get A Quote</h1>
                            <p>Let us know the services you need for this project and we will tell you the cost estimate of your project.</p>
                        </section>
                    </div>
                </div>
            </section>
            <section className="section mt-5 mb-5 mx-700 radius-20 has-border">
                <form id="form_quote" onSubmit={handleSubmit}>
                        <section className={(section === 1) ? 'd-block' : 'd-none'}>
                            <section className="mb-5">
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
                                <label>Phone Number (Preferably WhatsApp)</label>
                                <input placeholder="+234XXXXXXXXXX" className="input" name="phone" octavalidate="R,PHONE" id="inp_phone" />
                            </div>
                            <div className="field">
                                <label>Brand/Company Name</label>
                                <input placeholder="Tekpreneurs" className="input" name="brand_name" octavalidate="R,ALPHA_SPACES" id="inp_b_name" />
                            </div>
                            <NextSection />
                        </section>

                        <section className={(section === 2) ? 'd-block' : 'd-none'}>
                            <section className="mb-5">
                                <h3 className="title is-3 mb-1">Project Information</h3>
                                <p>Tell us more about this project</p>
                            </section>
                            <div className="field">
                                <label>Preferred Website Name</label>
                                <input className="input" placeholder="theTekpreneurs" octavalidate="R,ALPHA_ONLY" name="web_name" id="inp_w_name" />
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
                                            <textarea id="inp_specify_services" className="textarea" placeholder="I need" name="services"></textarea>
                                        </div>
                                    </>
                                }
                            </div>
                            <NextSection />
                        </section>
                
                        <section className={(section === 3) ? 'd-block' : 'd-none'}>
                            <section className="mb-5">
                                <h3 className="title is-3 mb-1">Budget</h3>
                                <p>Tell us about your budget</p>
                            </section>
                            <div className="field">
                                <label className="label">Quick overview of this project</label>
                                <textarea id="inp_overview" name="overview" className="textarea" placeholder="I want this website to have..." octavalidate="R,TEXT"></textarea>
                            </div>
                            <div className="field">
                                <label className="label">Your Budget (In Naira Only)</label>
                                <input id="inp_budget" name="budget" placeholder="N200,000" className="input" octavalidate="R" />
                            </div>
                            <div className="field mb-3">
                                <label className="label">How soon are you ready to start</label>
                                <div class="select is-fullwidth">
                                    <select octavalidate="R,TEXT" name="ready" id="inp_ready">
                                        <option value="This week">This week</option>
                                        <option value="Next week">Next week</option>
                                        <option value="Undecided">Undecided</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-5">
                                <label className="checkbox">
                                    <input name="pawb" type="checkbox" value="true" />
                                    &nbsp;Sign me up for the PAY AS WE BUILD scheme
                                </label>
                            </div>
                            <NextSection />
                        </section>
                </form>
            </section>
        </main>
    )
}