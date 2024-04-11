"use client";

import Error from "next/error";
import React from "react";

interface Props {
  error: Error;
  reset: ()=> void
}

const ErrorPage = ({ error, reset }: Props) => {
  return (
    <div>
      <p>An unexpected error has occurred.</p>
      <button className="btn" onClick={()=>reset()} >Retry</button>
    </div> 
  );
};

export default ErrorPage;
