const baseUrl = 'http://localhost:3001/api'

export const fetchPosts = () => {
  let request = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/posts`, request)
      .then(response => response.json())
      .then(posts => dispatch({
          type: 'FETCH_POSTS',
          payload: posts
      }))
      .catch(err => err)
  }
}

export const createPost = post => {
  let request = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    },
    body: JSON.stringify({ post })
  }

  return dispatch => {
    fetch(`${ baseUrl }/posts`, request)
      .then(response => response.json())
      .then(post => dispatch({
        type: 'CREATE_POST',
        payload: post
      }))
      .catch(err => err)
  }
}
