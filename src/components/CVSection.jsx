import { format } from "date-fns";


function GeneralInfo({data}) {
  return (
    <section>
      <h2>General Information</h2>
      <div>
        <p><span>Name:</span> {data.firstName + " " + data.lastName}</p>
        <p><span>Date of Birth:</span> {data.birthday ? format(data.birthday, "yyyy-MM-dd") : ""}</p>
        <p><span>Email:</span> {data.email}</p>
        <p><span>Phone Number:</span> {data.phone}</p>
      </div>
    </section>
  )
}

export { GeneralInfo };