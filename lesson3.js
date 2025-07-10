// Lesson 3
// Typescript Object
var employee = {
    firstName: 'Leomar',
    lastName: 'Abad',
    age: 28,
    jobTitle: 'Web Developer',
};
console.log(employee);
//  The Object type, however, describes functionality that is available on all objects.
var vacant = {};
console.log(vacant.toString);
// Typescript Array
var skills = ["Web Developer, Game Developer", 'Software Engineer'];
skills.push('Mobile App Developer');
console.log(skills);
// Array properties and methods
var series = [1, 2, 3];
console.log(series.length);
// Storing values of mixed types
var scores1 = ['Progrmamming', 5, 'Software Design', 4];
// Infer same as above
var scores2 = ['Progrmamming', 5, 'Software Design', 4];
