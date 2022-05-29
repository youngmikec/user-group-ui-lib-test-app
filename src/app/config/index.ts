import { PAGE_SECTION_POSITION } from 'vicky-ionic-ng-lib';

export const config: any = {
    pagination:{
      perPage: 10,
    },
    ui:{
        general: {
            pagination:{
            enabled:true,
            },
            swipeRefresh:{
            enabled:true,
            },
            spinner: {
            type: 'bubbles'
            },
            toast: {
            duration: 5000,
            position: 'top',
            btnText: 'Okay'
            },
            buttons: {
            core: {
                sectionPosition: PAGE_SECTION_POSITION.IN_CONTENT
            }
            },
            broswer: {
            target: 'system'
            },
        },
        pages:{
        custom: {
            defaultFavIcon: 'assets/icon/favicon.png'
        },
        userGroups:{
          title:{
            label:'Apex Study Groups'
          },
        },
        userGroupsDetailEditor:{
          urlPath: '/user-groups/detail/',
          title:{
            label:'Apex Study Group Detail'
          },
          buttons:{
            main:{
              nextLabel: 'next',
              backLabel:'back',
              confirmLabel: 'proceed'
            }
          },
          behavior: {
            urlInfo:{
              progressMsg: 'Fetching UserGroup Info',
              successMsg: 'Info fetched successfully'
            }
          }
        }
      }
    },
};
