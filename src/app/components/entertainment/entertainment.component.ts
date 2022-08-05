import { Component, OnInit } from '@angular/core';
import { NewsserviceService } from 'src/app/service/newsservice.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {
  TopHeadlineData:any = [];
  Tittle = 'Entertainement Headlines';

  constructor(private NewsService: NewsserviceService) { }

  ngOnInit(): void {

    this.NewsService.entertainment().subscribe((res)=>{
      //  console.log(res);
      this.TopHeadlineData = res.articles;
   })
  }
}
