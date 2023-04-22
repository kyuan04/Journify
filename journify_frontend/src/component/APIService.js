import axios from 'axios';
//helper function that gets called in App.js for getting passed into flask
// the path /add is temp, can be adjusted based on server.py
export default class APIService {
  // Insert an article
  static async InsertArticle(body) {
    axios.post('http://127.0.0.1:5000/add', body)
    .then(res => console.log(res.data))
    .catch(error => console.log(error));
    // await fetch('http://127.0.0.1:5000/add', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",

    //   },
    //   body: JSON.stringify(body),
    // })
    // .then((response) => console.log(response))
    // .catch((error) => console.log(error));
  }

  static async GetTime() {
    axios.get('http://127.0.0.1:5000/data')
    .then(res => console.log(res.data))
    .catch(error => console.log(error));
    // let blob = await fetch('http://127.0.0.1:5000/data', {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",

    //   }
    // })
    // .then((response) => console.log(response.json()))
    // .catch((error) => console.log(error))
  }
}
