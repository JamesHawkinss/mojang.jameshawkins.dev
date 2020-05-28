function getStatus() {
    fetch('https://status.mojang.com/check')
        .then(response => response.json())
        .then(parseStatus)
        .catch((err) => {
            console.log(err);
        });
}

function parseStatus(data) {
    const services = document.getElementById("services");
    services.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        services.appendChild(makeStatusElement(data[i]));
    }
}

function makeStatusElement(service) {
    const element = document.createElement("div");
    const name = Object.keys(service)[0];
    const colour = service[name];

    element.classList.add("service");
    element.classList.add(`service-${colour}`);
    element.innerHTML = `<h3>${name}</h3>`;

    return element;
}

getStatus()