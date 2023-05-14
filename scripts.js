async function getCities(){

    try{
        const buttonText = document.getElementById("get-city-button-text")
        buttonText.innerHTML = "Loading..."

        const response = await fetch("https://countriesnow.space/api/v0.1/countries/population/cities")
        const json = await response.json()

        buttonText.innerHTML = "Get all cities"

        console.log(json)
    }catch(err){
        console.log("Error:",err)
    }

}