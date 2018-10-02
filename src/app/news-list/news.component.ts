import { Component, OnInit } from '@angular/core';
import { NewsService } from './newsService';


@Component({
  selector: 'news-list',
  templateUrl: './news.component.html',
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {
    allNews: Object[]
    oneNews: {}
    description: string
    newsInformation
    allNewsArray: Object[]

    currentPage: number = 1
    numberOfPages: number = 1124
    newPage: number
    pageInput: number = 1
    ableNextButton: boolean
    ablePrevButton: boolean

    constructor(private newsService: NewsService) {}

    ngOnInit() {
        this.getNews(this.currentPage);
    }

    getNews(currentPage:number) {
      this.checkPrevNextPageAvailability(currentPage)
      this.newsService.getNews(currentPage)
        .subscribe(allNews => {
          this.allNews = allNews.response.results
          this.createNewsArray(this.allNews)
          return this.allNewsArray
        });
    }

    createNewsArray(allNews) {
      this.allNewsArray = []
      for(let i = 0; i < allNews.length; i++) {
        this.newsService.getDescription(allNews[i].apiUrl)
        .subscribe(newsInformation => {
          this.newsInformation = newsInformation;
          this.description = this.newsInformation.response.content.blocks.body[0].bodyTextSummary.slice(0, 400);
          this.oneNews = new oneNews(allNews[i].webTitle, allNews[i].webUrl, this.description)
          this.allNewsArray.push(this.oneNews)
        })
      }
      return this.allNewsArray
    }

    // pagination
    changePageOnUserInput(event: any) {
      if(event.key === 'Enter') {
        this.newPage = event.target.value;
        if (this.newPage >= 1 && this.numberOfPages >= this.newPage) {
          this.currentPage = this.newPage;
          this.getNews(this.currentPage);
          } else {
          event.target.value = this.currentPage;
          }
        }
      }

    nextPage () {
      if (this.currentPage < this.numberOfPages) {
          this.currentPage++;
          this.getNews(this.currentPage);
          this.pageInput = this.currentPage;
      }
    }

    prevPage () {
      if (this.currentPage > 1) {
          this.currentPage--;
          this.getNews(this.currentPage);
          this.pageInput = this.currentPage;
      }
    }

    checkPrevNextPageAvailability(currentPage) {
      if (currentPage == this.numberOfPages) {
        this.ableNextButton = true;
      } else this.ableNextButton = false;

      if (currentPage == 1) {
        this.ablePrevButton = true;
      } else this.ablePrevButton = false;
    } 

}

function oneNews(webTitle, webUrl, description) {
  this.webTitle = webTitle;
  this.webUrl = webUrl;
  this.description = description;
}

   