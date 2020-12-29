import { Component } from '@angular/core';
import arrayWords from "../utils/words";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words = '';

  limit = 10;

  handleSlidechange(newlimit:number){
      this.limit = newlimit;
  }
generate(){
  this.words=arrayWords.slice(0,this.limit).join(",")
}
randomgenerate(){
  this.words=arrayWords.slice(0,15).join(',')
  // console.log(this.words)
}
}
