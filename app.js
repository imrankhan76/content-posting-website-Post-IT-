var datetoday = new Date().toUTCString();
var selectedimage;
function imageselector(src) {
  backGroundimage = document.getElementsByClassName("bg-image");

  for (i = 0; i < backGroundimage.length; i++) {
    backGroundimage[i].className = "bg-image";
  }
  event.target.classList.add("select");
  selectedimage = src;
  console.log(selectedimage)
}

function submit() {
  var userName = document.getElementById("username");
  var postTitle = document.getElementById("post-title");
  var thought = document.getElementById("thoughts");

  if (userName.value.trim() !== "") {
    if (postTitle.value.trim() !== "") {
      if (thought.value.trim() !== "") {
        document.getElementById("main-div").innerHTML += ` 
      <div class="w-100 card mt-4 mb-4 new shadow" 
     data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
  <!-- Card Header -->
  <div class="card-header d-flex flex-column flex-sm-row justify-content-between align-items-center fw-bold text-success">
    <span class="fw-semibold text-info">~@${userName.value}</span> 
    <span class="text-secondary small">${datetoday}</span>
  </div>
  <!-- Post Title -->
  <div class="text-uppercase text-center border-bottom pb-2">
    <h5 class="ms-2 fw-bold">${postTitle.value}</h5>
  </div>
  <!-- Content Section -->
  <div class="special-div p-4 text-white" style="background: url('${selectedimage}') no-repeat center/cover; border-radius: 0 0 8px 8px;">
    <span class="ms-2 me-2 d-block text-shadow">${thought.value}</span>
  </div>
</div>
`
       userName.value=""
       postTitle.value=""
       thought.value= ""
      } else {
        alert("Discription missing");
      }
    } else {
      alert("Title missing");
    }
  } else {
    alert("Username missing");
  }
}
