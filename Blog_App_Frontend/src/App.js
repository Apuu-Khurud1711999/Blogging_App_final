import React,{Suspense,lazy} from "react";
import "./App.css";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import NavbarDash from "./components/layout/NavbarDash";
import Footer from "./components/layout/Footer";

const Home = lazy(() => import('./components/pages/Home'));
const Login = lazy(() => import('./components/user_modules/Login'));
const Register = lazy(() => import('./components/user_modules/Register'));
const CreateBlog = lazy(() => import('./components/post/CreateBlog'));
const FetchBlogs = lazy(() => import('./components/post/FetchBlogs'));
const FetchAllBlogs = lazy(() => import('./components/post/FetchAllBlogs'));
const Blogdetails = lazy(() => import('./components/post/Blogdetails'));
const ProfileUser = lazy(() => import('./components/user_account/ProfileUser'));
const NotFound = lazy(() => import('./components/pages/NotFound'));

function App() {
  return (
    <div className="App">
           
            <Router>
             <Suspense fallback={<div>Loading...</div>}>
             <NavbarDash />
                <Routes>
                    <Route exact path="/dashboard" element={<Home />} />   
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create" element={<CreateBlog/>} />
                    <Route path="/fetch" element={<FetchBlogs/>} />
                    <Route path="/fetchall" element={<FetchAllBlogs/>} />
                    <Route path="/blogdetails" element={<Blogdetails/>} />
                    <Route path="/userprofile" element={<ProfileUser />} />
                    <Route exact component={<NotFound/>}/>
                </Routes>
              </Suspense>
              <Footer />
            </Router>
    </div>
  );
}

export default App;