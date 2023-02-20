import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DataSourceFeaturesService } from './data-source-features.service';

describe('DataSourceFeaturesService', () => {
  let service: DataSourceFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataSourceFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
