
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService{

  constructor() { }

  createDb() {
    let tasks = [
        {id: 1, title: 'meeting', date:"2023-03-03", hour: "T12", minute: ":20", description: "zoom" },
        {id: 2, title: 'meeting', date:"2023-03-20",hour: "T16", minute: ":10", description: "zoom" },
        {id: 3, title: 'walk', date:"2023-03-06", hour: "T14", minute: ":30", description: "zoom" },
        {id: 4, title: 'yoga', date:"2023-03-07", hour: "T10", minute: ":45", description: "zoom" },
        {id: 5, title: 'meeting', date:"2023-03-15", hour: "T18", minute: ":30", description: "zoom" },
    ];
    let hours = [
        {id: 1, time: "T01"},
        {id: 2, time: "T02"},
        {id: 3, time: "T03"},
        {id: 4, time: "T04"},
        {id: 5, time: "T05"},
        {id: 6, time: "T06"},
        {id: 7, time: "T07"},
        {id: 8, time: "T08"},
        {id: 9, time: "T09"},
        {id: 10, time: "T10"},
        {id: 11, time: "T11"},
        {id: 12, time: "T12"},
        {id: 13, time: "T13"},
        {id: 14, time: "T14"},
        {id: 15, time: "T15"},
        {id: 16, time: "T16"},
        {id: 17, time: "T17"},
        {id: 18, time: "T18"},
        {id: 19, time: "T19"},
        {id: 20, time: "T20"},
        {id: 21, time: "T21"},
        {id: 22, time: "T22"},
        {id: 23, time: "T23"},
        {id: 24, time: "T24"},
      ];
    return { tasks, hours }
}
}
// Array.from({ length: 24 }, (_, i) => ({ time: `'T+0${i}` }));