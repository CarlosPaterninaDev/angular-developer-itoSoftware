import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.class';

const carlos = {
  id: 0,
  email: 'carlos@carlos.com',
  active: 'true',
  firstName: 'Carlos',
  lastName: 'Paternina',
  user: 'Carlitos',
};

@Injectable({
  providedIn: 'root',
})
export class UserService {

  @Output() searchUser: EventEmitter<any> = new EventEmitter<any>();

  private usersSubject = new BehaviorSubject<User[]>([new User(carlos)]);
  users$ = this.usersSubject.asObservable();

  constructor() {}

  createNewUser(user: User) {
    this.usersSubject.next([...this.usersSubject.getValue(), user]);

    console.log(this.usersSubject.getValue());
  }

  updateUser(userEdit: User) {
    let users = this.usersSubject.getValue();
    const indexUser = users.findIndex((user) => user.id === userEdit.id);
    users.splice(indexUser, 1, userEdit);
    this.usersSubject.next([...users]);
  }


  filterUserData(array: any[], text: string, column: string){

      if (text === '') {
        return array;
      }
  
      text = text.toLowerCase();
  
      const newArray = array.filter((item) => {
        return item[column].toLowerCase().includes(text);
      });

  
      return newArray;
    }
  
}
