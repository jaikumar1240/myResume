import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(
    private darkModeService: DarkModeService
  ) { }

  ngOnInit(): void {
  }

  get darkMode(){
    return this.darkModeService.darkMode;
  }

}
