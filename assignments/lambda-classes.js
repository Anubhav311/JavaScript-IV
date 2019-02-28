// CODE here for your Lambda Classes

//CLASSES AREA
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubject = props.favSubject;
    }

    listsSubjects() {
        for(i=0; i<this.favSubject.length; i++) {
            console.log(this.favSubject[i]);
        }
    }

    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${student.name} has begun the sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.faveInstructor = props.faveInstructor;
    }

    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standup times!`;
    }

    debugsCode(student, subject) {
        return `${name} debugs ${student.name}'s code on ${subject}`;
    }


}


