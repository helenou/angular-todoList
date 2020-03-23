import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${baseUrl}/all`);
  }

  get(id) {
    return this.http.get(`${baseUrl}/find/${id}`);
  }

  create(data) {
    return this.http.post(`${baseUrl}/add`, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/update/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  deleteAll() {
    return this.http.delete(`${baseUrl}/delete`);
  }

  findByTitle(title) {
    return this.http.get(`${baseUrl}/search?title=${title}`);
  }

  findByDone(done) {
    return this.http.get(`${baseUrl}search?done=${true}`);
  }
}
