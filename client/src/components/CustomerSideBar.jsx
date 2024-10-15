import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // For validation
import { Context } from "@/context/Context";

export function CustomerSideBar() {
  const {
    people,
    filteredCompany,
    postCustomer,
    setCustomerId,
    singlepeopleId,
    setSinglePeopleId,
    storeSingleCustomerPeople,
    storeSingleCustomerCompany,
    singleCompany, 
    setSingleCompany,
  } = useContext(Context);

  // Validation schema
  const validationSchema = Yup.object({
    type: Yup.string().required("Type is required"),
  });

  // Initial form values
  const initialValues = {
    type: "",
    name: "",
  };

  // Form submit handler
  const onSubmit = async (values, { resetForm }) => {
    console.log("Form Data:", values);

    if (values.type === "people") {
      // Store the selected person's ID
      await storeSingleCustomerPeople();
    }
    else(
      await storeSingleCustomerCompany()
    )

    resetForm(); // Reset the form after submission
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Add New Client</Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle className="uppercase">Add New Client</SheetTitle>
        </SheetHeader>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, handleChange }) => (
            <Form className="grid gap-8 py-6">
              {/* Type Select */}
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="type">Type</Label>
                <Field
                  as="select"
                  id="type"
                  name="type"
                  onChange={handleChange}
                  className="col-span-3 border border-gray-200 rounded-lg w-full py-2"
                >
                  <option value="" disabled>
                    Select Type
                  </option>
                  <option value="people">People</option>
                  <option value="company">Company</option>
                </Field>
                <ErrorMessage
                  name="type"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Conditional People or Company Select */}
              {values.type === "people" && (
                <div className="flex flex-col items-start gap-4">
                  <Label htmlFor="people">People</Label>
                  <Field
                    as="select"
                    id="people"
                    name="name"
                    onChange={(e) => {
                      const selectedId = e.target.value;
                      setSinglePeopleId(selectedId); // Set selected person ID
                      handleChange(e); // Ensure Formik also updates its state
                    }}
                    className="col-span-3 border border-gray-200 rounded-lg w-full py-2"
                  >
                    <option value="">Select</option>
                    {people?.map((person) => (
                      <option key={person._id} value={person._id}>
                        {person.firstname} {person.lastname}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              )}

              {values.type === "company" && (
                <div className="flex flex-col items-start gap-4">
                  <Label htmlFor="company">Company</Label>
                  <Field
                    as="select"
                    id="company"
                    name="name"
                    className="col-span-3 border border-gray-200 rounded-lg w-full py-2"
                    onChange={(e) => {
                      const selectedId1 = e.target.value;
                      setSingleCompany(selectedId1); // Set selected person ID
                      handleChange(e); // Ensure Formik also updates its state
                    }}
                    
                  >
                    <option value="">Select</option>
                    {filteredCompany?.map((company) => (
                      <option key={company._id} value={company._id}>
                        {company.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              )}

              <SheetFooter>
                <Button type="submit" className="w-full">
                  Save Changes
                </Button>
              </SheetFooter>
            </Form>
          )}
        </Formik>
      </SheetContent>
    </Sheet>
  );
}
