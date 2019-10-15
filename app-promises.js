const users = [{
	id: 1,
	name: 'Andrew',
	schoolId: 101
}, {
	id: 2,
	name: 'Jessica',
	schoolId: 102
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

const getStatus = (userId) => {
	let user;
	return getUser(userId).then((tempUser) => {
		user = tempUser;
		return getGrades(user.schoolId);
	}).then((grades) => {
		let average = 0;
		if(grades.length > 0) {
			average = grades.map((grade) => grade.grade).reduce((a, b) =>  a + b) / grades.length;
		}
		//console.log(average);
		return `${user.name} has a ${average} %`;
	});
};

const getStatusAlt = async (userId) => {
	//throw new Error('This is an error');
	//return 'algo';
	const user = await getUser(userId);
	const grades = await getGrades(user.schoolId);
	//console.log(user, grades);
	let average = 0;
		if(grades.length > 0) {
			average = grades.map((grade) => grade.grade).reduce((a, b) =>  a + b) / grades.length;
		}
		//console.log(average);
		return `${user.name} has a ${average} %`;
};

getStatusAlt(2).then((name) => {
	console.log(name);
}).catch((e) => {
	console.log(e);
}); 

console.log(getStatusAlt());

/*getUser(2).then((user) => {
	console.log(user);
}).catch((e) => {
	console.log(e);
});

getGrades(103).then((grade) => {
	console.log(grade);
}).catch((e) => {
	console.log(e);
});

getStatus(1).then((grade) => {
	console.log(grade);
}).catch((e) => {
	console.log(e);
}); */