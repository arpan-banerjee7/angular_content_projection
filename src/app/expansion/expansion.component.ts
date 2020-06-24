import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-expansion",
  templateUrl: "./expansion.component.html",
  styleUrls: ["./expansion.component.css"],
})
export class ExpansionComponent implements OnInit {
  @Input() title: string;
  @Input() isHidden: string;

  constructor() {}

  ngOnInit() {
    console.log(this.title);
    console.log(this.isHidden);
  }
  onClicked() {
    console.log("clicked");
  }
}
