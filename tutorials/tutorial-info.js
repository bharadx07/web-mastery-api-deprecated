const tutorialInfo = {
  webintro: { //the key is the slug that we get from the url
    name: "Intro to the web",
    unit: 1,
    lessons: {
      

    }
  },

  htmlcssintro: { //the key is the slug that we get from the url
    name: "Intro to HTML and CSS",
    unit: 2,
    lessons: {
      htmlintro: "HTMLIntro.md" //value is the actual file of the tutorial

    }
  }



} 
module.exports = tutorialInfo;