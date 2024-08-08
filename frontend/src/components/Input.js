function Input(props) {
    return (
      <div>
        <label>Enter{props.label}</label>
        <input placeholder = {`Enter ${props.placeholder}`} type="text"/>
      </div>
    );
  }

  export default Input;