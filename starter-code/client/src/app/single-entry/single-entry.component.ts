import { Component, OnInit } from "@angular/core";
import { JournalEntriesService } from "services/journal-entries.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-single-entry",
  templateUrl: "./single-entry.component.html",
  styleUrls: ["./single-entry.component.css"]
})
export class SingleEntryComponent implements OnInit {
  id: string;
  entry: any;

  constructor(
    public entryService: JournalEntriesService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.entryService.getById(this.id).subscribe(data => {
        this.entry = data
      })
    });
  }
}
