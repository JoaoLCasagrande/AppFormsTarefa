/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Usuario } from '../cadastro/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  set(cpf: string, usuario: Usuario) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
