const db = firebase.firestore();
let userMarkup = ``;
// USERS MARKUP TABLE
document.getElementById("readusers").onclick = function () {
  userMarkup = `
    <table class="table">
    <thead>
      <tr class = "bg-primary">
        <th scope="col" style="color:white">ID</th>
        <th scope="col" style="color:white">Display Name</th>
        <th scope="col" style="color:white">Email ID</th>
        <th scope="col" style="color:white">Account created on</th>
        <th scope="col" style="color:white">Action Needed</th>
      </tr>
      </thead>
  `;
  db.collection("users")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        userMarkup += `
          <tr>
            <td>${doc.id}</td>
            <td>${doc.data().display_name ? doc.data().display_name : ""}</td>
            <td>${doc.data().email ? doc.data().email: ""}</td>
            <td>${doc.data().created_time ? new Date(doc.data().created_time.seconds) : "" }</td>
            <td>${doc.data().user_pin ? doc.data().user_pin : ""}</td>

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
      userMarkup += "</table>";
      document.getElementById("users-table").innerHTML = userMarkup;
    });
};


//json format
// {
//   "crime_media_comment": "",
//   "crime_reported_at": {
//       "seconds": 1652200519,
//       "nanoseconds": 697000000
//   },
//   "crime_media_url": "-",
//   "crime_location": {
//       "latitude": 0,
//       "longitude": 0
//   },
//   "crime_category": "nil",
//   "crime_location_details": "nil",
//   "crime_details": "nil",
//   "crime_media": "-",
//   "crime_date": {
//       "seconds": 1652200519,
//       "nanoseconds": 697000000
//   },
//   "crime_location_pin": 111111,
//   "crime_time": {
//       "seconds": 1652200519,
//       "nanoseconds": 697000000
//   }
// }

//******************************************************* */
// COMPLAINTS Table 
//******************************************************* */




// document.getElementById("fetch").onclick = function fetchTasks() {
//   return firestore
//     .collection("users")
//     .get()
//     .then((snapshots) => cleanData(snapshots))
//     .then((tasks) => tasks.map((task) => createTask(task)));

//   fetchTasks();
// };

// document.getElementById("update").onclick = function () {
//   readForm();

//   firebase
//     .database()
//     .ref("student/" + rollV)
//     .update({
//       //rollNo: rollV,
//       name: nameV,
//       gender: genderV,
//       address: addressV,
//     });

//   alert("Data Updated");

//   document.getElementById("roll").value = "";
//   document.getElementById("name").value = "";
//   document.getElementById("gender").value = "";
//   document.getElementById("address").value = "";
// };
