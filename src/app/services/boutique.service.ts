import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {
  private apiUrl = 'http://localhost:8081/api/boutiques'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  saveOrUpdate(boutique: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/createBoutique`, boutique);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  getAllProduitsFromBoutique(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/produit`);
  }
}
