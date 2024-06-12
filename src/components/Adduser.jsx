import React, { useState } from 'react'

const Adduser = () => {
    const[data,setData]=useState(
        {
            "name":"",
            "dob":"",
            "blood":"",
            "mobile":"",
            "address":"",
            "pincode":"",
            "district":"",
            "place":"",
            "email":"",
            "username":"",
            "password":"",
            "confirmpass":""

        }
    )
    const inputHandler = (event) => {
        setData({...data, [event.target.name]:event.target.value})
    }


    const readValue = () => {
        if(data.password != data.confirmpass)
            {
              alert("Password does't Match")
            }
        else  
        {
        axios.post("",data).then(
        (response) => {
            console.log(response.data)
            if(response.data.status=="success")
                {
                    alert("Successfully Registered")
                }
            else
                {
                    alert("Error")
                    
                }      
        } 
    ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        )
    }
  }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Name</label>
                            <input type="text" className="input form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">DOB</label>
                            <input type="date" name="" id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Blood Group</label>
                            <select name="" id="" className="form-control">
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="AB+">AB+</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="B-">B-</option>
                                <option value="AB-">AB-</option>
                            </select>                        
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Mobile</label>
                            <input type="text" className="input form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Address</label>
                            <textarea name="" id="" className="form-control"></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Pincode</label>
                            <input type="text" className="input form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">District</label>
                            <select name="" id="" className="form-control">
                                <option value="Kasaragod">Kasaragod</option>
                                <option value="Kannur">Kannur</option>
                                <option value="Kozhikode">Kozhikode</option>
                                <option value="Malappuram">Malappuram</option>
                                <option value="Palakkad">Palakkad</option>
                                <option value="Thrissur">Thrissur</option>
                                <option value="Ernakulam">Ernakulam</option>
                                <option value="Wayanad">Wayanad</option>
                                <option value="Idukki">Idukki</option>
                                <option value="Kottayam">Kottayam</option>
                                <option value="Alappuzha">Alappuzha</option>
                                <option value="Kollam">Kollam</option>
                                <option value="Pathanamthitta">Pathanamthitta</option>
                                <option value="Trivandrum">Trivandrum</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Place</label>
                            <input type="text" className="input form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Email</label>
                            <input type="text" className="input form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Username</label>
                            <input type="text" className="input form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Password</label>
                            <input type="text" className="input form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Confirm Password</label>
                            <input type="text" className="input form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Adduser