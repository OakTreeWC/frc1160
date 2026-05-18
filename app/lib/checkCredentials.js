

export default async function checkCredentials(username, password) {
    const resp = await fetch('https://admin.wchen.dev/checkCredentials', {
      method: 'POST',
      body: JSON.stringify({ user: username, password: password }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

    if (resp.status_code === 502) {
        console.error("Bad Gateway Error, Check if Admin Server is online.")
    }
    
    const data = await resp.json(); // Convert response to JSON
    const user = data["user"];
    return user
}