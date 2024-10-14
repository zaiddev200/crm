import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Context } from "@/context/Context";
import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // Yup for validation

export function CompaniesSideBar() {
  const {  postCompany, countryData, setOpen, getCompany, filteredPeople } = useContext(Context);

  // Yup validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Company name is required"),
    contact: Yup.string().required("Contact is required"),
    country: Yup.string().required("Country is required"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^\d+$/, "Phone must be a number"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    website: Yup.string().url("Invalid URL").required("Website is required"),
  });

  // Initial form values
  const initialValues = {
    name: "",
    contact: "",
    country: "",
    phone: "",
    email: "",
    website: "",
  };

  // Form submit handler
  const onSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values); // Log data for debugging
    postCompany(values); // Submit the form
    resetForm(); // Clear the form
    setOpen(false); // Close the sheet
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Add New Company</Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle className="uppercase">Add New Company</SheetTitle>
        </SheetHeader>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="grid gap-8 py-6">
              {/* Name Field */}
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="name">Name</Label>
                <Field
                  id="name"
                  name="name"
                  as={Input}
                  className="col-span-3"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Contact Field */}
              <div className="flex flex-col items-start gap-4">
              <Label htmlFor="company">Contact</Label>
                <Field
                  id="contact"
                  name="contact"
                  as="select"
                  className="col-span-3 border border-gray-200 rounded-lg w-full py-2"
                >
                  <option value="">Select</option>
                  {filteredPeople?.map((val, indx) => (
                    <option key={indx} value={val.firstname + val.lastname}>
                      {val.firstname + " " + val.lastname}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="contact"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Country Field */}
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="country">Country</Label>
                <Field
                  as="select"
                  id="country"
                  name="country"
                  className="col-span-3 border border-gray-200 rounded-lg py-2"
                >
                  <option value="" disabled>
                    Select a country
                  </option>
                  {countryData?.map((country) => (
                    <option key={country.cca3} value={country.name.common}>
                      {country.name.common}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Phone Field */}
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="phone">Phone</Label>
                <Field
                  id="phone"
                  name="phone"
                  as={Input}
                  className="col-span-3"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="email">Email</Label>
                <Field
                  id="email"
                  name="email"
                  as={Input}
                  className="col-span-3"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Website Field */}
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="website">Website</Label>
                <Field
                  id="website"
                  name="website"
                  as={Input}
                  className="col-span-3"
                />
                <ErrorMessage
                  name="website"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <SheetFooter>
                <SheetClose asChild>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? "Saving..." : "Save changes"}
                  </Button>
                </SheetClose>
              </SheetFooter>
            </Form>
          )}
        </Formik>
      </SheetContent>
    </Sheet>
  );
}
