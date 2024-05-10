import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = 'http://localhost:8081'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  save(dto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/utilisateur`, dto);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/utilisateur/${id}`);
  }

  findAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/utilisateur`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/utilisateur/${id}`);
  }

  findByEmail(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/utilisateur/email/${email}`);
  }
}
