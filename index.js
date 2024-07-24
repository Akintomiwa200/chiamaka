function toggleMenu() {
    const menu = document.querySelector("#hamburger-nav .menu-links");
    const icon = document.querySelector("#hamburger-nav .hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("projectModal");
    const span = document.getElementsByClassName("close")[0];
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalLinks = document.getElementById("modalLinks");

    const projects = {
        1: {
            title: "AI Video and Thumbnail Generator App",
            description: "An AI video and thumbnail generated through text. Our PRODUCT VISION is to empower creators of all skill levels to effortlessly produce engaging video content and eye-catching thumbnails, maximizing reach and impact.",
            links: {
                "Market Intelligence Report And Business Model": "https://docs.google.com/document/d/11ZNIrSWouf4j4Nkz2nOmyJ5aAZS_rrJiPg15HvTYQgQ/edit?usp=drivesdk",
                "PRD Document": "https://docs.google.com/document/d/13H3yEuojItT-HVAiPhLIbSuQSc9MwhELj9fDMa1qpF0/edit?usp=drivesdk",
                "Product Plan": "https://docs.google.com/presentation/d/1UgnEn12eB2kcArbnw15Z6kXuObW2tD-ZDFIk2a_A2hU/edit?usp=drivesdk",
                "Boilerplate Issues Collations": "https://docs.google.com/spreadsheets/d/1tpMHioRj4AguD7zNSbbIJ2QztCcvapI78zLbFGKuXXA/edit?usp=drivesdk",
                "Devs GitHub Issues - Authentication": "https://docs.google.com/spreadsheets/d/1xTgagXk3HluAN0KBBzh-cRlY2X2nkfmDYKB2gZ1PyvU/edit?usp=drivesdk",
                "Core Features For AI Video and Thumbnail Generator": "https://docs.google.com/spreadsheets/d/16oQ_o1xPBzq7lVDxM2To2N-jA_0jEIIv9uWLItjZ1FM/edit?usp=drivesdk",
                "AI Video And Thumbnail Generator Tickets": "https://docs.google.com/spreadsheets/d/1ZSCNs-E1VUg2O0WtrRGuGGKjLxX7fu4Ea-ZvgGlplpc/edit?usp=drivesdk"
            }
        },
        2: {
            title: "A Community Feature in version 2.0 of a Meal Pal App",
            description: "Developed an existing meal pal app which aims to connect people who wants to share meals, cooking duties, and socialize over food.",
            links: {
                "Github": "https://github.com/nikhilkamble02/",
                "Live Demo": "https://github.com"
            }
        },
        3: {
            title: "Study or Work Partner Mobile Application",
            description: "A study or work partner app that connects individuals who want to collaborate, stay motivated, and achieve their goals together.",
            links: {
                "Github": "https://github.com/nikhilkamble02/",
                "Live Demo": "https://github.com"
            }
        }
    };

    document.querySelectorAll('.see-more-btn').forEach(button => {
        button.onclick = function() {
            const projectId = this.getAttribute('data-project');
            const project = projects[projectId];
            if (project) {
                modalTitle.textContent = project.title;
                modalDescription.textContent = project.description;
                modalLinks.innerHTML = Object.keys(project.links).map(key => 
                    `<a href="${project.links[key]}" target="_blank" rel="noopener">${key}</a><br/>`
                ).join('');
                modal.style.display = "block";
            }
        };
    });

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
