export async function fetchData(route ='', data={}, methodType) {
    const response = await fetch(`http://localhost:5000${route}`, {
        method: methodType, /// get, post, put, delete, etc.
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

export async function allPosts() {
    await fetch("http://localhost:5000/post/getPosts")
    .then((response) => {
    return response.json();
    })

}

export const getPosts = async () => {
    await fetch("http://localhost:5000/post/getPosts", {
        method: 'GET',
        headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
        }
    })
    .then(response => { return response.json();})
    .then(responseData => {console.log(responseData); return responseData;})
    //.then(data => {this.setState({"questions" : data});})

    .catch(err => {
        console.log("fetch error" + err);
    });
}





