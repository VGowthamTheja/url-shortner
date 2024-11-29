import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UrlPasteComponent } from './components/url-paste/url-paste.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UrlPasteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'url-shortner';
}
