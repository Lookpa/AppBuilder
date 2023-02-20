import { Component, OnInit } from '@angular/core';
import { DataSourceFeaturesService } from '../services/data-source-features.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  public dataSourceFeaturesFeatures: any = null;

  constructor(
    private dataSourceFeaturesService: DataSourceFeaturesService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dataSourceFeaturesService.getFeatures().subscribe(data => this.dataSourceFeaturesFeatures = data);
  }
}
