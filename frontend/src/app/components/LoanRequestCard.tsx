import Link from "next/link";
import { LoanRequest } from "../../lib/loan-types";

type LoanRequestCardProps = {
    loanRequest: LoanRequest;
};

export default function LoanRequestCard({ loanRequest }: LoanRequestCardProps) {

    return (
        <article className="panel ">
            <h2 className="text-lg font-semibold tracking-tight">Pedido #{loanRequest.id}</h2>
            <h2 className="text-2xl font-semibold mb-4 mt-2 tracking-tight">{loanRequest.purpose}</h2>
            <p className="text-md font-normal mb-6">Solicita un <span className="font-semibold">{loanRequest.tool.name}</span> por {loanRequest.days} días.</p>
            <Link className="button" href={`/loan-requests/${loanRequest.id}`}>Ver su Comprobante</Link>
            <p className="mt-2"></p>
        </article>
    );
}