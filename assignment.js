// https://github.com/Iamparves/problem-solving

// Kilometer to Meter Converter
function kilometerToMeter(kilometer) {
	if (kilometer >= 0) {
		let meter = kilometer * 1000;

		return meter;
	} else {
		return 'Kilometer value can\'t be negative';
	}
}


// Calculate Budget for Electronics Shopping
function budgetCalculator(watch, phone, laptop) {
	if ((typeof watch == "number" && watch >= 0) && (typeof phone == "number" && phone >= 0) && (typeof laptop == "number" && laptop >= 0)) {
		// Calculate buget for different prodcuts
		let watchBudget = watch * 50;
		let phoneBudget = phone * 100;
		let laptopBudget = laptop * 500;

		// Calculate total budget
		let totalBudget = watchBudget + phoneBudget + laptopBudget;

		return totalBudget;
	} else {
		return 'Please Input correct Values';
	}
}


// Calculate Hotel Cost
function hotelCost(day) {
	if (typeof day == 'number' && day >= 0) {
		if (day <= 10) {
			// Calculate cost if day is less than 11
			let cost = day * 100;

			return cost;
		} else if (day <= 20) {
			// Calculate cost if day is less than 21
			let firstTenDays = 10 * 100;
			let remainingDays = (day - 10);
			let cost = firstTenDays + (remainingDays * 80);

			return cost;
		} else {
			// Calculate cost if day is 21 or more
			let firstTenDays = 10 * 100;
			let secondTenDays = 10 * 80;
			let remainingDays = (day - 20);
			let cost = firstTenDays + secondTenDays + (remainingDays * 50);

			return cost;
		}
	} else {
		return 'Please input correct day number';
	}
}


// Find the largest name in an array
function megaFriend(friendsArray) {
	if (Array.isArray(friendsArray) && friendsArray.length > 0) {
		let largestName = friendsArray[0];

		for (let i = 1; i < friendsArray.length; i++) {
			// Check if currentName is actually a string or not
			if (typeof friendsArray[i] == 'string') {
				let currentName = friendsArray[i];

				// Check if largestName's length is smaller than currentName's length or not
				if (largestName.length < currentName.length) {
					largestName = currentName;
				}
			} else {
				return 'Please provide an array with only string';
			}
		}

		return largestName;
	} else {
		return 'Please provide an array with miminum one value';
	}
}

console.log(kilometerToMeter(40.5));
console.log(budgetCalculator(10, 8, 2));
console.log(hotelCost(23));
console.log(megaFriend(["Sajjad Amin", "Rawnak Rafi", "Mahmudul Islam", "Mahmudul Hasan"]));