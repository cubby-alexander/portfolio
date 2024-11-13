// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import nodeIcon from "./images/node.svg"
import typescriptIcon from "./images/typescript.svg"
import pythonIcon from "./images/python.svg"
import postgresIcon from "./images/postgres.svg"
import chatgptIcon from "./images/chatgpt.svg"
import dockerIcon from "./images/docker.svg"
import digitaloceanIcon from "./images/digitalocean.svg"
import awsIcon from "./images/aws.svg"
import kubernetesIcon from "./images/kubernetes.svg"
import rubyIcon from "./images/ruby.svg"

// Project Screenshots
import tipple from "./images/Tipple.png";
import scipricore from "./images/Scipricore.png";
import trotrweb from "./images/TrotrWeb.png";
import crownedicts from "./images/CrownEdicts.png";
import beanstalk from "./images/Beanstalk.png";
import meridian from "./images/Meridian.png";
import helios from "./images/Helios.png";

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {

  //   Header Details ---------------------
  name: "Cubby",
  headerTagline: [
    //Line 1 For Header
    "A full stack developer &",
    //Line 2 For Header
    "problem-solver",
    //Line 3 For Header
    "w/ cross-functional experience",
  ],
  //   Header Paragraph
  headerParagraph:
    "My speciality is building SPAs + mobile apps, and I have strong proficiency with pipelines + infrastructure, AI-augmented userflows, and UI/UX.",

  //Contact Email
  contactEmail: "hall.j.alexander@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Helios", //Project Title - Add Your Project Title Here
      para:
        "AI-augmented solution for discovering and deploying satellite services.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        helios,
      //Project URL - Add Your Project Url Here
      url: "helios-osm.com",
    },
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
      url: "https://trotr-client.herokuapp.com/",
    },
    {
      title: "BeanStalk", //Project Title - Add Your Project Title Here
      para:
        "Website to find and review specialty coffee roasters with unique blends.", // Add Your Service Type Here
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
      url: "https://scipricore.herokuapp.com",
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
    "I'm a self-taught developer. I love software that solves problems and is delightful to use.",
  aboutParaTwo:
    "I grew up in Hawaii and Maine, studied moral philosophy and political science in school, " +
    "then moved to Washington, DC to work in the U.S. Senate. " +
    "I quickly found entrepreneurship more compelling, and through it came to a deeper understanding and appreciation of technology.",
  aboutParaThree:
    "Now I just want to build.",
  aboutImage:
    "./images/",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [

    {
      img: jsIcon,
      para:
        "ES6 Javascript",
    },
    {
      img: typescriptIcon,
      para:
        "Typescript",
    },
    {
      img: pythonIcon,
      para:
        "Python",
    },
    {
      img: nodeIcon,
      para:
        "Node.js",
    },
    {
      img: reactIcon,
      para:
        "Highly adept at delivering SPA and mobile solutions coded in React and React Native.",
    },
    {
      img: postgresIcon,
      para:
        "PostgreSQL",
    },
    {
      img: awsIcon,
      para:
        "AWS",
    },
    {
      img: digitaloceanIcon,
      para:
        "Digital Ocean",
    },
    {
      img: chatgptIcon,
      para:
        "Able to leverage AI to augment userflows and improve developer experience.",
    },
    {
      img: dockerIcon,
      para:
        "Docker",
    },
    {
      img: kubernetesIcon,
      para:
        "Kubernetes",
    },
    {
      img: githubIcon,
      para:
        "Github",
    },
    {
      img: htmlIcon,
      para:
        "HTML 5",
    },
    {
      img: cssIcon,
      para:
        "CSS 3",
    }
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Development Goals",
  promotionPara:
    "Currently, I'm striving to deepen my practice of software engineering as a craft, while also making more senior / independent contributions on my teams.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Lets discuss",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/cubbyalexander" },
  ],

  // End Contact Section ---------------
}
