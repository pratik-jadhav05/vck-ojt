import Header from "../components/Header/Header";
const HomePage =() => {
    return(
        <div className="container">
            <Header/>
              <h1 className="h1tag">University Data Dashboard</h1>
        <h3>Section One: Overview of Current Academic Year</h3>
       <p>  This Dashboard provide a snapshot of key eductional matrics for the current Academic term. data is 
          updated perodically to reflect recent change in erollment,cource avaibility. and student performnce
       </p>
        <p>
          for truly dynamic,"real-time" data.
        </p>
    <hr></hr>
    <h3>Section Two: Key Matrics and Annoucements</h3>
    <p> Here are some important figures and recent Annoucements for the university.</p>
    <ul type="disc">
    	<li>Current Active Courses: <b>485</b></li>
	    <li>Total Registered Student: <b>8,921</b></li>
	    <li>Facility Members: <b>310</b></li>
	    <li>New Erollment This Week: <b>47</b></li>
	  </ul>
  <p>Please note that these numbers are inactive and reflact the latest avaibility</p>
  <hr></hr>
  <h3>Section Three: Live Erollment Count by Department </h3>
    <p>Please note that these numbers are inactive and reflact the latest avaibility</p>
     <center>
      <table border="3" bordercolor="black">
		<thead>
			<tr>
				<th scope="col">Flower</th>
				<th scope="col">Colour</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td scope="row">Lilly</td>
				<td scope="row">blue</td>
			</tr>
			<tr>
				<td scope="row">Merigold</td>
				<td scope="row">yellow</td>
			</tr>
      <tr>
				<td scope="row">Lilly</td>
				<td scope="row">blue</td>
			</tr>
      <tr>
				<td scope="row">Merigold</td>
				<td scope="row">yellow</td>
			</tr>
		</tbody>
    </table>
    </center>
</div>
    )
}

export default HomePage;
