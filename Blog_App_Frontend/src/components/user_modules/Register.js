import React, { useState } from "react";
import axios from 'axios'
import { Button, Card, Container, Form,Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { register } from "../../config/MyService";
import './Style.css';

const regForName = RegExp(/^[a-zA-Z]{2,100}$/);
const regForUsername = RegExp(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+){6,100}$/);
const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForPassword = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z])(?!.*\s).{8,25}$/);

const Register = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        errors: {
            fname: "",
            lname:"",
            uname:"",
            email: "",
            password: "",
            cpassword: "",
        },
    });
    const [data, setData] = useState({
        fname: "",
        lname: "",
        uname: "",
        mobile: "",
        email: "",
      /*   pic:"", */
        password: "",
    });

      const onChangeUser = (event) => {
        const { name, value } = event.target;
        let errors = state.errors;
        switch (name) {
            case "fname":
                errors.fname = regForName.test(value)
                    ? ""
                    : "First Name should contain only letters and minimum length should be 2 characters";
                break;

            case "lname":
                errors.lname = regForName.test(value)
                    ? ""
                    : "Last Name should contain only letters and minimum length should be 2 characters";
                break;
            
            case "uname":
                errors.uname = regForUsername.test(value)
                    ? ""
                    : "Username should be between 7-20 characters and can contain numbers. Can contain _ and . but should not start or end with them and should not appear next to each other and can be used only once";
                break;

            case "email":
                errors.email = regForEmail.test(value)
                    ? ""
                    : "Enter Valid Email";
                break;

            case "password":
                errors.password = regForPassword.test(value)
                    ? ""
                    : "Password must be between 8-25 characters and should contain atleast one lowercase letter, one uppercase letter and one special character";
                break;

            case "cpassword":
                errors.cpassword =
                    document.getElementById("password").value === value
                        ? ""
                        : "Password and confirm password should be same";
                break;
            default:
                alert("Fill proper details");
        }
        setState({ errors, [name]: value });
        setData({ ...data, [name]: value });
    };

    const Register_user = (event) => {
        event.preventDefault();
        if (data.email == "" || data.password == "" || data.fname == "" || data.lname == ""  || data.uname == "" /* || data.pic !== "" */) {
            alert("Please fill all the fields");
        }

        else if(validate(state.errors)) {
            if (state.email !== "" && state.password !== "" && state.fname !== "" && state.lname !== ""  && state.uname !== "" /* && state.pic !== "" */) {
                alert("User Registered Successfully !!");
                post_data();
                navigate("/");
            }
            else {
                alert("Failed to Register");
            }
        }
        else {
            alert("Please Enter Valid Details");
        }
    }
    
    const post_data = () => {

        const URL = "http://localhost:8000/api/register"
        axios.post(URL, {
            fname: data.fname,
            lname: data.lname,
            uname: data.uname,
         /*    pic : data.pic, */
            email: data.email,
            password: data.password
        })
            .catch(err => { console.log(err) })

    }

    const validate = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    };
  
    return (
        <>
            <div className="img2">
            <Container>
               <Row>
                <Card className="formdata">
                    <h2 className="text-center"><b>Register to Blogging<span className="text-danger">App</span></b></h2>
                    <Form
                      className="form wrapper"
                        onSubmit={(e) => Register_user(e)}
                    >
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter First Name"
                                name="fname"
                                onChange={onChangeUser}
                            />
                            <Form.Text>
                                {state.errors.fname.length > 0 && (
                                    <span className="color">
                                        {state.errors.fname}
                                    </span>
                                )}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Last Name"
                                name="lname"
                                onChange={onChangeUser}
                            />
                            <Form.Text>
                                {state.errors.lname.length > 0 && (
                                    <span className="color">
                                        {state.errors.lname}
                                    </span>
                                )}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>User Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter User Name"
                                name="uname"
                                onChange={onChangeUser}
                            />
                            <Form.Text>
                                {state.errors.uname.length > 0 && (
                                    <span className="color">
                                        {state.errors.uname}
                                    </span>
                                )}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                type="text"
                                placeholder="Enter email address"
                                onChange={onChangeUser}
                            />
                            <Form.Text>
                                {state.errors.email.length > 0 && (
                                    <span className="color">
                                        {state.errors.email}
                                    </span>
                                )}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                id="password"
                                placeholder="Enter Password"
                                onChange={onChangeUser}
                            />
                            <Form.Text>
                                {state.errors.password.length > 0 && (
                                    <span className="color">
                                        {state.errors.password}
                                    </span>
                                )}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                name="cpassword"
                                type="password"
                                placeholder="Re-enter Password"
                                onChange={onChangeUser}
                            />
                            <Form.Text>
                                {state.errors.cpassword.length > 0 && (
                                    <span className="color">
                                        {state.errors.cpassword}
                                    </span>
                                )}
                            </Form.Text>
                        </Form.Group>
                        <br></br>

                        <div className="text-center">
                            <Button variant="dark" type="submit">
                            <h6>Submit</h6>
                            </Button>
                            <br></br>
                            <Button
                                variant="light"
                                type="button"
                                onClick={() => {
                                    navigate("/");
                                }}
                            >
                                <h6>Already have an account? Click Here</h6>
                            </Button>
                        </div>
                    </Form>
                </Card>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Register
