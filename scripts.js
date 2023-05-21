let list = [];

async function getCities() {
    try {
        const buttonText = document.getElementById("get-city-button-text");
        buttonText.innerHTML = "Loading...";

        const response = await axios(
            "https://countriesnow.space/api/v0.1/countries/population/cities"
        );
        console.log(response)

        buttonText.innerHTML = "Get all cities";

        list = response.data.data;

        renderTable(response.data.data);
    } catch (err) {
        console.log("Error:", err);
    }
}

function renderTable(l) {
    const table = document.getElementById("table-container");
    table.innerHTML = "";

    l.forEach((item) => {
        const tableRow = document.createElement("tr");
        tableRow.setAttribute("class", "mdc-data-table__row");

        const cityCell = document.createElement("td");
        cityCell.setAttribute("class", "mdc-data-table__cell");

        const cityDiv = document.createElement("div");
        cityDiv.setAttribute("class", "name");
        cityDiv.innerHTML = item.city;
        cityCell.appendChild(cityDiv);
        tableRow.appendChild(cityCell);

        const countryCell = document.createElement("td");
        countryCell.setAttribute("class", "mdc-data-table__cell");
        const countryDiv = document.createElement("div");
        countryDiv.setAttribute("class", "name");
        countryDiv.innerHTML = item.country;
        countryCell.appendChild(countryDiv);
        tableRow.appendChild(countryCell);

        table.appendChild(tableRow);
    });
}

document.getElementById("search-input").addEventListener("input", handleSearch);

function handleSearch(event) {
    const searchValue = event.target.value;
    const filteredList = list.filter((item) => {
        const result = item.city.search(searchValue);
        if (result < 0) {
            return false;
        } else {
            return true;
        }
    });

    renderTable(filteredList);
}


console.log(_.uniq([2, 1, 2, 3,3,3,3,4,4,4,4,5]))