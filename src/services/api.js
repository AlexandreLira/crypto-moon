export async function apiGet(options){
    const baseUrl = "https://api.coingecko.com/api/v3/"
    let response = (await fetch(baseUrl+options)).json()
    
    return response
}