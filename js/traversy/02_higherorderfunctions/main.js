const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// // forEach - iterates through array
// // Regular Example
// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i].name);
// }
// // Higher Order Example
// companies.forEach(function(company) {
//     console.log(company.name);
// });
// companies.forEach((company) => console.log(company.name))

// // filter - filter things from the array
// // Regular Example
// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// // Higher Order Example
// // const filteredAges = ages.filter(function(age) {
// //     if(age >= 21) {
// //         return true;
// //     }
// // });
// const filteredAges = ages.filter((age) => (age >= 21));
// console.log(filteredAges);

// // Filter Retail Companies
// const retailCompanies = companies.filter((company) => (company.category == "Retail"));
// console.log(retailCompanies);

// // Filter Eighties Companies
// const eightiescompanies = companies.filter((company) => company.start >= 1980 && company.start < 1990);
// console.log(eightiescompanies);

// // Filter Companies That Lasted 10 Years
// const decadecomp = companies.filter((company) => (company.end - company.start) >= 10);
// console.log(decadecomp);

// // map - creates new arrays from current array
// // Create Array of company names;
// const companyNames = companies.map(function(company) {
//     return company.name;
// })
// console.log(companyNames);

// // sort - sorts array
// // sort by company start
// const sortedCompanies = companies.sort(function(company1, company2) {
//     if (company1.start > company2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

// // sorts companies by most recent
// const recentComps = companies.sort(function(a, b) {
//     if (a.end < b.end) {
//         return 1;
//     } else {
//         return -1;
//     }
// })
// console.log(recentComps);

// Sort ages
const sortAges = ages.sort((a, b) => (a > b ? 1 : -1));
console.log(sortAges);

// // reduce - 
// const ageSum = ages.reduce(function(total, age) {
//     return total + age;
// }, 0);

const ageSum = ages.reduce((total, age) => total + age, 0) // second parameter (0) is value of total

console.log(ageSum);