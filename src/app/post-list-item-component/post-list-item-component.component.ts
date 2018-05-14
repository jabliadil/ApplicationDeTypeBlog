import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

@Input() titlePost:string;
@Input() contentPost:string;
@Input() loveItsPost:number;
@Input() created_atPost:string;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt(){
    //Augmenter le nombre loveits
    this.loveItsPost=this.loveItsPost+1;
  }
  onDontLoveIt(){
    //diminuer le nombre loveits
    this.loveItsPost=this.loveItsPost-1;
  }

}
