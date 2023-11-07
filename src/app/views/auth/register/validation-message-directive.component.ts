import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appValidationMessage]'
})
export class ValidationMessageDirective implements OnInit {
  @Input() errorType: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2, private control: NgControl) { }

  ngOnInit() {
    if(this.control && this.control.statusChanges){
      this.control.statusChanges.subscribe(() => {
        this.renderer.setProperty(this.el.nativeElement, 'innerText', this.getErrorMessage());
        this.renderer.setStyle(this.el.nativeElement, 'color', this.getErrorColor());
      });
    }
  }

  private getErrorMessage(): string {
    if (this.errorType === 'passwordLengthError') {
      return this.control.hasError('minLength') ? 'A senha deve conter pelo menos 8 caracteres.' : '';
    }
    if (this.errorType === 'passwordFormatError') {
      return this.control.hasError('uppercaseLetter') || this.control.hasError('lowercaseLetter') || this.control.hasError('specialCharacter') ?
        'Use uma combinação de letras, números e caracteres especiais.' : '';
    }
    return '';
  }

  private getErrorColor(): string {
    return this.control.hasError(this.errorType) ? 'gray' : 'green';
  }
}
