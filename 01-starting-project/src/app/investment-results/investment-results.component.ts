import { Component, Input } from '@angular/core';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentResults } from '../investment-result.model';

@Component({
  selector: 'app-investment-results',
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  @Input() results?: InvestmentResults[];
}
