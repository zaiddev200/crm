import { company } from "../models/company.model.js";

const getCompany = async (req, res ) => {
    // console.log(req.headers)
    // res.cookie("access-token", "")
    try {
      const Company = await company.find();
      res.status(200).json({
        message: "company fetched successfully",
        data: Company,
        
      });
    } catch (error) {
        console.log(error);
        
    }
  };
  
  const createCompany = async (req, res ) => {
    try {
      const { name, contact,  country, phone ,email, website } = req.body;
      const Company = await company.create({
        name,
        contact,
        country,
        phone,
        email,
        website,
      });
      res.json(200).json({
        message: "Company created successfully",
        data: Company,
      });
    } catch (error) {
        console.log(error);
        
    }
  };
  
  const updateCompany = async (req, res ) => {
    try {
      const { name, contact, website, country, phone ,email } = req.body;
      const companyId = req.params.id;
      const updatedCompany = await company.findByIdAndUpdate(
        { _id: companyId },
        {
          name,
          contact,
          country,
          phone,
          email,
          website,
        },
        { new: true }
      );
      res.status(201).json({
        message: "Company updated successfully",
        data: updatedCompany,
      });
    } catch (error) {
        console.log(error);
        
    }
  };
  const getSingleCompany = async (req, res) => {
    try {
        const result = await company.findById(req.params.id)
        if (!result) {
            return res.status(404).json({ message: 'People not found' })
        }
        res.json(result)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
  
  const deleteCompany = async (req, res) => {
    try {
      const companyId = req.params.id;
      await company.findByIdAndDelete(companyId);
      res.status(200).json({
        message: "People deleted successfully",
      });
    } catch (error) {
        console.log(error);
        
    }
  };
  
  export { getCompany, createCompany, updateCompany, getSingleCompany, deleteCompany};