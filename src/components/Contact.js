import { useState } from "react";

const Contact=()=>{
    const [email,setEmail]=useState("mohantykishor27@gmail.com");
    const [phone,setPhone]=useState("(+91) 7653966822");
    return (
        <>

<div className="main-container">
            <h1 className="text-bold underline text-center mt-4">My Contact</h1>

            <div className="flex space-x-5 px-10 mt-10">
                <div  className="flex-1 curser-pointer hover:bg-gray-100 shadow-lg bg-slate-200 p-5 text-center space-y-3 rounded-xl">
                <i class="text-5xl fa-solid fa-address-book"></i>
                    <h1>Contact Details</h1>
                    <p>
                       <b> <span><i class="fa-solid fa-envelope"></i></span> Email: </b> {email} <br/>
                       <b><i class="fa-solid fa-phone"></i> Phone:</b> {phone}
                    </p>
                </div>
                <div className="flex-1 curser-pointer hover:bg-gray-100 shadow-lg bg-slate-200 p-5 text-center space-y-3 rounded-xl">
                <i class="text-5xl fa-solid fa-house"></i>
                <h1>Address Details</h1>
                <p>
                <b>At/Po:</b> Angula <br/>
                <b>Via:</b> Soro <br/>
                <b>Ps:</b> Soro <br/>
                <b>PinCode:</b> 756045 <br/>
                <b>Dist:</b> Balasore <br/>
                <b>state:</b> Odisha <br/>
                <b>Country:</b> India <br/>

                </p>
                </div>


            </div>


        </div>
        
        
        </>
    )
}
export default Contact;