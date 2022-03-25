/* exported getStudentNames */
function getStudentNames(students) {
  var names = [];
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    names.push(student.name);
  }
  return names;
}
