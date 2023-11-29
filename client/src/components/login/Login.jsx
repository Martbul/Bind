import { Link } from "react-router-dom";
import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

const loginFormKeys = {
  Email: "email",
  Password: "password",
};

export default function Login() {
 // const [errors, setErrors] = useState({});
  
  const { loginSubmitHandler } = useContext(AuthContext);

  const { formValues, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [loginFormKeys.Email]: "",
    [loginFormKeys.Password]: "",
  });



  return (
    <>
      <div style={{ paddingTop: "23%" }}>
        <div className="shape" />
        <div className="shape" />
      </div>
      <form id="loginForm" method="POST" className="form11" onSubmit={onSubmit}>
        <h3>Login</h3>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          name={loginFormKeys.Email}
          onChange={onChange}
          value={formValues[loginFormKeys.Email]}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          name={loginFormKeys.Password}
          onChange={onChange}
          value={formValues[loginFormKeys.Password]}
        />
        <Link to="/singup">Already have account?</Link>
        <button style={{ color: "black" }}>Log In</button>
      </form>
      <style
        media="screen"
        dangerouslySetInnerHTML={{
          __html:
            "\n    *,\n    *:before,\n    *:after {\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n    }\n\n    body {\n        background-color: #080710;\n    }\n\n    .background {\n        width: 430px;\n        height: 520px;\n        position: absolute;\n        transform: translate(-50%, -50%);\n        left: 50%;\n        top: 50%;\n    }\n\n    .background .shape {\n        height: 200px;\n        width: 200px;\n        position: absolute;\n        border-radius: 50%;\n    }\n\n    .shape:first-child {\n        background: linear-gradient(#1845ad,\n                #23a2f6);\n        left: -80px;\n        top: -80px;\n    }\n\n    .shape:last-child {\n        background: linear-gradient(to right,\n                #ff512f,\n                #f09819);\n        right: -30px;\n        bottom: -80px;\n    }\n\n    .form11 {\n        height: 520px;\n        width: 400px;\n        background-color: rgba(255, 255, 255, 0.13);\n        position: sticky;\n        transform: translate(-50%, -50%);\n        top: 50%;\n        left: 50%;\n        border-radius: 10px;\n        backdrop-filter: blur(10px);\n        border: 2px solid rgba(255, 255, 255, 0.1);\n        box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);\n        padding: 50px 35px;\n    }\n\n    .form11 * {\n        font-family: 'Poppins', sans-serif;\n        color: #ffffff;\n        letter-spacing: 0.5px;\n        outline: none;\n        border: none;\n    }\n\n    .form11 h3 {\n        font-size: 32px;\n        font-weight: 500;\n        line-height: 42px;\n        text-align: center;\n    }\n\n    label {\n        display: block;\n        margin-top: 30px;\n        font-size: 16px;\n        font-weight: 500;\n    }\n\n    input {\n        display: block;\n        height: 50px;\n        width: 100%;\n        background-color: rgba(255, 255, 255, 0.07);\n        border-radius: 3px;\n        padding: 0 10px;\n        margin-top: 8px;\n        font-size: 14px;\n        font-weight: 300;\n    }\n\n    ::placeholder {\n        color: #e5e5e5;\n    }\n\n    button {\n        margin-top: 50px;\n        width: 100%;\n        background-color: #ffffff;\n        color: #080710;\n        padding: 15px 0;\n        font-size: 18px;\n        font-weight: 600;\n        border-radius: 5px;\n        cursor: pointer;\n    }\n\n    .social {\n        margin-top: 30px;\n        display: flex;\n    }\n\n    .social div {\n        background: red;\n        width: 150px;\n        border-radius: 3px;\n        padding: 5px 10px 10px 5px;\n        background-color: rgba(255, 255, 255, 0.27);\n        color: #eaf0fb;\n        text-align: center;\n    }\n\n    .social div:hover {\n        background-color: rgba(255, 255, 255, 0.47);\n    }\n\n    .social .fb {\n        margin-left: 25px;\n    }\n\n    .social i {\n        margin-right: 4px;\n    }\n",
        }}
      />
    </>
  );
}
