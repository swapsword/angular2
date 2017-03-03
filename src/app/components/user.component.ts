import { Component } from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'user',
  template: `<h1>{{name}}</h1>
  <p><strong>Email:</strong>{{email}}</p>
  <p><strong>Address:</strong> {{address.street}} {{address.city}} {{address.state}}</p>
  <h3>Hobbies</h3>
  <button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies":"Show Hobbies"}}</button>
  <div *ngIf="showHobbies">
    <ul>
      <li *ngFor="let hobby of hobbies; let i = index;">
        {{hobby}} <button (click)="deleteHobby(i)">X</button>
      </li>
    </ul>
    <form (submit)="addHobby(hobby.value)" >
      <label>Add Hobby: </label> <br/>
      <input type="text" #hobby/><br/>
    </form>
  </div>
  <hr />
  <form action="">
    <label>Name: </label> <br/>
    <input type="text" name="name" [(ngModel)]="name" /><br/>
    <label>Email: </label> <br/>
    <input type="text" name="email" [(ngModel)]="email" /><br/>
    <label>Street: </label> <br/>
    <input type="text" name="address.street" [(ngModel)]="address.street" /><br/>
    <label>City: </label> <br/>
    <input type="text" name="address.city" [(ngModel)]="address.city" /><br/>
    <label>State: </label> <br/>
    <input type="text" name="address.state" [(ngModel)]="address.state" /><br/>
  </form>
  `,
  providers: [PostService]
})
export class UserComponent  { 
  name: string;
  email: string;
  address: address; 
  hobbies: string[];
  showHobbies: boolean;

  constructor(private postService: PostService){
    this.name = 'Swapnil';
    this.email = 'swapnil@gmail.com';
    this.address = {
      street: 'Teplize Schoenauer Strasse 42',
      city: 'Frankfurt am Main',
      state: 'Hessen'
    };
    this.hobbies = ['Music','Cricket','Reading'];
    this.showHobbies = false;
    this.postService.getPosts().subscribe(post =>{
      console.log(post);
    })
  }

  toggleHobbies(){
    if(this.showHobbies == true) {
      this.showHobbies = false;
    }else{
      this.showHobbies = true;
    }
  }

  addHobby(hobby){
    this.hobbies.push(hobby);
  }

  deleteHobby(i){
    this.hobbies.splice(i,1);
  }
}
interface address {
  street: string;
  city: string;
  state:string;
}