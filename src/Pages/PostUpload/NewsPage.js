import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { ToastContainer } from "react-toastify";

const NewsPage = () => {
  return (
    <>
      <Sidebar />
      <>
        <section
          className="pt-4"
          style={{
            backgroundColor: "rgba(232, 235, 231)",
            fontFamily: "Raleway",
            minHeight: "100vh",
          }}
        >
          <h3 className="text-center">
            <b>News Page</b>
          </h3>
          <div className="container py-4">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-lg-6">
                <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                  <div className="card-body py-5 px-md-5">
                    <form>
                      <div className="p-5 mt-5">
                        <div>
                          <Link to="/middleeastnewspage">Middle East News</Link>
                        </div>
                        <div>
                          <Link to="/entertainmentnewspage">Entertainment News</Link>
                        </div>
                        <div>
                          <Link to="/dubainewspage">Dubai News</Link>
                        </div>
                        <div>
                          <Link to="/worldnewspage">World News</Link>
                        </div>
                        <div>
                          <Link to="/buisnessnewspage">Buisness News</Link>
                        </div>
                        <div>
                          <Link to="/legalnewspage">Legal News</Link>
                        </div>
                        <div>
                          <Link to="/sportsnewspage">Sports News</Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </section>
      </>
    </>
  );
};

export default NewsPage;
