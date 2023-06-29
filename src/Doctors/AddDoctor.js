import axios from "axios"
import { useState,useRef } from "react"
import Navbar from "../Components/Navbar"
import Sidebar from "../Components/Sidebar"

function AddDoctor() {
    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [date, setDate] = useState()
    const [gender, setGender] = useState()
    const [speciality, setSpeciality] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [url,setUrl] = useState()
    const img = useRef()

    
    const[facebook,setfacebook] =useState("");
    const[twitter,settwitter] =useState("");
    const[googleplus,setgoogleplus] =useState("");
    const[linkedin,setlinkedin] =useState("");
    const[behance,setbehance] =useState("");
    const[dribble,setdribble] =useState("");

    const[accInfo,setaccInfo]=useState({email:'',password:'',conpass:''})


    //Add Doctors
    const submitData = () => {
        const form = new FormData()
        form.append('fname', fname)
        form.append('lname', lname)
        form.append('date', date)
        form.append('gender', gender)
        form.append('speciality', speciality)
        form.append('phone', phone)
        form.append('email', email)
        form.append('url', url)
        form.append('image', img.current.files[0])
        axios.post('http://localhost/php_project/hospital/add-doctor.php', form)
            .then(function (response) {
                console.log(response);
                // alert('Data are successfully inserted...!')
                // window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    function test(i) {
        setGender(i.target.value)
    }
    
    // doctor acc info

    const infosubmit =() => {
        axios.post('http://localhost/php_project/hospital/doctor-acc-view.php',accInfo)
        .then(function (response) {
            console.log(response);
            alert('Account information added successfully');

        })
        .catch(function (error) {
            console.log(error);
        })

    }
    function accInformation(i) {
        setaccInfo({...accInfo,[i.target.name]:i.target.value})
    }

    const socialsenddata =() => {
        const socialdata = new FormData()
        socialdata.append('facebook', facebook)
        socialdata.append('twitter', twitter)
        socialdata.append('googleplus',googleplus)
        socialdata.append('linkedin', linkedin)
        socialdata.append('behance', behance)
        socialdata.append('dribble',dribble)

        axios.post('http://localhost/php_project/hospital/doctor-social-info.php',socialdata)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    return (

        <>
            <div className="theme-cyan add-doctor">
                <div className="page-loader-wrapper">
                    <div className="loader">
                        <div className="m-t-30"><img className="zmdi-hc-spin" src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" width={48} height={48} alt="Oreo" /></div>
                        <p>Please wait...</p>
                    </div>
                </div>
                <div className="overlay" />
                <Navbar />
                <Sidebar />
                <div className="chat-launcher" />
                <div className="chat-wrapper">
                    <div className="card">
                        <div className="header">
                            <ul className="list-unstyled team-info margin-0">
                                <li className="m-r-15"><h2>Doctor Team</h2></li>
                                <li>
                                    <img src="../assets/images/xs/avatar2.jpg" alt="Avatar" />
                                </li>
                                <li>
                                    <img src="../assets/images/xs/avatar3.jpg" alt="Avatar" />
                                </li>
                                <li>
                                    <img src="../assets/images/xs/avatar4.jpg" alt="Avatar" />
                                </li>
                                <li>
                                    <img src="../assets/images/xs/avatar6.jpg" alt="Avatar" />
                                </li>
                                <li>
                                    <a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="body">
                            <div className="chat-widget">
                                <ul className="chat-scroll-list clearfix">
                                    <li className="left float-left">
                                        <img src="../assets/images/xs/avatar3.jpg" className="rounded-circle" alt />
                                        <div className="chat-info">
                                            <a className="name" href="#">Alexander</a>
                                            <span className="datetime">6:12</span>
                                            <span className="message">Hello, John </span>
                                        </div>
                                    </li>
                                    <li className="right">
                                        <div className="chat-info"><span className="datetime">6:15</span> <span className="message">Hi, Alexander<br /> How are you!</span> </div>
                                    </li>
                                    <li className="right">
                                        <div className="chat-info"><span className="datetime">6:16</span> <span className="message">There are many variations of passages of Lorem Ipsum available</span> </div>
                                    </li>
                                    <li className="left float-left"> <img src="../assets/images/xs/avatar2.jpg" className="rounded-circle" alt />
                                        <div className="chat-info"> <a className="name" href="#">Elizabeth</a> <span className="datetime">6:25</span> <span className="message">Hi, Alexander,<br /> John <br /> What are you doing?</span> </div>
                                    </li>
                                    <li className="left float-left"> <img src="../assets/images/xs/avatar1.jpg" className="rounded-circle" alt />
                                        <div className="chat-info"> <a className="name" href="#">Michael</a> <span className="datetime">6:28</span> <span className="message">I would love to join the team.</span> </div>
                                    </li>
                                    <li className="right">
                                        <div className="chat-info"><span className="datetime">7:02</span> <span className="message">Hello, <br />Michael</span> </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="input-group p-t-15">
                                <input type="text" className="form-control" placeholder="Enter text here..." />
                                <span className="input-group-addon">
                                    <i className="zmdi zmdi-mail-send" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content">
                    <div className="block-header">
                        <div className="row">
                            <div className="col-lg-7 col-md-5 col-sm-12">
                                <h2>Add Doctors
                                    <small className="text-muted">Welcome to Oreo</small>
                                </h2>
                            </div>
                            <div className="col-lg-5 col-md-7 col-sm-12">
                                <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                                    <i className="zmdi zmdi-plus" />
                                </button>
                                <ul className="breadcrumb float-md-right">
                                    <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                                    <li className="breadcrumb-item"><a href="javascript:void(0);">Doctors</a></li>
                                    <li className="breadcrumb-item active">Add Doctors</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Basic</strong> Information <small>Description text here...</small> </h2>
                                        <ul className="header-dropdown">
                                            <li className="remove">
                                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="First Name" name="fname" onChange={(i) => setFname(i.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Last Name" name="lname" onChange={(i) => setLname(i.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Date of Birth" name="dob" onChange={(i) => setDate(i.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <select className="form-control show-tick" onChange={test}>
                                                    <option selected disabled>- Gender -</option>
                                                    <option value='male'>Male</option>
                                                    <option value='female'>Female</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Speciality" name="speciality" onChange={(i) => setSpeciality(i.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Phone" name="phone" onChange={(i) => setPhone(i.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Enter Your Email" name="email" onChange={(i) => setEmail(i.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Website URL" name="url" onChange={(i) => setUrl(i.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone" method="post" encType="multipart/form-data">
                                                    <div className="dz-message">
                                                        <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                                                        <h3>Drop files here or click to upload.</h3>
                                                        <em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em> </div>
                                                    <div className="fallback">
                                                        <input name="file" type="file" multiple ref={img} />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <textarea rows={4} className="form-control no-resize" placeholder="Please type what you want..." defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <button type="submit" className="btn btn-primary btn-round" onClick={() => submitData()}>Submit</button>
                                                <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Doctor's</strong> Account Information <small>Description text here...</small> </h2>
                                        <ul className="header-dropdown">
                                            <li className="remove">
                                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="User Name" name="email" onChange={accInformation}/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Password"name="password" onChange={accInformation}/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Confirm Password" name="conpass" onChange={accInformation}/>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <button type="submit" className="btn btn-primary btn-round" onClick={()=>infosubmit()}>Submit</button>
                                                <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Doctor</strong> Social Media Info <small>Description text here...</small> </h2>
                                        <ul className="header-dropdown">
                                            <li className="remove">
                                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-facebook" /></span>
                                                    <input type="text" className="form-control" placeholder="Facebook" onChange={(i)=>setfacebook(i.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-twitter" /></span>
                                                    <input type="text" className="form-control" placeholder="Twitter" onChange={(i)=>settwitter(i.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-google-plus" /></span>
                                                    <input type="text" className="form-control" placeholder="Google Plus" onChange={(i)=>setgoogleplus(i.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-linkedin" /></span>
                                                    <input type="text" className="form-control" placeholder="LinkedIN" onChange={(i)=>setlinkedin(i.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-behance" /></span>
                                                    <input type="text" className="form-control" placeholder="Behance" onChange={(i)=>setbehance(i.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-dribbble" /></span>
                                                    <input type="text" className="form-control" placeholder="dribbble" onChange={(i)=>setdribble(i.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <p> <b>With Search Bar</b> </p>
                                                <select className="form-control z-index show-tick" data-live-search="true">
                                                    <option>Hot Dog, Fries and a Soda</option>
                                                    <option>Burger, Shake and a Smile</option>
                                                    <option>Sugar, Spice and all things nice</option>
                                                </select>
                                                <button type="submit" className="btn btn-primary btn-round" onClick={socialsenddata}>Submit</button>
                                                <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AddDoctor
