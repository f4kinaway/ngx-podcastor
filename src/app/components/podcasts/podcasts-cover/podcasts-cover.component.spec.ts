/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PodcastsCoverComponent } from './podcasts-cover.component';

describe('PodcastsCoverComponent', () => {
  let component: PodcastsCoverComponent;
  let fixture: ComponentFixture<PodcastsCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastsCoverComponent ]
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
