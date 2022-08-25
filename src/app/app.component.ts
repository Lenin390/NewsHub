import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NewsHub';
  isActive = 'true';
  MenuNavigation = [
  //   {
  //   display: 'NEWS-HUB', value: ''
  // },
  {
    display: 'business', value: 'business'
  },
  {
    display: 'entertainment', value: 'entertainment'
  },
  {
    display: 'health', value: 'health'
  },
  {
    display: 'science', value: 'science'
  },
  {
    display: 'technology', value: 'technology'
  },
  ];
  
  ClickedMenuItem: string = '';

  CountryList = [
    'aearataubebgbrcachcncocuczdeegfrgbgrhkhuidieilinitjpkrltlvmamxmyngnlnonzphplptrorsrusasesgsiskthtrtwuausveza'
  ];
  ngOnInit(): void {

  }
  MenuClicked(SelectedMenu: string) {
    this.ClickedMenuItem = SelectedMenu;
  }
}
