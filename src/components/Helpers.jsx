 export const scrollToSection = (category) => {
    const element = document. getElementById(category);
    if(element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
    console.log(element)
};

