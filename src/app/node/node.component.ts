import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.sass']
})
export class NodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(123);
    
  }

}
