import React from 'react';
import './formInput.css';

function FormInput(props) {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  return (
    <div className="formInput">
      {/* <label>{props.label}</label> */}
      {/* <label>{label}</label> */}
      <input
        {...inputProps}
        onChange={onChange}
        // name={props.name}
        // placeholder={props.placeholder}
        // ref={props.refer}
        // onChange={(e) => props.setUsername(e.target.value)}
      />
      <span className="error_msg">{errorMessage}</span>
    </div>
  );
}

export default FormInput;
