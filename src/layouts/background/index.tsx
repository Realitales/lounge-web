import React from "react";

export default function Background() {
  return (
    <div className="absolute h-screen w-screen overflow-hidden  ">
      <img src="/triangle.svg" className="absolute left-0" />
      <img
        src="/triangle.svg"
        className="absolute bottom-[-8rem] -right-[6rem]"
      />
      <img
        src="/triangle_darker.svg"
        className="absolute -top-[10rem] -right-[10rem] rotate-78"
      />
      <img
        src="/triangle_darker.svg"
        className="absolute bottom-[-8rem] -left-[5rem] rotate-78"
      />
    </div>
  );
}
