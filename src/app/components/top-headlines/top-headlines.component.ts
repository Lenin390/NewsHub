import { Component, OnInit } from '@angular/core';
import { NewsserviceService } from 'src/app/service/newsservice.service';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.scss']
})
export class TopHeadlinesComponent implements OnInit {

  TopHeadlineData:any = [];
  Tittle = 'Top Headlines';

  constructor(private NewsService: NewsserviceService) { }

  ngOnInit(): void {

    this.NewsService.TopHeading().subscribe((res)=>{
      //  console.log(res);
      this.TopHeadlineData = res.articles;
   })
  }

}
