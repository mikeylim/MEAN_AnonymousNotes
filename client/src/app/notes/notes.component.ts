import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms/src/model';
import { Validators } from '@angular/forms/src/validators';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  note: object;
  notes: Array<object>;
  noteForm;
  
  constructor(private _mainService: MainService, private _router: Router) { 
    this.note = { content: "" };
    this._mainService.noteData.subscribe((notes) => { this.notes = notes; })
  }

  submit(){
    console.log("this.note ",this.note);
    this._mainService.submit(this.note, (data)=>{
    })
    this._mainService.getAllNotes();
    this.note["content"] = "";
  }

  ngOnInit() {
    this._mainService.getAllNotes();
    // this.noteForm = new FormGroup({
    //   'content': new FormControl(this.note["content"], [
    //     Validators.required,
    //     Validators.minLength(3)
    //   ])
    // })
  }

  get name() { 
    return this.noteForm.get('name'); 
  }


}
