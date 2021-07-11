import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DataService } from '../data.service';
import { UserService } from '../user.service';

import { UserComponent } from './user.component';



/*

// Unit-Testing ==> AAA

    -Arrange
    -Act
    -Assert


*/

describe('UserComponent', () => {

  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent); // <app-user></app-user>
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it("should use the user name from the service", () => {
    let userService = fixture.debugElement.injector.get(UserService);
    expect(userService.user.name).toEqual(component.user.name)
  })


  it("should display the user name if user is logged in", () => {
    let userService = fixture.debugElement.injector.get(UserService);
    let nativeElement = fixture.debugElement.nativeNode
    component.isLoggedIn = true;
    fixture.detectChanges()
    expect(nativeElement.querySelector('p').textContent).toContain(component.user.name)
  })


  it("should not display the user name if user is not logged in", () => {
    let userService = fixture.debugElement.injector.get(UserService);
    let nativeElement = fixture.debugElement.nativeNode
    expect(nativeElement.querySelector('p').textContent).not.toContain(component.user.name)
  })


  it("should fetch data successfully if called async", async(() => {

    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, "getDetails").and.returnValue(Promise.resolve("DATA"))
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.data).toBe("DATA")
    })

  }))



});
