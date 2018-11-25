import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {
  @Input () name: string;
  @Input () skillItem: string;
  skillCount: number;
  @Output() isClicked = new EventEmitter<boolean>();
  constructor() {
    this.skillCount = 0;
  }
  skillIncrement() {
    this.skillCount++;
    this.isClicked.emit(true);
  }
  skillDecrement() {
    this.skillCount--;
    this.isClicked.emit(false);
  }
  ngOnInit() {
  }
}
