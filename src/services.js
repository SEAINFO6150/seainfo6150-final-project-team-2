export const addNewUser = (username, password) => {
  return fetch('/addUser', {
    method:'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify( { username, password } )
  })
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response => {
    if(response.ok){
        return response.json();
    }
    return Promise.reject({ error: 'service-complaint', err: response.statusText });
  });
};

export const addToCart = (username, item) => {
  return fetch('/addToCart', {
    method:'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify( { username, item } )
  })
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response => {
    if(response.ok){
        return response.json();
    }
    return Promise.reject({ error: 'service-complaint', err: response.statusText });
  });
};

export const removeFromCart = (username, item) => {
  return fetch('/removeFromCart', {
    method:'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify( { username, item } )
  })
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response => {
    if(response.ok){
        return response.json();
    }
    return Promise.reject({ error: 'service-complaint', err: response.statusText });
  });
};

export const searchItem = (searchWord) => {
  return fetch('/search', {
    method:'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify( { searchWord } )
  })
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response => {
    if(response.ok){
        return response.json();
    }
    return Promise.reject({ error: 'service-complaint', err: response.statusText });
  });
};

export const initShoppingList = () => {
  return fetch('/init')
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject({ error: 'service-complaint', err: response.statusText }); 
  });
}

export const createAccount = (registerName, registerPassword) => {
  return fetch('/createAccount', {
    method:'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify( { registerName, registerPassword } )
  })
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response => {
    if(response.ok){
        return response.json();
    }
    return Promise.reject({ error: 'service-complaint', err: response.statusText });
  });
};
