import React from "react";

const Btn = (props) => {
  return (
    <>
      <button onClick={props.onClick} data-aos={props} className={`py-3 px-4 rounded-3 fw-bold ${props.borderHover}`} style={{backgroundColor:props.bgcolor,color:props.color,border:props.border}}>
            {props.name} {props.icon ? props.icon : null}
      </button>
    </>
  );
};

export default Btn;
