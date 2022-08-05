import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsserviceService {

  newsAPIurl:string = 'https://newsapi.org/v2/';
  API_KEY:string = '321e7f7f624f4a34a199c9651f32815c';
  demoURL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=321e7f7f624f4a34a199c9651f32815c';
  BusinessURL = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=321e7f7f624f4a34a199c9651f32815c'
  entertainmentURL = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=321e7f7f624f4a34a199c9651f32815c'
  generalURL = 'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=321e7f7f624f4a34a199c9651f32815c'
  healthURL = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=321e7f7f624f4a34a199c9651f32815c'
  scienceURL = 'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=321e7f7f624f4a34a199c9651f32815c'
  sportsURL = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=321e7f7f624f4a34a199c9651f32815c'
  technologyURL = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=321e7f7f624f4a34a199c9651f32815c'


  constructor(private httpReq:HttpClient) { }

TopHeading():Observable<any>{
  let Endpoint = 'top-headlines?';
  let selectedCountry = 'in';
  let selectedcategory= 'business';

return this.httpReq.get(this.demoURL);
}

Business():Observable<any>{
  return this.httpReq.get(this.BusinessURL);
}
entertainment():Observable<any>{
  return this.httpReq.get(this.entertainmentURL);
}
general():Observable<any>{
  return this.httpReq.get(this.generalURL);
}
health():Observable<any>{
  return this.httpReq.get(this.healthURL);
}
science():Observable<any>{
  return this.httpReq.get(this.scienceURL);
}
sports():Observable<any>{
  return this.httpReq.get(this.sportsURL);
}
technology():Observable<any>{
  return this.httpReq.get(this.technologyURL);
}

}
