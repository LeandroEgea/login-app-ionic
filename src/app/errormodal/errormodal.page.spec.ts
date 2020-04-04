import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrormodalPage } from './errormodal.page';

describe('ErrormodalPage', () => {
  let component: ErrormodalPage;
  let fixture: ComponentFixture<ErrormodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrormodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrormodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
