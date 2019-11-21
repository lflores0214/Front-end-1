import React, { useState, useEffect } from "react";
import NavSignLog from "./NavSignLog";
import { connect } from "react-redux";
import { login } from "../actions/Loginactions";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./LoginForm.css";


const MainCont = styled.div`
  width: 50%;
  margin: 0 auto;
`;
const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 auto;
  margin-bottom: 20px;
`;
const StyledEntry = styled.label`
  color: black;
  font-weight: bold;
`;
const StyledResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormDiv = styled.div`
  margin: 10px 0;
`;
const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  background-color: #235b2d;
`;
const H1Style = styled.h1`
  width: 50%;
  display: flex;
  padding-left: 10px;
  color: white;
`;
const StyledButton = styled.button`
  background-color: #235b2d;
  border: 1px solid #235b2d;
  color: white;
  width: 25%;
  margin: 10px auto;
  border-radius: 20px;
`;
const NewUser = ({ values, errors, touched, status, login }) => {
  const [user, setUser] = useState([]);
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const [loggedIn, setLoggedIn] = useState(false);


 

  const logOut = e => {
    e.preventDefault();
    localStorage.clear("token");
    setLoggedIn(false);
  };

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status]);

  return (
    <MainCont>
      <NavSignLog />
      <div>
        <h2>{loggedIn ? "Logged in" : "Please login"}</h2>
      </div>
      <Form>
        <StyledForm>
          <StyledDiv>
            <FormDiv>
              <StyledEntry>Enter Username</StyledEntry>
              <Field
                className="input-box"
                type="text"
                name="username"
                value={values.username}
                placeholder="username"
              />
              {touched.username && errors.username && (
                <p className="error">{errors.username}</p>
              )}
            </FormDiv>
            <FormDiv>
              <StyledEntry>Enter Password</StyledEntry>
              <Field
                className="input-box"
                type="password"
                name="password"
                placeholder="●●●●●●●●"
                value={values.password}
              />
              {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
              )}
            </FormDiv>
          </StyledDiv>
          <StyledButton type="submit">Log in</StyledButton>
          <StyledButton onClick={logOut}>Log out</StyledButton>
          <Link className='signUpLink'to="/sign-up">Don't Have An Account?</Link>
        </StyledForm>
      </Form>
    </MainCont>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  handleSubmit(values, formikBag) {
    formikBag.props.login(values);
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Required field."),
    password: Yup.string().required("Required field.")
  })
})(NewUser);

const mapDispatchToProps = {
  login
};
export default connect(state => state, mapDispatchToProps)(FormikLogin);
