import { people } from "../models/people.model.js";

const getPeople = async (req, res ) => {
    // console.log(req.headers)
    // res.cookie("access-token", "")
    try {
      const People = await people.find();
      res.status(200).json({
        message: "Todo fetched successfully",
        data: People,
      });
    } catch (error) {
        console.log(error);
        
    }
  };
  
  const createPeople = async (req, res ) => {
    try {
      const { firstname, lastname, company, country, phone ,email } = req.body;
      const People = await people.create({
        firstname,
        lastname,
        company,
        country,
        phone,
        email,
      });
      res.json(200).json({
        message: "Todo created successfully",
        data: Todo,
      });
    } catch (error) {
        console.log(error);
        
    }
  };
  
  const updatePeople = async (req, res ) => {
    try {
      const { firstname, lastname, company, country, phone ,email } = req.body;
      const peopleId = req.params.id;
      const updatedPeople = await todo.findByIdAndUpdate(
        { _id: peopleId },
        {
            firstname,
            lastname,
            company,
            country,
            phone,
            email,
        },
        { new: true }
      );
      res.status(201).json({
        message: "People updated successfully",
        data: updatePeople,
      });
    } catch (error) {
        console.log(error);
        
    }
  };
  
  const deletePeople = async (req, res) => {
    try {
      const peopleId = req.params.id;
      await people.findByIdAndDelete(todoId);
      res.status(200).json({
        message: "People deleted successfully",
      });
    } catch (error) {
        console.log(error);
        
    }
  };
  
  export { getPeople, createPeople, updatePeople, deletePeople};