import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { PodcastsComponent } from './podcasts.component';
import { PodcastsService } from 'src/app/services/podcasts.service';
import { MockPodcastsService } from '../../../../mocks/services/mock.podcasts.service';

describe('PodcastsComponent', () => {
  let component: PodcastsComponent;
  let fixture: ComponentFixture<PodcastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastsComponent ],
      providers: [
        { provide: PodcastsService, useClass: MockPodcastsService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
