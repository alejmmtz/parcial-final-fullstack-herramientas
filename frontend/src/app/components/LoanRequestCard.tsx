import { LoanRequest } from "../../lib/loan-types";

type LoanRequestCardProps = {
    loanRequest: LoanRequest;
};

export default function LoanRequestCard({ loanRequest }: LoanRequestCardProps) {

    return (
        <article className="panel">
            <h2>Pedido #{loanRequest.id}, {loanRequest.purpose}</h2>
            <p>Solicita un {loanRequest.tool.name} por {loanRequest.days} días.</p>
        </article>
    );
}