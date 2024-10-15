import { PeopleSideBar } from "@/components/PeopleSideBar";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  // State Variables
  const [people, setPeople] = useState([]);
  const [company, setCompany] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [customerData, setCustomerData] = useState([]);
  const [singlepeopleId, setSinglePeopleId] = useState("");
  const [singleCompany, setSingleCompany] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCompany, setSearchCompany] = useState("");
  const [leadData, setLeadData] = useState([]);

  // -------------------------
  //  People Logic
  // -------------------------
  const getPeople = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/form/people");
      console.log("Fetched people data:", response.data);
      setPeople(response.data.data);
    } catch (error) {
      console.error("Error fetching people data:", error);
    }
  };

  const postPeople = async (values) => {
    try {
      await axios.post("http://localhost:1337/api/form/people", values);
      console.log("Person added successfully");
      getPeople();
    } catch (error) {
      console.error("Error posting person data:", error);
    }
  };

  const deletePeople = async (id) => {
    try {
      await axios.delete(`http://localhost:1337/api/form/people/${id}`);
      setPeople((prev) => prev.filter((person) => person._id !== id));
      console.log(`Person with ID ${id} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting person with ID ${id}:`, error);
    }
  };

  const getSinglePeople = async (person) => {
    try {
      const { data } = await axios.get(
        `http://localhost:1337/api/form/singlepeople/${person._id}`
      );
      console.log("People fetch successfully", data);
      <PeopleSideBar />;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredPeople = people.filter((person) =>
    [person.firstname, person.lastname, person.email, person.company]
      .filter(Boolean)
      .some((field) => field.toLowerCase().includes(searchTerm))
  );

  useEffect(() => {
    getPeople();
  }, []);

  // -------------------------
  //  Company Logic
  // -------------------------
  const getCompany = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/companyform/company");
      console.log("Fetched company data:", response.data);
      setCompanyData(response.data.data);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  const postCompany = async (values) => {
    try {
      await axios.post("http://localhost:1337/api/companyform/company", values);
      console.log("Company added successfully");
      getCompany();
    } catch (error) {
      console.error("Error posting company data:", error);
    }
  };

  const deleteCompany = async (id) => {
    try {
      await axios.delete(`http://localhost:1337/api/companyform/company/${id}`);
      setCompanyData((prev) => prev.filter((company) => company._id !== id));
      console.log(`Company with ID ${id} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting company with ID ${id}:`, error);
    }
  };

  const handleSearchCompanyChange = (e) => {
    setSearchCompany(e.target.value.toLowerCase());
  };

  const filteredCompany = companyData.filter((company) =>
    [company.name, company.contact, company.email, company.company]
      .filter(Boolean)
      .some((field) => field.toLowerCase().includes(searchCompany))
  );

  useEffect(() => {
    getCompany();
  }, []);

  // -------------------------
  //  Customer Logic
  // -------------------------
  const getCustomer = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/customerform/customer");
      console.log("Fetched customer data:", response.data);
      setCustomerData(response.data.data);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  const deleteCustomer = async (id) => {
    try {
      await axios.delete(`http://localhost:1337/api/customerform/customer/${id}`);
      setCustomerData((prev) => prev.filter((customer) => customer._id !== id));
      console.log(`Customer with ID ${id} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting customer with ID ${id}:`, error);
    }
  };

  const storeSingleCustomerCompany = async () => {
    try {
      console.log("Fetching data for company ID:", singleCompany);

      const { data } = await axios.get(
        `http://localhost:1337/api/companyform/singlecompany/${singleCompany}`
      );

      if (!data) {
        console.log("No data found for this company.");
        return;
      }

      const postData = {
        name: data.name,
        country: data.country,
        phone: data.phone,
        email: data.email,
        type: "company",
      };

      await axios.post("http://localhost:1337/api/customerform/customer", postData);
      console.log("Data sent successfully");
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  const storeSingleCustomerPeople = async () => {
    try {
      console.log("Fetching data for ID:", singlepeopleId);

      const { data } = await axios.get(
        `http://localhost:1337/api/form/singlepeople/${singlepeopleId}`
      );

      if (!data) {
        console.log("No data found for this ID.");
        return;
      }

      const postData = {
        name: `${data.firstname} ${data.lastname}`,
        country: data.country,
        phone: data.phone,
        email: data.email,
        type: "people",
      };

      await axios.post("http://localhost:1337/api/customerform/customer", postData);
      console.log("Data sent successfully");
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  useEffect(() => {
    getCustomer();
  }, []);

  // -------------------------
  //  Country Logic
  // -------------------------
  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountryData(response.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

    // -------------------------
  //  Leads Logic
  // -------------------------

  const getLead = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/leadform/lead");
      console.log("Fetched Lead data:", response.data);
      setLeadData(response.data.data);
    } catch (error) {
      console.error("Error fetching Lead data:", error);
    }
  };

  const postLead = async (values) => {
    try {
      await axios.post("http://localhost:1337/api/leadform/lead", values);
      console.log("Lead added successfully");
    } catch (error) {
      console.error("Error posting lead data:", error);
    }
  };

  const deleteLead = async (id) => {
    try {
      await axios.delete(`http://localhost:1337/api/leadform/lead/${id}`);
      setLeadData((prev) => prev.filter((lead) => lead._id !== id));
      console.log(`Lead with ID ${id} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting Lead with ID ${id}:`, error);
    }
  };

  useEffect(() => {
    getLead();
  }, []);


  // -------------------------
  //  Context Value
  // -------------------------
  const contextValue = {
    // People
    people,
    postPeople,
    deletePeople,
    getSinglePeople,
    handleSearchChange,
    filteredPeople,
    singlepeopleId,
    setSinglePeopleId,

    // Company
    postCompany,
    deleteCompany,
    handleSearchCompanyChange,
    filteredCompany,
    singleCompany,
    setSingleCompany,

    // Customer
    getCustomer,
    deleteCustomer,
    storeSingleCustomerCompany,
    storeSingleCustomerPeople,
    customerData,

    // Country
    countryData,

    // Lead
    postLead,
    leadData,
    deleteLead,
  };

  return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export default ContextProvider;
