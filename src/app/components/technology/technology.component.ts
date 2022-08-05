import { Component, OnInit } from '@angular/core';
import { NewsserviceService } from 'src/app/service/newsservice.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  TopHeadlineData:any = [];
  Tittle = 'Technology Headlines';

  constructor(private NewsService: NewsserviceService) { }

  ngOnInit(): void {

    this.NewsService.technology().subscribe((res)=>{
      //  console.log(res);
      this.TopHeadlineData = res.articles;
   })
  }
}
