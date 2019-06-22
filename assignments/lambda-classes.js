// CODE here for your Lambda Classes
class Person {
  constructor() {
    this.name = name;
    this.age = age;
    this.location = location;
  }

  speak() {
    console.log(`Hello. My name is ${this.name}. I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(props) {
    super(props);
    this.specialty = specialty;
    this.favLanguage = favLanguage;
    this.catchPhrase = catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }
}

class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = previousBackground;
    this.className = className;
    this.favSubjects = favLanguage;
    this.grade = grade;
  }

  listsSubjects() {
    console.log(this.favSubjects);
  }

  PRAssignment(subject) {
    console.log(`${student.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${student.name} has begun sprint challenge on ${subject}`);
  }

  changeGrade(newGrade) {
    this.grade += newGrade;
  }

  graduate() {
    this.grade < 70 ? false : true;
  }
}

class ProjectManager extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = gradClassName;
    this.favInstructor = favInstructor;
  }

  standUp(channel) {
    console.log(`${name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${name} debugs ${student.name}'s code on ${subject}`)
  }
}
