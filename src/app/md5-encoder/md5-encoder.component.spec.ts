import { ComponentFixture, TestBed } from '@angular/core/testing';

import { md5EncodeComponent } from './md5-encoder.component';

describe('Md5EncoderComponent', () => {
  let component: md5EncodeComponent;
  let fixture: ComponentFixture<md5EncodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ md5EncodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(md5EncodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
