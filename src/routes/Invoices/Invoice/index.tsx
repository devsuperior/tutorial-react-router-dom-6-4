import { useParams } from "react-router-dom";
import { getInvoice } from "../../../data";

export default function Invoice() {

    const params = useParams();

    const invoice = getInvoice(Number(params.invoiceId));

    return (
        <>
            {
                invoice &&
                <main style={{ padding: "1rem" }}>
                    <h2>Total Due: {invoice.amount}</h2>
                    <p>
                        {invoice.name}: {invoice.number}
                    </p>
                    <p>Due Date: {invoice.due}</p>
                </main>

            }
        </>
    );
}
