/**
 * Topic: Student Marks Average Calculation and Ranking Utilities
 */

// ==========================================
// PROBLEM 1: Find Top Student by General Average
// ==========================================
function getTopStudent(students) {
  if (students.length === 0) return null;

  let topStudent = null;
  let maxAvg = -Infinity;

  for (let student of students) {
    if (!student.marks || student.marks.length === 0) continue;

    let sum = 0;
    for (let mark of student.marks) {
      if (typeof mark === "number") {
        sum += mark;
      }
    }

    let avg = sum / student.marks.length;

    if (avg > maxAvg) {
      maxAvg = avg;
      topStudent = student;
    }
  }

  return topStudent;
}

const students = [
  { name: "Aman", marks: [80, 90, 70] },
  { name: "Riya", marks: [85, 95, 90] },
  { name: "Kunal", marks: [60, 75, 70] },
];
console.log("Top Student (General Avg):", getTopStudent(students));


// ==========================================
// PROBLEM 2: Rank Students by Subject Averages
// ==========================================
function rankStudents(studentsList) {
  const withAverage = studentsList.map((student) => {
    const marks = Object.values(student.subjects); // e.g. [80, 70, 90]
    let sum = 0;
    for (let m of marks) {
      sum += m;
    }
    const avg = sum / marks.length;

    return {
      ...student,
      average: avg,
    };
  });

  // Sort by average descending
  withAverage.sort((a, b) => b.average - a.average);

  // Map ranks
  return withAverage.map((student, index) => ({
    ...student,
    rank: index + 1,
  }));
}

const studentsData = [
  {
    name: "Aman",
    subjects: { math: 80, english: 70, science: 90 },
  },
  {
    name: "Riya",
    subjects: { math: 95, english: 85, science: 90 },
  },
  {
    name: "Kunal",
    subjects: { math: 60, english: 65, science: 70 },
  },
];
console.log("Ranked Students:", rankStudents(studentsData));


// ==========================================
// PROBLEM 3: Rank Students by Top 2 Subjects
// ==========================================
function rankStudentsByTop2Subjects(studentsList) {
  const withAverage = studentsList.map((student) => {
    const marks = Object.values(student.subjects);
    // Sort descending to find highest scores
    marks.sort((a, b) => b - a);

    // Get the top 2 marks
    const top2 = marks.slice(0, 2);

    let sum = 0;
    for (let m of top2) {
      sum += m;
    }
    const avg = sum / top2.length;

    return {
      ...student,
      top2Average: avg,
    };
  });

  withAverage.sort((a, b) => b.top2Average - a.top2Average);

  return withAverage.map((student, index) => ({
    ...student,
    rank: index + 1,
  }));
}
console.log("Ranked Students by Top 2 Subjects:", rankStudentsByTop2Subjects(studentsData));
