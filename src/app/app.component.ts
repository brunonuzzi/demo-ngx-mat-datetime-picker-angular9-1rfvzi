import { HttpClient } from "@angular/common/http";
import { Component, NgZone, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ThemePalette } from "@angular/material/core";
import * as _moment from "moment";
// tslint:disable-next-line:no-duplicate-imports
import {
  default as _rollupMoment,
  Moment,
  MomentFormatSpecification,
  MomentInput
} from "moment";
const moment = _rollupMoment || _moment;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @ViewChild("picker") picker: any;

  public date: moment.Moment;
  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = "primary";

  public formGroup = new FormGroup({
    date: new FormControl(
      moment()
        .utc()
        .utcOffset(5),
      [Validators.required]
    ),
    date2: new FormControl(null, [Validators.required])
  });
  public dateControl = new FormControl(moment());

  constructor(private http: HttpClient, private zone: NgZone) {}

  ngOnInit() {
    this.date = moment();
  }

  closePicker() {
    this.picker.cancel();
  }
}
