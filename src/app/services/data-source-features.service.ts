import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_ENDPOINT = 'https://localhost:7093';

@Injectable({
  providedIn: 'root'
})
export class DataSourceFeaturesService {
  constructor(
    private http: HttpClient
  ) { }

  public getFeatures(): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/features`);
  }
}
