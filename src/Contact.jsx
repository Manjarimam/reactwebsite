import React, { useState } from "react";


const Contact = () => {
    const [data, setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });
    const InputEvent=(event)=>{
        const {name, value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });
    };

    const formSubmit=(e)=>{
        e.preventDefault();
        alert(
            `My full name is ${data.fullname}. My mobile number is ${data.phone} my email is ${data.email} and here i want to say ${data.msg}`);
    };
    return (<>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div class="form-group mb-3">
                            <label for="exampleFormControlInput1">Full Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1"
                                name="fullname"
                                value={data.fullname}
                                onChange={InputEvent}
                                placeholder="Enter your Full Name" />
                        </div>
                        <div class="form-group mb-3">
                            <label for="exampleFormControlInput1">Phone</label>
                            <input type="phone" class="form-control" id="exampleFormControlInput1"
                                name="phone"
                                value={data.phone}
                                onChange={InputEvent}
                                placeholder="Mobile Number" />
                        </div>
                        <div class="form-group mb-3">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                name="email"
                                value={data.email}
                                onChange={InputEvent}
                                placeholder="name@example.com" />
                        </div>


                        <div class="form-group mb-3">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1"
                                name="msg"
                                value={data.msg}
                                onChange={InputEvent}
                                rows="3"></textarea>
                        </div>
                        <div>
                            <button type="submit" class="btn btn-primary mb-2">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    );
};

export default Contact;