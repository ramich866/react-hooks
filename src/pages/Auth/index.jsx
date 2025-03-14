import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { requestMethods } from "../../utils/enums/request.methods";
import { request } from "../../utils/remote/axios";
import { colors } from "../../utils/enums/colors.enum";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!form.email.includes("@")) console.log("Email invalid");
  }, [form]);

  const login = async () => {
    const response = await request({
      method: requestMethods.POST,
      route: "http://15.236.225.13/apis/v1/AuthController.php?action=login ",
      body: form,
    });

    if (!response.error) {
      console.log(response);
      localStorage.setItem("access_token", response.token);

      navigate("/");
    } else {
      console.log(response.error);
    }
  };

  return (
    <div className="flex column">
      <input
        type="text"
        placeholder="email"
        onChange={(e) => {
          setForm({
            ...form,
            email: e.target.value,
          });
        }}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => {
          setForm({
            ...form,
            password: e.target.value,
          });
        }}
      />

      <Button text="Login" onClick={login} textColor={colors.BLACK} color="" />
    </div>
  );
};

export default Auth;
