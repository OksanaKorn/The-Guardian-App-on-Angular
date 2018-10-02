import { Component, Output, Input } from "@angular/core";

@Component({
    selector: "collapsible",
    template: `
      <div (click)="toggleContent()">
        <h4 class="title-container">
          <ng-content select="[well-title]">
          </ng-content>
          <div [ngSwitch]="!visible">
            <span *ngSwitchCase="true">&#x25BC;</span>
            <span *ngSwitchCase="false">&#x25B2;</span>
          </div>
        </h4>
        <ng-content select="[well-body]" *ngIf="visible"></ng-content>
      </div>
    `,
    styles: [`
      .title-container {
        border: solid #CCD1D1 2px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        width: 100%;
        font-size: 20px;
        padding: 5px 10px;
      }
    `]
})

export class CollapsibleWellComponent {
    visible: boolean = false;
    toggleContent() {
        this.visible = !this.visible;
    }
}