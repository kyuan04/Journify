//helper function that gets called in App.js for getting passed into flask
// the path /add is temp, can be adjusted based on server.py
export default class APIService {
  // Insert an article
  static InsertArticle(body) {
    return fetch(`http://localhost:5000/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
}
