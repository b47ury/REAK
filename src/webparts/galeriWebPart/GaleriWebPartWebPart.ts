import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import type { IReadonlyTheme } from '@microsoft/sp-component-base';
//import { escape } from '@microsoft/sp-lodash-subset';

//import styles from './GaleriWebPartWebPart.module.scss';
require('./assets/home.css');

import * as strings from 'GaleriWebPartWebPartStrings';

export interface IGaleriWebPartWebPartProps {
  description: string;
}

export default class GaleriWebPartWebPart extends BaseClientSideWebPart<IGaleriWebPartWebPartProps> {

  //private _isDarkTheme: boolean = false;
  //private _environmentMessage: string = '';

  public render(): void {
    this.domElement.innerHTML = `
    <div class='home'>
      <div class="video">
            <div class="overlap-group4">
              <div class="rectangle-9"></div>
              <div class="group-43">
                <div class="next-2"><img class="vector-2" src="${require('./img/vector-2-3.svg')}" alt="Vector 2" /></div>
                <div class="next-3"><img class="vector-2" src="${require('./img/vector-2-2.svg')}" alt="Vector 2" /></div>
              </div>
              <div class="video-head">
                <img class="line-1" src="${require('./img/line-1-1.svg')}" alt="Line 1" />
                <div class="flex-col-6 flex-col-8">
                  <div class="galeri-album-foto-terbaru lato-bold-romance-36px">Galeri Album Foto terbaru</div>
                  <div class="overlap-group-8">
                    <div class="lihat-lebih-banyak lato-normal-white-14px">Lihat lebih banyak</div>
                  </div>
                </div>
              </div>
              <div class="video-list">
                <div class="album-1">
                  <img class="rectangle" src="${require('./img/rectangle-37.png')}" alt="Rectangle 37" />
                  <div class="overlap-group-9">
                    <p class="penanaman-bibit-kelapa-sawit-di-kutai lato-bold-black-16px">
                      Penanaman bibit kelapa sawit di Kutai
                    </p>
                    <div class="icon-3 icon-4">
                      <div class="date-post-4">
                        <img class="date-icon-1" src="${require('./img/date-icon-1-5.svg')}" alt="date-icon 1" />
                        <div class="date-3 lato-normal-fuscous-gray-10px">25/08/2023</div>
                      </div>
                      <div class="date-post-5">
                        <img
                          class="x4092564-about-mobile"
                          src="${require('./img/4092564-about-mobile-ui-profile-ui-user-website-114033-1-5.svg')}"
                          alt="4092564-about-mobile-ui-profile-ui-user-website_114033 1"
                        />
                        <div class="posted-by-admin-4 lato-normal-fuscous-gray-10px">posted by admin</div>
                      </div>
                    </div>
                    <p class="lorem-ipsum-is-simpl-5 lorem-ipsum-is-simpl-7 lato-normal-emperor-14px">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
                <div class="overlap-group1-3">
                  <img class="rectangle-38" src="${require('./img/rectangle-37-1.png')}" alt="Rectangle 38" />
                  <div class="lomba-17-agusutus-2023 lato-bold-black-16px">Lomba 17 Agusutus 2023</div>
                  <div class="icon-1 icon-4">
                    <div class="date-post-2">
                      <img class="date-icon-1" src="${require('./img/date-icon-1-6.svg')}" alt="date-icon 1" />
                      <div class="date-4 lato-normal-fuscous-gray-10px">18/08/2023</div>
                    </div>
                    <div class="date-post-3">
                      <img
                        class="x4092564-about-mobile"
                        src="img/4092564-about-mobile-ui-profile-ui-user-website-114033-1-6.svg"
                        alt="4092564-about-mobile-ui-profile-ui-user-website_114033 1"
                      />
                      <div class="posted-by-admin-4 lato-normal-fuscous-gray-10px">posted by admin</div>
                    </div>
                  </div>
                  <p class="lorem-ipsum-is-simpl-1 lorem-ipsum-is-simpl-7 lato-normal-emperor-14px">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                  </p>
                </div>
                <div class="overlap-group2-3">
                  <img class="rectangle" src="${require('./img/rectangle-49.png')}" alt="Rectangle 49" />
                  <div class="observasi-tim-rea-kaltim lato-bold-black-16px">Observasi TIM Rea Kaltim</div>
                  <div class="icon-1 icon-4">
                    <div class="date-post-2">
                      <img class="date-icon-1" src="${require('./img/date-icon-1-7.svg')}" alt="date-icon 1" />
                      <div class="date-5 lato-normal-fuscous-gray-10px">15/08/2023</div>
                    </div>
                    <div class="date-post-3">
                      <img
                        class="x4092564-about-mobile"
                        src="${require('./img/4092564-about-mobile-ui-profile-ui-user-website-114033-1-6.svg')}"
                        alt="4092564-about-mobile-ui-profile-ui-user-website_114033 1"
                      />
                      <div class="posted-by-admin-4 lato-normal-fuscous-gray-10px">posted by admin</div>
                    </div>
                  </div>
                  <p class="lorem-ipsum-is-simpl-1 lorem-ipsum-is-simpl-7 lato-normal-emperor-14px">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  }

  protected onInit(): Promise<void> {
    return this._getEnvironmentMessage().then(message => {
      //this._environmentMessage = message;
    });
  }



  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
        .then(context => {
          let environmentMessage: string = '';
          switch (context.app.host.name) {
            case 'Office': // running in Office
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
              break;
            case 'Outlook': // running in Outlook
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
              break;
            case 'Teams': // running in Teams
            case 'TeamsModern':
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
              break;
            default:
              environmentMessage = strings.UnknownEnvironment;
          }

          return environmentMessage;
        });
    }

    return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    // if (!currentTheme) {
    //   return;
    // }

    // this._isDarkTheme = !!currentTheme.isInverted;
    // const {
    //   semanticColors
    // } = currentTheme;

    // if (semanticColors) {
    //   this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
    //   this.domElement.style.setProperty('--link', semanticColors.link || null);
    //   this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    // }

  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
