import { LoanRequest } from "../../lib/loan-types";

type LoanRequestCardProps = {
    loanRequest: LoanRequest;
};

export default function LoanRequestCard({ loanRequest }: LoanRequestCardProps) {

    return (
        <article className="panel ">
            <h2 className="text-lg font-semibold">Pedido #{loanRequest.id}</h2>
            <h2 className="text-2xl font-semibold mb-4 mt-2">{loanRequest.purpose}</h2>
            <p className="text-md font-normal">Solicita un <span className="font-semibold">{loanRequest.tool.name}</span> por {loanRequest.days} días.</p>
        </article>
    );
}