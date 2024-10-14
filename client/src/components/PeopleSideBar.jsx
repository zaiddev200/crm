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
import * as Yup from "yup"; // For validation

export function PeopleSideBar() {
  const {  filteredCompany,  postPeople, countryData, setOpen, getPeople } =
    useContext(Context);

  // Yup validation schema
  const validationSchema = Yup.object({
    firstname: Yup.string().required("Firstname is required"),
    lastname: Yup.string().required("Lastname is required"),
    // company: Yup.string().required("Company is required"),
    country: Yup.string().required("Country is required"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^\d+$/, "Phone must contain only numbers"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
  });

  // Initial form values
  const initialValues = {
    firstname: "",
    lastname: "",
    company: "",
    country: "",
    phone: "",
    email: "",
  };

  // Form submission handler
  const onSubmit = (values) => {
    console.log("Form Data:", values); // Log data to the console
    getPeople()
    postPeople(values); // Call the context handler with form values
    setOpen(false); // Close the sheet
  };

  

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Add New Person</Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle className="uppercase">Add New Person</SheetTitle>
        </SheetHeader>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="grid gap-8 py-6">
              {/* Firstname Field */}
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="firstname">Firstname</Label>
                <Field
                  id="firstname"
                  name="firstname"
                  as={Input}
                  className="col-span-3"
                />
                <ErrorMessage
                  name="firstname"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Lastname Field */}
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="lastname">Lastname</Label>
                <Field
                  id="lastname"
                  name="lastname"
                  as={Input}
                  className="col-span-3"
                />
                <ErrorMessage
                  name="lastname"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Company Field */}
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="company">Company</Label>
                <Field
                  id="company"
                  name="company"
                  as="select"
                  className="col-span-3 border border-gray-200 rounded-lg w-full py-2"
                >
                  <option value="">Select</option>
                  {filteredCompany?.map((val, indx) => (
                    <option key={indx} value={val.name}>
                      {val.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="company"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Country Field */}
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="country">Country</Label>
                <Field
                  id="country"
                  name="country"
                  as="select"
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
