import { Component } from '@angular/core';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent {
  title = 'ITApp';
  isFormOpen: boolean = false;
  showPassword = false;
  model: any;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
