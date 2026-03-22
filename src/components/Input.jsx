function Input({type, id, label, value, onChange}) {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input type={type} value={value} id={id} onChange={(e) => onChange(e.target.value, id)}/>
    </div>
  )
}

export { Input };