var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(std_name, std_age, std_rollnumber) {
        var _this = _super.call(this, std_name, std_age) || this;
        _this.std_courses = [];
        _this.rollNumber = std_rollnumber;
        return _this;
    }
    Students.prototype.register_For_course = function (course) {
        this.std_courses.push(course);
    };
    return Students;
}(Person));
var Instructor = /** @class */ (function (_super) {
    __extends(Instructor, _super);
    function Instructor(Inst_name, Inst_age, salary) {
        var _this = _super.call(this, Inst_name, Inst_age) || this;
        _this.Inst_Cousrse = [];
        _this.salary = salary;
        return _this;
    }
    Instructor.prototype.assignCourses = function (course) {
        this.Inst_Cousrse.push(course);
    };
    return Instructor;
}(Person));
var Course = /** @class */ (function () {
    function Course(id, name) {
        this.students = [];
        this.instructor = [];
        this.id = id;
        this.name = name;
    }
    Course.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Course.prototype.setInstructor = function (instructor) {
        this.instructor.push(instructor);
    };
    return Course;
}());
var Course1 = new Course(1000, "MeataVerse");
var Course1_Student = new Students("Arham", 18, "1");
var Course1_Instructor = new Instructor("Zia Khan", 50, 250000);
Course1.addStudent(Course1_Student);
Course1.setInstructor(Course1_Instructor);
Course1_Student.register_For_course(Course1);
Course1_Instructor.assignCourses(Course1);
console.log(Course1);
console.log(Course1.students[0]);
console.log(Course1.instructor[0]);
var Course2 = new Course(1001, "Blockchain");
var Course2_Student = new Students("Ahmed", 18, "2");
var Course2_Instructor = new Instructor("Zia Khan", 50, 250000);
Course2.addStudent(Course2_Student);
Course2.setInstructor(Course2_Instructor);
Course2_Student.register_For_course(Course2);
Course2_Instructor.assignCourses(Course2);
console.log(Course2);
