async function addInstitution(url) {
    let name = prompt("Provide the new institutions's name")
    if(name === null)
        return;
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
        })
    }).then((response) => {
        if (response.ok) {
            const resData = 'Created a new charity institution';
            location.reload()
            return Promise.resolve(resData);    
        }
        return Promise.reject(response); 
    })
      .catch((response) => {
        alert(response.statusText);
      });
}