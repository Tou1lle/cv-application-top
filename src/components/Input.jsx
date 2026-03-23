function Input({type, id, htmlID, label, value, onChange, level}) {
  return (
    <div>
      <label htmlFor={htmlID}>{label}:</label>
      <input type={type} 
             value={value} 
             id={htmlID} 
             onChange={(e) => {
              let value = e.target.value;
              if (e.target.type === "date") {
                value = new Date(e.target.value)
              } 
              onChange(value, id, level)}}/>
    </div>
  )
}

export { Input };