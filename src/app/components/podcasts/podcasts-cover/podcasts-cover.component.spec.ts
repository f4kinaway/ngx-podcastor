import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { PodcastsCoverComponent } from './podcasts-cover.component';

describe('PodcastsCoverComponent', () => {
  let component: PodcastsCoverComponent;
  let fixture: ComponentFixture<PodcastsCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastsCoverComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastsCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
