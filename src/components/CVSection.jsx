function GeneralInfo({data}) {
  return (
    <section>
      <h2>General Information</h2>
      <div>
        <p>Name: {data.firstName + " " + data.lastName}</p>
      </div>
    </section>
  )
}

export { GeneralInfo };