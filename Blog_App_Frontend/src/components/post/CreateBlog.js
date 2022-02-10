import React, { useState, useEffect } from "react";
import { BsCloudUploadFill } from "react-icons/bs";
import {
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router";
import { createBlog } from "../../config/MyService";
import './button.css';

import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default function CreateBlog() {
  let [info, setInfo] = useState({ title: "", tags: "" });
  let editorState = EditorState.createEmpty();
  let [description, setDescription] = useState(editorState);

  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  };

  let [image, setImage] = useState("");
  console.log(info)
;
  console.log(description);

  const handleChange = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };
  
  const navigate = useNavigate();
  const url = image
    ? image
    : "https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?b=1&k=20&m=922745190&s=170667a&w=0&h=0lBPWualF5SE8Khy1uRoGOcMZry55ZiUUWvPUPIZ3H0=";

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setInfo({ ...info, blogimage: event.target.files[0] });
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const addBlog = (e) => {
    e.preventDefault();
    let email = localStorage.getItem("email");
    let formData = new FormData();
    formData.append("blogimage", info.blogimage);
    formData.append("title", info.title);
    formData.append("tags", info.tags);
    formData.append("description", info.description.value);
    formData.append("user", email);
    console.log(formData);
    createBlog(formData).then((res) => {
      if (res.data.err) {
        alert(res.data.err);
      } else {
        alert(res.data.msg);
        navigate("/fetch");
      }
    });
  };

  return (
    <>      
      <Container className="cardLogin">
        <h2 className=" text-center">Creat A New Blog!</h2>
        <Form encType="multipart/form-data">
          <div style={{ textAlign: "center" }}>
            <img src={url} className="filetype" width="100%" height="600"/>
            <br />
            <br />

            <label htmlFor="files">
              <BsCloudUploadFill size="40px" color="blue" />
            </label>
            <input
              type="file"
              id="files"
              style={{ display: "none" }}
              onChange={onImageChange}
              name="blogimage"
              className="pl-5 mb-2 filetype"
            />
          </div>

          <Form.Group className="mb-3 mt-3">
            <Form.Label>
              <b>Title: </b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              id="title"
              name="title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 mt-3">
            <Editor
              editorState={description}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={onEditorStateChange}
              editorStyle={{ border: "2px solid white" }}
            />

            <textarea
              style={{ display: "none" }}
              disabled
              ref={(val) => (info.description = val)}
              value={draftToHtml(convertToRaw(description.getCurrentContent()))}
            />
             
          </Form.Group>

          <Form.Group className="mb-3 mt-3">
            <Form.Label>
              <b>Tags: </b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter tags"
              id="tags"
              name="tags"
              onChange={handleChange}
            />
          </Form.Group><br/>

          <Button variant="primary" className="btn-block" onClick={addBlog}>
            Add Blog
          </Button>
        </Form>
      </Container>
    </>
  );
}