import { API_KEY } from "./env.js";

// Function to fetch data from the csfloat API, does nothing yet
async function getData(){
    const response = await fetch("https://csfloat.com/api/v1/listings", {
        method: "GET",
        headers: {
            "Authorization": `${API_KEY}`
        }
    });
    const data = await response.json();
    console.log(data);
}

console.log("Hello from popup.js!");
getData();
