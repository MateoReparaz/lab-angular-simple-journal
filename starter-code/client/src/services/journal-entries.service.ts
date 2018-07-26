import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "../environments/environment";
import { map } from "rxjs/operators";

const url = environment.BASEURL;

@Injectable()
export class JournalEntriesService {
  constructor(private http: Http) {}
  getAll() {
    return this.http
      .get(`${url}/api/journal-entries`)
      .pipe(map(res => res.json()));
  }
  getById(id:string) {
    return this.http
      .get(`${url}/api/journal-entries/${id}`)
      .pipe(map(res => res.json()));
  }
  addEntry(title:string,content:string) {
    return this.http
      .post(`${url}/api/journal-entries`,{title, content})
  }
}

