import { Component, inject, signal } from '@angular/core';
import { LinkService } from '../../services/link.service';
import { catchError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { UrlCopyComponent } from '../url-copy/url-copy.component';
import { BitlyResponse } from '../../model/link.type';

@Component({
  selector: 'app-url-paste',
  imports: [FormsModule, UrlCopyComponent],
  templateUrl: './url-paste.component.html',
  styleUrl: './url-paste.component.scss',
})
export class UrlPasteComponent {
  linkService = inject(LinkService);
  longUrl = signal('');
  tinyUrl = signal('');

  postLinkToApi() {
    this.linkService
      .postLongUrlToBitly(this.longUrl())
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((tinyUrl) => {
        this.tinyUrl.set(tinyUrl.link);
      });
  }
}
