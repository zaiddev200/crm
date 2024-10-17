import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useContext } from "react";
import { Context } from "@/context/Context";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

// Yup Validation Schema
const validationSchema = Yup.object({
  number: Yup.number().required("Invoice number is required"),
  date: Yup.date().required("Date is required"),
  paid: Yup.number().min(0, "Paid amount cannot be negative").required("Paid amount is required"),
  paymentMode: Yup.string().required("Payment mode is required"),
});

// Initial form values
const initialValues = {
  number: 1,
  date: new Date().toISOString().split("T")[0], // Current date as default
  paid: "",
  paymentMode: "",
  reference: "",
  description: "",
};

export function RecordPayment() {
  const { singleInvoiceData, postInvoices, updateInvoice } = useContext(Context);

  // Form submit logic
  const handleSubmit = async (values, { resetForm }) => {
    console.log("Form Values:", values);

    const total = singleInvoiceData.total || 0;
    const updatedPaymentStatus =
      values.paid >= total ? "paid" : values.paid > 0 ? "partial" : "unpaid";

    const updateData = {
      paid: values.paid,
      payment: updatedPaymentStatus,
      paymentMode: values.paymentMode,
    };

    try {
      // Call your update API
      await updateInvoice(singleInvoiceData._id, updateData);

      alert("Payment recorded successfully!");
      resetForm();
    } catch (error) {
      console.error("Error recording payment:", error);
      alert("Failed to record payment. Please try again.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleReset }) => (
        <Form className="p-8 bg-white rounded-lg shadow-md space-y-6 h-[93vh] overflow-auto max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Link to="/invoices">
                <IoMdArrowRoundBack className="h-5 w-5 hover:text-blue-500" />
              </Link>
              <h2 className="text-xl font-semibold">
                Record Payment for Invoice #{singleInvoiceData.number}
              </h2>
              <span className="ml-2 text-sm bg-orange-200 text-orange-800 px-2 py-1 rounded">
                {singleInvoiceData.payment || "unpaid"}
              </span>
            </div>
            <div className="space-x-2">
              <Button type="button" variant="secondary" onClick={handleReset}>
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-600 text-white">
                Record Payment
              </Button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium">Invoice Number</label>
              <Field as={Input} type="number" name="number" className="w-full" disabled />
              <ErrorMessage name="number" component="div" className="text-red-500" />
            </div>

            <div>
              <label className="block text-sm font-medium">Date</label>
              <Field type="date" name="date" className="w-full p-2 border rounded-md" />
              <ErrorMessage name="date" component="div" className="text-red-500" />
            </div>

            <div>
              <label className="block text-sm font-medium">Amount Paid</label>
              <Field as={Input} type="number" name="paid" className="w-full" />
              <ErrorMessage name="paid" component="div" className="text-red-500" />
            </div>

            <div>
              <label className="block text-sm font-medium">Payment Mode</label>
              <Field as="select" name="paymentMode" className="w-full p-2 border rounded-md">
                <option value="" label="Select payment mode" />
                <option value="cash">Cash</option>
                <option value="credit_card">Credit Card</option>
                <option value="bank_transfer">Bank Transfer</option>
              </Field>
              <ErrorMessage name="paymentMode" component="div" className="text-red-500" />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium">Reference</label>
              <Field as={Input} name="reference" className="w-full" />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium">Description</label>
              <Field as="textarea" name="description" className="w-full p-2 border rounded-md" />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
