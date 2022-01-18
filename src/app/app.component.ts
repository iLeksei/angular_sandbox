import { Component } from '@angular/core';
import {HttpLoggerInterceptorService} from "./services/http-logger-interceptor.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sandbox';
}
