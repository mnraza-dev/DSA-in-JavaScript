const studentDatabase = ["jordan", "michael", "erich", "alex", "jake"];

const findStudent = (studentDatabase, sname) => {
  for (let i = 0; i < studentDatabase.length; i++) {
    if (studentDatabase[i] === sname) {
      console.log(`Student found: ${studentDatabase[i]}`);
      return;
    }
  }
  console.log("Student not found.");
};

findStudent(studentDatabase, "Humayun");