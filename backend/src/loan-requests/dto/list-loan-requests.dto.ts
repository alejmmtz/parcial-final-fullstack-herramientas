import { Type } from "class-transformer";
import { IsNotEmpty, IsOptional } from "class-validator";

export class ListLoanRequestsDto {
  // TODO BACK-A: agregar las validaciones del filtro opcional indicado en el enunciado.
  // La conversión de la consulta a número ya está preparada.
  @IsOptional()
  @IsNotEmpty()
  @Type(() => Number)
  toolId?: number;
}

