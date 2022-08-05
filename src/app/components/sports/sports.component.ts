import { Component, OnInit } from '@angular/core';
import { NewsserviceService } from 'src/app/service/newsservice.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
  TopHeadlineData:any = [];
  Tittle = 'Sports Headlines';

  constructor(private NewsService: NewsserviceService) { }

  ngOnInit(): void {

    this.NewsService.sports().subscribe((res)=>{
      //  console.log(res);
      this.TopHeadlineData = res.articles;
   })
  }
}
