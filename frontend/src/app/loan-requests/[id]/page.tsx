import Link from "next/link";
import { notFound } from "next/navigation";
import { apiFetch } from "../../../lib/api";
import LoanRequestCard from "../../components/LoanRequestCard";

type ReceiptPageProps = { params: Promise<{ id: string }> };

export default async function ReceiptPage({ params }: ReceiptPageProps) {
  // TODO FRONT-C: leer params y consultar el detalle con apiFetch.
  // TODO FRONT-C: mostrar ID, purpose, days y tool.name de la solicitud recibida.
  const { id } = await params;
  const requestId = Number(id);
  if (!Number.isSafeInteger(requestId) || requestId < 1 || String(requestId) !== id) {
    notFound();
  }

  const response = await apiFetch(`/loan-requests/${requestId}`);
  if (response?.status === 404) notFound();

  const loanRequest = await response.json();

  return (
    <main>
      <h1 className="text-4xl font-bold tracking-tight">Loan receipt</h1>
      <Link href="/loan-requests">Back to requests</Link>
      <section >
        <article className="panel ">
          <h2 className="text-lg font-semibold tracking-tight">Pedido #{loanRequest.id}</h2>
          <h2 className="text-2xl font-semibold mb-4 mt-2 tracking-tight">{loanRequest.purpose}</h2>
          <p className="text-md font-normal ">Solicita un <span className="font-semibold">{loanRequest.tool.name}</span> por {loanRequest.days} días.</p>

        </article>
      </section>
    </main>
  );
}

