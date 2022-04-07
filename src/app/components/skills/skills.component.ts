import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  skills = [{
    skillname: "HTML",
    skillvalue: "100%",
  },
  {
    skillname: "CSS",
    skillvalue: "95%",
  },
  {
    skillname: "JAVASCRIPT",
    skillvalue: "90%",
  },
  {
    skillname: "JAVA",
    skillvalue: "80%",
  },
  {
    skillname: "ANGULAR",
    skillvalue: "75%",
  },
  {
    skillname: "BOOTSTRAP",
    skillvalue: "65%",
  },
  {
    skillname: "REACT",
    skillvalue: "50%",
  },
  {
    skillname: "VUE",
    skillvalue: "30%",
  },
]

}
