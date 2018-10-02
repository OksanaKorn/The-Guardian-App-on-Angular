import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { NewsService } from './news-list/newsService';
import { NewsComponent } from './news-list/news.component';
import { CollapsibleWellComponent } from 'src/app/news-list/collapsible.component';
// import { DraftComponent } from 'src/app/draft/draft.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    CollapsibleWellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
