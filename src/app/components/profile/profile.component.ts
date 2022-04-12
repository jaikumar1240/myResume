import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private darkModeService: DarkModeService) { }
  ngOnInit(): void {
  }
  get darkMode(){
    return this.darkModeService.darkMode;
  }

}
