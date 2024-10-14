import { PeopleSideBar } from "@/components/PeopleSideBar";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [people, setPeople] = useState([])
  const [company, setCompany] = useState([])
  const [countryData, setCountryData] = useState([])


  const [values, setValues] = useState({ type: "", people: "", company: "", });

  // console.log(people, filteredCompany);
  
  // Function to post customer data to the API
  const postCustomer = async () => {
    try {
      const customerData = {
        type: values.type,
        people: values.type === "people" ? values.people : undefined,
        company: values.type === "company" ? values.company : undefined,
      };
  
      const response = await axios.post("http://localhost:1337/api/customerform/customer", customerData);
      console.log("customer", response.data);
    } catch (error) {
      console.error("Error creating customer:", error);
    }
  };

  const [customerData, setCustomerData] = useState([])
  const getCustomer = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/customerform/customer");
      console.log("Fetched company data:", response.data);
      
      setCustomerData(response.data.data);
      // Assuming you want to save the data to a local state (e.g., setCompanies)
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };
  
  // Fetch companies on component mount
  useEffect(() => {
    getCustomer();
  }, []);

  // Handle form submission
  const handleCustomerSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior
    setValues({
      type: "",
      people: "",
      company: "",
      
    })
    postCustomer(); // Post the customer data
    console.log("success", e.data);
    
  };

  // Handle changes in form fields
  const handleCustomerChanges = (e) => {
    const { id, value } = e.target;
    setValues({
      ...values,
      [id]: value,
    });
  };

  const countries = async () =>{
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountryData(response.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  }
  
  useEffect(() =>{
    countries()
  } , [])
  
  // Assuming this is within your Context or component
  // const [companyFormData, setCompanyFormData] = useState({
  //   name: "",
  //   contact: "",
  //   country: "",
  //   phone: "",
  //   email: "",
  //   website: "",
  // });
  
  // Handle input changes
  // const handleCompanyChange = (e) => {
  //   const { id, value } = e.target;
  //   setCompanyFormData({
  //     ...companyFormData,
  //     [id]: value,
  //   });
  // };
  
  // Post data to API (Create a new company)
  const postCompany = async (values) => {
    try {
      await axios.post("http://localhost:1337/api/companyform/company", values );
      console.log("Company added successfully");
      getCompany()
    } catch (error) {
      console.error("Error posting company data:", error);
    }
  };
  
  // Handle form submission
  // const handleCompanySubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Data Submitted: ", companyFormData);
  
  //   // Clear form data after submission
   
  
  //   // Submit the data to the server
  //   postCompany();
  // };
  
  // Fetch existing company data
  const getCompany = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/companyform/company");
      console.log("Fetched company data:", response.data);
      
      setCompanyData(response.data.data);
      // Assuming you want to save the data to a local state (e.g., setCompanies)
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };
  
  // Fetch companies on component mount
  useEffect(() => {
    getCompany();
  }, []); // Empty dependency array ensures this only runs once on mount
  
  const [companyData, setCompanyData] =useState([])

  const deleteCompany = async (id) => {
    try {
      await axios.delete(`http://localhost:1337/api/companyform/company/${id}`);
      // Filter out the deleted person from the state
      setCompanyData(filteredCompany.filter(company => company._id !== id));
      console.log(`Company with ID ${id} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting company with ID ${id}:`, error);
    }

    
  };
  const [searchCompany, setSearchCompany, ] = useState("")

  const handleSearchCompanyChange = (e) => {
    setSearchCompany(e.target.value.toLowerCase()); // Convert input to lowercase for case-insensitive search
  };

  const filteredCompany = companyData.filter((company) =>
    company.name.toLowerCase().includes(searchCompany) ||
    company.contact.toLowerCase().includes(searchCompany) ||
    company.email.toLowerCase().includes(searchCompany) ||
    company.company?.toLowerCase().includes(searchCompany) // Optional chaining in case company is undefined
  );





  const postPeople = async (values) => {
    try {
      await axios.post("http://localhost:1337/api/form/people", values);
      getPeople()
      console.log("Person added successfully");
    } catch (error) {
      console.error("Error posting person data:", error);
    }
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

  const deletePeople = async (id) => {
    try {
      await axios.delete(`http://localhost:1337/api/form/people/${id}`);
      // Filter out the deleted person from the state
      setPeople(filteredPeople.filter(person => person._id !== id));
      console.log(`Person with ID ${id} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting person with ID ${id}:`, error);
    }
};
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

  const getSinglePeople = async (people) => {
    try {
      const { data } = await axios.get(
       `http://localhost:1337/api/form/singlepeople/${people._id}`
      );
      // setFormData({
      //   firstname: data.firstname,
      //   lastname:  data.lastname,
      //   company:  data.company,
      //   country:  data.country,
      //   phone:  data.phone,
      //   email:  data.email ,
      // }); 

      <PeopleSideBar/>
      
      console.log("People fetch sucessfully", data);
    } catch (error) {
      console.log(error);
    }
  };



  // const updateCompany = async () => {
  //   try {
  //     const result = await axios.put(
  //       http://localhost:1337/api/form/update-company/${cmpUpdateId},
  //       {
  //         name: name,
  //         contact: contact,
  //         website: website,
  //         country: cmpCountry,
  //         phone: cmpPhone,
  //         email: cmpEmail,
  //       }
  //     );
  //     console.log("Succesfully Updated Company");
  //     setCmpShowButton(!cmpShowButton);
  //     setOpenCompanyForm(!openCompanyForm);
  //     setName("");
  //     setContact("");
  //     setWebsite("");
  //     setCmpCountry("");
  //     setCmpPhone("");
  //     setCmpEmail("");
  //     getCompany();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  

  

  // Context value that will be passed to children
  const contextValue = {
    // Customer
    setValues,
    values,
    postCustomer,
    handleCustomerSubmit,
    handleCustomerChanges,
    getCustomer,
    customerData,

    // people
    // formData,
    people,
    // handleChange,
    getPeople,
    handleSearchChange,
    filteredPeople,
    deletePeople,
    getSinglePeople,
    searchTerm,
    postPeople,
    getPeople,
    

    countryData,
    // Company
    postCompany,
      company,
      getCompany,
      handleSearchCompanyChange,
      searchCompany,
      filteredCompany,
      deleteCompany,
      postCompany

      

  };

  return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export default ContextProvider;
