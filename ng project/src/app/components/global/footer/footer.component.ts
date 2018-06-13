import {Component} from '@angular/core';
import {Language} from 'angular-l10n';

@Component({
  selector: 'lime-footer',
  template: `
    <div class="footer">
      <span class="copyright">
        &copy; {{ '«Lime-IT» LLC' | translate: lang }}, 2017&ndash;2018
      </span>
      <lime-localization></lime-localization>
    </div>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Language() lang: string;


}
