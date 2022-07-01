export async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:5000${route}`, {
        mothod: methodType, /// get, post, put, delete, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data must match content-type header
    });
    if(response.ok) {
        return await response.json(); // parse JSON response int native JavaScript Objects
    } else {
        throw await response.json();
    }
}