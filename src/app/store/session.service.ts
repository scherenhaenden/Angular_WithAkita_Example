import { Injectable } from '@angular/core';
import { SessionStore } from './session-store';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private sessionStore: SessionStore,
    private http: HttpClient) {}

    async updateUserName(newName: string) {
      this.sessionStore.setLoading(true);
      //await this.http.get("someplace").toPromise();
      this.sessionStore.update({ name: newName});
      this.sessionStore.setLoading(false);
  }
}
