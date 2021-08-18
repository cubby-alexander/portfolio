// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Project Screenshots
import tipple from "./images/Tipple.png";
import scipricore from "./images/Scipricore.png";
import trotrweb from "./images/TrotrWeb.png";
import crownedicts from "./images/CrownEdicts.png";
import beanstalk from "./images/Beanstalk.png";
import meridian from "./images/Meridian.png";

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {

  //   Header Details ---------------------
  name: "Cubby Alexander",
  headerTagline: [
    //Line 1 For Header
    "Full stack w/ focus",
    //Line 2 For Header
    "on rapid prototyping",
    //Line 3 For Header
    "& modern architecture",
  ],
  //   Header Paragraph
  headerParagraph:
    "My specialities are SPAs, mobile apps, and serverless backend architecture. I live for user-centered design and eat, sleep, and breathe quick product iteration cycles.",

  //Contact Email
  contactEmail: "hall.j.alexander@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Meridian", //Project Title - Add Your Project Title Here
      para:
        "Management training and development tool deployed with AWS.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        meridian,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/cubby-alexander/meridian",
    },
    {
      title: "Trotr Web and Mobile", //Project Title - Add Your Project Title Here
      para:
        "Web and mobile versions of a social location sharing app running with geolocation APIs.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        trotrweb,
      //Project URL - Add Your Project Url Here
      url: "trotr-client.herokuapp.com",
    },
    {
      title: "BeanStalk", //Project Title - Add Your Project Title Here
      para:
        "Coffee bean roast search and review platform.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        beanstalk,
      //Project URL - Add Your Project Url Here
      url: "https://beanstalk-app.herokuapp.com/",
    },
    {
      title: "Scipricore Agenda", //Project Title - Add Your Project Title Here
      para:
        "Cyberpunk text-based adventure video game running as a true React-based SPA.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        scipricore,
      //Project URL - Add Your Project Url Here
      url: "www.scipricore.herokuapp.com",
    },
    {
      title: "Crown Edicts", //Project Title - Add Your Project Title Here
      para:
        "Survey tool for finding hairstyles and nearby barbers that can style them.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        crownedicts,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/cubby-alexander/crown-edicts-client",
    },
    {
      title: "Tipple", //Project Title - Add Your Project Title Here
      para:
        "Takeout cocktail search for discovering restaurants in your area that .", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        tipple,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/OriginFire/tipple",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I'm a self- / bootcamp-taught developer with a deep respect for and fascination with technology." +
    "",
  aboutParaTwo:
    "I grew up in Hawaii and Maine (nine years each). After studying moral philosophy and political science at " +
  "the University of King's College in Halifax, I moved to Washington, DC to work in the U.S. Senate. " +
    "I quickly found entrepreneurship a more compelling focus, and through it came to a deeper understanding and appreciation of technology.",
  aboutParaThree:
    "Now I just want to find a project on which to go turbo.",
  aboutImage:
    "./images/",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "Proficient at developing websites from scratch and utilizing features of HTML 5.",
    },
    {
      img: cssIcon,
      para:
        "Able to implement rich styles, animations, and designs with CSS 3.",
    },
    {
      img: jsIcon,
      para:
        "Skilled at building complex site features and functionality using ES6 Javascript.",
    },
    {
      img: reactIcon,
      para:
        "Highly adept at delivering SPA and mobile solutions coded in React and React Native.",
    },
    {
      img: designIcon,
      para:
        "Competent at developing clean, responsive designs for new interfaces and layouts.",
    },
    {
      img: codeIcon,
      para:
        "Able to deliver scalable code on teams using version control and continuous integration.",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "What Would Be Nice",
  promotionPara:
    "I want to be around people who set high standards for themselves and are " +
    "energized by daunting challenges. I want 'difficult' to go hand-in-hand with 'daring'. " +
    "I want to shun the question 'How can we make it harder to quit' and instead ask " +
    "'How can we make it irresistible to live without?'",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Lets discuss",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/cubbyalexander" },
  ],

  // End Contact Section ---------------
}
