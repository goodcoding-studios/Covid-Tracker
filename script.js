var covid = {
    data: [
            {
                confirmed: null,
                ratio: null,
                deaths: null,
                rate: null,
                name: null
            },
            {
                confirmed: null,
                ratio: null,
                deaths: null,
                rate: null,
                name: null
            },
            {
                confirmed: null,
                ratio: null,
                deaths: null,
                rate: null,
                name: null,
            },
            {
                confirmed: null,
                ratio: null,
                deaths: null,
                name: null,
                rate: null
            },
            {
                confirmed: null,
                ratio: null,
                deaths: null,
                name: null,
                rate: null
            },
            {
                confirmed: null,
                ratio: null,
                deaths: null,
                rate: null,
                name: null,
            },
            {
                confirmed: null,
                ratio: null,
                deaths: null,
                name: null,
                rate: null
            }
        ]
}

fetch('https://coronavirus.m.pipedream.net/')
.then(res => {return res.json()})
.then(data => {
    data.rawData.map(data => {
        if(data.Country_Region == "Pakistan") {
            // console.log(data)

            if (data.Combined_Key == "Azad Jammu and Kashmir, Pakistan") {
                covid.data[0].confirmed = commas(data.Confirmed)
                covid.data[0].deaths = commas(data.Deaths)
                covid.data[0].name = data.Province_State
                covid.data[0].ratio = data.Case_Fatality_Ratio.slice(0, 5)
                covid.data[0].rate = data.Incident_Rate.slice(0, 6)
            } else if (data.Combined_Key == "Balochistan, Pakistan") {
                covid.data[1].confirmed = commas(data.Confirmed)
                covid.data[1].deaths = commas(data.Deaths)
                covid.data[1].name = data.Province_State
                covid.data[1].ratio = data.Case_Fatality_Ratio.slice(1, 5)
                covid.data[1].rate = data.Incident_Rate.slice(0, 6)
            } else if (data.Combined_Key == "Gilgit-Baltistan, Pakistan") {
                covid.data[2].confirmed = commas(data.Confirmed)
                covid.data[2].deaths = commas(data.Deaths)
                covid.data[2].name = data.Province_State
                covid.data[2].ratio = data.Case_Fatality_Ratio.slice(2, 5)
                covid.data[2].rate = data.Incident_Rate.slice(0, 6)
            } else if (data.Combined_Key == "Islamabad, Pakistan") {
                covid.data[3].confirmed = commas(data.Confirmed)
                covid.data[3].deaths = commas(data.Deaths)
                covid.data[3].name = data.Province_State
                covid.data[3].ratio = data.Case_Fatality_Ratio.slice(3, 5)
                covid.data[3].rate = data.Incident_Rate.slice(0, 6)
            } else if (data.Combined_Key == "Khyber Pakhtunkhwa, Pakistan") {
                covid.data[4].confirmed = commas(data.Confirmed)
                covid.data[4].deaths = commas(data.Deaths)
                covid.data[4].name = data.Province_State
                covid.data[4].ratio = data.Case_Fatality_Ratio.slice(4, 5)
                covid.data[4].rate = data.Incident_Rate.slice(0, 6)
            } else if (data.Combined_Key == "Punjab, Pakistan") {
                covid.data[5].confirmed = commas(data.Confirmed)
                covid.data[5].deaths = commas(data.Deaths)
                covid.data[5].name = data.Province_State
                covid.data[5].ratio = data.Case_Fatality_Ratio.slice(5, 5)
                covid.data[5].rate = data.Incident_Rate.slice(0, 6)
            } else if (data.Combined_Key == "Sindh, Pakistan") {
                covid.data[6].confirmed = commas(data.Confirmed)
                covid.data[6].deaths = commas(data.Deaths)
                covid.data[6].name = data.Province_State
                covid.data[6].ratio = data.Case_Fatality_Ratio.slice(6, 5)
                covid.data[6].rate = data.Incident_Rate.slice(0, 6)
            }
        }
    })

    console.log(covid)

    document.getElementById("covid-data").innerHTML = covid.data.map(data => {
        return `
        <h1>${data.name}</h1>
        <div class="covid-card shadow-green expand" >
            <h1>Confirmed Cases</h1>
            <span class="number" id="punjab-cases">${data.confirmed && data.confirmed || "???"}</span>
            <img src="imgs/total.png" alt="">
        </div>

        <div class="covid-card shadow-red expand" >
            <h1>Reported Deaths</h1>
            <span class="number" id="punjab-deaths">${data.deaths && data.deaths || "???"}</span>
            <img src="imgs/dead.png" alt="dead">
        </div>

        <div class="covid-card shadow-light" >
            <h1 class="r">Fatality Ratio</h1>
            <span class="number" id="punjab-pop">${data.ratio && data.ratio || "???"}</span>
        </div>

        <div class="covid-card shadow-light" >
            <h1 class="r">Positivity Rate</h1>
            <span class="number" id="punjab-pop">${data.rate && data.rate || "???"}</span>
        </div>           
        `
    }).join('')

})

function commas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}