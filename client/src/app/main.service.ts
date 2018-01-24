import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class MainService {
  notesArray: Array<object>;
  noteData: BehaviorSubject<any[]> = new BehaviorSubject([]); 

  constructor(private _http: Http) { 
    this.notesArray = [];
  }

  submit(note, cb){
    console.log("note ", note);
    this._http.post('/submit', note).subscribe((res)=>{
      console.log("cameback from server");
      console.log("res.json() ", res.json());
      this.notesArray.push(res.json());
      this.noteData.next(this.notesArray);
    })
  }

  getAllNotes(){
    this._http.get('/getAllNotes').subscribe((res)=>{
      this.notesArray = res.json();
      this.noteData.next(this.notesArray);
    })
  }
}