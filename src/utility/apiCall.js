export async function fetchMovies(movieUrl) {
    try {
        const response = await fetch(movieUrl)
            .then(response => response.json())
        return response
    } catch (err) {
        console.log(err)
    }
}

export async function fetchGenres(genresUrl) {
    const response = await fetch(genresUrl)
    const responseJson = await response.json()
    return responseJson.genres
}

export async function fetchData(movieUrl, page) {
    const pageState = page === undefined ? '1' : page
    try {
        const response = await fetch(movieUrl + pageState)
            .then(response => response.json())
        return response
    } catch (err) {
        console.log(err)
    }
}

export async function searchMovies(url) {
    try {
        const resp = await fetch(url)
            .then(resp => resp.json())
        return resp
    } catch (err) {
        console.log(err)
    }
}