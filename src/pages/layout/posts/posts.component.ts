import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  show = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openForm(): void {
    document.getElementById("myForm").style.display = "block";
  }

  closeForm(): void {
    document.getElementById("myForm").style.display = "none";
  }

  showCheckboxes() {
    let checkboxes = document.getElementById("checkBoxes");

    if (this.show) {
      checkboxes.style.display = "block";
      this.show = false;
    } else {
      checkboxes.style.display = "none";
      this.show = true;
    }
  }

  industry(event): void {
    // console.log(event);
    const id = event;
    // if (id === "first") {
    //   document.getElementById("industry").innerHTML = `Construction Industry`
    // }
    // else if (id === "second") {
    //   document.getElementById("industry").innerHTML = `Medical Industry`
    // }
    // else if (id === "third") {
    //   document.getElementById("industry").innerHTML = `IT Industry`
    // }
    // else if(id === "first" && id === "second"){
    //   document.getElementById("industry").innerHTML = `Construction Industry,Medical Industry`
    // }
  }

  signout() {
    localStorage.removeItem('authtoken');
    this.router.navigate(['', 'signin']);
  }

}
