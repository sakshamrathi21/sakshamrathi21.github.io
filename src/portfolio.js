/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Saksham Rathi",
  title: "Hi all, I'm Saksham",
  subTitle: emoji(
    "I am a fourth year undergraduate student at IIT Bombay. I hail from Jodhpur, Rajasthan. My major interests include programming, finance and solving puzzles."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1IHGu4gck7Y6Hp_QQnf8R0Tf-1E3ArKZk/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sakshamrathi21",
  linkedin: "https://www.linkedin.com/in/sakshamrathi21/",
  gmail: "sakshamrathi21@gmail.com",
  facebook: "https://www.facebook.com/Sakshamrathi21/",
  instagram: "https://www.instagram.com/sakshamrathi21/",
  twitter: "https://x.com/sakshamrathi21",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "IIT Bombay",
      logo: require("./assets/images/iitb.png"),
      subHeader:
        "Pursuing majors in Computer Science and Engineering (CSE) along with honors and minor in Machine Intelligence and Data Science -- CMINDS",
      duration: "October 2022 - May 2026"
    },
    {
      schoolName: "Disha Delphi Public School, Kota",
      logo: require("./assets/images/ddps.jpeg"),
      subHeader:
        "Pursued my senior secondary education in Science-Maths -- CBSE",
      duration: "April 2020 - July 2022",
      desc: "Secured 99.0% in CBSE Class 12th Board Examination"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Delhi Public School, Jodhpur",
      logo: require("./assets/images/dps.jpeg"),
      subHeader: "Pursued my primary and secondary education -- CBSE",
      duration: "April 2008 - March 2020",
      desc: "Secured 98.6% in CBSE Class 10th Board Examination"
    }
  ]
};

const mentorships = {
  display: true, // Set false to hide this section
  experiences: [
    {
      title: "Department Academic Mentor - Student Mentorship Programme",
      organization: "IITB CSE Department",
      duration: "May 2024 – May 2025",
      description:
        "Selected via a rigorous procedure of SoP, Peer Reviews, and Interviews to be part of a team of 37 out of 90 applicants. Guiding sophomores on academic and extra-curricular decisions and helping them navigate their curriculum"
    },
    {
      title: "Mentor - Seasons of Code",
      organization: "Web and Coding Club, IIT Bombay",
      duration: "May 2024 - August 2024",
      description:
        "Instructed a group of 25 students for Competitive Programming and provided them the appropriate resources and problems for Dynamic Programming, Sorting, Greedy, Graphs, Trees, Range and String Algorithms"
    },
    {
      title: "Mentor - Winter in Data Science",
      organization: "Analytics Club, IIT Bombay",
      duration: "Aug 2023 - Dec 2023",
      description:
        "Guided and instructed a group of 40 freshmen students enrolled in a semester-long calculus course. Actively collaborated with the professors to ensure the seamless and effective execution of the course"
    }
  ]
};

const research = {
  display: true, // Set false to hide this section
  experiences: [
    {
      title: "Compressive Lognormal Regression",
      guide: "Prof. Ajit Rajwade",
      duration: "August 2024 - August 2025",
      description:
        "Improving on the current viral load estimators used in compressed sensing pool testing methods for RT-PCR. Utilizing Bayesian inference to estimate distributions of infected samples and errors in their testing parameters. Using combinatorial group testing and compressed sensing to improve upon algorithms for deconvoluting pooled tests"
    }
  ]
};

const teachingAssistantships = {
  display: true, // Set false to hide this section
  experiences: [
    {
      course: "CS105: Discrete Structures",
      instructor: "Prof. S Akshay",
      duration: "May 2025 – December 2025"
      // description: "Conducted lab sessions, prepared weekly quizzes, and helped automate the grading process for over 300 students."
    },
    {
      course: "CS236: Operating Systems",
      instructor: "Prof. Mythili Vutukuru",
      duration: "December 2025 – May 2025",
      description:
        "Collaborated with the professor in creating labs, exams, autograders, quizzes and practice problems"
    },
    {
      course: "CS215: Data Analysis and Interpretation",
      instructor: "Prof. Sunita Sarawagi",
      duration: "August 2025 – December 2025",
      description:
        "Instructed sophomore students, offering guidance and support both during tutorials and doubt solving sessions. Collaborated with the professor in creating weekly quizzes, exams, assignments, practice problems and tutorial notes and grading"
    },
    {
      course: "CS108: Software Systems Lab",
      instructor: "Prof. Kameswari Chebrolu",
      duration: "November 2024 – May 2025",
      description:
        "Instructed a cohort of 50 freshman students, offering guidance and support both during tutorial and lab hours. Collaborated with the professor in creating labs, exams, autograders, quizzes, practice problems and tutorial notes"
    },
    {
      course: "MA105: Calculus",
      instructor: "Prof. Ravi Raghunathan",
      duration: "August 2023 – November 2024",
      description:
        "Guided and instructed a group of 40 freshmen students enrolled in a semester-long calculus course. Actively collaborated with the professors to ensure the seamless and effective execution of the course"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Citadel",
      companylogo: require("./assets/images/citadel.webp"),
      date: "May 2025 – July 2025"
    },
    {
      role: "Applied Scientist Intern",
      company: "Amazon",
      companylogo: require("./assets/images/amazon.jpg"),
      date: "May 2024 – July 2024",
      descBullets: [
        "Worked on Amazon's Large Language Model Olympus and improved its instruction following ability",
        "Implemented Classifier-free Guidance method to enhance focus on key parts of user queries and system prompts, optimizing the balance between conditional and unconditional probabilities using a hyper-parameter",
        "Evaluated the performance of Olympus and some open source models on various single and multi-turn datasets"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6375663539",
  email_address: "sakshamrathi21@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  teachingAssistantships,
  mentorships,
  research
};
