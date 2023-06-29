import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "../Components/Navbar"
import Sidebar from "../Components/Sidebar"

function AllPatients() {
  const [allPatients, setAllPatients] = useState([])
  const [updateStatus, setUpdateStatus] = useState()
  const [id, setId] = useState()
  //All Patients view
  useEffect(() => {
    axios.get('http://localhost/PHP_Project/Hospital/all-patients.php')
      .then(function (response) {
        console.log(response);
        setAllPatients(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])
  //Approved Actions...
  function handleBtn(i) {
    alert(i)
    allPatients.map((items) => {
      if (items.id == i) {
        document.getElementById('statusBox' + i).style.opacity = "1"
        document.getElementById('statusBox' + i).focus()
      }
    })
  }
  const textChange = (i, j) => {
    setUpdateStatus(i)
    setId(j)
    if (i.length > 0) {
      document.getElementById('statusBtn' + j).style.opacity = "1"
    }
  }
  function myFun(i) {
    if (i.key == "Enter") {
      axios.post('http://localhost/PHP_Project/Hospital/add-patients.php', { id: id, status: updateStatus })
        .then(function (response) {
          console.log(response);
          alert('Status are successfully updated...!')
          window.location.reload()
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }
  //Appoinment Details...
  function appoimentBtn(i) {
    if (i == "Today") {
      const t = new Date()
      const todayDate = t.toISOString().split('T')[0]
      console.log("TodayDate => " + todayDate);
      axios.post('http://localhost/PHP_Project/Hospital/appoinment.php', {
        today_date: todayDate,
      })
        .then(function (response) {
          console.log(response);
          setAllPatients(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    else if (i == "Last Week") {
      function mysqlDate(date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)) {
        return date.toISOString().split('T')[0];
      }
      const pre_date = mysqlDate();
      
      const t = new Date()
      const todayDate = t.toISOString().split('T')[0]
      
      axios.post('http://localhost/PHP_Project/Hospital/appoinment.php', {
        today_date: todayDate,
        pre_date: pre_date
      })
        .then(function (response) {
          console.log(response);
          setAllPatients(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    else if (i == "1 month") {
      function mysqlDate(date = new Date(Date.now() - 31 * 24 * 60 * 60 * 1000)) {
        return date.toISOString().split('T')[0];
      }
      const pre_date = mysqlDate();
      const t = new Date()
      const todayDate = t.toISOString().split('T')[0]
      axios.post('http://localhost/PHP_Project/Hospital/appoinment.php', {
        today_date: todayDate,
        pre_date: pre_date
      })
        .then(function (response) {
          console.log(response);
          setAllPatients(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    else {
      axios.get('http://localhost/PHP_Project/Hospital/all-patients.php')
        .then(function (response) {
          console.log(response);
          setAllPatients(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }
  return (
    <>
      <div className="theme-cyan">
        <div>
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
          {/* Chat-launcher */}
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
                  <h2>All Patients
                    <small className="text-muted">Welcome to Oreo</small>
                  </h2>
                </div>
                <div className="col-lg-5 col-md-7 col-sm-12">
                  <button className="btn btn-primary btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                    <i className="zmdi zmdi-plus" />
                  </button>
                  <ul className="breadcrumb float-md-right">
                    <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                    <li className="breadcrumb-item"><a href="javascript:void(0);">Patients</a></li>
                    <li className="breadcrumb-item active">All Patients</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row clearfix">
                <div className="col-md-12">
                  <div className="card patients-list">
                    <div className="header">
                      <h2><strong>Patients</strong> List</h2>
                      <ul className="header-dropdown">
                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                          <ul className="dropdown-menu dropdown-menu-right slideUp">
                            <li><a href="javascript:void(0);">Action</a></li>
                            <li><a href="javascript:void(0);">Another action</a></li>
                            <li><a href="javascript:void(0);">Something else</a></li>
                          </ul>
                        </li>
                        <li className="remove">
                          <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                        </li>
                      </ul>
                    </div>
                    <div className="body">
                      {/* Nav tabs */}
                      <ul className="nav nav-tabs padding-0">
                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#All" onClick={() => appoimentBtn('All')}>All</a></li>
                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#USA">USA</a></li>
                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#India">India</a></li>
                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#India" onClick={() => appoimentBtn('Today')}>Today</a></li>
                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#India" onClick={() => appoimentBtn('Last Week')}>Last Week ago</a></li>
                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#India" onClick={() => appoimentBtn('1 month')}>1 month ago</a></li>
                      </ul>
                      {/* Tab panes */}
                      <div className="tab-content m-t-10">
                        <div className="tab-pane table-responsive active" id="All">
                          <table className="table m-b-0 table-hover">
                            <thead>
                              <tr>
                                <th>Media</th>
                                <th>Patients ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                allPatients.map((items) => {
                                  if (items.status == "1") {
                                    return (
                                      <>
                                        <tr>
                                          <td>
                                            <span className="list-icon">
                                              <img style={{ width: "48px", height: "48px", objectFit: "cover" }} className="patients-img" src={`http://localhost/PHP_Project/Hospital/images/${items.image}`} alt />
                                            </span>
                                          </td>
                                          <td> {items.id} </td>
                                          <td> {items.fname + " " + items.lname} </td>
                                          <td> {items.email} </td>
                                          <td> {items.age} </td>
                                          <td> {items.gender} </td>
                                          <td> {items.phone} </td>
                                          <td> {items.date} </td>
                                          <td>
                                            <span className="badge badge-success">Approved</span>
                                          </td>
                                        </tr>
                                      </>
                                    )
                                  }
                                  else {
                                    return (
                                      <>
                                        <tr>
                                          <td>
                                            <span className="list-icon">
                                              <img style={{ width: "48px", height: "48px", objectFit: "cover" }} className="patients-img" src={`http://localhost/PHP_Project/Hospital/images/${items.image}`} alt />
                                            </span>
                                          </td>
                                          <td> {items.id} </td>
                                          <td> {items.fname + " " + items.lname} </td>
                                          <td> {items.email} </td>
                                          <td> {items.age} </td>
                                          <td> {items.gender} </td>
                                          <td> {items.phone} </td>
                                          <td> {items.date} </td>
                                          <td>
                                            <span className="badge badge-warning" style={{ cursor: "pointer" }} onClick={() => handleBtn(items.id)}>Pending</span> <br />
                                            <input type="number" min={0} max={1} id={"statusBox" + items.id} style={{ opacity: "0", width: "68%" }} onChange={(i) => textChange(i.target.value, items.id)} onKeyPress={myFun} />
                                          </td>
                                        </tr>
                                      </>
                                    )
                                  }
                                })
                              }
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default AllPatients
