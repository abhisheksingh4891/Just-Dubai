import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Sidebar from "../../Sidebar/Sidebar";

// const baseURL = "http://localhost:1000";
const baseURL = "https://just-dubai-admin-backend.onrender.com";

const EntertainmentNews = () => {
  const navigate = useNavigate();

  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [uploadedBy, setUploadedBy] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("heading", heading);
      formData.append("content", content);
      formData.append("uploadedBy", uploadedBy);

      await axios.post(`${baseURL}/api/news/entertainmentnews`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Post Upload Successful");
      setTimeout(() => {
        navigate("/entertainmentnewspage");
      }, 1000);
    } catch (error) {
      toast.error("Post Upload failed");
      console.error("Upload Error:", error);
    }
  };

  const handleCancel = () => {
    navigate("/entertainmentnewspage");
  };

  return (
    <>
      <Sidebar />
      <section
        className="pt-4"
        style={{
          backgroundColor: "rgba(232, 235, 231)",
          fontFamily: "Raleway",
          minHeight: "100vh",
        }}
      >
        <h3 className="text-center">
          <b>Entertainment News</b>
        </h3>
        <div className="container py-4">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                <div className="card-body py-5 px-md-5">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="form-outline mb-4 text-start">
                        <div className="form-outline text-start">
                          <label className="form-label" htmlFor="heading">
                            Heading
                          </label>
                          <input
                            type="text"
                            id="heading"
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)}
                            className="form-control shadow-none"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4 text-start">
                      <div className="form-outline text-start">
                        <label className="form-label" htmlFor="content">
                          Content
                        </label>
                        <textarea
                          id="content"
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          className="form-control shadow-none"
                          rows="6"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-outline mb-4 text-start">
                      <label className="form-label" htmlFor="uploadedby">
                        Uploaded By
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
                      <label className="form-label" htmlFor="image">
                        Upload Image
                      </label>
                      <input
                        type="file"
                        id="image"
                        accept=".jpg, .jpeg, .png"
                        onChange={handleImageChange}
                        className="form-control shadow-none"
                        required
                      />
                    </div>

                    <div className="mb-0 text-start">
                      <button type="submit" className="btn btn-primary btn-block me-2">
                        Upload
                      </button>
                      <button type="button" onClick={handleCancel} className="btn btn-secondary btn-block">
                        Cancel
                      </button>
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
  );
};

export default EntertainmentNews;
