import React, { useEffect, useState } from "react";
import { getsingleblog } from "../../config/MyService";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";


function Blogdetails() {
  const [blogs, setBlog] = useState([]);
  const { state } = useLocation();
  
  const navigate = useNavigate();

  useEffect(() => {
    console.log(state.id);
    getsingleblog(state.id)
      .then((res) => {
      
        setBlog(res.data.user);
         console.log(blogs)
      });
  }, []);

  return (
    <>
    
      <div className="container">
      <div className=" row">
                    <div className=" container">
                      <div className="card1">
                        <img
                          src={`/image/${blogs.blogimage}`}
                          className="card-img-top"
                          alt=" "
                          width="100%" height="600"
                        />
                        <div className="card-body">
                          <h4
                            className="card-title"
                            style={{ color: "blue" }}
                            
                          >
                           {blogs.title}
                          </h4>
                          <h5 className="card-text">Description :<i dangerouslySetInnerHTML={{ __html: blogs.description }}></i></h5>
                          <h5 className="card-text">Tags : {blogs.tags}</h5>
                          <h6 className="text-muted">Author : {blogs.user}</h6>
                          <h6 className="text-muted"> {blogs.date}</h6>

                          <button  className="btn btn-warning" onClick={() => {navigate("/fetchall")}}>Back</button>
                        </div>
                      </div>
                    </div>
              </div>
              </div>
    </>
  );
}

export default Blogdetails; 