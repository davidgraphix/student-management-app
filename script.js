let students = [];

document.getElementById('studentForm').addEventListener('submit', function (e) {
  e.preventDefault();

  let name = document.getElementById('name').value.trim();
  let age = parseInt(document.getElementById('age').value);
  let gender = document.getElementById('gender').value;
  let score = parseFloat(document.getElementById('score').value);
  let studentClass = document.getElementById('studentClass').value.trim();

  // ✅ Validation
  if (!name || isNaN(age) || isNaN(score) || !studentClass) {
    alert("Please fill in all fields correctly");
    return;
  }

  // ✅ Grading
  let grade = '';
  if (score >= 70) grade = 'A';
  else if (score >= 60) grade = 'B';
  else if (score >= 50) grade = 'C';
  else grade = 'F';

  // ✅ Add to array
  let student = { name, age, gender, score, studentClass, grade };
  students.push(student);

  displayStudents(students);
  updateSummary();
  this.reset();
});

// ✅ Display Students
function displayStudents(data) {
  let table = '<tr><th>Name</th><th>Age</th><th>Gender</th><th>Class</th><th>Score</th><th>Grade</th></tr>';
  for (let s of data) {
    table += `<tr>
      <td>${s.name}</td>
      <td>${s.age}</td>
      <td>${s.gender}</td>
      <td>${s.studentClass}</td>
      <td>${s.score}</td>
      <td>${s.grade}</td>
    </tr>`;
  }
  document.getElementById('studentTable').innerHTML = table;
}

// ✅ Summary
function updateSummary() {
  let total = students.length;
  let avg = students.reduce((acc, cur) => acc + cur.score, 0) / total;
  document.getElementById('summary').innerText = `Total Students: ${total} | Average Score: ${avg.toFixed(2)}`;
}

// ✅ Search
document.getElementById('search').addEventListener('input', function () {
  let value = this.value.toLowerCase();
  let filtered = students.filter(s => s.name.toLowerCase().includes(value));
  displayStudents(filtered);
});







// Breakdown:
// Form Handling: Grabs input values, validates them, and adds them to the array.

// Grading Logic: Uses conditionals to assign A, B, C, or F based on score.

// Display Function: Uses a for...of loop to render students in a table.

// Summary Function: Uses .reduce() to calculate average and .length for total.

// Search Feature: Filters array using .filter() and .includes() to allow real-time search.