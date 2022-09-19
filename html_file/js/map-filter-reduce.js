const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Filter
const usersFilter = users.filter(user => user.languages.length > 2);

for(let user of usersFilter) {
    console.log(user);
}

//Map
const usersMap = users.map(user => user.email);

for(let user of usersMap) {
    console.log(user);
}

//Reduce
const usersReduce = users.reduce((arr, user) => {
    if(user.yearsOfExperience) {
    arr.push(user.yearsOfExperience);
    }
    return arr;
}, []);
console.log(usersReduce);

const totalYears = usersReduce.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);
console.log(totalYears);

const averageYears = totalYears / usersReduce.length;
console.log(averageYears);

//Reduce #2
const usersEmail = users.reduce((email, user) => {
    if(user.email.length > email.length) {
        email = user.email
    }
    return email;
}, "");
console.log(usersEmail);

//Reduce #3
// const usersName = users.reduce((arr, user) => {
//     if(user.name) {
//         arr.push(user.name);
//     }
//     return arr;
// }, [])
// console.log(usersName);
// console.log(`Your instructors are: ${usersName}`);

const instructorIntro = users.reduce((names, user, index) => {
    if (index !== users.length -1) {
    return `${names}${user.name}, `;
    } else {
        return `${names}and ${user.name}.`;
    }
}, "Your instructors are: ");
console.log(instructorIntro);











