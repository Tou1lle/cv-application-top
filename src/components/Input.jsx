function Input({type, id, htmlID, label, value, onChange, level}) {
  return (
    <div>
      <label htmlFor={htmlID}>{label}:</label>
      <input type={type} 
             value={value} 
             id={htmlID} 
             onChange={(e) => onChange(e.target.value, id, level)}/>
    </div>
  )
}

export { Input };