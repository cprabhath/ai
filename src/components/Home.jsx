import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
    <div className="container">
      <div className="mt-5 " style={{ overflow: "hidden" }}>
        <h1
          className="text-white d-flex justify-content-center text-center"
          style={{ overflow: "hidden" }}
        >
          Free AI Powered toolkit for everyone!
        </h1>
        
      </div>
      <div className="mt-2 margin-bottom">
        <div className="row row-padding-2">
          <div className="col">
            <div className="card rounded-0">
              <img
                src="https://th.bing.com/th/id/R.4b779771eb9037d9ddbe506ac8c6a75a?rik=GeubsLIlq5CtRQ&pid=ImgRaw&r=0"
                className="card-img-top"
                alt="Fissure in Sandstone"
                style={{ height: "270px" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ overflow: "hidden" }}>Free AI Grammer Checker</h5>
                <p className="card-text" style={{ overflow: "hidden" }}>
                  Our AI powered grammer checker will help you to write better
                  and error free articles.
                </p>
                <Link to="/grammar" className="btn btn-primary border-0" data-mdb-ripple-init>
                  AI Grammer Checker  
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
          <div className="col">
            <div className="card rounded-0">
              <img
                src="https://www.learnesl.net/wp-content/uploads/2022/03/Paraphrasing-Tool.jpg"
                className="card-img-top"
                alt="Fissure in Sandstone"
                style={{ height: "270px" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ overflow: "hidden" }}>Free AI Paraphrasing tool</h5>
                <p className="card-text" style={{ overflow: "hidden" }}>
                  Our AI powered paraphrasing tool will help you to write better
                  and error free articles.
                </p>
                <button className="btn btn-primary" data-mdb-ripple-init disabled={true}>
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
          </div>
          <div className="col" >
            <div className="card rounded-0">
              <img
                src="https://th.bing.com/th/id/OIP.fRdBsqDbUBdL2NaDz2vZegHaD_?rs=1&pid=ImgDetMain"
                className="card-img-top"
                alt="Fissure in Sandstone"
                style={{ height: "270px" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ overflow: "hidden" }}>Free AI PDF Summerizer</h5>
                <p className="card-text" style={{ overflow: "hidden" }}>
                  Our AI powered PDF summerizer tool will help you to summerize your PDFs.
                </p>
                <button className="btn btn-primary" data-mdb-ripple-init disabled={true}>
                  Coming Soon
                </button>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
