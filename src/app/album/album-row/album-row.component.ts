import { Component, Input, OnInit } from '@angular/core';
import { album } from 'src/app/album';

@Component({
  selector: 'app-album-row',
  templateUrl: './album-row.component.html',
  styleUrls: ['./album-row.component.css']
})
export class albumRowComponent implements OnInit {


  

  currentalbum: album | undefined;

  @Input() album?: album;
  
  clicked (album: album): boolean {
    this.currentalbum = album;
    return false;
  }



  constructor() { }

  ngOnInit(): void {
  }

  // searchText: string = '';

  // OnSearchTextEntered(searchValue: string){
       
  //   this.searchText = searchValue;
  //   //console.log( this.searchText);
  // }
}
