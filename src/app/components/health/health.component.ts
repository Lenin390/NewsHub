import { Component, OnInit } from '@angular/core';
import { NewsserviceService } from 'src/app/service/newsservice.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {
  TopHeadlineData:any = [];
  Tittle = 'Health Headlines';

  constructor(private NewsService: NewsserviceService) { }

  ngOnInit(): void {

    this.NewsService.health().subscribe((res)=>{
      //  console.log(res);
      this.TopHeadlineData = res.articles;
   })
  }
}
