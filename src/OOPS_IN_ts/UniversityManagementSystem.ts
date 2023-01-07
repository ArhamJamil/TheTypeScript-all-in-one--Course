class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    getName() {
        return this.name
    }
}

class Students extends Person {
    rollNumber: string;
    std_courses: Course[] = []
    constructor(std_name: string, std_age: number, std_rollnumber: string) {
        super(std_name, std_age)
        this.rollNumber = std_rollnumber

    }
    register_For_course(course: Course) {
        this.std_courses.push(course)
    }


}

class Instructor extends Person {
    salary: number
    Inst_Cousrse: Course[] = []
    constructor(Inst_name: string, Inst_age: number, salary: number) {
        super(Inst_name, Inst_age)
        this.salary = salary
    }
    assignCourses(course: Course) {
        this.Inst_Cousrse.push(course)
    }

}

class Course {
    id: number
    name:string
    students: Students[] = []
    instructor: Instructor[] = []

    constructor(id:number, name:string){
        this.id = id
        this.name = name
    }

    addStudent(student:Students){
        this.students.push(student)
    }
    setInstructor(instructor:Instructor){
        this.instructor.push(instructor)
    }
}

const Course1 = new Course(1000, "MeataVerse")
const Course1_Student = new Students("Arham", 18, "1")
const Course1_Instructor = new Instructor("Zia Khan", 50, 250000)

Course1.addStudent(Course1_Student)
Course1.setInstructor(Course1_Instructor)

Course1_Student.register_For_course(Course1)
Course1_Instructor.assignCourses(Course1)
console.log(Course1)
console.log(Course1.students[0])
console.log(Course1.instructor[0])



const Course2 = new Course(1001, "Blockchain")
const Course2_Student = new Students("Ahmed", 18, "2")
const Course2_Instructor = new Instructor("Zia Khan", 50, 250000)

Course2.addStudent(Course2_Student)
Course2.setInstructor(Course2_Instructor)

Course2_Student.register_For_course(Course2)
Course2_Instructor.assignCourses(Course2)

console.log(Course2)