var studentArray = [];
var presentArray = [];
var absentArray = [];
var studentCounter = 0;
var presentCounter = 0;
var absentCounter = 0;

var numberOfStudents = Number(prompt("👥 Enter the Number of Students: "));

for (var i = 0; i < numberOfStudents; i++) {
  var studentName = prompt("✏️ Enter the Name of Student " + (i + 1) + ": ");
  studentArray.push(studentName);
  studentCounter++;

  var attendance = prompt("📋 Is " + studentName + " (✅ Present OR ❌ Absent)?");

  if (attendance.toLowerCase() === "present") {
    presentArray.push(studentName);
    presentCounter++;
  } else if (attendance.toLowerCase() === "absent") {
    absentArray.push(studentName);
    absentCounter++;
  } else {
    alert("⚠️ ==Please Enter either ✅ Present or ❌ Absent==");
  }
}

alert(
  "👥 Total Students: " +
  studentCounter +
  "\n📋 Students List: " +
  studentArray.join(", ")
);

alert(
  "✅ Total Presentees: " +
  presentCounter +
  "\n🟢 Present Students List: " +
  presentArray.join(", ")
);

alert(
  "❌ Total Absentees: " +
  absentCounter +
  "\n🔴 Absent Students List: " +
  absentArray.join(", ")
);

