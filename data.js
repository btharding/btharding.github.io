const skills = [
  {
  'skill': 'HTML',
  'level': '5'
  },
  {
  'skill': 'Javascript',
  'level': '5'
  },
  {
  'skill': 'CSS',
  'level': '5'
  },
  {
  'skill': 'React',
  'level': '4'
  },
  {
  'skill': 'Java',
  'level': '4'
  },
  {
  'skill': 'Python',
  'level': '4'
  },
  {
  'skill': 'PHP',
  'level': '4'
  },
  {
  'skill': 'SQL',
  'level': '4'
  },
  {
  'skill': 'Django',
  'level': '3'
  },
  {
  'skill': 'C',
  'level': '2'
  },
  {
  'skill': 'Haskell',
  'level': '2'
  }
];

const experiences =[
  {
  'date': 'July 2018',
  'experience': 'Work Experience',
  'location': 'Wilxite',
  'description':'<ul><li>Worked on initial prototype for data-logging hardware for DisasterCare, including Bluetooth connectivity between data-collecting hardware and data-logging hardware using the Arduino and C++</li><li>Worked on front end web development for an accounting web-app using HTML and CSS</li></ul>'
  },
  {
  'date': 'Feb 2017 - Sept 2019',
  'experience': 'Gymnastics Coach',
  'location': 'Checkers Gymnastics',
  'description':'<ul><li>Worked as a team to lead junior coaches in delivering gymnastics sessions to large groups</li><li>Planned and organised sessions and workshops</li><li>Delegated coaching responsibilities to junior coaches</li></ul>'
  },
  {
  'date': 'Dec 2017 - Oct 2020',
  'experience': 'Customer Assistant',
  'location': 'McDonalds',
  'description': '<ul><li>Customer Facing - Served customers, took payments, and maintained high levels of cleanliness</li><li>Kitchen - Prepped food in line with food safety guidelines and managed stock levels based on customer frequency</li></ul>'
  },
  {
  'date': 'Jan 2020 - Present',
  'experience': 'Tutor',
  'location': 'MyTutor',
  'description': '<ul><li>Tutoring GCSE and A-Level Maths and Computer Science as well as Python programming</li><li>Write lesson plans and deliver one-on-one online lessons</li><li>Enhanced DBS check as part of the MyTutor Schools Program</li></ul>'
  },
  {
  'date': 'Sept 2020 - Present',
  'experience': 'Auditor',
  'location': 'Serve Legal',
  'description': '<ul><li>Responsible for ensuring shops adhere to age restriction laws.</li><li>Write detailed reports of staff actions and my overall experience.</li><li>Planned routes and timings between many audits in a single day.</li></ul>'
  }
];


const projects = [
  {
  'title': 'Veganalysis',
  'github':'https://github.com/btharding/Veganalysis',
  'link': 'https://btharding.github.io/Veganalysis/',
  'description': 'Based on a web-app made for the Lockdoneathon Hackathon in just 2 days, this web-app highlights the ecological impact of veganism by comparing the carbon footprint of recipes with their vegan counterparts.<br/>The front end is built off React, with a backend based on the <a href = "https://spoonacular.com/food-api" target = "blank">Spoonacular recipe searching API</a> and a novel database of vegan substitutions and carbon footprints.<br />I am in the process of extending functionality, having recently updated styling, refactored code and made it all more efficient, as well as implementing deeplinking using React routers.<br/>I am also developing a PHP-powered API to query the substitutions and carbon footprint database.<br/>Next steps can be viewed in the README of the github repo.',
  'lang': ['ReactJS', 'Javascript', 'HTML', 'CSS']
  },
  {
  'title': 'BASK',
  'github':'https://github.com/btharding/Bask',
  'description': 'A java game made for a weekly game jam with the theme "Running Water"',
  'lang': ['Java'],
  'src': './img/Bask.png'
  },
  {
  'title': 'Line Detector',
  'github':'https://github.com/btharding/LineDetector',
  'description': 'A line detector program written in Java using JavaFX and a convolusion-based technique',
  'lang': ['Java'],
  },
  {
  'title': 'Survivor',
  'github':'https://github.com/btharding/SurvivorGame',
  'description': "A survival game made for a weekend long game jam.<br/>I managed to implement all the key features including procedural world generation and animation, however I did not have enough time to properly balance the game or complete the UI.<br/>It's a project I'd like to return to in the future",
  'lang': ['Java'],
  'src': './img/Survivor.png'
  },
  {
  'title': 'Blog',
  'github':'https://github.com/btharding/Blog',
  'link':'http://btharding.pythonanywhere.com/',
  'description': "A blog CMS written in Django",
  'lang': ['Django','Python','HTML', 'CSS'],
  'src': './img/Blog.png'
  }
];
