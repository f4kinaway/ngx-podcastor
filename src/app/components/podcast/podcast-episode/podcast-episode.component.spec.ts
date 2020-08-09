/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PodcastEpisodeComponent } from './podcast-episode.component';

describe('PodcastEpisodeComponent', () => {
  let component: PodcastEpisodeComponent;
  let fixture: ComponentFixture<PodcastEpisodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastEpisodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
