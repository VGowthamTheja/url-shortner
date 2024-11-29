import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlPasteComponent } from './url-paste.component';

describe('UrlPasteComponent', () => {
  let component: UrlPasteComponent;
  let fixture: ComponentFixture<UrlPasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlPasteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlPasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
