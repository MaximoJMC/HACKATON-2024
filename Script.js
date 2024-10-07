const lugaresTemperatura = [
    { name: "Kuwait City, Kuwait", location: { lat: 29.3759, lng: 47.9774 }, temperature: 53 },
    { name: "Baghdad, Iraq", location: { lat: 33.3152, lng: 44.3661 }, temperature: 52 },
    { name: "Ahvaz, Iran", location: { lat: 31.3203, lng: 48.6703 }, temperature: 54 },
    { name: "Riyadh, Saudi Arabia", location: { lat: 24.7136, lng: 46.6753 }, temperature: 50 },
    { name: "Doha, Qatar", location: { lat: 25.276987, lng: 51.520008 }, temperature: 51 },
    { name: "Abu Dhabi, UAE", location: { lat: 24.4539, lng: 54.3773 }, temperature: 49 },
    { name: "Muscat, Oman", location: { lat: 23.5880, lng: 58.3829 }, temperature: 47 },
    { name: "Manama, Bahrain", location: { lat: 26.0275, lng: 50.5505 }, temperature: 48 },
    { name: "Cairo, Egypt", location: { lat: 30.0444, lng: 31.2357 }, temperature: 45 },
    { name: "Khartoum, Sudan", location: { lat: 15.5007, lng: 32.5599 }, temperature: 46 },
    { name: "Marrakech, Morocco", location: { lat: 31.6295, lng: -7.9811 }, temperature: 44 },
    { name: "Tunis, Tunisia", location: { lat: 36.8065, lng: 10.1815 }, temperature: 43 },
    { name: "Algiers, Algeria", location: { lat: 36.7538, lng: 3.0588 }, temperature: 45 },
    { name: "Tripoli, Libya", location: { lat: 32.8752, lng: 13.1875 }, temperature: 47 },
    { name: "Jacobabad, Pakistan", location: { lat: 27.3310, lng: 68.4300 }, temperature: 50 },
    { name: "Jaisalmer, India", location: { lat: 26.9157, lng: 70.9220 }, temperature: 51 },
    { name: "Dhaka, Bangladesh", location: { lat: 23.8103, lng: 90.4125 }, temperature: 42 },
    { name: "Kandahar, Afghanistan", location: { lat: 31.6280, lng: 65.7100 }, temperature: 44 },
    { name: "Diyarbakır, Turkey", location: { lat: 37.9103, lng: 40.2302 }, temperature: 45 },
    { name: "Damascus, Syria", location: { lat: 33.5138, lng: 36.2765 }, temperature: 43 },
    { name: "Amman, Jordan", location: { lat: 31.9516, lng: 35.9304 }, temperature: 42 },
    { name: "Beirut, Lebanon", location: { lat: 33.8938, lng: 35.5018 }, temperature: 40 },
    { name: "Sana'a, Yemen", location: { lat: 15.3694, lng: 44.1910 }, temperature: 46 },
    { name: "Mexicali, Mexico", location: { lat: 32.6654, lng: -115.4673 }, temperature: 48 },
    { name: "Phoenix, USA", location: { lat: 33.4484, lng: -112.0740 }, temperature: 48 },
    { name: "Katherine, Australia", location: { lat: -14.4682, lng: 132.4603 }, temperature: 39 },
    { name: "Mendoza, Argentina", location: { lat: -32.8893, lng: -68.8458 }, temperature: 43 },
    { name: "Santiago, Chile", location: { lat: -33.4489, lng: -70.6693 }, temperature: 42 },
    { name: "Asunción, Paraguay", location: { lat: -25.2637, lng: -57.5759 }, temperature: 44 },
    { name: "Montevideo, Uruguay", location: { lat: -34.9011, lng: -56.1645 }, temperature: 41 },
    { name: "Brasília, Brazil", location: { lat: -15.7801, lng: -47.9292 }, temperature: 46 },
    { name: "Barranquilla, Colombia", location: { lat: 10.9639, lng: -74.7964 }, temperature: 40 },
    { name: "Lima, Peru", location: { lat: -12.0464, lng: -77.0428 }, temperature: 38 },
    { name: "Maracaibo, Venezuela", location: { lat: 10.6556, lng: -71.6349 }, temperature: 40 },
    { name: "Havana, Cuba", location: { lat: 23.1139, lng: -82.3666 }, temperature: 39 },
    { name: "Santo Domingo, Dominican Republic", location: { lat: 18.4861, lng: -69.9312 }, temperature: 38 },
    { name: "Tegucigalpa, Honduras", location: { lat: 14.0818, lng: -87.2068 }, temperature: 39 },
    { name: "Guatemala City, Guatemala", location: { lat: 14.6349, lng: -90.5069 }, temperature: 38 },
    { name: "San Salvador, El Salvador", location: { lat: 13.6929, lng: -89.2182 }, temperature: 40 },
    { name: "Managua, Nicaragua", location: { lat: 12.1364, lng: -86.2514 }, temperature: 41 },
    { name: "San José, Costa Rica", location: { lat: 9.9281, lng: -84.0907 }, temperature: 39 },
    { name: "Manila, Philippines", location: { lat: 14.5995, lng: 120.9842 }, temperature: 39 },
    { name: "Bangkok, Thailand", location: { lat: 13.7563, lng: 100.5018 }, temperature: 41 },
    { name: "Ho Chi Minh City, Vietnam", location: { lat: 10.8231, lng: 106.6297 }, temperature: 40 },
    { name: "Kuala Lumpur, Malaysia", location: { lat: 3.139, lng: 101.6869 }, temperature: 38 },
    { name: "Mojokerto, Indonesia", location: { lat: -7.4701, lng: 112.4289 }, temperature: 37 },
    { name: "Singapore, Singapore", location: { lat: 1.3521, lng: 103.8198 }, temperature: 39 },
    { name: "Taipei, Taiwan", location: { lat: 25.0343, lng: 121.5645 }, temperature: 41 },
    { name: "Tokyo, Japan", location: { lat: 35.682839, lng: 139.759455 }, temperature: 38 },
    { name: "Seoul, South Korea", location: { lat: 37.5665, lng: 126.9780 }, temperature: 39 }
];

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: { lat: 20.0, lng: 0.0 }, // Centro del mapa
    });

    lugaresTemperatura.forEach(lugar => {
        let color;

        // Determinar el color según la temperatura
        if (lugar.temperature >= 40) {
            color = 'violet'; // Muy alta
        } else if (lugar.temperature >= 30) {
            color = 'red'; 
        } else if (lugar.temperature >= 20) {
            color = 'orange'; // Alta
        } else if (lugar.temperature >= 10) {
            color = 'green'; // Promedio
        } else {
            color = 'lightblue'; // Baja
        }

        // Marcador para el lugar
        new google.maps.Marker({
            position: lugar.location,
            map: map,
            title: lugar.name,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: color,
                fillOpacity: 1,
                strokeWeight: 2,
                strokeColor: 'black'
            }
        });
    });
}

google.maps.event.addDomListener(window, "load", initMap);
