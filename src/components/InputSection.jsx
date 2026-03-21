export default function InputSection({type, extendable = false, onUpdate}) {
  if (type === "general") {
    return (
      <section>
        <h2>General Information</h2>
        <section>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="first-name"/>
          </div>
          <div>
            <label htmlFor="surname">Surname:</label>
            <input type="text" id="surname"/>
          </div>
          <div>
            <label htmlFor="birthday">Birthday</label>
            <input type="date" id="birthday"/>
          </div>
        </section>
        <button>Update</button>
      </section>
    )
  }
}