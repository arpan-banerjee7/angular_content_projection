import { Component, OnInit, Input, TemplateRef } from "@angular/core";

@Component({
  selector: "app-expansion-template",
  templateUrl: "./expansion-template.component.html",
  styleUrls: ["./expansion-template.component.css"],
})
export class ExpansionTemplateComponent implements OnInit {
  @Input() content: TemplateRef<any>;
  @Input() footer: TemplateRef<any>;
  @Input() isHidden: string;
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
