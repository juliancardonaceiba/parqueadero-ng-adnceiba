import { Component, OnInit } from '@angular/core';
import { TrmService } from '../../../services/trm.service';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-trm',
  templateUrl: './trm.component.html',
  styleUrls: ['./trm.component.scss']
})
export class TrmComponent implements OnInit {

  private trm;

  constructor(private trmService: TrmService) { }

  ngOnInit() {
    Observable.interval(600000).subscribe(t => { this.consultarTRM() });
    this.consultarTRM();
  }

  private consultarTRM() {
    this.trmService.consultarTRM().subscribe(data => {
      this.trm = data;
    });
  }

}
