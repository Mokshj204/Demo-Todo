function Input({label,Change,value}) {
    return (
        <div>

            <label>Enter{label}:</label>
            <br/>
            <input type="text" name={label} onChange={Change} value={value}/>
           
        </div>
    );
  }

  export default Input;
