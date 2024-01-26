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
            AI Powered toolkit for everyone!
          </h1>
        </div>
        <div className="mt-2 margin-bottom">
          <div className="row row-padding-2">
            <div className="col">
              {/* Grammer Checker */}
              <div className="card rounded-0">
                <img
                  src="https://th.bing.com/th/id/R.4b779771eb9037d9ddbe506ac8c6a75a?rik=GeubsLIlq5CtRQ&pid=ImgRaw&r=0"
                  className="card-img-top"
                  alt="Fissure in Sandstone"
                  style={{ height: "270px" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ overflow: "hidden" }}>
                    AI Grammer Checker
                  </h5>
                  <p className="card-text" style={{ overflow: "hidden" }}>
                    Our AI powered grammer checker will help you to write better
                    and error free articles.
                  </p>
                  <Link
                    to="/grammar"
                    className="btn btn-primary border-0 shadow-0"
                    data-mdb-ripple-init
                  >
                    AI Grammer Checker{" "}
                    <i className="mx-2 fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              {/* end of Grammer Checker */}
            </div>
            <div className="col">
              {/* Paraphersing tool */}
              <div className="card rounded-0">
                <img
                  src="https://www.learnesl.net/wp-content/uploads/2022/03/Paraphrasing-Tool.jpg"
                  className="card-img-top"
                  alt="Fissure in Sandstone"
                  style={{ height: "270px" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ overflow: "hidden" }}>
                    AI Paraphrasing tool
                  </h5>
                  <p className="card-text" style={{ overflow: "hidden" }}>
                    Our AI powered paraphrasing tool will help you to write
                    better and error free articles.
                  </p>
                  <Link
                    to="/paraphrasing"
                    className="btn btn-primary border-0 shadow-0"
                    data-mdb-ripple-init
                  >
                    AI Paraphrasing tool{" "}
                    <i className="mx-2 fas fa-arrow-right"></i>
                  </Link>
                </div>
                {/* end of Paraphersing tool */}
              </div>
            </div>
            <div className="col">
              {/* PDF Summerizer */}
              <div className="card rounded-0">
                <img
                  src="https://th.bing.com/th/id/OIP.fRdBsqDbUBdL2NaDz2vZegHaD_?rs=1&pid=ImgDetMain"
                  className="card-img-top"
                  alt="Fissure in Sandstone"
                  style={{ height: "270px" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ overflow: "hidden" }}>
                    AI PDF Summerizer
                  </h5>
                  <p className="card-text" style={{ overflow: "hidden" }}>
                    Our AI powered PDF summerizer tool will help you to
                    summerize your PDFs.
                  </p>
                  <button
                    className="btn btn-primary shadow-0"
                    data-mdb-ripple-init
                    disabled={true}
                  >
                    Coming Soon <i className="mx-2 fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              {/* end of PDF Summerizer */}
            </div>
          </div>

          <div className="row row-padding-2">
            <div className="col">
              {/* Text Summerizer */}
              <div className="card rounded-0">
                <img
                  src="https://www.amritsardigitalacademy.in/blog/wp-content/uploads/2021/12/text-summarizer.png"
                  className="card-img-top"
                  alt="Fissure in Sandstone"
                  style={{ height: "270px" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ overflow: "hidden" }}>
                    AI Text Summerizer
                  </h5>
                  <p className="card-text" style={{ overflow: "hidden" }}>
                    Our AI powered text summerizer tool will help you to summerize large texts.
                  </p>
                  <button
                    className="btn btn-primary shadow-0"
                    data-mdb-ripple-init
                    disabled={true}
                  >
                    Coming Soon <i className="mx-2 fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              {/* end of Text Summerizer  */}
            </div>
            <div className="col">
              {/* Ai content detection tool */}
              <div className="card rounded-0">
                <img
                  src="https://th.bing.com/th/id/OIP.1N8-VymKIqmO4wPXh-lvNgHaFy?w=808&h=632&rs=1&pid=ImgDetMain"
                  className="card-img-top"
                  alt="Fissure in Sandstone"
                  style={{ height: "270px" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ overflow: "hidden" }}>
                    AI Content Detection 
                  </h5>
                  <p className="card-text" style={{ overflow: "hidden" }}>
                    Our AI powered content detection tool will help you to detect content.
                  </p>
                  <button
                    className="btn btn-primary shadow-0"
                    data-mdb-ripple-init
                    disabled={true}
                  >
                    Coming Soon <i className="mx-2 fas fa-arrow-right"></i>
                  </button>
                </div>
                {/* end of Paraphersing tool */}
              </div>
            </div>
            <div className="col">
              {/* Code hunter */}
              <div className="card rounded-0">
                <img
                  src="https://techcrunch.com/wp-content/uploads/2019/07/GettyImages-908200362.jpg"
                  className="card-img-top"
                  alt="Fissure in Sandstone"
                  style={{ height: "270px" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ overflow: "hidden" }}>
                    AI code hunter
                  </h5>
                  <p className="card-text" style={{ overflow: "hidden" }}>
                    This poweful tool will help you to find or create code any snippets.
                  </p>
                  <button
                    className="btn btn-primary shadow-0"
                    data-mdb-ripple-init
                    disabled={true}
                  >
                    Coming Soon <i className="mx-2 fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              {/* end of PDF Summerizer */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
