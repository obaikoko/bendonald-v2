"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateInvoiceMutation } from "@/src/features/billing/billingApiSlice";
import { toast } from "sonner";
import { showZodErrors } from "@/lib/utils";

type ItemRow = { name: string; amount: string };

interface CreateInvoiceDialogProps {
  open: boolean;
  onClose: () => void;
  studentId: string;
}

const CreateInvoiceDialog = ({
  open,
  onClose,
  studentId,
}: CreateInvoiceDialogProps) => {
  const router = useRouter();
  const [term, setTerm] = useState("");
  const [session, setSession] = useState("");
  const [items, setItems] = useState<ItemRow[]>([{ name: "", amount: "" }]);
  const [createInvoice, { isLoading }] = useCreateInvoiceMutation();

  const addItem = () => setItems((prev) => [...prev, { name: "", amount: "" }]);
  const removeItem = (idx: number) =>
    setItems((prev) => prev.filter((_, i) => i !== idx));
  const updateItem = (idx: number, key: "name" | "amount", value: string) => {
    setItems((prev) =>
      prev.map((it, i) => (i === idx ? { ...it, [key]: value } : it))
    );
  };

  const submit = async () => {
    try {
      const payload = {
        studentId: studentId.trim(),
        term: term.trim(),
        session: session.trim(),
        items: items
          .filter((it) => it.name && it.amount)
          .map((it) => ({ name: it.name.trim(), amount: Number(it.amount) })),
      };

      const res = await createInvoice(payload).unwrap();
      toast.success("Invoice created successfully!");
      onClose(); // Close the dialog
      router.push(`/admin/billing/${res.id}`);
    } catch (error) {
      showZodErrors(error);
    }
  };

  const canSubmit =
    studentId &&
    term &&
    session &&
    items.some((it) => it.name && Number(it.amount) > 0);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create Invoice</DialogTitle>
          <DialogDescription>
            Fill out invoice details and click &quot;Create Invoice&quot; to
            continue.
          </DialogDescription>
        </DialogHeader>

        {/* Invoice Form */}
        <div className="space-y-4 mt-4">
          <Card>
            <CardContent className="p-4 grid grid-cols-1 md:grid-cols-4 gap-3">
              <Input
                placeholder="Student ID"
                value={studentId}
                readOnly
                className="bg-gray-100 cursor-not-allowed"
              />
              <Input
                placeholder="Term (e.g., First)"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
              <Input
                placeholder="Session (e.g., 2024/2025)"
                value={session}
                onChange={(e) => setSession(e.target.value)}
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="font-semibold">Fee Items</div>
                <Button variant="outline" size="sm" onClick={addItem}>
                  Add Item
                </Button>
              </div>
              <div className="space-y-2">
                {items.map((it, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 md:grid-cols-3 gap-2"
                  >
                    <Input
                      placeholder="Item name"
                      value={it.name}
                      onChange={(e) => updateItem(idx, "name", e.target.value)}
                    />
                    <Input
                      type="number"
                      placeholder="Amount"
                      value={it.amount}
                      onChange={(e) =>
                        updateItem(idx, "amount", e.target.value)
                      }
                    />
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        onClick={() => removeItem(idx)}
                        disabled={items.length === 1}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <DialogFooter className="flex justify-end gap-3 mt-4">
          <Button variant="outline" onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={submit} disabled={!canSubmit || isLoading}>
            {isLoading ? "Creating..." : "Create Invoice"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateInvoiceDialog;
