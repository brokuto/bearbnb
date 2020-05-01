import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss']
})
export class ObjectsComponent implements OnInit {

  items: Observable<any[]>;

  modalId;
  openModal;

  constructor(
    firestore: AngularFirestore
  ) {
    this.items = firestore.collection('items').valueChanges();
  }

  ngOnInit() {
    this.openModal = false;
  }


  getId(id: number) {
    this.openModal = true;
    this.modalId = id;
  }


}
