


import { Component, Input, OnInit } from '@angular/core';
import { album } from 'src/app/album';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})

export class albumDetailsComponent implements OnInit {



@Input() album?: album;
  constructor() { }

  
  
  ngOnInit(): void {
  }
  

}
