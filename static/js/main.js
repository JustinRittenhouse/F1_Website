let button = document.querySelector("#searchForm")
let year = document.querySelector("#yearSearch")
let race = document.querySelector("#raceSearch")
let table = document.querySelector("tbody")

button.addEventListener( 'submit', ( e ) => {
    // prevent page refresh
    e.preventDefault();
    fetch ( `https://ergast.com/api/f1/${year.value}/${race.value}/driverStandings.json` )
        .then (res => res.json() )
        .then (data => {
            table.innerHTML = ""
            for (let i = 0; i < 7; i++) {
                console.log()
                driver = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i]
                table.innerHTML += `<tr>
                <td>${driver.position}</td>
                <td>${driver.Driver.givenName} ${driver.Driver.familyName}</td>
                <td>${driver.Driver.nationality}</td>
                <td>${driver.Constructors[0].name}</td>
                <td>${driver.points}</td>
            </tr>`
            }  
        } )
} )