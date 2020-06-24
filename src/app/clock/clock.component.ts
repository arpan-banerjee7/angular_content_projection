import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-clock",
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.css"],
})
export class ClockComponent implements OnInit, OnDestroy {
  currentTime;
  constructor() {}

  ngOnInit() {
    console.log("Clock onInit called");
    const date = Date.now();
    this.currentTime = date;
    console.log(date);
  }
  ngOnDestroy(): void {
    console.log("Clock onDestroy called");
  }
}
