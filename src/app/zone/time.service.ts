import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http:HttpClient) { }


  getData() {
    return this.http.get("https://timeapi.io/api/Time/current/zone?timeZone=asia/Kuala_Lumpur");
  }
}
