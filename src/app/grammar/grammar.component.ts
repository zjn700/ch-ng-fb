import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.scss']
})
export class GrammarComponent implements OnInit {
vocab = [
    {"word":"tindog",
    "meaning": "stand up"},
    {"word":"pungko",
    "meaning": "sit down"},
    {"word":"buligi ko bi",
    "meaning": "help me please"},
    {"word":"gai ko bi",
    "meaning": "give me some, please"},
    {"word":"tindog",
    "meaning": "stand up"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
