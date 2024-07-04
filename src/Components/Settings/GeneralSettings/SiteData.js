import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

// const baseURL = "http://localhost:1000";
const baseURL = "https://just-dubai-admin-backend.onrender.com";

const SiteData = () => {
  const [title, setTitle] = useState("");
  const [policy, setPolicy] = useState("");
  const [uploadedBy, setUploadedBy] = useState("");
  const [favicon, setFavicon] = useState(null);
  const [image, setImage] = useState(null);
  const [info, setInfo] = useState([]);
  const [edit, setEdit] = useState(false);

  const handleFaviconChange = (e) => {
    const file = e.target.files[0];
    setFavicon(file);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("favicon", favicon);
      formData.append("image", image);
      formData.append("title", title);
      formData.append("policy", policy);
      formData.append("uploadedBy", uploadedBy);
      toast.info("Please wait")
      await axios.put(
        `${baseURL}/api/settings/generalsettings/siteinformation`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.dismiss();
      toast.success("Data Upload Successful");
      setEdit(false);
      getData();
    } catch (error) {
      toast.dismiss();
      toast.error("Data Upload failed");
      console.error("Upload Error:", error);
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/settings/information`);
      //   console.log("Fetched Data:", response.data);
      if (response.data.length > 0) {
        setInfo(response.data[0]);
      }
    } catch (error) {
      console.error("Data Fetch Error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getFullImageUrl = (imagePath) => {
    if (imagePath) {
      return `${baseURL}${imagePath}`;
    }
    return "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp";
  };

  return (
    <div>
      <section
        className="pt-5"
        style={{
          backgroundColor: "#EBF5FB",
          fontFamily: "Raleway",
          minHeight: "100vh",
        }}
      >
        <h3 className="text-center">
          <b>Site Information</b>
        </h3>
        <div className="container py-4">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-8">
              <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                <div className="card-body py-5 px-md-5">
                  {edit ? (
                    <>
                      <form onSubmit={handleSubmit}>
                        <h6 className="fw-bold"> Edit Information</h6>
                        <hr
                          className="mt-0 mb-3 fw-bolder"
                          style={{ backgroundColor: "rgb(66, 73, 73)" }}
                        />

                        <div className="row">
                          <div className="form-outline mb-4 text-start">
                            <div className="form-outline text-start">
                              <label className="form-label" htmlFor="heading">
                                Title
                              </label>
                              <input
                                type="text"
                                id="heading"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="form-control shadow-none"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-outline mb-4 text-start">
                          <div className="form-outline text-start">
                            <label className="form-label" htmlFor="content">
                              Privacy Policy
                            </label>
                            <textarea
                              id="content"
                              value={policy}
                              onChange={(e) => setPolicy(e.target.value)}
                              className="form-control shadow-none"
                              rows="6"
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="form-outline mb-4 text-start">
                          <label className="form-label" htmlFor="uploadedby">
                            Updated By
                          </label>
                          <input
                            type="text"
                            id="uploadedby"
                            value={uploadedBy}
                            onChange={(e) => setUploadedBy(e.target.value)}
                            className="form-control shadow-none"
                            required
                          />
                        </div>

                        <div className="form-outline mb-4 text-start">
                          <label className="form-label" htmlFor="favicon">
                            Update Favicon
                          </label>
                          <input
                            type="file"
                            id="favicon"
                            accept=".jpg, .jpeg, .png"
                            onChange={handleFaviconChange}
                            className="form-control shadow-none"
                          />
                        </div>

                        <div className="form-outline mb-4 text-start">
                          <label className="form-label" htmlFor="imageLogo">
                            Update Logo
                          </label>
                          <input
                            type="file"
                            id="imageLogo"
                            accept=".jpg, .jpeg, .png"
                            onChange={handleImageChange}
                            className="form-control shadow-none"
                          />
                        </div>

                        <div className="mb-0 text-start">
                          <button
                            type="submit"
                            className="btn btn-primary me-2"
                          >
                            Update
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => setEdit(false)}
                          >
                            Close
                          </button>
                        </div>
                      </form>
                    </>
                  ) : (
                    <>
                      {info ? (
                        <div className="">
                          <div className="">
                            <h6 className="fw-bold">Information</h6>
                            <hr
                              className="mt-0 mb-3"
                              style={{ backgroundColor: "rgb(66, 73, 73)" }}
                            />

                            <div className="row pt-1">
                              <div className="col-md-6 mb-3">
                                <h6>Title</h6>
                                <p className="text-muted">{info.title}</p>
                              </div>

                              <div className="col-md-6 mb-3">
                                <h6>Update Logo</h6>
                                <img
                                  src={getFullImageUrl(info.image)}
                                  alt="Logo"
                                  style={{ width: "100px", height: "100px" }}
                                />
                              </div>
                            </div>

                            <div className="row pt-1">
                              <div className="col-md-6 mb-3">
                                <h6>Uploaded By</h6>
                                <p className="text-muted">{info.uploadedBy}</p>
                              </div>

                              <div className="col-md-6 mb-3">
                                <h6>Update Favicon</h6>
                                <img
                                  src={getFullImageUrl(info.favicon)}
                                  alt="Favicon"
                                  style={{ width: "100px", height: "100px" }}
                                />
                              </div>
                            </div>

                            <div className="row pt-1">
                              <div className="col-md-12 mb-3">
                                <h6>Policy</h6>
                                <p className="text-muted">{info.policy}</p>
                              </div>
                            </div>
                            <hr
                              className="mt-0 mb-3"
                              style={{ backgroundColor: "rgb(66, 73, 73)" }}
                            />
                            <div className="row">
                              <div className="col-md-6 mb-0">
                                <button
                                  className="btn btn-primary"
                                  onClick={() => {
                                    setTitle(info.title);
                                    setPolicy(info.policy);
                                    setUploadedBy(info.uploadedBy);
                                    setEdit(true);
                                  }}
                                >
                                  Edit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <p>Loading...</p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
          <ToastContainer />
      </section>
    </div>
  );
};

export default SiteData;
