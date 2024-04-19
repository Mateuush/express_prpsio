export default {
  post(url: string, body: JSON) {
    fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
  },
  get(url: string) {
    fetch(url, {
      method: 'GET',
      credentials: 'include',
    })
  },
}