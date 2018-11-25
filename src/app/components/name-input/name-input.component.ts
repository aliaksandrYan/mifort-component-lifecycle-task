import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss']
})
export class NameInputComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  name = '';
  skills = ['Skill 1', 'Skill 2', 'Skill 3'];
  total: number;
  constructor() {
    this.total = 0;
  }

  ngOnInit() {
    console.log('onInit');
  }
  ngOnChanges() {
    console.log('onChanges');
  }
  ngDoCheck() {
    console.log('DoCheck');
  }
  ngAfterContentInit() {
    console.log('After Content Init');
  }
  ngAfterContentChecked() {
    console.log('After Content Checked');
  }
  ngAfterViewInit() {
    console.log('After View Init');
  }
  ngAfterViewChecked() {
    console.log('After View Checked');
  }
  ngOnDestroy() {
    console.log('On Destroy');
  }
  onClicked(clicked: boolean) {
    if (clicked) {
      this.total++;
    } else {
      this.total--;
    }

  }
}
