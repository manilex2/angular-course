import { Component, OnInit } from '@angular/core';
import { PostblogService } from './postblog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  post:any;

  constructor(private postblogService: PostblogService) { }

  ngOnInit(): void {
    this.postblogService.retornar()
      .subscribe(result => this.post = result)
  }
}
