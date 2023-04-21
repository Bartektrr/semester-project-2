async function deleteInstitution(url, id) {
    await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            id: id
        })
    }).then((response) => {
        if (response.ok) {
            const resData = 'Institution deleted...';
            location.reload()
            return Promise.resolve(resData);    
        }
        return Promise.reject(response); 
    })
      .catch((response) => {
        alert(response.statusText);
      });;
}