import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from 'services/journal-entries.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry-form-component',
  templateUrl: './entry-form-component.component.html',
  styleUrls: ['./entry-form-component.component.css']
})
export class EntryFormComponentComponent implements OnInit {

  constructor(public entryService: JournalEntriesService, public router: Router) { }

  ngOnInit() {
  }
  submitForm(title:string, content:string){
    this.entryService.addEntry(title,content).subscribe(()=>{
      this.router.navigate(['/'])
    })
  }
}
