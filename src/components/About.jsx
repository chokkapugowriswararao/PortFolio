import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm <span className="font-bold">Chokkapu Gowriswara Rao</span>, a passionate Web Developer with a keen eye for the MERN Stack. With a background in IT, I strive to create impactful and visually stunning software solutions that leave a lasting impression.
        </p>
        <br />

        <h1 className="text-blue-600 font-semibold text-xl">Education & Training</h1>
        <span>
          B.Tech, Information Technology, National Institute of Technology Raipur, 2026 – CGPA: 8.62/10.0
          <br />
          BIEAP – XII, Sri Viswa College, Vishakhapatnam, 2022 – 96.0%
          <br />
          SSC – X, Narayana School, Bobbili, 2020 – 98.5%
        </span>
        <br /><br />

        <h1 className="text-blue-600 font-semibold text-xl">Skills & Expertise</h1>
        <span>
          Proficient in C++, JavaScript, Python
          <br />
          Experienced with MERN Stack, Express.js, React.js, Node.js, MongoDB
          <br />
          Strong grasp of web design principles and responsive UI/UX
          <br />
          Excellent problem-solving skills
          <br />
          Effective communicator and collaborator
        </span>
        <br /><br />

        <h1 className="text-blue-600 font-semibold text-xl">Technical Skills</h1>
        <span>
          Programming Languages: C++, Python
          <br />
          Web Development: Backend Development, FrontEnd Development, HTML, JavaScript, CSS, MERN, MySQL
          <br />
          Data Science: Machine Learning
          <br />
          Tools & Utilities: Git, Render
          <br />
          Core CS Concepts: Data Structures and Algorithms, Operating Systems, Object-Oriented Programming, Databases (DBMS)
          <br />
          Soft Skills: Team Leadership, Effective Communication, Problem-Solving, Building Professional Relationships
        </span>
        <br /><br />

        <h1 className="text-blue-600 font-semibold text-xl">Projects</h1>
        <span>
          <strong>Sustainable Organic Farming Platform</strong> [Link]
          <br />
          • Built a full-stack MERN application enabling brokers to collect unused animal waste from 100+ farmers and convert it into high-quality fertilizer.
          <br />
          • Implemented secure authentication with login/signup, enabling seamless farmer registration and transactions.
          <br />
          • Integrated DaisyUI and Tailwind CSS for responsive UI, enhancing load times by 30% and smooth navigation.
          <br />
          • Enabled real-time notifications with react-hot-toast and improved form validation with React Hook Form, reducing errors by 40%.
          <br />
          • Tech Stack: MongoDB, Express.js, React.js, Node.js (MERN), Vite, DaisyUI
          <br /><br />
          <strong>Chat Application (Live)</strong> [Code]
          <br />
          • Developed full-stack login/signup with password hashing and JWT session management for 50+ users.
          <br />
          • Built responsive frontend with React, reducing page load times by 20%.
          <br />
          • Secured backend API with Node.js and Express, managing MongoDB data with 100% form validation.
          <br />
          • Tech Stack: MongoDB, Express.js, React.js, Node.js (MERN)
          <br /><br />
          <strong>Ecommerce-site (Live)</strong> [Code]
          <br />
          • Built a shopping app with 50+ products, cart functionality, and secure authentication.
          <br />
          • Optimized product search speed by 25% using React hooks.
          <br />
          • Designed fully responsive UI enhancing mobile usability for 70% users.
          <br />
          • Tech Stack: React.js, React Hooks, CSS Modules
          <br /><br />
          <strong>Portfolio</strong> [Link]
          <br />
          • Developed personal portfolio showcasing 5+ projects with text-to-voice feature.
          <br />
          • Improved site load speed by 35% with clean HTML and CSS, ensuring cross-device compatibility.
          <br />
          • Tech Stack: HTML, CSS, JavaScript
        </span>
        <br /><br />

        <h1 className="text-blue-600 font-semibold text-xl">Positions of Responsibility</h1>
        <span>
          <strong>Volunteer, Sanskriti club, NIT Raipur</strong>, Apr’22 - Present
          <br />
          • Designed and executed feedback mechanism for Eclectika, collecting insights from 200+ participants, improving future event planning.
          <br />
          • Collaborated with team members to brainstorm and implement innovative solutions, ensuring cohesive workflow.
          <br />
          • Demonstrated proactive attitude by taking initiative, contributing ideas, and encouraging team discussions.
        </span>
        <br /><br />

        <h1 className="text-blue-600 font-semibold text-xl">Achievements & Awards</h1>
        <span>
          • Leetcode: 450+ questions solved, Max Rating: 1756, Weekly Rank: 101
          <br />
          • GFG Max Rating: 1590
          <br />
          • Codechef Rank: 40,000; Max Rating: 1490
          <br />
          • Coding Ninjas Max Rating: 1770, Weekly Contest 119 Rank: 212
          <br />
          • Completed INTERNPE Internship on Web Development [Link]
        </span>
        <br /><br />

        <h1 className="text-blue-600 font-semibold text-xl">Mission Statement</h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative software solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
        <br />
        <h1 className="text-blue-600 font-semibold text-xl">Contact Information</h1>
        <span>
          gowriswararao203@gmail.com | +91-6281578496
          <br />
          GitHub: <a className="text-blue-500" href="https://github.com/chokkapugowriswararao" target="_blank" rel="noopener noreferrer">chokkapugowriswararao</a>
          <br />
          Platforms: CodeChef | Codeforces | LeetCode | GFG
        </span>
      </div>
    </div>
  );
}

export default About;
