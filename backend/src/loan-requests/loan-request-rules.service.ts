import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { LoanRequestEntity } from './loan-request.entity';

@Injectable()
export class LoanRequestsRulesService {
  ensureDaysAreValid(loanRequest: LoanRequestEntity): void {
    if (loanRequest.days > 3) {
      throw new BadRequestException(
        "An loan request can't exceed a 3 day period.",
      );
    }

  }
}