import { Component, input, OnInit } from '@angular/core';
import { ClipboardService, ClipboardModule } from 'ngx-clipboard';

@Component({
  selector: 'app-url-copy',
  imports: [ClipboardModule],
  templateUrl: './url-copy.component.html',
  styleUrl: './url-copy.component.scss',
})
export class UrlCopyComponent implements OnInit {
  url = input.required<string>();

  constructor(private _clipboardService: ClipboardService) {}

  ngOnInit() {
    // Handle copy response globally https://github.com/maxisam/ngx-clipboard#handle-copy-response-globally
    this._clipboardService.copyResponse$.subscribe((re) => {
      if (re.isSuccess) {
        alert('copy success!');
      }
    });
  }

  callServiceToCopy() {
    this._clipboardService.copy(
      'This is copy thru service copyFromContent directly'
    );
  }

  onCopyFailure() {
    alert('copy fail!');
  }
}
