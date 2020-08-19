import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PodcastComponent } from './podcast.component';
import { PodcastService } from 'src/app/services/podcast.service';
import { MockPodcastService } from '../../../../mocks/services/mock.podcast.service';
import { MockActivatedRoute } from '../../../../mocks/services/mock.activated-route.service';

describe('PodcastComponent', () => {
  let component: PodcastComponent;
  let fixture: ComponentFixture<PodcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastComponent ],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        { provide: PodcastService, useClass: MockPodcastService },
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
