const users = [{
	id: 1,
	name: 'Andrew',
	schoolId: 101
}, {
	id: 2,
	name: 'Jessica',
	schoolId: 999
}];

const grades = [{
	id: 1,
	schoolId: 101,
	grade: 86
}, {
	id: 2,
	schoolId: 102,
	grade: 87
}, {
	id: 3,
	schoolId: 103,
	grade: 88
}];

const getUser = (id) => {
	return new Promise((resolve, reject) => {
		const user = users.find((user) => user.id === id);
		if(user){
			resolve(user);
		} else {
			reject(`unable to find user with id: ${id}`);
		}
	});
};

const getGrades = (schoolId) => {
	return new Promise((resolve, reject) => {
		resolve(grades.filter((grade) => grade.schoolId === schoolId));
	});
};

getUser(2).then((user) => {
	console.log(user);
}).catch((e) => {
	console.log(e);
});

getGrades(103).then((grade) => {
	console.log(grade);
}).catch((e) => {
	console.log(e);
});