import { Component } from '@angular/core';
import { NgFor } from '@angular/common'
@Component({
  selector: 'app-undoable-counter',
  standalone: true,
  imports: [NgFor],
  templateUrl: './undoable-counter.component.html',
  styleUrl: './undoable-counter.component.css'
})
export class UndoableCounterComponent {
  counter: number = 0;
  history: string[] = [];

  undoStack: number[] = [];
  redoStack: number[] = [];
  
  modifyCounter(amount: number) {
    const before = this.counter;
    const sign = amount > 0 ? '+' : '';
    this.counter += amount;

    this.undoStack.push(amount);
    this.history.push(`${sign}${amount} (${before} -> ${this.counter})`);
  }

  undo() {
    const amount = this.undoStack.pop()!;

    this.counter += (amount * -1);

    if(this.redoStack.length > 50) {
      console.log('prev arr: ', this.redoStack)
      this.redoStack.splice(0, 1);
      console.log('new arr: ', this.redoStack)
    }
    this.redoStack.push(amount);
    this.history.pop();
  }

  redo() {
    this.modifyCounter(this.redoStack.pop()!);
  }
}
