import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss']
})
export class ObjectsComponent implements OnInit {

  items: Observable<any[]>;
  rentForm: FormGroup;

  modalId;
  openModal;
  openRentModal;

  rentDate: Date;
  fromDate: Date;
  toDate: Date;

  constructor(
    firestore: AngularFirestore,
    private fb: FormBuilder
  ) {
    this.items = firestore.collection('items').valueChanges();
    this.createForm();
  }

  ngOnInit() {
    this.openModal = false;
    this.openRentModal = false;
  }

  createForm() {
    this.rentForm = this.fb.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required]
    });
  }


  getId(id: number) {
    this.openModal = true;
    this.modalId = id;
  }

  rentModal(id: number) {
    this.openRentModal = true;
  }

  rent(fromDate: Date, toDate: Date) {
    this.fromDate = fromDate;
    this.toDate = toDate;

    this.openRentModal = false;
  }


}
