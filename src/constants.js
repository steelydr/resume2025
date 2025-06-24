export const colors = {
  primary: '#2ecc71',      // Vibrant green
  secondary: '#58d68d',    // Lighter green
  accent: '#82e0aa',      // Lightest green
  dark: '#ffffff',        // White text
  light: '#f8f8f8',
  gray: '#cccccc',
  white: '#000000',       // Black background
  gradient: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)', // Green gradient
  cardBg: 'rgba(0, 0, 0, 0.7)',
  navBg: 'rgba(0, 0, 0, 0.9)',
};
export const experiences = [
  {
    title: 'Software Engineer',
    company: 'SoundSafe.AI',
    location: 'Chicago, USA',
    period: 'April 2025 – Present',
    achievements: [
      'Built scalable model training infrastructure on AWS using SageMaker, EC2 GPU instances, and S3 for data storage, reducing training time by 60%',
      'Containerized ML models with Docker and orchestrated deployment using Kubernetes for high-availability inference services',
      'Designed RESTful APIs using Fast API and Spring Boot to integrate ML services with client applications'
    ]
  },
  {
    title: 'Full Stack Engineer',
    company: 'Pravisblu Technology Services',
    location: 'Hyderabad, India',
    period: 'May 2023 – July 2024',
    achievements: [
      'Implemented server-side rendering and code splitting techniques, reducing initial load times by 65%',
      'Developed Java Spring Boot microservices with Spring Data JPA, Spring Security, and Spring Cloud',
      'Created comprehensive CI/CD pipeline using GitHub Actions, Jenkins, and Docker'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Virtusa',
    location: 'Hyderabad, India',
    period: 'Nov 2021 – Dec 2022',
    achievements: [
      'Designed advanced SQL optimization strategies, reducing query latency by 70%',
      'Established enterprise-grade CI/CD pipelines using Jenkins and Azure DevOps',
      'Authored reusable Terraform modules for infrastructure-as-code deployment'
    ]
  },
  {
    title: 'Full Stack Engineer',
    company: 'LaxOrbis',
    location: 'Hyderabad, India',
    period: 'August 2019 – Nov 2021',
    achievements: [
      'Engineered enterprise-grade collaborative workspace platform using Java Spring Boot microservices',
      'Implemented advanced Java concurrency patterns supporting 200+ concurrent users',
      'Developed responsive React.js frontend using TypeScript, Redux, improving user engagement by 35%'
    ]
  }
];

export const projects = [
  {
    title: 'Stock Market Prediction Application',
    tech: ['Quarkus', 'Redis', 'Docker', 'Flutter', 'Dart', 'GraphQL', 'Firebase', 'Azure Blob Storage'],
    achievements: [
      'Integrated Firebase Auth for 20K+ users, reducing sign-in failures by 60%',
      'Automated sentiment-based buy/sell signals using custom NLP model',
      'Saved $5k/year in productivity gains and reduced missed trading opportunities by 25%'
    ]
  },
  {
    title: 'Real-Time Collaboration Platform',
    tech: ['Spring Boot', 'Azure Services', 'React.js', 'Kafka', 'Terraform', 'GitHub Actions'],
    achievements: [
      'Engineered Kafka-based data pipelines that slashed batch processing time by 91.7%',
      'Handled 2GB of daily data while saving data engineers 150+ hours/month',
      'Boosted productivity by 12.5% and saved $5K annually'
    ]
  }
];

export const education = [
  {
    degree: 'Master of Science in Computer Science',
    specialization: 'Specialized in AI',
    school: 'Illinois Institute of Technology',
    location: 'Chicago, IL',
    period: '01/2023 – 12/2024'
  },
  {
    degree: 'Bachelor of Technology in Computer Science Engineering',
    school: 'Vidya Jyothi Institute of Technology',
    location: 'Hyderabad, IN',
    period: '07/2018 – 07/2022'
  }
];

export const certifications = [
  'Microsoft Certified Azure Fundamentals - AZ 900',
  'Microsoft Certified Associate Developer – AZ 204',
  'Microsoft Certified AI Fundamentals – AI 900',
  'ISTQB'
];

export const skills = {
  'Programming Languages': ['Java', 'Python', 'JavaScript', 'Dart', 'C++', 'SQL', 'HTML', 'CSS'],
  'Frameworks & Libraries': ['Spring Boot', 'Spring Cloud', 'React.js', 'Angular', 'Node.js', 'Flutter', 'TensorFlow', 'PyTorch'],
  'Cloud Platforms': ['Azure', 'AWS', 'GCP'],
  'DevOps Tools': ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions'],
  'Databases': ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'Redis'],
  'AI/ML Tools': ['OpenCV', 'BERT', 'NLTK', 'Hugging Face Transformers', 'GPT', 'LLMs']
};