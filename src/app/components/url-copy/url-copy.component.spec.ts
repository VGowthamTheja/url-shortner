import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlCopyComponent } from './url-copy.component';

describe('UrlCopyComponent', () => {
  let component: UrlCopyComponent;
  let fixture: ComponentFixture<UrlCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlCopyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
