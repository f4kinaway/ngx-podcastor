import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PlayerComponent } from './player.component';
import { PodcastService } from 'src/app/services/podcast.service';
import { IdbService } from 'src/app/services/idb.service';
import { MockIdbService } from '../../../../mocks/services/mock.idb.service';
import { MockPodcastService } from '../../../../mocks/services/mock.podcast.service';
import { MockActivatedRoute } from 'mocks/services/mock.activated-route.service';
import { MockRouter } from 'mocks/services/mock.router.service';


describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerComponent ],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        { provide: PodcastService, useClass: MockPodcastService },
        { provide: Router, useClass: MockRouter },
        { provide: IdbService, useClass: MockIdbService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
