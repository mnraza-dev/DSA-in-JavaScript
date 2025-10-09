const studentList = [
  { id: 1, name: "John Doe", grade: 85 },
  { id: 2, name: "Jane Smith", grade: 92 },
  { id: 3, name: "Michael Johnson", grade: 78 },
  { id: 4, name: "Sarah Wilson", grade: 95 },
  { id: 5, name: "David Brown", grade: 88 },
  { id: 6, name: "Emily Davis", grade: 90 },
  { id: 7, name: "Michael Wilson", grade: 82 },
  { id: 8, name: "Sarah Thompson", grade: 93 },
  { id: 9, name: "David Johnson", grade: 91 },
  { id: 10, name: "Emily Davis", grade: 87 },
];

const findStudent = (allStudents, sname) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i].name === sname) {
     
      console.log(`Student found: ${allStudents[i].name}`);
      return; 
    }
  }
  console.log("Student not found."); 
};

findStudent(studentList, "Emily Davis");