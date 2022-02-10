import React, { useEffect, useState } from 'react';
import { useNavigate , Navigate } from 'react-router-dom';
import { getBlog,editBlog } from '../../config/MyService';
import { Modal,Form,Col } from 'react-bootstrap';
import Header from '../pages/Header';
const FetchBlogs = () => {
    
let [blogs,setBlog] = useState([]);
const [search, setSearch] = useState("");
const navigate = useNavigate();

useEffect(()=>{
  getBlog(localStorage.getItem("email"))
  .then(res => {
      if(res.data.user){
          console.log(res.data.user);
          let data = res.data.user;
          setBlog(data);          
      }
  })
},[])

const handleClose = () => setShowadd(false)

let [title, setTitle] = useState("");
let [description, setDescription] = useState("");
let [tags, setTag] = useState("");
let [user, setUser] = useState("");
let [Blog_id, setBlog_id] = useState("");
let [showadd, setShowadd] = useState("");

const singleitem = (id)=> {
  console.log(id)
;
  navigate("/blogdetails", {
    state: { id: id },
  });
}; 

  const edit = (event, val,val1) => {
    event.preventDefault();
    console.log(val);
    console.log(val1);
    console.log("edit");
    setBlog_id(val);
    setTitle(val1.title);
    setDescription(val1.description);
    setTag(val1.tags);
    setUser(localStorage.getItem("email"));
    setShowadd(true);
    console.log(showadd);
  };

  let AddBlog = (e) => {
    e.preventDefault();
    console.log("Add blog");
    let data = {
      title: title,
      description: description,
      tags: tags,
      user: localStorage.getItem("email"),
    };
    console.log(data);
    console.log(Blog_id);
    editBlog(data, Blog_id).then((res) => {
      console.log(res.data);
    });
    setShowadd(false);
    window.location.reload();
  };


    return (
    <>
      <Header /> 
       {localStorage.getItem("_token")? 
       <div>
          { blogs !== "" ?
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
              <button className="btn btn-success" onClick={
                (e)=>{edit(e,val._id,val);
              }}>Edit</button>
              {showadd ? (
                        <Modal show={showadd} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Edit Your Blog</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form className="container">
                              <img
                                // src={url}
                                alt="post"
                                height="200px"
                                width="100%"
                              />

                              <Form.Group>
                               

                                <Form.Label column sm="2">
                                  Title
                                </Form.Label>
                                <Col>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter title"
                                    name="title"
                                    value={title}
                                    onChange={(e) => {
                                      setTitle(e.target.value);
                                    }}
                                  />
                                </Col>
                              </Form.Group>
                              <br />
                              <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Col>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter description"
                                    value={description}
                                    name="description"
                                    onChange={(e) => {
                                      setDescription(e.target.value);
                                    }}
                                  />
                                </Col>
                              </Form.Group>
                              <br />
                              <Form.Group>
                                <Form.Label>Tags</Form.Label>
                                <Col>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter Tags"
                                    value={tags}
                                    name="tags"
                                    onChange={(e) => {
                                      setTag(e.target.value);
                                    }}
                                  />
                                </Col>
                              </Form.Group>
                              <br />
                              <div className=" text-center">
                                <button
                                  className="btn btn-primary"
                                  onClick={AddBlog}
                                >
                                  Save
                                </button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button
                                  className="btn btn-primary"
                                >
                                  Preview
                                </button>
                              </div>
                              <br />
                            </Form>
                          </Modal.Body>
                        </Modal>) 
               : <></> }  
            </div>
          </div>
        </div>
      ))}
  </div>

 
</div> 
      : <div> <h3> No Posts Yet </h3> </div> }
    </div>
      : <Navigate to ='/' />
         
    } 
    </>
    )
}

export default FetchBlogs
