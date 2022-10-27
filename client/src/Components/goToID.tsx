const scrollToTargetAdjusted = (id: string) => {
	var element = document.getElementById(id);
	var headerOffset = 70;
	var elementPosition = element?.getBoundingClientRect().top;

	var offsetPosition = elementPosition ? elementPosition + window.pageYOffset - headerOffset : 0;

	window.scrollTo({
		top: offsetPosition,
		behavior: 'smooth',
	});
};

const goToID = (id: string) => {
	setTimeout(scrollToTargetAdjusted, 0, id);
};

export default goToID;
