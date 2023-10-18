import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import type { IReadonlyTheme } from '@microsoft/sp-component-base';
//import { escape } from '@microsoft/sp-lodash-subset';

//import styles from './BannerWebPartWebPart.module.scss';

require('./assets/home.css');

import * as strings from 'BannerWebPartWebPartStrings';

export interface IBannerWebPartWebPartProps {
  description: string;
}

export default class BannerWebPartWebPart extends BaseClientSideWebPart<IBannerWebPartWebPartProps> {

  //private _isDarkTheme: boolean = false;
  //private _environmentMessage: string = '';

  public render(): void {
    this.domElement.innerHTML = `
    <div class='home'>
        <div class="carousel-2">
          <div class="flex-col-1 flex-col-8">
            <div class="chart chart-2">
              <div class="overlap-group1">
                <div class="group-19">
                  <div class="title-container">
                    <div class="title">Ordinary Shares</div>
                    <div class="title-1">Preference Shares</div>
                    <div class="title-2 lato-bold-white-16px">CPO Price</div>
                  </div>
                  <div class="title-3 lato-bold-white-12px">Harga CPO 13.09.2023</div>
                  <div class="chart-1 chart-2">
                    <div class="flex-col-2 flex-col-8">
                      <div class="overlap-group">
                        <div class="column-chart">
                          <div class="rectangle-6"></div>
                          <div class="rectangle-6"></div>
                          <div class="rectangle-6"></div>
                          <div class="rectangle-6"></div>
                        </div>
                        <img class="line" src="${require('./img/line.svg')}" alt="Line" />
                      </div>
                      <div class="month lato-normal-white-12px">
                        <div class="jul-2023">Jul 2023</div>
                        <div class="agu-2023">Agu 2023</div>
                        <div class="sep-2023">Sep 2023</div>
                      </div>
                    </div>
                    <div class="price lato-normal-white-12px">
                      <div class="us">US$</div>
                      <div class="text-5 text">1,020.01</div>
                      <div class="text-6 text">963.34</div>
                      <div class="text-7 text">906.67</div>
                      <div class="text-8 text">850.00</div>
                    </div>
                  </div>
                  <div class="ave-price">
                    <div class="x91500-us lato-bold-white-20px">915.00 US$</div>
                    <img class="line-14" src="${require('./img/line-14.svg')}" alt="Line 14" />
                    <div class="data-tertunda-15-20-menit">data tertunda 15-20 menit</div>
                  </div>
                </div>
                <img class="line-19" src="${require('./img/line-19.svg')}" alt="Line 19" />
              </div>
            </div>
            <div class="overlap-group2">
              <div class="next"><img class="vector-2-1 vector-2-3" src="${require('./img/vector-2-1.svg')}" alt="Vector 2" /></div>
              <div class="flex-col-3 flex-col-8">
                <div class="acara-mendatang lato-bold-black-14px">Acara Mendatang</div>
                <div class="group-39">
                  <div class="event event-2">
                    <div class="date-1"><div class="address address-2 lato-bold-white-12px">01 Oktober 2023</div></div>
                    <div class="group-23">
                      <div class="uat-aplikasi-hris lato-normal-black-10px">UAT Aplikasi HRIS</div>
                      <p class="di-gedung-cakra-lt-1-room-iv-jam-0900 lato-normal-fuscous-gray-8px">
                        di Gedung Cakra Lt. 1 Room IV jam 09:00
                      </p>
                      <p class="lorem-ipsum-is-simpl-2 lorem-ipsum-is-simpl-7 lato-normal-emperor-10px">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                      </p>
                    </div>
                  </div>
                  <div class="event-1 event-2">
                    <div class="date-2"><div class="address address-2 lato-bold-white-12px">03 Oktober 2023</div></div>
                    <div class="group-23">
                      <p class="rapat-umum-pemegang-saham-di-ruang-iv lato-normal-black-10px">
                        Rapat umum pemegang saham di Ruang IV
                      </p>
                      <p class="di-gedung-cakra-lt-1-room-iv-jam-0900-1 lato-normal-fuscous-gray-8px">
                        di Gedung Cakra Lt. 1 Room IV jam 09:00
                      </p>
                      <p class="lorem-ipsum-is-simpl-3 lorem-ipsum-is-simpl-7 lato-normal-emperor-10px">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="next-1"><img class="vector-2-3" src="${require('./img/vector-2.svg')}" alt="Vector 2" /></div>
            </div>
          </div>
          <div class="flex-col-4 flex-col-8">
            <div class="overlap-group3">
              <div class="rectangle-4"></div>
              <h1 class="minyak-kelapa-sawit lato-bold-black-36px">
                Minyak kelapa sawit adalah salah satu dari 4 minyak nabati utama
              </h1>
              <p class="yang-bersama-sama-me">
                yang bersama-sama menyumbang lebih dari 80% dari total pasar untuk minyak dan lemak nabati
              </p>
              <div class="overlap-group-1">
                <div class="lihat-selengkapnya lato-bold-white-16px">Lihat Selengkapnya</div>
              </div>
            </div>
            <img class="next-page" src="${require('./img/next-page@2x.png')}" alt="Next Page" />
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
