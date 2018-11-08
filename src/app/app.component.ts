import { Component } from "@angular/core";

// component decorator
@Component({
  selector: "app-root", //unique name to reference component
  templateUrl: "./app.component.html", //templating (can do inline html)
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ng7";
}
