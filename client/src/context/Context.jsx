import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [people, setPeople] = useState([])
  const [company, setCompany] = useState([])
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    company: "",
    country: "",
    phone: "",
    email: "",
  });

  
  // Assuming this is within your Context or component
  const [companyFormData, setCompanyFormData] = useState({
    name: "",
    contact: "",
    country: "",
    phone: "",
    email: "",
    website: "",
  });
  
  // Handle input changes
  const handleCompanyChange = (e) => {
    const { id, value } = e.target;
    setCompanyFormData({
      ...companyFormData,
      [id]: value,
    });
  };
  
  // Post data to API (Create a new company)
  const postCompany = async () => {
    try {
      await axios.post("http://localhost:1337/api/companyform/company", {
        name: companyFormData.name,
        contact: companyFormData.contact,
        country: companyFormData.country,
        phone: companyFormData.phone,
        email: companyFormData.email,
        website: companyFormData.website,
      });
      console.log("Company added successfully");
    } catch (error) {
      console.error("Error posting company data:", error);
    }
  };
  
  // Handle form submission
  const handleCompanySubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", companyFormData);
  
    // Clear form data after submission
    setCompanyFormData({
      name: "",
      contact: "",
      country: "",
      phone: "",
      email: "",
      website: "",
    });
  
    // Submit the data to the server
    postCompany();
  };
  
  // Fetch existing company data
  const getCompany = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/companyform/company");
      console.log("Fetched company data:", response.data);
      setCompany(response.data.data);
      // Assuming you want to save the data to a local state (e.g., setCompanies)
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };
  
  // Fetch companies on component mount
  useEffect(() => {
    getCompany();
  }, []); // Empty dependency array ensures this only runs once on mount
  

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const postPeople = async () => {
    try {
      await axios.post("http://localhost:1337/api/form/people", {
        firstname: formData.firstname,
        lastname: formData.lastname,
        company: formData.company,
        country: formData.country,
        phone: formData.phone,
        email: formData.email,
      });
      console.log("Person added successfully");
    } catch (error) {
      console.error("Error posting person data:", error);
    }
  };
  
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form behavior if you're using a form element
    console.log("Form Data Submitted: ", formData);
    
    // Clear form data
    setFormData({
      firstname: "",
      lastname: "",
      company: "",
      country: "",
      phone: "",
      email: "",
    });
    
    // Post data to API
    postPeople();
  };
  const getPeople = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/form/people");
      console.log("Fetched people data:", response.data);
      setPeople(response.data.data)
      // You can set the fetched data into a state here if needed
      // Example: setPeople(response.data);
    } 
    
    catch (error) {
      console.error("Error fetching people data:", error);
    }
  };
  useEffect(() => {
    getPeople();
  }, []);
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase()); // Convert input to lowercase for case-insensitive search
  };

const filteredPeople = people.filter((person) =>
    person.firstname.toLowerCase().includes(searchTerm) ||
    person.lastname.toLowerCase().includes(searchTerm) ||
    person.email.toLowerCase().includes(searchTerm) ||
    person.company?.toLowerCase().includes(searchTerm) // Optional chaining in case company is undefined
  );
  

  // Context value that will be passed to children
  const contextValue = {
    formData,
    people,
    handleChange,
    handleSubmit,
    getPeople,
    handleSearchChange,
    filteredPeople,
    searchTerm,

      companyFormData,
      company,
      setCompanyFormData,
      handleCompanySubmit,
      handleCompanyChange,

  };

  return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export default ContextProvider;
