import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-deashboard',
    standalone: true,
    imports: [],
    template: `<p>deashboard works!</p>`,
    styleUrl: './deashboard.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeashboardComponent { }
