import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ch-ng-fb';
  profile:boolean=false;
  
  constructor(private router:Router) {}

  toggleProfile() {
    console.log("profile", this.profile);
    if(this.profile) {
        this.router.navigate(['/vocabulary']);
    } else {
        this.router.navigate([`/profile`]);
    }
    this.profile = !this.profile;
    console.log("profile after", this.profile);

  }
  goToHome() {
    if (this.profile) {
      console.log("profile", this.profile);
          this.router.navigate([`/vocabulary`]);
      this.profile = false;
      console.log("profile after", this.profile);
    }

  }
  goToProfile() {
    if (!this.profile) {
        console.log("profile", this.profile);
          this.router.navigate([`/profile`]);
      this.profile = true;
      console.log("profile after", this.profile);
    }

  }
}
