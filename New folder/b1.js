let student = {
  name: "Nguyen Van A",
  age: 20,
  gender: "male",
  scores: {
    math: 8,
    english: 7,
    science: 9,
  },
};
console.log(student.name);
console.log((student.scores.math + student.scores.english + student.scores.science)/3.0);
student.address = "Ha Noi"
delete student.gender;
console.log(student);
