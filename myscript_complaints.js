const db = firebase.firestore();
let complaintsMarkup = ``;

//******************************************************* */
// Crimes Table
//******************************************************* */

document.getElementById("read").onclick = function () {
  complaintsMarkup = `
    <table class="table">
    <thead>
      <tr class = "bg-primary">
        <th scope="col" style="color:white">ID</th>
        <th scope="col" style="color:white">Title</th>
        <th scope="col" style="color:white">Details</th>
        <th scope="col" style="color:white">Reported At</th>
        <th scope="col" style="color:white">Reported at</th>
        <th scope="col" style="color:white">Occured At</th>
        <th scope="col" style="color:white">Media</th>

      </tr>
      </thead>
  `;
  db.collection("complaint")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        complaintsMarkup += `
          <tr>
            <td>${doc.id}</td>
            <td>${
              doc.data().complaint_title ? doc.data().complaint_title : ""
            }</td>
            <td>${
              doc.data().complaint_department
                ? doc.data().complaint_department
                : ""
            }</td>
            <td>${
              doc.data().complaint_details ? doc.data().complaint_details : ""
            }</td>
            <td>${
              doc.data().complaint_created_at
                ? new Date(doc.data().complaint_created_at.seconds)
                : ""
            }</td>
            <td>${
              doc.data().occured_at
                ? new Date(doc.data().occured_at.seconds)
                : ""
            }</td>
            <td>${
              doc.data().complaint_media ? doc.data().complaint_media : ""
            }</td>

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
      complaintsMarkup += "</table>";
      document.getElementById("complaints-table").innerHTML = complaintsMarkup;
    });
};
