import React, { useEffect, useState } from 'react';
import { useNavigate , Navigate } from 'react-router-dom';
import { getBlogsAll } from '../../config/MyService';
import Header1 from '../pages/Header1';

const FetchAllBlogs = () => {
    
let [blogs,setBlog] = useState([]);
const navigate = useNavigate();
const [search, setSearch] = useState("");

useEffect(() => {
    allblogs();
  }, []);

  const allblogs = () => {
    getBlogsAll().then((res) => {
     /*  console.log(res.data); */
      setBlog(res.data.user);
      console.log(blogs) 
    });
  };

  const singleitem = (id)=> {
    console.log(id)
  ;
    navigate("/blogdetails", {
      state: { id: id },
    });
  };

    return (
    <>
    <Header1 />
  <div>
  { blogs !== " " ?
  <div>
              <div className="row">
                <div className="text-center">
                  <input
                    type="text"
                    class="form-control form-control1"
                    placeholder="Search..."
                    onChange={(event) => {
                      setSearch(event.target.value);
                    }}
                  />
                </div>

              </div>
              <div className=" row">
                {blogs.filter((val) => {
                    if (search == "") {
                      return val;
                    } else if (
                      (val.title)
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((val, index) => (
                    <div className=" container col-md-4">
                      <div className="card1">
                        <img
                          src={`/image/${val.blogimage}`}
                          className="card-img-top"
                          alt=" "
                          onClick={() => singleitem(val._id)}
                       
                        />
                        <div className="card-body">
                          <h4
                            className="card-title"
                            style={{ color: "blue" }}
                            
                          >
                           {val.title}
                          </h4>
                          <h5 className="card-text">Description :<i dangerouslySetInnerHTML={{ __html: val.description }}></i></h5>
                          <h5 className="card-text">Tags : {val.tags}</h5>
                          <h6 className="text-muted">Author : {val.user}</h6>
                          <h6 className="text-muted"> {val.date}</h6>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              </div>
               : <div> <h3> No Posts Yet </h3> </div> }
            </div>
    </>
    )
}

export default FetchAllBlogs
