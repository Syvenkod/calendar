
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService{

  constructor() { }

  createDb() {
    let tasks = [
        {id: 1, title: 'meeting', time: "2023-03-03T12:01", description: "zoom" },
        {id: 2, title: 'meeting', time: "2023-03-04T12:01", description: "zoom" },
        {id: 3, title: 'meeting', time: "2023-03-05T12:01", description: "zoom" },
        {id: 4, title: 'meeting', time: "2023-03-06T12:01", description: "zoom" },
        {id: 5, title: 'meeting', time: "2023-03-07T12:01", description: "zoom" },
    ];
    return { tasks }
}
}
