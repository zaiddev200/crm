import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup"; // For validation
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useContext } from "react";
import { Context } from "@/context/Context";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  client: Yup.string().required("Client is required"),
  number: Yup.number().required("Invoice number is required"),
  date: Yup.date().required("Date is required"),
  expiredDate: Yup.date().required("Expiry date is required"),
  currency: Yup.string().required("Currency is required"),
  items: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Item name is required"),
      description: Yup.string(), // Optional
      quantity: Yup.number()
        .min(1, "Quantity must be at least 1")
        .required("Quantity is required"),
      price: Yup.number()
        .min(0, "Price cannot be negative")
        .required("Price is required"),
      total: Yup.number().min(0).required("Total is required"), // Ensure total is required
    })
  ),
  tax: Yup.number().min(0).required("Tax is required"),
  total: Yup.number().min(0).required("Total is required"), // Yup validation for total
});

// Initial values for the form
const initialValues = {
  client: "",
  number: 1,
  year: 2024,
  currency: "",
  status: "draft",
  date: "",
  expiredDate: "",
  note: "",
  tax: 0,
  items: [{ name: "", description: "", quantity: 1, price: 0, total: 0 }],
  subTotal: 0,
  total: 0,
};

export function InvoicesSideBar() {
  const { customerData, postInvoices } = useContext(Context);

  // Handle form submission
  const handleSubmit = async (values, { resetForm }) => {
    const subTotal = values.items.reduce((acc, item) => acc + item.total, 0);
    const total = subTotal * (1 + values.tax / 100);

    const invoiceData = { ...values, subTotal, total };

    console.log("Submitting Invoice:", invoiceData); // Debugging

    await postInvoices(invoiceData);
    alert("Form Submitted Successfully!");
    resetForm()
  };

  return (
    <>
      <div className="w-full h-20"></div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleReset, setFieldValue }) => (
          <Form className="p-10 bg-white rounded-md shadow-md space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Link to={"/invoices"}>
                <IoMdArrowRoundBack className="h-5 w-5 hover:text-blue-500" />
                
                </Link>
                <h2 className="text-2xl font-semibold">New Invoice</h2>
                <span className="text-sm ml-2 bg-gray-200 px-2 py-1 rounded">
                  {values.status}
                </span>
              </div>
              <div className="flex gap-2">
                <Button type="button" className="border rounded-md" variant="secondary" onClick={handleReset}>
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-4 gap-6">
              <div>
                <label>Client </label>
                <Field as="select" name="client" className="w-full p-2 border rounded-md">
                  <option value="" label="Select client" />
                  {customerData.map((client) => (
                    <option key={client.id} value={client.name}>
                      {client.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="client" component="div" className="text-red-500" />
              </div>

              <div className="flex gap-2">
                <div>
                  <label>Number </label>
                  <Field as={Input} type="number" name="number" />
                  <ErrorMessage name="number" component="div" className="text-red-500" />
                </div>
                <div>
                  <label>Year</label>
                  <Field as={Input} type="number" name="year" />
                </div>
              </div>

              <div className="flex flex-col">
                <label>Currency </label>
                <Field as="select" name="currency" className="input border rounded-md">
                  <option value="" label="Select currency" />
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="PKR">PKR (₨)</option>
                </Field>
                <ErrorMessage name="currency" component="div" className="text-red-500" />
              </div>

              <div className="flex flex-col">
                <label>Status</label>
                <Field as="select" name="status" className="input border rounded-md">
                  <option value="draft">Draft</option>
                  <option value="pending">Pending</option>
                  <option value="sent">Sent</option>
                </Field>
              </div>

              <div className="flex flex-col">
                <label>Date </label>
                <Field type="date" name="date" className="input border rounded-md" />
                <ErrorMessage name="date" component="div" className="text-red-500" />
              </div>

              <div className="flex flex-col">
                <label>Expire Date </label>
                <Field type="date" name="expiredDate" className="input border rounded-md" />
                <ErrorMessage name="expiredDate" component="div" className="text-red-500" />
              </div>

              <div className="flex flex-col">
                <label>Note</label>
                <Field as="textarea" name="note" className="input border rounded-md" />
              </div>
            </div>

            {/* Items Table */}
            <FieldArray name="items">
              {({ remove, push }) => (
                <>
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {values.items.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <Field name={`items.${index}.name`} placeholder="Item Name" />
                          </td>
                          <td>
                            <Field name={`items.${index}.description`} placeholder="Description" />
                          </td>
                          <td>
                            <Field
                              type="number"
                              name={`items.${index}.quantity`}
                              onChange={(e) => {
                                const quantity = parseFloat(e.target.value) || 0;
                                setFieldValue(`items.${index}.quantity`, quantity);
                                setFieldValue(`items.${index}.total`, quantity * item.price);
                              }}
                            />
                          </td>
                          <td>
                            <Field
                              type="number"
                              name={`items.${index}.price`}
                              onChange={(e) => {
                                const price = parseFloat(e.target.value) || 0;
                                setFieldValue(`items.${index}.price`, price);
                                setFieldValue(`items.${index}.total`, price * item.quantity);
                              }}
                            />
                          </td>
                          <td>{item.total.toFixed(2)}</td>
                          <td>
                            <button type="button" onClick={() => remove(index)}>🗑️</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button
                    type="button"
                    onClick={() => push({ name: "", description: "", quantity: 1, price: 0, total: 0 })}
                  >
                    + Add Item
                  </button>
                </>
              )}
            </FieldArray>

            {/* Total Section */}
            <div className="flex justify-end space-x-4">
              <div>
                <div>Sub Total:</div>
                <div>{values.items.reduce((acc, item) => acc + item.total, 0).toFixed(2)}</div>
              </div>
              <div>
                <label>Tax:</label>
                <Field as="select" name="tax" className="input">
                  <option value={0}>0%</option>
                  <option value={5}>5%</option>
                  <option value={10}>10%</option>
                </Field>
              </div>
              <div>
                <div>Total:</div>
                <div>
                  {(
                    values.items.reduce((acc, item) => acc + item.total, 0
                  ) * (1 + values.tax / 100)
                ).toFixed(2)}
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  </>
);
}
