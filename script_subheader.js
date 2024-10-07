document.addEventListener('DOMContentLoaded', () => {
    const countries = document.querySelectorAll('.country');
    const subheader = document.querySelector('.select');
    const heading = subheader.querySelector('h2');

    countries.forEach(country => {
        country.addEventListener('click', (event) => {
            event.preventDefault(); 
            const countryName = country.textContent.trim();
            if (countryName === "USA") {
                window.location.href = "USA.html";
            }else {
                window.location.href = "Peru.html";
            }

            heading.textContent = countryName;
        });
    });
});
