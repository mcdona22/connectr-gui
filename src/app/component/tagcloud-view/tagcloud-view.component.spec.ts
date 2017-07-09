import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagcloudViewComponent } from './tagcloud-view.component';

describe('TagcloudViewComponent', () => {
  let component: TagcloudViewComponent;
  let fixture: ComponentFixture<TagcloudViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagcloudViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagcloudViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
