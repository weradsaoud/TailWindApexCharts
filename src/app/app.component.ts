import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TailwindApex';

  btnClasses = {
    'border-4': false,
    'border-blue-500': false
  };
  btnnClasses = {
    'border-4': false,
    'border-blue-500': false
  };
  spanClasses = {
    'bg-white': false,
    'text-orange-500': false
  };
  onBtnClick() {
    this.btnClasses = {
      'border-4': true,
      'border-blue-500': true
    }
  };

  onFocusOut(event: FocusEvent) {
    this.btnClasses = {
      'border-4': false,
      'border-blue-500': false
    }
  };

  onMouseEnter() {
    this.spanClasses = {
      'bg-white': true,
      'text-orange-500': true
    };
  };

  onMouseLeave() {
    this.spanClasses = {
      'bg-white': false,
      'text-orange-500': false
    };
  }

  onBtnnClick() {
    this.btnnClasses = {
      'border-4': true,
      'border-blue-500': true
    };
  }
  onnFocusOut() {
    this.btnnClasses = {
      'border-4': false,
      'border-blue-500': false
    };
  }
}
