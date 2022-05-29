import { TestBed } from '@angular/core/testing';

import { LocalUserGroupsDataBrokerService } from './local-user-groups-data-broker.service';

describe('LocalUserGroupsDataBrokerService', () => {
  let service: LocalUserGroupsDataBrokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalUserGroupsDataBrokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
