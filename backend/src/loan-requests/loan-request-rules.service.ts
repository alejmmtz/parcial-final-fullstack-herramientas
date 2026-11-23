import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { LoanRequestEntity } from './loan-request.entity';

@Injectable()
export class LoanRequestsRulesService {
  ensureDaysAreValid(loanRequest: LoanRequestEntity): void {
    const toolMaxLoan = loanRequest.tool.maxLoanDays;

    if (loanRequest.days > toolMaxLoan) {
      throw new ConflictException(
        `An loan request a ${loanRequest.tool.name} can't exceed a ${toolMaxLoan} day period.`,
      );
    }

  }
}