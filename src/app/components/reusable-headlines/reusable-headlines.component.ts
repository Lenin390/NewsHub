import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../Models/headlinedata';
import { NewsserviceService } from '../../service/newsservice.service';

@Component({
  selector: 'app-reusable-headlines',
  templateUrl: './reusable-headlines.component.html',
  styleUrls: ['./reusable-headlines.component.scss']
})
export class ReusableHeadlinesComponent implements OnInit {

  TopHeadlineData: any = [];
  MenuSelected: string = '';
  Tittle: string = '';
  selectedMenu: any;
  isLoading:boolean = true;

  constructor(private NewsService: NewsserviceService, private activateroute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.NewsService.TopHeading().subscribe((res) => {
    //   //  console.log(res);
    //   this.TopHeadlineData = res.articles;

    // })
    this.activateroute.url.subscribe((paramurl) => {
      if (paramurl.length > 0) {
        this.MenuSelected = paramurl[0].path;
      }

    });
    // if (this.MenuSelected) {
    this.NewsService.SelectedMenuHeading(this.MenuSelected).subscribe((res) => {
      this.isLoading = false;
      this.TopHeadlineData = res.articles;
      this.Tittle = 'Top Headlines : ' + this.MenuSelected;
    })
    // } else {
    //   this.NewsService.TopHeading().subscribe((res) => {
    //     this.TopHeadlineData = res.articles;
    //   });
    // }
  }
}
