import axios from "axios"
import { useEffect, useRef, useState } from "react"
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

function AddPatients() {
    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [date, setDate] = useState()
    const [age, setAge] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [gender, setGender] = useState()
    const [doctorSelect, setDoctorSelect] = useState()
    const status = 0
    const [allDoctors, setAllDoctors] = useState([])
    const [loader, setLoader] = useState(false)
    const img = useRef()

    //Add Patients..
    const submitData = () => {
        const form = new FormData()
        form.append('fname', fname)
        form.append('lname', lname)
        form.append('date', date)
        form.append('age', age)
        form.append('phone', phone)
        form.append('email', email)
        form.append('gender', gender)
        form.append('status', status)
        form.append('doctorSelect', doctorSelect)
        form.append('image', img.current.files[0])
        axios.post('http://localhost/PHP_Project/Hospital/add-patients.php', form)
            .then(function (response) {
                console.log(response);
                alert('Data are successfully inserted...!')
                // window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    function test(i) {
        // alert(i.target.value)
        setGender(i.target.value)
    }
    //All Doctors view
    useEffect(() => {
        axios.get('http://localhost/PHP_Project/Hospital/all-doctor.php')
            .then(function (response) {
                console.log(response);
                setLoader(true)
                setAllDoctors(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    function test_1(i) {
        setDoctorSelect(i.target.value)
    }


    return (
        <>
            <div className="theme-cyan dashboard-part_1">
                {/* Page Loader */}
                <div className="page-loader-wrapper">
                    <div className="loader">
                        <div className="m-t-30"><img className="zmdi-hc-spin" src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" width={48} height={48} alt="Oreo" /></div>
                        <p>Please wait...</p>
                    </div>
                </div>
                {/* Overlay For Sidebars */}
                <div className="overlay" />
                {/* Top Bar */}
                <Navbar />
                {/* Sidebar */}
                <Sidebar />
                {
                    loader ? (
                        <>
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
                                            <h2>Add Patient
                                                <small className="text-muted">Welcome to Oreo</small>
                                            </h2>
                                        </div>
                                        <div className="col-lg-5 col-md-7 col-sm-12">
                                            <ul className="breadcrumb float-md-right">
                                                <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                                                <li className="breadcrumb-item"><a href="javascript:void(0);">Patient</a></li>
                                                <li className="breadcrumb-item active">Add Patient</li>
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
                                                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                                            <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                                                                <li><a href="javascript:void(0);">Edit</a></li>
                                                                <li><a href="javascript:void(0);">Delete</a></li>
                                                                <li><a href="javascript:void(0);">Report</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="remove">
                                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="body">
                                                    <div className="row clearfix">
                                                        <div className="col-sm-4">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="fname" onChange={(i) => setFname(i.target.value)} placeholder="First Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="lname" onChange={(i) => setLname(i.target.value)} placeholder="Last Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="phone" onChange={(i) => setPhone(i.target.value)} placeholder="Phone No." />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row clearfix">
                                                        <div className="col-sm-3">
                                                            <div className="input-group date-body">
                                                                <span className="input-group-addon">
                                                                    <i className="zmdi zmdi-calendar" />
                                                                </span>
                                                                <input type="date" className="form-control" name="date" onChange={(i) => setDate(i.target.value)} placeholder="Enter date" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="age" onChange={(i) => setAge(i.target.value)} placeholder="Age" />
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
                                                            <select className="form-control show-tick" onChange={test_1}>
                                                                <option selected disabled>- Doctor -</option>
                                                                {
                                                                    allDoctors.map((i) => {
                                                                        return (
                                                                            <>
                                                                                <option value={i.fname + " " + i.lname}> <h2> {i.fname + " " + i.lname} </h2> </option>
                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <input type="email" className="form-control" name="email" onChange={(i) => setEmail(i.target.value)} placeholder="Enter Your Email" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row clearfix">
                                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                                            <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone" method="post" encType="multipart/form-data">
                                                                <div className="dz-message">
                                                                    <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                                                                    <h3>Drop files here or click to upload.</h3>
                                                                    <em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em> </div>
                                                                <div className="fallback">
                                                                    <input type="file" ref={img} />
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="row clearfix">
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <textarea rows={4} className="form-control no-resize" placeholder="Description" defaultValue={""} />
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
                                                    <h2><strong>Registration</strong> Information <small>Description text here...</small> </h2>
                                                    <ul className="header-dropdown">
                                                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                                            <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                                                                <li><a href="javascript:void(0);">Edit</a></li>
                                                                <li><a href="javascript:void(0);">Delete</a></li>
                                                                <li><a href="javascript:void(0);">Report</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="remove">
                                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="body">
                                                    <div className="row clearfix">
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Doctor Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Staff on Duty" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row clearfix">
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Ward No." />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="zmdi zmdi-calendar" />
                                                                </span>
                                                                <input type="text" className="datetimepicker form-control" placeholder="Please choose date & time..." />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12">
                                                            <button type="submit" className="btn btn-primary btn-round">Submit</button>
                                                            <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    ) : <></>
                }

            </div>

        </>
    )
}

export default AddPatients
