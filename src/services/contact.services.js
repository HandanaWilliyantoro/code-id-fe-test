import http from "../commons/http-common";
import Toast from 'react-native-simple-toast'

class ContactDataServices {
  getAll() {
    return http.get("/contact")
    .then(({data}) => data)
    .catch(_ => Toast.show('Failed to get contact list'))
  }

  get(id) {
    return http.get(`/contact/${id}`)
    .then(({data}) => data)
    .catch(_ => Toast.show('Failed to get contact'))
  }

  create(payload) {
    return http.post("/contact", payload)
    .then((data) => data)
    .catch(e => {
      console.log(e, 'ini error')
      Toast.show('Failed to create contact');
    })
  }

  update(id, payload) {
    return http.put(`/contact/${id}`, payload)
    .then(({data}) => data)
    .catch(_ => Toast.show('Failed to update contact'))
  }

  delete(id) {
    console.log(id, 'ini id')
    return http.delete(`/contact/${id}`)
    .then(({data}) => data)
    .catch(e => {
      console.log(e, 'ini error')
      Toast.show('Failed to delete contact')
    })
  }
}

export default new ContactDataServices();