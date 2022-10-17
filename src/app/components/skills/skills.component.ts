import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(
    private darkModeService: DarkModeService
  ) { }


  ngOnInit(): void {
  }
  
  get darkMode(){
    return this.darkModeService.darkMode;
  }
  
  skills = [{
    skillname: "HTML",
    skillvalue: "85%",
  },
  {
    skillname: "CSS",
    skillvalue: "80%",
  },
  {
    skillname: "JAVASCRIPT",
    skillvalue: "70%",
  },
  {
    skillname: "ANGULAR",
    skillvalue: "75%",
  },
  {
    skillname: "PROBLEM SOLVING",
    skillvalue: "90%",
  },
  {
    skillname: "VERSION CONTROL / GIT",
    skillvalue: "80%",
  },
  {
    skillname: "RESPONSIVE WEB",
    skillvalue: "75%",
  },
  {
    skillname: "OTHER FRAMEWORKS AND LIBRARIES",
    skillvalue: "70%",
  },
]

}
