document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".navigationlinks");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttonsData = [
    { text: "View Courses", link: "courses.html" },
    { text: "View Learning Resources", link: "learningResources.html" },
    { text: "View Student Information", link: "studentInformation.html" },
    { text: "View Computing Courses", link: "ComputingCourse.html" },
    { text: "View Design Courses", link: "DesignCourse.html" },
  ];

  const blocks = document.querySelectorAll(".about-image");

  blocks.forEach((block, index) => {
    if (buttonsData[index]) {
      const btn = document.createElement("a");
      btn.textContent = buttonsData[index].text;
      btn.href = buttonsData[index].link;
      btn.className = "image-button";
      block.appendChild(btn);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttonsData = [
    { text: "View Computing Courses", link: "ComputingCourse.html" },
    { text: "View Design Courses", link: "DesignCourse.html" },

  ];

  const blocks = document.querySelectorAll(".course-image-Courses");

  blocks.forEach((block, index) => {
    if (buttonsData[index]) {
      const btn = document.createElement("a");
      btn.textContent = buttonsData[index].text;
      btn.href = buttonsData[index].link;
      btn.className = "image-button";
      block.appendChild(btn);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {

  const buttonsData = [
    { text: "View Course", link: "GraphicDesign.html" },
    { text: "View Course", link: "InteriorArchitectureDesign.html" },
    { text: "View Course", link: "JewelleryMaterialsDesign.html" },
    { text: "View Course", link: "GameDesignDevelopment.html" },
    { text: "View Course", link: "BScProductDesign.html" },
    { text: "View Course", link: "BAProductDesign.html" },
    { text: "View Course", link: "DigitalMediaProduction.html" }
  ];

  const blocks = document.querySelectorAll(".Dcourse-card");

  blocks.forEach((block, index) => {
    if (buttonsData[index]) {
      const btn = document.createElement("a");
      btn.textContent = buttonsData[index].text;
      btn.href = buttonsData[index].link;
      btn.className = "image-button";
      block.appendChild(btn);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttonsData = [
    { text: "View Course", link: "Computing.html" },
    { text: "View Course", link: "ComputingFoundationYear.html" },
    { text: "View Course", link: "ComputerNetworks.html" },
    { text: "View Course", link: "CyberSecurityForensics.html" },
    { text: "View Course", link: "CyberSecurityForensicsFoundationYear.html" },
    { text: "View Course", link: "ComputerScienceGames.html" },
    { text: "View Course", link: "ComputerScienceGamesFoundationYear.html" },
    { text: "View Course", link: "SoftwareEngineering.html" },
    { text: "View Course", link: "SoftwareEngineeringFoundationYear.html" },
    { text: "View Course", link: "ComputerScience.html" },
    { text: "View Course", link: "ComputerScienceFoundationYear.html" },
    { text: "View Course", link: "CyberSecurityFoundationYear.html" },
    { text: "View Course", link: "InformationTechnologyBusinessStudiesFoundationYear.html" },
    { text: "View Course", link: "BusinessDigitalTechnologyFoundationYear.html" },
    { text: "View Course", link: "PostgraduateComputing.html" },
    { text: "View Course", link: "PostgraduateComputingInformatics.html" },
    { text: "View Course", link: "PostgraduateCyberSecurity.html" }

    ];

  const blocks = document.querySelectorAll(".Ccourse-card");

  blocks.forEach((block, index) => {
    if (buttonsData[index]) {
      const btn = document.createElement("a");
      btn.textContent = buttonsData[index].text;
      btn.href = buttonsData[index].link;
      btn.className = "image-button";
      block.appendChild(btn);
    }
  });
});




      