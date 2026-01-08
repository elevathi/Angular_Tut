import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  constructor(private investmentService: InvestmentService) {}

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestments = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');
  onSubmit() {
    this.investmentService.CalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestments(),
    });

    this.enteredInitialInvestment.set('0');
    this.enteredDuration.set('10');
    this.enteredExpectedReturn.set('5');
    this.enteredAnnualInvestments.set('0');
  }
}
