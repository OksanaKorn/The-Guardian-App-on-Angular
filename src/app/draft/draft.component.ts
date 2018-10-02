import {ChangeDetectionStrategy, Component, Input} from "@angular/core";


@Component({
    selector: 'basic-example',
    templateUrl: './draft.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DraftComponent {
    @Input('data') meals: string[] = [];
    page: number = 1;
}