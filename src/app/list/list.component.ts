import { Component, Input } from '@angular/core';
import { LucideAngularModule, Check } from 'lucide-angular'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  constructor(){
    console.log(this.checkClass);
  }
  readonly icons = { Check }
  checked = false
  @Input({required: true}) list?: string
  checkClass = this.checked ? "w-6 aspect-square border rounded-full mr-4 border-myDarkBlue-300 flex justify-center items-center myCheck" : "w-6 aspect-square border rounded-full mr-4 border-myDarkBlue-300 flex justify-center items-center"

  clickHandler = () => {
    this.checked = !this.checked
  }
}
