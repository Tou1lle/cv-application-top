function Input({type, id, label}) {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input type={type} />
    </div>
  )
}

export { Input };