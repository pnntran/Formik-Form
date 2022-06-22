import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      alert("Login Successful");
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Field Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Username should be an email";
      }
      if (!values.password) errors.password = "Field Required";
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="emailField">Email: </label>
          <input
            id="emailField"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div id="emailError" style={{ color: "red" }}>
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div>
          <label htmlFor="pswField">Password: </label>
          <input
            id="pswField"
            name="password"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <div id="pswError" style={{ color: "red" }}>
              {formik.errors.password}
            </div>
          ) : null}
        </div>
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
