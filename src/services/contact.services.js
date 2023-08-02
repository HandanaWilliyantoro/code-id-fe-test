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

  create(data) {
    return http.post("/contact", data)
    .then(({data}) => data)
    .catch(_ => Toast.show('Failed to create contact'))
  }

  update(id, data) {
    return http.put(`/contact/${id}`, data)
    .then(({data}) => data)
    .catch(_ => Toast.show('Failed to update contact'))
  }

  delete(id) {
    return http.delete(`/contact/${id}`)
    .then(({data}) => data)
    .catch(_ => Toast.show('Failed to delete contact'))
  }
}

export default new ContactDataServices();