import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController, Platform, ToastController } from '@ionic/angular';
import { ImplUserGroupsDataBroker, UserGroup, UserGroupsDataBrokerConfig,
  UserGroupsDataBrokerEvent } from 'ionic-ng-user-groups-ui';

import { CRUD } from 'app-base-lib';
import { ListDataBrokerLoadOneOptions } from 'app-base-lib';
import { ListDataBrokerResult } from 'app-base-lib';
import { ListDataBrokerLoadOptions } from 'app-base-lib';
import { timer } from 'rxjs';
import { first } from 'rxjs/operators';

import { config } from '../../config';

const PER_PAGE = 5;

@Injectable({
  providedIn: 'root'
})
export class LocalUserGroupsDataBrokerService extends ImplUserGroupsDataBroker {

  userGroupConfig: UserGroupsDataBrokerConfig;
  constructor( platform: Platform, alertCtrl: AlertController, http: HttpClient ,
     toastCtrl: ToastController,loadingCtrl: LoadingController ) {
    // super(platform as any, http as any, toastCtrl as any, alertCtrl as any, loadingCtrl as any,{perPage:PER_PAGE,append:false});
    super(platform as any, http as any, toastCtrl as any, loadingCtrl as any, {perPage:PER_PAGE,append:false}, alertCtrl as any);
    this.setConfig(config);
    this.setStorageData();
  }

  async setStorageData(){
    await this.saveStore([
      {
          id: '358ydlhslh284hsksl84258',
          title: 'Mili Study Group',
          userTime: new Date(),
          description: 'this study is created to enhance better reading and study time',
          users: [
              {
                  id: 'ksoiw43582hlh58420ndf',
                  name: 'Ozor Michael C',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
              {
                  id: 'ksoiw43582hlh58420ncx',
                  name: 'Anah Victor',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
          ],
          stats: [
              {
                  id:'ksoiw43582hlh58450ncx',
                  title: 'Users',
                  total: 2,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id:'ksoiw43582hlh57450ncx',
                  title: 'Books',
                  total: 12,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id:'ksoiw43582hlh98450ncx',
                  title: 'Links',
                  total: 5,
                  ionicIcon: {
                    name: 'add'
                }
              },
          ]
      },
      {
          id: '358ydlhslh284hsksl84250',
          title: 'Elite Study Group',
          userTime: new Date(),
          description: 'this study is created to enhance better reading and study time',
          users: [
              {
                  id: 'ksoiw43582hlh58420ndf',
                  name: 'Ozor Michael C',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
              {
                  id: 'ksoiw43582hlh58420ncx',
                  name: 'Anah Victor',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
          ],
          stats: [
              {
                  id:'ksoiw43582hlh58450ncx',
                  title: 'Users',
                  total: 2,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id:'ksoiw43582hlh57450ncx',
                  title: 'Books',
                  total: 12,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id:'ksoiw43582hlh98450ncx',
                  title: 'Links',
                  total: 5,
                  ionicIcon: {
                    name: 'add'
                }
              },
          ]
      },
      {
          id: '358ydlhslh284hsksl84259',
          title: 'Investors Group',
          userTime: new Date(),
          description: 'this study is created to enhance better reading and study time',
          users: [
              {
                  id: 'ksoiw43582hlh58420ndf',
                  name: 'Ozor Michael C',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
              {
                  id: 'ksoiw43582hlh58420ncx',
                  name: 'Anah Victor',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
          ],
          stats: [
              {
                  id:'ksoiw43582hlh58450ncx',
                  title: 'Users',
                  total: 2,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id: Date.now(),
                  title: 'Books',
                  total: 12,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id: Date.now,
                  title: 'Links',
                  total: 5,
                  ionicIcon: {
                    name: 'add'
                }
              },
          ]
      },
      {
          id: '358ydlhslh284hsksl84258',
          title: 'Mili Study Group',
          userTime: new Date(),
          description: 'this study is created to enhance better reading and study time',
          users: [
              {
                  id: 'ksoiw43582hlh58420ndf',
                  name: 'Ozor Michael C',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
              {
                  id: 'ksoiw43582hlh58420ncx',
                  name: 'Anah Victor',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
          ],
          stats: [
              {
                  id:'ksoiw43582hlh58450ncx',
                  title: 'Users',
                  total: 2,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id:'ksoiw43582hlh57450ncx',
                  title: 'Books',
                  total: 12,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id:'ksoiw43582hlh98450ncx',
                  title: 'Links',
                  total: 5,
                  ionicIcon: {
                    name: 'add'
                }
              },
          ]
      },
      {
          id: '358ydlhslh284hsksl84250',
          title: 'Elite Study Group',
          userTime: new Date(),
          description: 'this study is created to enhance better reading and study time',
          users: [
              {
                  id: 'ksoiw43582hlh58420ndf',
                  name: 'Ozor Michael C',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
              {
                  id: 'ksoiw43582hlh58420ncx',
                  name: 'Anah Victor',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
          ],
          stats: [
              {
                  id:'ksoiw43582hlh58450ncx',
                  title: 'Users',
                  total: 2,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id:'ksoiw43582hlh57450ncx',
                  title: 'Books',
                  total: 12,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id:'ksoiw43582hlh98450ncx',
                  title: 'Links',
                  total: 5,
                  ionicIcon: {
                    name: 'add'
                }
              },
          ]
      },
      {
          id: '358ydlhslh284hsksl84259',
          title: 'Investors Group',
          userTime: new Date(),
          description: 'this study is created to enhance better reading and study time',
          users: [
              {
                  id: 'ksoiw43582hlh58420ndf',
                  name: 'Ozor Michael C',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
              {
                  id: 'ksoiw43582hlh58420ncx',
                  name: 'Anah Victor',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
          ],
          stats: [
              {
                  id:'ksoiw43582hlh58450ncx',
                  title: 'Users',
                  total: 2,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id: Date.now(),
                  title: 'Books',
                  total: 12,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id: Date.now,
                  title: 'Links',
                  total: 5,
                  ionicIcon: {
                    name: 'add'
                }
              },
          ]
      },
      {
          id: '358ydlhslh284hsksl84258',
          title: 'Mili Study Group',
          userTime: new Date(),
          description: 'this study is created to enhance better reading and study time',
          users: [
              {
                  id: 'ksoiw43582hlh58420ndf',
                  name: 'Ozor Michael C',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
              {
                  id: 'ksoiw43582hlh58420ncx',
                  name: 'Anah Victor',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
          ],
          stats: [
              {
                  id:'ksoiw43582hlh58450ncx',
                  title: 'Users',
                  total: 2,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id:'ksoiw43582hlh57450ncx',
                  title: 'Books',
                  total: 12,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id:'ksoiw43582hlh98450ncx',
                  title: 'Links',
                  total: 5,
                  ionicIcon: {
                    name: 'add'
                }
              },
          ]
      },
      {
          id: '358ydlhslh284hsksl84250',
          title: 'Elite Study Group',
          userTime: new Date(),
          description: 'this study is created to enhance better reading and study time',
          users: [
              {
                  id: 'ksoiw43582hlh58420ndf',
                  name: 'Ozor Michael C',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
              {
                  id: 'ksoiw43582hlh58420ncx',
                  name: 'Anah Victor',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
          ],
          stats: [
              {
                  id:'ksoiw43582hlh58450ncx',
                  title: 'Users',
                  total: 2,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id:'ksoiw43582hlh57450ncx',
                  title: 'Books',
                  total: 12,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id:'ksoiw43582hlh98450ncx',
                  title: 'Links',
                  total: 5,
                  ionicIcon: {
                    name: 'add'
                }
              },
          ]
      },
      {
          id: '358ydlhslh284hsksl84259',
          title: 'Investors Group',
          userTime: new Date(),
          description: 'this study is created to enhance better reading and study time',
          users: [
              {
                  id: 'ksoiw43582hlh58420ndf',
                  name: 'Ozor Michael C',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
              {
                  id: 'ksoiw43582hlh58420ncx',
                  name: 'Anah Victor',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
          ],
          stats: [
              {
                  id:'ksoiw43582hlh58450ncx',
                  title: 'Users',
                  total: 2,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id: Date.now(),
                  title: 'Books',
                  total: 12,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id: Date.now,
                  title: 'Links',
                  total: 5,
                  ionicIcon: {
                    name: 'add'
                }
              },
          ]
      },
      {
          id: '358ydlhslh284hsksl84258',
          title: 'Mili Study Group',
          userTime: new Date(),
          description: 'this study is created to enhance better reading and study time',
          users: [
              {
                  id: 'ksoiw43582hlh58420ndf',
                  name: 'Ozor Michael C',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
              {
                  id: 'ksoiw43582hlh58420ncx',
                  name: 'Anah Victor',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
          ],
          stats: [
              {
                  id:'ksoiw43582hlh58450ncx',
                  title: 'Users',
                  total: 2,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id:'ksoiw43582hlh57450ncx',
                  title: 'Books',
                  total: 12,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id:'ksoiw43582hlh98450ncx',
                  title: 'Links',
                  total: 5,
                  ionicIcon: {
                    name: 'add'
                }
              },
          ]
      },
      {
          id: '358ydlhslh284hsksl84250',
          title: 'Elite Study Group',
          userTime: new Date(),
          description: 'this study is created to enhance better reading and study time',
          users: [
              {
                  id: 'ksoiw43582hlh58420ndf',
                  name: 'Ozor Michael C',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
              {
                  id: 'ksoiw43582hlh58420ncx',
                  name: 'Anah Victor',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
          ],
          stats: [
              {
                  id:'ksoiw43582hlh58450ncx',
                  title: 'Users',
                  total: 2,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id:'ksoiw43582hlh57450ncx',
                  title: 'Books',
                  total: 12,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id:'ksoiw43582hlh98450ncx',
                  title: 'Links',
                  total: 5,
                  ionicIcon: {
                    name: 'add'
                }
              },
          ]
      },
      {
          id: '358ydlhslh284hsksl84259',
          title: 'Investors Group',
          userTime: new Date(),
          description: 'this study is created to enhance better reading and study time',
          users: [
              {
                  id: 'ksoiw43582hlh58420ndf',
                  name: 'Ozor Michael C',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
              {
                  id: 'ksoiw43582hlh58420ncx',
                  name: 'Anah Victor',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
          ],
          stats: [
              {
                  id:'ksoiw43582hlh58450ncx',
                  title: 'Users',
                  total: 2,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id: Date.now(),
                  title: 'Books',
                  total: 12,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id: Date.now,
                  title: 'Links',
                  total: 5,
                  ionicIcon: {
                    name: 'add'
                }
              },
          ]
      },
      {
          id: '358ydlhslh284hsksl84258',
          title: 'Mili Study Group',
          userTime: new Date(),
          description: 'this study is created to enhance better reading and study time',
          users: [
              {
                  id: 'ksoiw43582hlh58420ndf',
                  name: 'Ozor Michael C',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
              {
                  id: 'ksoiw43582hlh58420ncx',
                  name: 'Anah Victor',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
          ],
          stats: [
              {
                  id:'ksoiw43582hlh58450ncx',
                  title: 'Users',
                  total: 2,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id:'ksoiw43582hlh57450ncx',
                  title: 'Books',
                  total: 12,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id:'ksoiw43582hlh98450ncx',
                  title: 'Links',
                  total: 5,
                  ionicIcon: {
                    name: 'add'
                }
              },
          ]
      },
      {
          id: '358ydlhslh284hsksl84250',
          title: 'Elite Study Group',
          userTime: new Date(),
          description: 'this study is created to enhance better reading and study time',
          users: [
              {
                  id: 'ksoiw43582hlh58420ndf',
                  name: 'Ozor Michael C',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
              {
                  id: 'ksoiw43582hlh58420ncx',
                  name: 'Anah Victor',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
          ],
          stats: [
              {
                  id:'ksoiw43582hlh58450ncx',
                  title: 'Users',
                  total: 2,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id:'ksoiw43582hlh57450ncx',
                  title: 'Books',
                  total: 12,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id:'ksoiw43582hlh98450ncx',
                  title: 'Links',
                  total: 5,
                  ionicIcon: {
                    name: 'add'
                }
              },
          ]
      },
      {
          id: '358ydlhslh284hsksl84259',
          title: 'Investors Group',
          userTime: new Date(),
          description: 'this study is created to enhance better reading and study time',
          users: [
              {
                  id: 'ksoiw43582hlh58420ndf',
                  name: 'Ozor Michael C',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
              {
                  id: 'ksoiw43582hlh58420ncx',
                  name: 'Anah Victor',
                  avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
              },
          ],
          stats: [
              {
                  id:'ksoiw43582hlh58450ncx',
                  title: 'Users',
                  total: 2,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id: Date.now(),
                  title: 'Books',
                  total: 12,
                  ionicIcon: {
                    name: 'add'
                }
              },
              {
                  id: Date.now,
                  title: 'Links',
                  total: 5,
                  ionicIcon: {
                    name: 'add'
                }
              },
          ]
      },
  ]);
  }
  onExplore(userGroup: UserGroup): any {
    // throw new Error('Method not implemented.');
    // console.log('userGroup =>', userGroup);
    return userGroup;
  }

  async onLastReconcileTimeUpdateNeeded(...userGroups: UserGroup[]): Promise<UserGroup[]> {

    let storeGroups = await this.getStore();

    storeGroups = storeGroups.map( _userGroup => {
      const newUserGroup = userGroups.find( userGroup => userGroup.id === _userGroup.id );
      return newUserGroup || _userGroup;
    });

    await this.saveStore(storeGroups);

    return userGroups.map( _userGroup => {
      const userGroup = {..._userGroup};
      userGroup.userTime = new Date();
      return userGroup;
    });
  }

  setConfig(configuration: UserGroupsDataBrokerConfig): void {
    this.userGroupConfig = configuration;
  }

  getConfig(): UserGroupsDataBrokerConfig {
    return this.userGroupConfig;
  }

  async onCRUD(crudType: CRUD, userGroup?: UserGroup): Promise<UserGroup>{

    let userGroups = await this.getStore();

    switch(crudType){
      case CRUD.CREATE:
        userGroups.push(userGroup);

        userGroup.id = Date.now();
        break;
      case CRUD.DELETE:
        userGroups = userGroups.filter( _userGroup => _userGroup.id !== userGroup.id);
        break;
      case CRUD.UPDATE:
        userGroups = userGroups.map( _userGroup => _userGroup.id === userGroup.id ? userGroup:_userGroup);
        break;
    }

    await this.saveStore(userGroups);

    return userGroup;
  }

  async on(ev: UserGroupsDataBrokerEvent): Promise<any>{
  }

  async canCRUD(crudType: CRUD): Promise<boolean>{
    return true;
  }

  /**
   * @param options the options that can be used to fetch the data
   * @returns an object that contains the data
   */
  async fetchOne(options: ListDataBrokerLoadOneOptions): Promise<ListDataBrokerResult<UserGroup>>{

    const userGroups = await this.getStore();

    return {
      data:userGroups.find( userGroup => userGroup.id === options.id )
    };
  }

  /**
   * @param options the options that can be used to fetch the data
   * @returns an object that contains the array of data
   */
  async fetch(options: ListDataBrokerLoadOptions<UserGroup>
    ): Promise<ListDataBrokerResult<UserGroup[]>>{

    console.log('localLinksDataBroker.fetch() : ',options);

    let userGroups = await this.getStore();

    // apply pagination
    userGroups = userGroups.slice( ( options.page - 1 ) * options.perPage , options.page * options.perPage );

    const result = {
      data: userGroups
    };

    console.log('localLinksDataBroker.fetch() result : ',result);

    return result;
  }

  private async getStore(): Promise<UserGroup[]>{

    // simulate delay
    await timer(3000).pipe(first()).toPromise();

    const storeValue = localStorage.getItem( '--user-groups-array' );

    const result = (storeValue ? JSON.parse(storeValue) as Array<UserGroup> : []).reverse();
    console.log('localLinksDataBroker.getStore()',result);
    return result;
  }

  private async saveStore(userGroups: UserGroup[]): Promise<any>{
    // simulate delay
    await timer(3000).pipe(first()).toPromise();
    localStorage.setItem( '--user-groups-array' , JSON.stringify(userGroups) );
  }

}
