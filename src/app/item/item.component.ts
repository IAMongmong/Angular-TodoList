import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "../item";
import { NgFor, CommonModule } from "@angular/common";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  standalone: true,
  imports: [NgFor, CommonModule]
})


export class ItemComponent {

  editable = false;

  @Input()
  item!: Item;
  @Input()
  newItem!: string;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }
}
