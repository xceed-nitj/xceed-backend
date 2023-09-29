const mongoose = require("mongoose");

// Define your Mongoose schema based on the interface
const studentSchema = new mongoose.Schema({
  ConfId: {
    type: String,
    required: true,
  },
  Type: {                  //through dropdown--class/lab/tut
    type: String,
    required: true,
  },
  SubCode: {              //subject code ="XXYZ-124"
    type: String,
    required: true,
  },
  Name: {                //teacher name ="abc"
    type: String,
    required: true,
  },
  Sem:{                 //semester- 1/2/3...
    type:Number,
    required:true,
  },
  Branch:{                 //branch- "Electrical"
    type:String,
    required:true,
  },
  Day:{                    //"mon,"tues" -dropdown
    type: String,
    required: true,
  },
  Slot:{                    //dropdown-"8.30-9.30"
    type: String,
    required: true,
  },
  Designation: {             //faculty-permanent/guest
    type: String,
    required: true,
  },
 
});

// Create the Mongoose model
const Student= mongoose.model("Student", studentSchema);

module.exports = Student;
