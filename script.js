
// for spacecrafts
var spacecrafts = document.getElementById("spacecrafts")
spacecrafts.addEventListener("click", async function () {

    try {
        var response = await fetch("https://isro.vercel.app/api/spacecrafts");
        response = await response.json();
        // console.log(response);

        var th = document.createElement("THEAD");
        th.setAttribute("id", "thead");
        th.setAttribute("class", "thead-dark");
        table.append(th);

        var tb = document.createElement("TBODY");
        tb.setAttribute("id", "tbody");
        table.append(tb);

        var thead = document.getElementById("thead");
        thead.innerHTML = "";
        thead.innerHTML = `
        <tr>
            <th scope="col">#</th>
            <th scope="col">Spacecraft Names</th>
        </tr>`

        var tbody = document.getElementById("tbody");
        tbody.innerHTML = "";
        response.spacecrafts.map((items, index) => {

            var newRow = tbody.insertRow(index);
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = items.id;
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = items.name;

        })
    }
    catch (error) {
        throw (error);
    }
})

// for launchers
var launchers = document.getElementById("launchers")
launchers.addEventListener("click", async function () {

    try {
        var response = await fetch("https://isro.vercel.app/api/launchers");
        response = await response.json();
        // console.log(response);

        var table = document.getElementById("table");

        var th = document.createElement("THEAD");
        th.setAttribute("id", "thead");
        th.setAttribute("class", "thead-dark");
        table.append(th);

        var tb = document.createElement("TBODY");
        tb.setAttribute("id", "tbody");
        table.append(tb);

        var thead = document.getElementById("thead");
        thead.innerHTML = "";
        thead.innerHTML = `
        <tr>
            <th scope="col">#</th>
            <th scope="col">Launcher Names</th>
        </tr>`

        var tbody = document.getElementById("tbody");
        tbody.innerHTML = "";
        response.launchers.map((items, index) => {

            var newRow = tbody.insertRow(index);
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = index + 1;
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = items.id;

        })
    }
    catch (error) {
        throw (error);
    }
})

// for customer satellites
var satellites = document.getElementById("satellites")
satellites.addEventListener("click", async function () {

    try {
        var response = await fetch("https://isro.vercel.app/api/customer_satellites");
        response = await response.json();
        // console.log(response);

        var table = document.getElementById("table");

        var th = document.createElement("THEAD");
        th.setAttribute("id", "thead");
        th.setAttribute("class", "thead-dark");
        table.append(th);

        var tb = document.createElement("TBODY");
        tb.setAttribute("id", "tbody");
        table.append(tb);

        var thead = document.getElementById("thead");
        thead.innerHTML = "";
        thead.innerHTML = `
        <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Country</th>
            <th scope="col">Launch Date</th>
            <th scope="col">Mass</th>
            <th scope="col">Launcher</th>
        </tr>`

        var tbody = document.getElementById("tbody");
        tbody.innerHTML = "";
        response.customer_satellites.map((items, index) => {

            var newRow = tbody.insertRow(index);
            newRow.insertCell(0).innerHTML = index + 1;
            newRow.insertCell(1).innerHTML = items.id;
            newRow.insertCell(2).innerHTML = items.country;
            newRow.insertCell(3).innerHTML = items.launch_date;
            newRow.insertCell(4).innerHTML = items.mass;
            newRow.insertCell(5).innerHTML = items.launcher;

        })
    }
    catch (error) {
        throw (error);
    }
})

// for centres
var centres = document.getElementById("centres")
centres.addEventListener("click", async function () {

    try {
        var response = await fetch("https://isro.vercel.app/api/centres");
        response = await response.json();
        // console.log(response.centres);

        var table = document.getElementById("table");

        var th = document.createElement("THEAD");
        th.setAttribute("id", "thead");
        th.setAttribute("class", "thead-dark");
        table.append(th);

        var tb = document.createElement("TBODY");
        tb.setAttribute("id", "tbody");
        table.append(tb);

        var thead = document.getElementById("thead");
        thead.innerHTML = "";
        thead.innerHTML = `
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Place</th>
                <th scope="col">State</th>
            </tr>`

        var tbody = document.getElementById("tbody");
        tbody.innerHTML = "";
        response.centres.map((items, index) => {

            var newRow = tbody.insertRow(index);
            newRow.insertCell(0).innerHTML = index + 1;
            newRow.insertCell(1).innerHTML = items.name;
            newRow.insertCell(2).innerHTML = items.Place;
            newRow.insertCell(3).innerHTML = items.State;

        })
    }
    catch (error) {
        throw (error);
    }
})