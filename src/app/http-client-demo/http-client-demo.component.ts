import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {debounce, debounceTime, delay, interval, Observable, retry, switchMap, tap, timeout, timer} from "rxjs";
import {DateTime} from "luxon";

interface Task {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-http-client-demo',
  templateUrl: './http-client-demo.component.html',
  styleUrls: ['./http-client-demo.component.css']
})
export class HttpClientDemoComponent implements OnInit {

  private url: string = "https://jsonplaceholder.typicode.com/todos/1";
  private task$!: Task;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  fetchData() {
    const options = { headers: new HttpHeaders({'Content-Type':  'application/json',}), };
    let artificialDelay = DateTime.now();
    artificialDelay = artificialDelay.set({second: artificialDelay.second + 3})
    this.httpClient.get<Task>(this.url)
      .pipe(
        delay(artificialDelay.toJSDate()),
        // tap(data => {timer(1000); return data}),
        retry(3),
        tap( data => console.log(JSON.stringify(data)))
      ).subscribe( (data) => this.task$ = data)
  }
}
