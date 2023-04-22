async function updateInstitution(url, id) {
    let money = parseFloat(prompt("How much money you donated?"))
    if(money === null)
        return;
    await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            id: id, 
            money: money
        })
    }).then((response) => {
        if (response.ok) {
            const resData = 'Updated an institution';
            location.reload()
            return Promise.resolve(resData);    
        }
        return Promise.reject(response); 
    })
      .catch((response) => {
        alert(response.statusText);
      });
}