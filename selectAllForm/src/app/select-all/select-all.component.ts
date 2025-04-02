import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-all',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './select-all.component.html',
  styleUrl: './select-all.component.css'
})
export class SelectAllComponent implements OnInit {
  itemlist: string[] = [
    'Changjinhu (2021)',
    'Dune (2021)',
    'Shang-Chi and the Legend of the Ten Rings (2021)',
    'Free Guy (2021)',
    'The Many Saints of Newark (2021)',
    'Finch (2021)',
    'Candyman (2021)',
    'No Time to Die (2021)',
    'Halloween Kills (2021)',
  ];

  checkedList: string[] = [];

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.fb.group({
      selectAll: [false],
    })

    for (const title of this.itemlist) {
      this.form.addControl(title, new FormControl(false));
    }
  }

  selectAll() {
    const checked = this.form.get('selectAll')?.value;
    for (let title of this.itemlist) {
      this.form.get(title)?.setValue(checked);
    }
    this.checkedList = checked ? [...this.itemlist] : [];
  }

  clearAll() {
    this.form.get('selectAll')?.setValue(false);
    for (let title of this.itemlist) {
      this.form.get(title)?.setValue(false);
    }
    this.checkedList = [];
  }

  select() {
    this.checkedList = this.itemlist.filter(title => this.form.get(title)?.value);

    const allChecked = this.checkedList.length === this.itemlist.length;
    this.form.get('selectAll')?.setValue(allChecked);
  }
}

