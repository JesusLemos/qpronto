import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  menu = [
  {
    CategoryId: 1,
    PlateName: "bravas",
    Price: 2.1,
    Addon: { name: "extra sause", price: 0.30 },
    Size: ["small", "medium", "large"],
    Image: "https://images.unsplash.com/photo-1565599837634-134bc3aadce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    Allergens: ["Wheat", "Peanut"],
    Amount:0
  },
  {
   CategoryId: 2,
   PlateName: "Titaina",
   Price: 3.1,
   Addon: '',
   Size: ["small", "medium", "large"],
   Image: "https://images.unsplash.com/photo-1565599837634-134bc3aadce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
   Allergens: ["Wheat", "Peanut"],
   Amount:0
},
{
  CategoryId: 3,
  PlateName: "Esgarraet",
  Price: 5.5,
  Addon: '',
  Size: ["small", "medium", "large"],
  Image: "https://images.unsplash.com/photo-1565599837634-134bc3aadce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  Allergens: ["Wheat", "Peanut"],
  Amount:0
},
]

  price_Total= 0;

  constructor() { }
 prueba(){
   this.price_Total =0;
   for(let i=0; i <= this.menu.length; i++){
     
     this.price_Total += this.menu[i].Price * this.menu[i].Amount;
  }
  }
}
