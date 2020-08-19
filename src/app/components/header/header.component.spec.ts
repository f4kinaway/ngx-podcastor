import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';

import { HeaderComponent } from './header.component';
import { PodcastsService } from '../../services/podcasts.service';
import { MockPodcastsService } from '../../../../mocks/services/mock.podcasts.service';
import { MockHttpClient } from '../../../../mocks/services/mock.http.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatMenuModule ],
      declarations: [ HeaderComponent ],
      providers: [
        { provide: HttpClient, useClass: MockHttpClient },
        { provide: PodcastsService, useClass: MockPodcastsService },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
