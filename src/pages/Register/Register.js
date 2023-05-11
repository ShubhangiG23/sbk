import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import { addUser } from "../../reducers/cartReducer";
import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Register() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSubmit() {
    alert("Successful Signup")
    navigate("/");
    dispatch(addUser(user.name));
    fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },

    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/login");
        } else if (res.status === 401) {
          console.log("Unauthorized request");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(user);
   }

  return (
    <div>
      <Header></Header>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .required('First Name is required'),
          lastName: Yup.string()
            .required('Last Name is required'),
          email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
        })}
        onSubmit={fields => {
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
        }}
        render={({ errors, status, touched }) => (
          <div className="Sign-container">
            <Form>
              <div className="form-group">
              
                <Field name="firstName" type="text" placeholder="FirstName:" onInput={(e) => {
                  user.name = e.target.value;
                  setUser(user);
                }} className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                
                <Field name="lastName" type="text" placeholder="Last name:" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
               
                <Field name="email" type="text" placeholder="Email:"  onInput={(e) => {
                  user.email = e.target.value;
                  setUser(user);
                }} className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                
                <Field name="password" type="password" placeholder="password:" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                <ErrorMessage name="password" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
               
                <Field name="confirmPassword" type="password" placeholder="Confirm Password:" onInput={(e) => {
                  user.password = e.target.value;
                  setUser(user);
                }} className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary login" onClick={handleSubmit}>Signup</button>
                <button type="reset" className="btn btn-secondary reset">Reset</button>
              </div>
            </Form>
            <p class="text-center text-muted "> Already have an account? <a href="#!"
              class="fw-bold text-body">
              <Link to="/Login">Login is</Link></a></p>
          </div>
        )}
      />
      <Footer></Footer>
    </div>
  );
}

export default Register;






























