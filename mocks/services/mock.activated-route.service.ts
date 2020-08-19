import { BehaviorSubject } from 'rxjs';

export class MockActivatedRoute {
  public queryParamMap = new BehaviorSubject({ get: () => 0 });
}
