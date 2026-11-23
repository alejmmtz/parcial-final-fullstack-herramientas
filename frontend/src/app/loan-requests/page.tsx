import Link from "next/link";
import { apiFetch } from "../../lib/api";
import type { LoanRequest, Tool } from "../../lib/loan-types";
import LoanRequestCard from "../components/LoanRequestCard";

type LoanRequestsPageProps = { searchParams: Promise<{ toolId?: string }> };

export default async function LoanRequestsPage({ searchParams }: LoanRequestsPageProps) {
  // Esta consulta solo prepara las opciones que se necesitan para el selector del filtro.
  const toolsResponse = await apiFetch("/tools");
  const tools: Tool[] = toolsResponse.ok ? await toolsResponse.json() : [];

  // TODO FRONT-A: leer searchParams y consultar las solicitudes con apiFetch.
  const { toolId } = await searchParams;
  const searchedToolId = toolId ? toolId : undefined;

  const endpoint = searchedToolId ?
    `/loan-requests?toolId=${searchedToolId}`
    : "/loan-requests";


  const response = await apiFetch(endpoint);
  const data = response?.ok ? await response.json().catch(() => null) : null;
  const loanRequests: LoanRequest[] | null = Array.isArray(data) ? data : null;

  // TODO FRONT-A: agregar el formulario GET de filtro usando tools y la opción All tools.
  // TODO FRONT-A: mostrar las solicitudes y sus enlaces al comprobante correspondiente.

  return (
    <main>
      <h1>Loan requests</h1>
      <Link className="button" href="/loan-requests/new">New request</Link>

      <h3>Filtrar por herramienta</h3>


      {tools && tools.length > 0 && (
        <div  >
          <Link className="button" href="/loan-requests/">All Tools</Link>
          {
            tools.map(({ id, name }) => (
              <Link className="button" key={id} href={`/loan-requests?toolId=${id}`}>{name}</Link>
            ))
          }
        </div>
      )}

      {loanRequests === null && <section className="panel" aria-label="Loan requests">
        <p>No se pudieron consultar las peticiones.</p>
      </section>}
      {loanRequests?.length === 0 && <p>No hay peticiones de prestamo para mostrar.</p>}
      {loanRequests && loanRequests.length > 0 && (
        <section className="loanRequests-grid" >
          {loanRequests.map(({ id, purpose, days, tool }) => (
            <LoanRequestCard key={id} loanRequest={{ id, purpose, days, tool }} />
          ))}
        </section>
      )}
    </main>
  );
}

