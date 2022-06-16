const db = firebase.firestore();
let crimesMarkup = ``;


//******************************************************* */
// Crimes Table 
//******************************************************* */

document.getElementById("read").onclick = function () {
  crimesMarkup = `
    <table class="table">
    <thead>
      <tr class = "bg-primary">
        <th scope="col" style="color:white">ID</th>
        <th scope="col" style="color:white">Category</th>
        <th scope="col" style="color:white">Reported At</th>
        <th scope="col" style="color:white">Pincode</th>
        <th scope="col" style="color:white">Crime Details</th>
        <th scope="col" style="color:white">Action Needed</th>
      </tr>
      </thead>
  `;
  db.collection("crime")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        crimesMarkup += `
          <tr>
            <td>${doc.id}</td>
            <td>${doc.data().crime_category ? doc.data().crime_category : ""}</td>
            <td>${doc.data().crime_reported_at ? new Date(doc.data().crime_reported_at.seconds) : "" }</td>
            <td>${doc.data().crime_location_pin ? doc.data().crime_location_pin : ""}</td>
            <td>${doc.data().crime_details ? doc.data().crime_details : ""}</td>
            <td><div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
         
            <div class="btn-group p-1" role="group" aria-label="Second group">
              <a href="0">
                <button type="button" class="btn btn-success">Approve</button>
              </a>
            </div>
            <div class="btn-group p-1" role="group" aria-label="Third group">
              <a href="">
                <button type="button" class="btn btn-danger">Deny</button>
              </a>
            </div>
          </div></td>
          </tr>
        `;
      });
      crimesMarkup += "</table>";
      document.getElementById("crimes-table").innerHTML = crimesMarkup;
    });
};