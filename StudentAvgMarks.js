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

console.log(getTopStudent(students));

function rankStudents(students) {
  const withAverage = students.map((student) => {
    const marks = Object.values(student.subjects); // [80, 70, 90]

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

  withAverage.sort((a, b) => b.average - a.average);

  return withAverage.map((student, index) => ({
    ...student,
    rank: index + 1,
  }));
}

const students1 = [
  {
    name: "Aman",
    subjects: {
      math: 80,
      english: 70,
      science: 90,
    },
  },
  {
    name: "Riya",
    subjects: {
      math: 95,
      english: 85,
      science: 90,
    },
  },
  {
    name: "Kunal",
    subjects: {
      math: 60,
      english: 65,
      science: 70,
    },
  },
];

console.log(rankStudents(students1));

function rankStudentsByTop2Subjects(students) {
  const withAverage = students.map((student) => {
    const marks = Object.values(student.subjects); // [80, 70, 90]

    // Descending order: highest first
    marks.sort((a, b) => b - a); // [90, 80, 70]

    const top2 = marks.slice(0, 2); // [90, 80]

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

console.log(rankStudentsByTop2Subjects(students1));
