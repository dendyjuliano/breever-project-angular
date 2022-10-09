import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private apiUrl = 'https://api.kanye.rest/';
  title = 'kanyewest';
  quote = '';
  favoritQuote: Array<string> = [];
  myQuotes: Array<string> = [];

  formQuote = this.formBuilder.group({
    myQuote: '',
  });

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    return this.http.get<{ quote: string }>(this.apiUrl).subscribe((data) => {
      this.quote = data.quote;
    });
  }

  addFavorit(quote: string) {
    if (!this.favoritQuote.includes(quote)) {
      this.favoritQuote.push(quote);
    }
  }

  onSubmit() {
    if (!this.myQuotes.includes(this.formQuote.value.myQuote as string)) {
      this.myQuotes.push(this.formQuote.value.myQuote as string);
    }
  }
}
