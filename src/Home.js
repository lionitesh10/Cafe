function Home(){
    return(
        <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="container">
            <div className="row">
             <div className="col-sm-5">
                    <h2>This is Home Page</h2>
                </div>
                <div className="col-sm-7">
        <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="http://www.niteshkumarsapkota.com.np/restro/momo.png"
              alt="First slide"
              height="400px"
              width="450px"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="http://www.niteshkumarsapkota.com.np/restro/burgers.png"
              alt="Second slide"
              height="400px"
              width="450px"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="http://www.niteshkumarsapkota.com.np/restro/pizza2.png"
              alt="Third slide"
              height="400px"
              width="450px"
            />
          </div>
        </div>
      </div>
        </div>
        </div>
        </div>
        <br/>
        <br/>
        <hr></hr>
        <div>
            <center>
            <h2>Our Special Dishes </h2>
            </center>
            <div className="container">
            <div className="ml-4 mb-2 row">
            <div className="card mb-2 ml-4 mr-2 col-sm" style={{width:"18rem",}}>
                <img className="card-img-top" src="http://www.niteshkumarsapkota.com.np/restro/momo.png" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Buff Momo</h5>
                    <p className="card-text">Hungry Grab a Quick Buff momo !!!! </p>
                    <center><a href="#" className="btn btn-primary">Order Now </a></center>
                </div>
            </div>

            <div className="card mb-2 ml-4 mr-2 col-sm" style={{width:"18rem"}}>
                <img className="card-img-top" src="http://www.niteshkumarsapkota.com.np/restro/momo.png" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Buff Momo</h5>
                    <p className="card-text">Hungry Grab a Quick Buff momo !!!! </p>
                    <center><a href="#" className="btn btn-primary">Order Now </a></center>
                </div>
            </div>

            <div className="card mb-2 ml-4 mr-2 col-sm" style={{width:"18rem"}}>
                <img className="card-img-top" src="http://www.niteshkumarsapkota.com.np/restro/momo.png" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Buff Momo</h5>
                    <p className="card-text">Hungry Grab a Quick Buff momo !!!! </p>
                    <center><a href="#" className="btn btn-primary">Order Now </a></center>
                </div>
            </div>

            <div className="card mb-2 ml-4 mr-2 col-sm" style={{width:"18rem"}}>
                <img className="card-img-top" src="http://www.niteshkumarsapkota.com.np/restro/momo.png" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Buff Momo</h5>
                    <p className="card-text">Hungry Grab a Quick Buff momo !!!! </p>
                    <center><a href="#" className="btn btn-primary">Order Now </a></center>
                </div>
            </div>
            </div>

        </div>
        </div>
        <br/>
        <br/>
        <hr></hr>
        <br/>
        <div className="container-fluid" style={{backgroundColor:"#F76A04",paddingTop:"10px",}}>
          <br/>
          <br/>
          <center><h2>#kshitizcafenepal</h2><br/><h6>Because life's little moments are meant to be captured.</h6></center>
        <br/>
        <br/>
        </div>
        <br/>
        <hr></hr>
        <div className="container">
          <div className="row">
            <div className="col">
              <br/>
              <br/>
              <img className="rounded-circle" src="http://pngimg.com/uploads/email/email_PNG100742.png" height="100px" width="100px"></img>
              <h3>Email</h3>
              <h5>abcd@gmail.com</h5>
              </div>
              <div className="col">
                <br/>
                <br/>
                <img className="rounded-circle" src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/94-512.png" height="100px" width="100px"></img>
               <h3>Location</h3> 
               <h5>Chabhil , Kathmandu </h5>
              </div>
              <div className="col">
                <br/>
                <br/>
                <img className="rounded-circle" src="https://pngimg.com/uploads/phone/phone_PNG48988.png" height="100px" width="100px"></img>
               <h3>Phone no: </h3> 
               <h5>9812345678 , 1234567891 </h5>
              </div>
          </div>
        </div>
        </div>
    )
}

export default Home;