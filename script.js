document.addEventListener('DOMContentLoaded', () => {
    const dynamicLetters = document.querySelector('.dynamic-letters');
    const name = 'hridhara';
    let index = 0;

    function animateName() {
        dynamicLetters.textContent = '';
        index = 0;

        const interval = setInterval(() => {
            if (index < name.length) {
                dynamicLetters.textContent += name[index];
                index++;
            } else {
                clearInterval(interval);
                setTimeout(animateName, 2000); // Restart after 2 seconds
            }
        }, 300); // Change the interval time as needed
    }

    animateName();
});

    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", function (event) {
            for (var j = 0; j < tablinks.length; j++) {
                tablinks[j].classList.remove("active-link");
                tabcontents[j].classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            var tabName = event.currentTarget.getAttribute("data-tab");
            document.getElementById(tabName).classList.add("active-tab");
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        const dropdownIcon = document.querySelector('.dropdown-icon');
        const navLinks = document.querySelector('.top-header nav ul');

        dropdownIcon.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    });