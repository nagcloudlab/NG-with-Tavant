import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';

  token: any = "";

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      console.log("running browser..");
      let token = localStorage.getItem("token")
      if (!token) {
        localStorage.setItem("token", "dfghjkl3456789czvcbczx8rt9yu");
        this.token = "dfghjkl3456789czvcbczx8rt9yu"
      }
      this.token = token
    }
  }

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }


}
