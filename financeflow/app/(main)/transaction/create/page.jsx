import { getUserAccounts } from "@/actions/dashboard";
import { AddTransactionForm } from "../_components/transaction-form";
import { getTransaction } from "@/actions/transaction";

// Updated version of AddTransactionPage with awaited searchParams
export default async function AddTransactionPage({ searchParams }) {
  // Ensure searchParams is awaited before using its properties
  const editId = searchParams?.edit || null;  // default to null if no editId is present

  // Fetch user accounts
  const accounts = await getUserAccounts();

  // Fetch transaction data for editing if editId is present
  let initialData = null;
  if (editId) {
    const transaction = await getTransaction(editId);
    initialData = transaction;
  }

  return (
    <div className="max-w-3xl mx-auto px-5">
      <div className="flex justify-center md:justify-normal mb-8">
        <h1 className="text-5xl gradient-title ">Add Transaction</h1>
      </div>
      <AddTransactionForm
        accounts={accounts}
        editMode={!!editId}  // Set editMode based on whether there's an editId
        initialData={initialData}  // Pass initialData for pre-filled form if in edit mode
      />
    </div>
  );
}
