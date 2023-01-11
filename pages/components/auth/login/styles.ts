import styled, { css } from "styled-components";

export const LoginBox = styled.form`
  background-color: #fff;
  padding: 40px;
  min-width: 500px;
  max-width: 700px;
  border-radius: 7px;
  border-left: 7px solid #396afc;
`;

export const Title = styled.div`
  font-size: 18px;
  text-align: center;
  padding: 15px 0;
`;

export const InputBox = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

export const AuthInput = styled.input`
  border: none;
  border-bottom: 1px solid #efefef;
  background-color: #ececec;
  outline: none;
  width: 100%;
  padding: 14px 10px;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 16px;
  box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 20px;
  left: 5px;
  padding: 14px 5px;
  display: block;
  pointer-events: none;
  transition: 0.2s;
  ${AuthInput}:focus ~&{
    top: -20px;
    left: 2px;
    font-size: 14px;
  };
  ${AuthInput}:valid ~&{
    top: -20px;
    left: 2px;
    font-size: 14px;
  };
`;

export const ViewPass = styled.img`
  width: 45px;
  position: absolute;
  top: 27px;
  right: 2px;
  cursor: pointer;
  background-color: rgba(236, 236, 236, 0.8);
  padding: 7px 12px;
  backdrop-filter: blur(3px);
  display: none;
`;

export const AuthActionBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AuthAction = styled.a`
  display: inline-block;
  padding: 15px 0;
  color: #000;
  text-decoration: none;
  font-size: 14px;
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  border-radius: 5px;
  outline: none;
  border: none;
  border-left: 2px solid #03e9f4;
  padding: 15px 0;
  font-size: 16px;
  color: #fff;
  background: #396afc;
  background: linear-gradient(to right, #2948ff, #396afc);
  margin-top: 30px;
  cursor: pointer;
`;
