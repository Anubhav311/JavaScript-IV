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
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
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
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }

    studentsGrading(student) {
        let varb = Math.floor(Math.random() * Math.floor(10));
        if(varb % 2 === 0) {
            student.grade += varb;
        } else {
            student.grade -= varb;
        }
        console.log(student.grade);
    }
}

class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubject = props.favSubject;
        this.grade = props.grade;
    }

    listsSubjects() {
        for(let i=0; i<this.favSubject.length; i++) {
            console.log(this.favSubject[i]);
        }
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun the sprint challenge on ${subject}`;
    }

    graduation() {
        if(this.grade > 70) {
            console.log("You're a Graduate!");
        } else {
            console.log("Your need to work harder. Your score is below 70%.");
        }
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



//OBJECTS AREA
//student 1
const anubhav = new Student({
    name: "Anubhav",
    age: 28,
    location: "India",
    gender: "M",
    previousBackground: "Law",
    className: "Web18",
    favSubject: ["Physics", "Computer Science", "Biology", "Programming", "JavaScript"],
    grade: 70
})

// console.log(anubhav);
// console.log(anubhav.speak());
// console.log(anubhav.listsSubjects());
// console.log(anubhav.PRAssignment('JavaScript'));
// console.log(anubhav.sprintChallenge("JavaScript"));
// console.log(anubhav.graduation());


//student 2
const steveLanier = new Student({
    name: "Steve Lanier",
    age: 25,
    location: "USA",
    gender: "M",
    previousBackground: "James Bond",
    className: "Web18",
    favSubject: ["JavaScript", "CSS", "JavaScript", "HTML", "JavaScript"],
    grade: 100
})

console.log(steveLanier);
console.log(steveLanier.speak());
console.log(steveLanier.listsSubjects());
console.log(steveLanier.PRAssignment('JavaScript'));
console.log(steveLanier.sprintChallenge("JavaScript"));
// console.log(steveLanier.graduation());


//student 3
const ironMan = new Student({
    name: "Iron Man",
    age: 40,
    location: "USA",
    gender: "M",
    previousBackground: "Spoiled Brat",
    className: "Web18",
    favSubject: ["Mechanics", "Electrical", "Computer", "Space"],
    grade: 30
})

// console.log(ironMan);
// console.log(ironMan.speak());
// console.log(ironMan.listsSubjects());
// console.log(ironMan.PRAssignment('JavaScript'));
// console.log(ironMan.sprintChallenge("JavaScript"));
// console.log(ironMan.graduation());

//PM 1
const lidiia = new ProjectManager({
    name: "Lidiia Gallagher",
    age: 25,
    location: "USA",
    gender: "M",
    specialty: "Memes",
    favLanguage: "English",
    catchPhrase: "Please submit your Airtable",
    gradClassName: "WEB12",
    favInstructor: "Josh Knell",
})

console.log(lidiia);
console.log(lidiia.name);
console.log(lidiia.age);
console.log(lidiia.location);
console.log(lidiia.specialty);
console.log(lidiia.favLanguage);
console.log(lidiia.catchPhrase);
console.log(lidiia.gradClassName);
console.log(lidiia.faveInstructor);
console.log(lidiia.speak());
console.log(lidiia.demo("JavaScript"));
console.log(lidiia.grade(steveLanier, "JavaScript"));
lidiia.studentsGrading(steveLanier);
console.log(steveLanier.grade);

//PM 2
const doraemon = new ProjectManager({
    name: "Doraemon",
    age: 1000,
    location: "Japan",
    gender: "M",
    specialty: "Magic Pockets",
    favLanguage: "Japanese",
    catchPhrase: "I’m afraid Nobita’s brain is retarded.",
    gradClassName: "WEB1",
    favInstructor: "Josh Knell",
})

// console.log(doraemon);
// console.log(doraemon.name);
// console.log(doraemon.age);
// console.log(doraemon.location);
// console.log(doraemon.specialty);
// console.log(doraemon.favLanguage);
// console.log(doraemon.catchPhrase);
// console.log(doraemon.gradClassName);
// console.log(doraemon.faveInstructor);
// console.log(doraemon.speak());
// console.log(doraemon.demo("JavaScript"));
// console.log(doraemon.grade(steveLanier, "JavaScript"));
// doraemon.studentsGrading(anubhav);
// console.log(doraemon.grade);

//PM 3
const magneto = new ProjectManager({
    name: "Magneto",
    age: 45,
    location: "USA",
    gender: "M",
    specialty: "Attractiveness (magnetic)",
    favLanguage: "English",
    catchPhrase: "Humans should die",
    gradClassName: "WEB125",
    favInstructor: "Josh Knell",
})

// console.log(magneto);
// console.log(magneto.name);
// console.log(magneto.age);
// console.log(magneto.location);
// console.log(magneto.specialty);
// console.log(magneto.favLanguage);
// console.log(magneto.catchPhrase);
// console.log(magneto.gradClassName);
// console.log(magneto.faveInstructor);
// console.log(magneto.speak());
// console.log(magneto.demo("JavaScript"));
// console.log(magneto.grade(steveLanier, "JavaScript"));
// magneto.studentsGrading(anubhav);
// console.log(anubhav.grade);



//instructor 1
const joshKnell = new Instructor({
    name: "Josh Knell",
    age: 40,
    location: "Utah",
    gender: "M",
    specialty: "Banjo",
    favLanguage: "HTML",
    catchPhrase: "Goofing around"
})

console.log(joshKnell);
console.log(joshKnell.speak());
console.log(joshKnell.demo("JavaScript"));
console.log(joshKnell.grade(steveLanier, "JavaScript"));

//instructor 2
const LKY = new Instructor({
    name: "Lee Kuan Yew",
    age: 80,
    location: "Singapore",
    gender: "M",
    specialty: "Leadership",
    favLanguage: "HTML",
    catchPhrase: "As long as I am in-charge, nobody is going to knock it down."
})

// console.log(LKY);
// console.log(LKY.speak());
// console.log(LKY.demo("JavaScript"));
// console.log(LKY.grade(steveLanier, "JavaScript"));

//instructor 3
const bruce = new Instructor({
    name: "Bruce Banner",
    age: 40,
    location: "Utah",
    gender: "M",
    specialty: "Hulk",
    favLanguage: "English",
    catchPhrase: "Gggrrrraaaaahhhhhhhh"
})

// console.log(bruce);
// console.log(bruce.speak());
// console.log(bruce.demo("JavaScript"));
// console.log(bruce.grade());


//GRADING TIME
for(i=0; i<10; i++) {
    lidiia.studentsGrading(steveLanier);
}
steveLanier.graduation();