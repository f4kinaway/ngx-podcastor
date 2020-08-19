import { Observable, of } from 'rxjs';

export class MockHttpClient {
  public get<T>(): Observable<T> { return of(); }
}
