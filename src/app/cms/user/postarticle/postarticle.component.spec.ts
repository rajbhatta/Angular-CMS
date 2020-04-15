import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostarticleComponent } from './postarticle.component';

describe('PostarticleComponent', () => {
  let component: PostarticleComponent;
  let fixture: ComponentFixture<PostarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
