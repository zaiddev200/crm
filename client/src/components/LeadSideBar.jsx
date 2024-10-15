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
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "@/context/Context";
import { Textarea } from "./ui/textarea";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // For validation

export function LeadSideBar() {
  const { countryData , postLead } = useContext(Context);
  

  // Validation Schema using Yup
  const validationSchema = Yup.object({
    branch: Yup.string().required("Branch is required"),
    type: Yup.string().required("Type is required"),
    name: Yup.string().required("Name is required"),
    status: Yup.string().required("Status is required"),
    source: Yup.string().required("Source is required"),
    country: Yup.string().required("Country is required"),
    phone: Yup.string().required("Phone is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    project: Yup.string().required("Project is required"),
  });

  // Initial form values
  const initialValues = {
    branch: "",
    type: "",
    name: "",
    status: "",
    source: "",
    country: "",
    phone: "",
    email: "",
    project: "",
  };

  // Submit handler
  const onSubmit = async (values, { resetForm }) => {
    console.log("Form Data:", values); // Log the form data
    postLead(values)
    resetForm()
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Add New Lead</Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle className="uppercase">Add New Lead</SheetTitle>
        </SheetHeader>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ handleChange, values }) => (
            <Form className="grid gap-8 py-6">
              {/* Branch */}
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="branch">Branch</Label>
                <Field
                  as="select"
                  id="branch"
                  name="branch"
                  className="col-span-3 border border-gray-200 rounded-lg w-full py-2"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="main">Main</option>
                </Field>
                <ErrorMessage
                  name="branch"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Type */}
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="type">Type</Label>
                <Field
                  as="select"
                  id="type"
                  name="type"
                  className="col-span-3 border border-gray-200 rounded-lg w-full py-2"
                >
                  <option value="">Select Type</option>
                  <option value="people">People</option>
                  <option value="company">Company</option>
                </Field>
                <ErrorMessage
                  name="type"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Name */}
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="name">Name</Label>
                <Field
                  as={Input}
                  id="name"
                  name="name"
                  className="col-span-3"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Status */}
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="status">Status</Label>
                <Field
                  as="select"
                  id="status"
                  name="status"
                  className="col-span-3 border border-gray-200 rounded-lg w-full py-2"
                >
                  <option value="">Select</option>
                  <option value="draft">Draft</option>
                  <option value="new">New</option>
                  <option value="innegotiation">In Negotiation</option>
                  <option value="won">Won</option>
                  <option value="lost">Lost</option>
                  <option value="canceled">Canceled</option>
                  <option value="assigned">Assigned</option>
                  <option value="onhold">On Hold</option>
                </Field>
                <ErrorMessage
                  name="status"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Source */}
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="source">Source</Label>
                <Field
                  as="select"
                  id="source"
                  name="source"
                  className="col-span-3 border border-gray-200 rounded-lg w-full py-2"
                >
                  <option value="">Select</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="socialmedia">Social Media</option>
                  <option value="website">Website</option>
                  <option value="advertising">Advertising</option>
                  <option value="friend">Friend</option>
                  <option value="professionalnetwork">
                    Professional Network
                  </option>
                  <option value="customerreferral">Customer Referral</option>
                  <option value="sales">Sales</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage
                  name="source"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Country */}
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="country">Country</Label>
                <Field
                  as="select"
                  id="country"
                  name="country"
                  className="col-span-3 border border-gray-200 rounded-lg py-2"
                >
                  <option value="">Select a country</option>
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

              {/* Phone */}
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="phone">Phone</Label>
                <Field
                  as={Input}
                  id="phone"
                  name="phone"
                  className="col-span-3"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="email">Email</Label>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  className="col-span-3"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Project */}
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="project">Project</Label>
                <Field
                  as={Textarea}
                  id="project"
                  name="project"
                  className="col-span-3"
                />
                <ErrorMessage
                  name="project"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

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
