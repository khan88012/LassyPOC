import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items : any[]=  [
    {
      image : "https://picsum.photos/200/300" ,
      name: "Best Wooden Chair",
      newPrice: 1529,
      oldPrice: 1729,
      off:40
    },
    {
      image : "https://picsum.photos/200/300" ,
      name: "Best Wooden Chair",
      newPrice: 1529,
      oldPrice: 1729,
      off:40
    },
    {
      image : "https://picsum.photos/200/300" ,
      name: "Best Wooden Chair",
      newPrice: 1529,
      oldPrice: 1729,off:40
    },
    {
      image : "https://picsum.photos/200/300" ,
      name: "Best Wooden Chair",
      newPrice: 1529,
      oldPrice: 1729,
      off:40
    },
    {
      image : "https://picsum.photos/200/300" ,
      name: "Best Wooden Chair",
      newPrice: 1529,
      oldPrice: 1729,
      off:40
    },
    {
      image : "https://picsum.photos/200/300" ,
      name: "Best Wooden Chair",
      newPrice: 1529,
      oldPrice: 1729,
      off:40
    },
    {
      image : "https://picsum.photos/200/300" ,
      name: "Best Wooden Chair",
      newPrice: 1529,
      oldPrice: 1729,
      off:40
    },
    {
      image : "https://picsum.photos/200/300" ,
      name: "Best Wooden Chair",
      newPrice: 1529,
      oldPrice: 1729,
      off:40
    },

  ]

}
