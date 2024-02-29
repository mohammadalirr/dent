"use client";

import { useSelector } from "@/lib/redux";
import { selectPortal } from "@/lib/redux/slices/layoutSlice/selectors";
import Login from "./Login";
import SignUp from "./SignUp";

const Auth = () => {
  const portal = useSelector(selectPortal);

  return (
    <>
      {portal === "login" ? <Login /> : portal === "signup" ? <SignUp /> : null}
    </>
  );
};

export default Auth;
