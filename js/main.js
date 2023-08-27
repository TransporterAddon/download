const handleDropdownClicked = (event) => {
    event.stopPropagation();
    const dropdownMenu = document.getElementById("dropdown-menu");
    toggleDropdownMenu(!dropdownMenu.classList.contains("open"));
  };
  
  const toggleDropdownMenu = (isOpen) => {
    const dropdownMenu = document.getElementById("dropdown-menu");
    const dropdownIcon = document.getElementById("dropdown-icon");
  
    if (isOpen) {
      dropdownMenu.classList.add("open");
    } else {
      dropdownMenu.classList.remove("open");
    }
  
    dropdownIcon.innerText = dropdownMenu.classList.contains("open")
      ? "close"
      : "expand_more";
  };

const handleDropdownEntryClicked = (event) => {
    const dropdownMenu = document.getElementById("dropdown-menu");
    if(!dropdownMenu.classList.contains("open"))
        return
    elm = document.getElementsByClassName("selected")[0];
    if(elm == null)
        return
    elm.classList.remove("selected")
    elm.style.visibility = "visible";
    elm.style.height = "56px";
    event.target.classList.add("selected")
    event.target.style.visibility = "hidden";
    event.target.style.height = "0px";
    document.getElementById("mainDropdownButtonText").innerHTML = event.target.innerHTML;
    document.getElementById("downloadText").innerHTML = event.target.innerHTML;
    if(event.target.id == "dropdownentry-laby3-189")
      document.getElementById("downloadButton").href = "https://github.com/TFSMads/transporter/releases/latest/download/transporter-laby3_v1_8_9.jar"
    else if(event.target.id == "dropdownentry-laby3-1122")
      document.getElementById("downloadButton").href = "https://github.com/TFSMads/transporter/releases/latest/download/transporter-laby3_v1_12_2.jar"
    else if(event.target.id == "dropdownentry-laby3-1165")
      document.getElementById("downloadButton").href = "https://github.com/TFSMads/transporter/releases/latest/download/transporter-laby3_v1_16_5.jar"
    else
      document.getElementById("downloadButton").href = "https://github.com/TFSMads/transporter/releases/latest/download/transporter-laby4.jar"
};

document.body.addEventListener("click", () => toggleDropdownMenu());

function setActive(version) {
    target = document.getElementById("dropdownentry-laby4")
    if(version == "laby3_v1_8_9") {
        target = document.getElementById("dropdownentry-laby3-189")
    }
    else if(version == "laby3_v1_12_2") {
        target = document.getElementById("dropdownentry-laby3-1122")
    }
    else if(version == "laby3_v1_16_5") {
        target = document.getElementById("dropdownentry-laby3-1165")
    }

    console.log(target)
    
    elm = document.getElementsByClassName("selected")[0];
    if(elm == null)
        return
    elm.classList.remove("selected")
    elm.style.visibility = "visible";
    elm.style.height = "56px";
    target.classList.add("selected")
    target.style.visibility = "hidden";
    target.style.height = "0px";
    document.getElementById("mainDropdownButtonText").innerHTML = event.target.innerHTML;
    document.getElementById("downloadText").innerHTML = event.target.innerHTML;

    if(target.id == "dropdownentry-laby3-189")
      document.getElementById("downloadButton").href = "https://github.com/TFSMads/transporter/releases/latest/download/transporter-laby3_v1_8_9.jar"
    else if(target.id == "dropdownentry-laby3-1122")
      document.getElementById("downloadButton").href = "https://github.com/TFSMads/transporter/releases/latest/download/transporter-laby3_v1_12_2.jar"
    else if(target.id == "dropdownentry-laby3-1165")
      document.getElementById("downloadButton").href = "https://github.com/TFSMads/transporter/releases/latest/download/transporter-laby3_v1_16_5.jar"
    else
      document.getElementById("downloadButton").href = "https://github.com/TFSMads/transporter/releases/latest/download/transporter-laby4.jar"
}

url = new URL(window.location.href);
version = url.searchParams.get("version");

console.log(version)

setActive(version)
  
