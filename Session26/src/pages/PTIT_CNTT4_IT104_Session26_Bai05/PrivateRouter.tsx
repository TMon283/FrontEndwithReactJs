import React from "react";
import { Navigate, NavLink } from "react-router-dom";

export default function PrivateRouter(props: any) {
  const isCheck = false;
  if (!isCheck) {
    return <Navigate to="/login"></Navigate>;
  }
  return props.element;
}