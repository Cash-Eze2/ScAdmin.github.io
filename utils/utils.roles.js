const userRoles = {
  admin: [
    'searchStudent',
    'createHeadTeacher',
    'studentCourse',
    'createStudent',
    'createStaff',
    'createAdmin',
    'readStudent',
    'updateStudent',
    'deleteStudent',
    'readStudents',
    'readStaff',
    'deleteStaff',
    'updateStaff',
    'createCourse',
    'staffToCourse',
    'readCourse',
    'deletecourse',
    'updateCourse',
    'createClass',
    'readClass',
    'deleteClass',
    'updateClass',
    'createCourseData',
    'getCoursesScheme',
    'updateScheme',
    'getExams',
    'createRole',
    'readRoles',
    'createUserRole',
    'createAdmin',
    'getExamSummary',
    'teacherCourse',
    'courseClass',
    'searchGrade',
    'updateGrade',
    'createAttendance',
    'readAttendance',
    'updateAttendance',
    'createTimetable',
    'getAllTimetables',
    'updateTimetable',
    'deleteTimetable',
    'createEvent',
    'getAllEvents',
    'updateEvent',
    'deleteEvent',
    'examResult',
    'activities',
    'teacherData',
    'getTimetable',
    'studentData',
    'getTeachersExam',
    'sendlink',
    'staffToClass'
  ],
  headTeacher:[
    'getCoursesScheme',
    'updateScheme',
    'getExams',
    'createRole',
    'readRoles',
    'createUserRole',
    'getExamSummary',
    'teacherCourse',
    'courseClass',
    'searchGrade',
    'updateGrade',
    'createAttendance',
    'readAttendance',
    'updateAttendance',
    'createTimetable',
    'getAllTimetables',
    'updateTimetable',
    'deleteTimetable',
    'createEvent',
    'getAllEvents',
    'updateEvent',
    'deleteEvent',
    'examResult',
    'activities',
    'teacherData',
    'getTimetable',
    'studentData',
    'getTeachersExam',
    'sendlink',
    'staffToClass'
  ],
  staff: [
    'searchStudent',
    'readStudent',
    'readStudents',
    'updateCourse',
    'createClass',
    'deleteClass',
    'staffToCourse',
    'updateClass',
    'teacherCourse',
    'createCourse',
    'readClass',
    'updateScheme',
    'getCoursesScheme',
    'createExam',
    'updateExam',
    'deleteExam',
    'createQuestion',
    'updateQuestion',
    'deleteQuestion',
    'createOption',
    'updateOption',
    'deleteOption',
    'createAttendance',
    'readAttendance',
    'createUserRole',
    'getExamSummary',
    'searchGrade',
    'updateGrade',
    'updateAttendance',
    'createTimetable',
    'getAllTimetables',
    'updateTimetable',
    'deleteTimetable',
    'examResult',
    'teacherData',
    'getTimetable',
    'deletecourse',
    'getTeachersExam',
    'studentCourse'

  ],
  pupil: ['readStudent', 'createAnswer', 'updateAnswer', 'studentData'],
};

module.exports = userRoles;
