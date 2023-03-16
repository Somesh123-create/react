function Employee(props) {
  return (
    <>
      <h3> Employee: {props.name}</h3>
      <p>{props.name ? props.role : "No Role"}</p>
    </>
  )
}

export default Employee
