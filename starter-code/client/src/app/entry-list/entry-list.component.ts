import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from 'services/journal-entries.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  constructor(public entryService: JournalEntriesService) { }
  
  entries: any;

  ngOnInit() {
    this.entryService.getAll().subscribe(data=> this.entries = data)
  }

}
