export const news = [
  { date: 'May 01, 2025', text: 'Joined CodeBit AI as Software Engineer' },
  { date: 'Jun 01, 2024', text: 'Joined H&S Real Estate as Software Engineer' },
  { date: 'Jun 01, 2024', text: 'Joined Deca Properties as Software Engineer' },
  { date: 'May 01, 2024', text: 'Started working with Rehani Soko as Frontend Engineer (Freelance)' },
  { date: 'May 09, 2024', text: 'Presented research paper at IC3SE-2024, Amity University, Greater Noida, India' },
  { date: 'Dec 01, 2023', text: 'Joined F5-STUDIO as Full Stack Developer' },
  { date: 'Oct 01, 2023', text: 'Graduated with a Bachelor\'s degree in Computer System Engineering from NED University of Engineering and Technology (NEDUET)' },
  { date: 'Aug 01, 2022', text: 'Joined Additech-Sim as Software Engineer (Part-time)' },
  { date: 'Jan 01, 2022', text: 'Started Data Science Internship at Additech-Sim' },
];

export interface Project {
  title: string;
  status?: string;
  dates?: string;
  thumbnail: string;
  description: string;
  technologies: string[];
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  // {
  //   title: 'Twitter (X) Clone',
  //   dates: '2024',
  //   thumbnail: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=300&fit=crop',
  //   description: 'Full-featured Twitter clone built with MERN stack, featuring intuitive UI, responsive design, and user-centered optimizations using Tailwind CSS. Includes real-time updates, user authentication, and social networking features.',
  //   technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
  //   links: [
  //     { label: 'View Project', href: 'https://github.com/Zakawat-Abbas/twitter-clone' },
  //   ],
  // },
  // {
  //   title: 'Bazar - E-commerce Platform',
  //   dates: '2024',
  //   thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop',
  //   description: 'React Firebase shopping site with user-friendly UI and accessibility features. Integrated with Fake Store API and Stripe payment gateway for seamless checkout experience.',
  //   technologies: ['React.js', 'Firebase', 'Stripe API', 'Tailwind CSS'],
  //   links: [
  //     { label: 'View Project', href: 'https://github.com/Zakawat-Abbas/bazar' },
  //   ],
  // },
  // {
  //   title: 'CarHub - Car Rental Platform',
  //   dates: '2024',
  //   thumbnail: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop',
  //   description: 'Next.js website utilizing Rapid Car API for finding, booking, and renting cars with seamless user experience. Features advanced search filters and booking management.',
  //   technologies: ['Next.js', 'Rapid Car API', 'TypeScript', 'Tailwind CSS'],
  //   links: [
  //     { label: 'View Project', href: 'https://github.com/Zakawat-Abbas/carhub' },
  //   ],
  // },
  // {
  //   title: 'Dream Destination - Travel App',
  //   dates: '2023',
  //   thumbnail: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
  //   description: 'React Native Firebase app with destinations categorized by interest, travel buddy finder, and itinerary planning features. Helps users discover and plan their dream vacations.',
  //   technologies: ['React Native', 'Firebase', 'Google Maps API'],
  //   links: [
  //     { label: 'View Project', href: 'https://github.com/Zakawat-Abbas/Dream-Destination' },
  //   ],
  // },
  {
    title: 'Yolov8 Object Tracking (Video, Image & Webcam)',
    dates: '2025',
    thumbnail: '/projects/Highways.jpg',
    description: 'Object tracking system using YOLOv8 for real-time detection in videos, images, and webcam feeds. Utilizes advanced computer vision techniques for accurate tracking and analysis.',
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'Computer Vision'],
    links: [
      { label: 'View Demo', href: 'https://drive.google.com/file/d/1O4R-MP4fNzh1cfB2KUeY4jz1cSIndOqk/view?usp=sharing' },
      { label: 'View Project', href: 'https://github.com/Zakawat-Abbas/yolov8-object-tracking' },
    ],
  },
  {
    title: 'Sign Language Recognition App (FYP)',
    dates: 'Oct 2022 - Oct 2023',
    thumbnail: '/projects/fyp.jpeg',
    description: 'Final Year Project: Two-way sign language recognition system to help deaf community communication. Built using React Native for mobile interface, CNN for gesture recognition, and Flask for backend processing.',
    technologies: ['React Native', 'Python', 'CNN', 'Flask', 'TensorFlow'],
    links: [
      { label: 'View Demo', href: 'https://drive.google.com/file/d/1-_GhAk4OLxrVAdM_mUitRqy9juPftosq/view?usp=sharing' },
      { label: 'View Presentation', href: 'https://docs.google.com/presentation/d/18iaECXLq0fJBmHWcu5Q3fC8fO_kBC6et/edit?usp=sharing&ouid=106242081640093182324&rtpof=true&sd=true' },
      { label: 'View Research Paper', href: 'https://www.researchgate.net/publication/382494916' },
      { label: 'View Project', href: 'https://github.com/Zakawat-Abbas/SignLanguageProject' },
    ],
  },

  {
    title: 'Digital Meter Text Extraction',
    dates: '2025',
    thumbnail: '/projects/ml_1.png',
    description: 'CNN-based text extraction from digital meters for enhanced data retrieval. Automates the process of reading utility meters with high accuracy using computer vision.',
    technologies: ['Python', 'CNN', 'OpenCV', 'TensorFlow'],
    links: [
      { label: 'View Demo', href: 'https://colab.research.google.com/drive/1ekOqQyURzLWVaV8pzCv03-ChXUT6Nupq?usp=sharing' },
      { label: 'View Project', href: 'https://github.com/Zakawat-Abbas/Digital-Meter-Text-Extraction' },
    ],
  },
  {
    title: 'Speech To Text Converter',
    dates: '2024',
    thumbnail: '/projects/ai_1.png',
    description: 'Implementation of Google Speech to Text API for accurate speech-to-text conversion. Demonstrates real-time audio processing and transcription capabilities.',
    technologies: ['Python', 'Google Speech to Text API', 'Audio Processing'],
    links: [
      { label: 'View Demo', href: 'https://colab.research.google.com/drive/1h7hO3h3SsbyumD4AXxZ1AymHPH_p6UFy?usp=sharing' },
      { label: 'View Project', href: 'https://github.com/Zakawat-Abbas/Speech-To-Text' },
    ],
  },
  {
    title: 'Stock Price Prediction',
    dates: '2024',
    thumbnail: '/projects/ml_2.png',
    description: 'Creating LSTM model for accurate stock price predictions, aiding investors in informed decision-making and risk management',
    technologies: ['Python', 'LSTM', 'TensorFlow', 'Keras'],
    links: [
      { label: 'View Demo', href: 'https://colab.research.google.com/drive/1CCEZj1jdKwYSFGInGR4UzQm0ZkbEh5x9?usp=sharing' },
      { label: 'View Project', href: 'https://github.com/Zakawat-Abbas/Stock-Price-Prediction' },
    ],
  },

  {
    title: 'Emotion Detection System',
    dates: '2024',
    thumbnail: '/projects/ai_2.png',
    description: 'Developing a robust SVM AI system for emotion detection, improving user experience and emotional analysis accuracy',
    technologies: ['Python', 'SVM', 'scikit-learn', 'OpenCV'],
    links: [
      { label: 'View Demo', href: 'https://colab.research.google.com/drive/180E8AUsTqEy2M9CYWKGcqwlyv2stdar7?usp=sharing' },
      { label: 'View Project', href: 'https://github.com/Zakawat-Abbas/Emotion-Detection' },
    ],
  },


  // {
  //   title: 'GSMarena Web Scraper',
  //   dates: '2023',
  //   thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
  //   description: 'Web scraper for GSMarena mobile specifications with data parsing and trend analysis capabilities. Extracts comprehensive mobile device information for research purposes.',
  //   technologies: ['Python', 'Beautiful Soup', 'Selenium', 'Pandas'],
  //   links: [
  //     { label: 'View Project', href: 'https://github.com/Zakawat-Abbas' },
  //   ],
  // },
  {
    title: 'GSM Arena Q&A System',
    dates: '2023',
    thumbnail: '/projects/o_1.png',
    description: 'Intelligent Q&A system using GSM Arena data to assist users with mobile specifications inquiries. Powered by Google DialogFlow for natural language understanding.',
    technologies: ['Node.js', 'Google DialogFlow', 'Natural Language Processing'],
    links: [
      { label: 'View Demo', href: 'https://www.linkedin.com/posts/zakawat-abbas_data-cloud-google-activity-6975862235000659968-QXZZ?utm_source=combined_share_message&utm_medium=member_desktop' },
      { label: 'View Project', href: 'https://github.com/Zakawat-Abbas/GSMareana-QA' },
    ],
  },
  {
    title: 'NBA Records EDA',
    dates: '2023',
    thumbnail: '/projects/d_2.png',
    description: 'Exploratory Data Analysis (EDA) of NBA records, extracting insights for data-driven basketball strategies and decisions',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    links: [
      { label: 'View Demo', href: 'https://colab.research.google.com/drive/1wIjTaBG6KPL2iu9WduNbU73sNEV2Mfuo' },
      { label: 'View Project', href: 'https://github.com/Zakawat-Abbas/NBA-Records-EDA' },
    ],
  },
  {
    title: 'Adventure Works Sales Analysis',
    dates: '2023',
    thumbnail: '/projects/d_1.png',
    description: 'Comprehensive sales data analysis using Power BI for business intelligence. Provides insights into sales trends, customer behavior, and revenue optimization.',
    technologies: ['Power BI', 'SQL', 'Data Analysis'],
    links: [
      { label: 'View Demo', href: 'https://drive.google.com/file/d/1IeVH3m5eCKM5lvBUU8Bx8eHLNJra9gZz/view?usp=sharing' },
      { label: 'View Project', href: 'https://github.com/Zakawat-Abbas/Adventureworks-Sales-Analysis' },
    ],
  },
];

export const navLinks = [
  { href: '/', label: 'About' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/education', label: 'Education' },
  { href: '/projects', label: 'Projects' },
  { href: '/publications', label: 'Publications' },
  { href: '/certifications', label: 'Certifications' },
  { href: 'https://zakawat-abbas-portfolio.vercel.app/', label: 'Developer Portfolio' },
  { href: 'https://flowcv.com/resume/ev47wjl2hu', label: 'CV' },
  // { href: 'https://github.com/Zakawat-Abbas', label: 'GitHub' },
  // { href: 'https://www.linkedin.com/in/zakawat-abbas/', label: 'LinkedIn' },
];

export const experiences = [
  {
    company: 'CodeBit AI',
    logo: '/codebit_logo.jpeg',
    position: 'Software Engineer',
    employmentType: 'Full Time',
    periods: ['May 2025 - Present'],
    location: 'United States (Remote)',
    responsibilities: [
      'Designed and developed serverless applications using AWS Lambda, Python, and Next.js, improving system scalability and performance.',
      'Built and optimized RESTful APIs and microservices for real-time data exchange and seamless integration.',
      'Implemented CI/CD pipelines with AWS services and GitHub Actions to automate deployment processes and reduce manual workload.',
      'Collaborated with data scientists to integrate machine learning models into production environments.',
      'Enhanced system reliability, performance, and cost efficiency through proactive cloud monitoring and tuning.',
    ],
    link: 'http://codebit.com.br/',
  },
  {
    company: 'H&S Real Estate',
    logo: '/hsrealestatepak_logo.jpeg',
    position: 'Software Engineer',
    employmentType: 'Full Time',
    periods: ['Jun 2024 - Oct 2025'],
    location: 'Karachi, Pakistan (On-site)',
    responsibilities: [
      'Developed, maintained, and optimized all company websites to enhance performance, user experience, and brand consistency.',
      'Designed and implemented responsive, user-centric websites that improved performance and engagement.',
      'Enhanced website SEO and load speed, strengthening online visibility and lead generation.',
      'Managed deployment, DNS configuration, and integration tasks for site and email systems.',
      'Collaborated with marketing and sales teams to ensure consistent brand alignment across all platforms.',
      'Integrated automation tools and analytics for real-time tracking and performance insights.',
    ],
    link: 'https://hsproperty.ae/',
  },
  {
    company: 'Deca Properties',
    logo: '/decapropertiesdubai_logo.jpeg',
    position: 'Software Engineer',
    employmentType: 'Full Time',
    periods: ['Jun 2024 - Oct 2025'],
    location: 'Karachi, Pakistan (On-site)',
    responsibilities: [
      'Developed and maintained responsive, SEO-optimized websites using React.js and Next.js.',
      'Improved website performance, accessibility, and user experience, resulting in higher engagement rates.',
      'Managed deployment pipelines, DNS configuration, and integration processes for smooth site and email functionality.',
      'Collaborated with design and marketing teams to ensure UI/UX alignment with business goals.',
      'Streamlined development workflows and automated maintenance processes for faster delivery.',
    ],
    link: 'https://deca-properties.com/',
  },
  {
    company: 'Rehani Soko',
    logo: '/rehani_soko_logo.jpeg',
    position: 'Frontend Engineer',
    employmentType: 'Freelance',
    periods: ['May 2024 - May 2025'],
    location: 'United States (Remote)',
    responsibilities: [
      'Built and optimized dynamic front-end interfaces using Vue.js and React.js, improving site performance and user engagement.',
      'Collaborated with backend teams to integrate APIs and enhance overall application functionality.',
      'Implemented reusable components and modern UI frameworks to accelerate development cycles.',
      'Ensured cross-browser compatibility, accessibility, and mobile responsiveness for all projects.',
      'Delivered pixel-perfect designs aligned with brand and UX requirements.',
    ],
    link: 'https://rehanisoko.com/',
  },
  {
    company: 'F5-STUDIO',
    logo: '/f5_studio_logo.jpeg',
    position: 'Full Stack Developer',
    employmentType: 'Full Time',
    periods: ['Dec 2023 - Jun 2024'],
    location: 'United States (Remote)',
    responsibilities: [
      'Developed and deployed full-stack applications using React.js, Next.js, and Node.js, ensuring scalability and performance.',
      'Built reusable UI components with Tailwind CSS and integrated APIs for seamless data flow between client and server.',
      'Collaborated with cross-functional teams to enhance UX/UI and optimize website responsiveness.',
      'Implemented best practices in code optimization, version control, and deployment workflows.',
    ],
    link: 'https://f5-studio.com/',
  },
  {
    company: 'Additech-Sim',
    logo: '/additech_sim_logo.jpeg',
    position: 'Software Engineer',
    employmentType: 'Part Time',
    periods: ['Aug 2022 - Dec 2023'],
    location: 'Stuttgart, Germany (Remote)',
    responsibilities: [
      'Designed and developed full-stack applications using Python, JavaScript, and modern frameworks.',
      'Built and optimized machine learning models for predictive analytics and process automation.',
      'Collaborated with cross-functional teams to integrate AI functionalities into web applications.',
      'Implemented data pipelines and APIs for smooth data flow and real-time insights.',
      'Improved performance, scalability, and reliability of deployed systems through testing and refactoring.',
    ],
    link: 'http://additechsim.ddns.net/',
  },
  {
    company: 'Additech-Sim',
    logo: '/additech_sim_logo.jpeg',
    position: 'Data Science Intern',
    employmentType: 'Internship',
    periods: ['Jan 2022 - Jun 2022'],
    location: 'Stuttgart, Germany (Remote)',
    responsibilities: [
      'Enhanced an Automatic Machine Learning Model Classifier to improve prediction accuracy and model efficiency.',
      'Implemented Reinforcement Learning with Particle Swarm Optimization (PSO) for shaft and hub optimization projects.',
      'Conducted exploratory data analysis (EDA) and feature engineering to refine data quality and model inputs.',
      'Utilized Python, SQL, and ML libraries for model development, testing, and deployment.',
      'Supported cross-functional collaboration between AI and engineering teams for solution integration.',
    ],
    link: 'http://additechsim.ddns.net/',
  },
];

export const schools = [
  {
    name: 'NED University of Engineering and Technology',
    link: 'https://neduet.edu.pk/',
    logo: '/ned.jpeg',
    degree: "Bachelor's of Engineering in Computer System Engineering",
    dates: 'Oct 2019 - Oct 2023',
    location: 'Karachi, Pakistan',
    summary: [
      'Completed comprehensive coursework in Data Structures and Algorithms, Software Engineering, Machine Learning & Artificial Intelligence.',
      'Final Year Project: Sign Language Recognition App, Two-way sign language recognition system using React Native, CNN and Flask.',
      'Developed strong foundation in computer systems, software development, and artificial intelligence.',
    ],
  },
  {
    name: 'Bahria College Karsaz',
    link: 'https://bck.edu.pk/',
    logo: '/bckz.jpeg',
    degree: "Higher Secondary School Certificate (H.S.S.C), Pre-Engineering",
    dates: 'Oct 2019 - Oct 2023',
    location: 'Karachi, Pakistan',
    summary: [
      'Ranked 20 % in Federal Board examinations.',
      'Scored 835 out of 1100 (75.90 %).',
    ],
  },
  {
    name: 'Bahria College Karsaz',
    link: 'https://bck.edu.pk/',
    logo: '/bckz.jpeg',
    degree: "Secondary School Certificate (S.S.C), Computer Science",
    dates: 'Oct 2019 - Oct 2023',
    location: 'Karachi, Pakistan',
    summary: [
      'Ranked 5 % in Federal Board examinations.',
      'Scored 916 out of 1050 (87.23 %).',
    ],
  },
];

export interface Pub {
  year: number;
  title: string;
  date: string;
  thumbnail: string;
  absUrl: string;
  researchGateUrl: string;
  ieeeUrl: string;
  abstract: string;
  authors: string;
  venue: string;
  pdfUrl?: string;
}

export const publications: Pub[] = [
  {
    year: 2024,
    title: 'Voice of Hearing and Speech Impaired People',
    date: 'May 2024',
    authors: 'Zakawat Abbas',
    venue: '2024 International Conference on Communication, Computer Sciences and Engineering (IC3SE), Amity University, Greater Noida, India',
    thumbnail: '/pub-1.jpg',
    absUrl: '#',
    researchGateUrl: 'https://www.researchgate.net/publication/382494916',
    ieeeUrl: 'https://ieeexplore.ieee.org/document/10593248',
    pdfUrl: '/Voice_of_Hearing_and_Speech_Impaired_People.pdf',
    abstract: 'This paper presents a comprehensive solution for voice communication challenges faced by hearing and speech impaired individuals. The research introduces a two-way sign language recognition system that bridges the communication gap between deaf and hearing communities. The system leverages Convolutional Neural Networks (CNN) for accurate gesture recognition and provides a mobile-friendly interface through React Native. The Flask-based backend ensures efficient processing and real-time response. Published in IEEE Xplore, this work contributes to assistive technology and inclusive communication solutions.',
  },
];

export interface Certification {
  title: string;
  link: string;
  issuer: string;
  date: string;
  thumbnail: string;
  description: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    title: 'Certificate of Presentation - IC3SE-2024',
    link: 'https://drive.google.com/file/d/1Jmz6iWxPWe5uWgmFt4SLCjE_3rUsc6GE/view?usp=sharing',
    issuer: 'Amity University Uttar Pradesh',
    date: 'May 9-11, 2024',
    thumbnail: '/IC3SE-2024.jpg',
    description: 'Presented research paper "Voice of Hearing and Speech Impaired People" at the International Conference on Communication, Computer Sciences and Engineering (IC3SE-2024), Amity University, Greater Noida Campus, India.',
    credentialUrl: '#',
  },
  {
    title: 'Build AR Powered E-commerce Site Bootcamp',
    link: 'https://drive.google.com/file/d/1UtDaf7MAjQhqb05oze0MkZs9V5sX94BR/view?usp=sharing',
    issuer: 'Open Weaver',
    date: '2022',
    thumbnail: '/Build AR Powered E-commerce Site.jpeg',
    description: 'Completed an intensive, hands-on professional bootcamp focused on building innovative, real-world augmented reality enabled e-commerce solutions using cutting-edge modern web development technologies.',
  },
  {
    title: 'Python Programming | Numpy & Pandas Bootcamp',
    link: 'https://drive.google.com/file/d/1ehig8wyL9HupPD26qYsAZ3I-ncl_DPcE/view?usp=sharing',
    issuer: 'Open Weaver',
    date: '2022',
    thumbnail: '/Python Programming  Numpy & Pandas.jpeg',
    description: 'Mastered Python programming fundamentals and data manipulation using Numpy and Pandas libraries for data science applications. ',
  },
  {
    title: 'Data Science Internship Completion',
    link: 'https://drive.google.com/file/d/1IWBrmmJkpO1HHu0Ijw-lrqk92lEHjxmR/view?usp=sharing',
    issuer: 'ADDITECH-SIM',
    date: '2022',
    thumbnail: '/additech_sim_certificate.png',
    description: 'Successfully completed 6-month data science internship focusing on machine learning, data analysis, and optimization techniques.',
  },
];
