export const portfolioData = {
  personalInfo: {
    name: "S. Nikhil",
    shortName: "Nikhil",
    title: "B.Tech — Artificial Intelligence & Data Science | Aspiring Software Developer",
    badge: "B.Tech AI & Data Science Student",
    heroHeading: "Hi, I'm S. Nikhil",
    heroSubheading: "Aspiring Software Developer",
    heroDescription:
      "Motivated B.Tech Artificial Intelligence & Data Science student passionate about programming, problem solving, debugging, and building technology-driven solutions.",
    phone: "7676289340",
    email: "nikhilniki864@gmail.com",
    location: "India",
    university: "REVA University, Karnataka, India",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    status: "Currently Pursuing",
    socialLinks: {
      linkedin: "YOUR_LINKEDIN_URL",
      github: "YOUR_GITHUB_URL",
    },
    resumePath: "/S_Nikhil_Resume.pdf",
    resumeFilename: "S_Nikhil_Resume.pdf",
  },

  about: {
    paragraphs: [
      "I am currently pursuing my B.Tech in Artificial Intelligence & Data Science at REVA University. I have a strong interest in software development and programming, and I am currently developing my skills in C programming and Python.",
      "I enjoy solving programming problems, debugging code, and improving my logical and analytical thinking. I am continuously learning new concepts and building my programming foundation to prepare for real-world software development and AI-related opportunities."
    ],
    atAGlance: [
      {
        icon: "GraduationCap",
        label: "Education",
        value: "B.Tech — AI & Data Science",
        color: "from-cyan-500/20 to-blue-500/20",
        border: "border-cyan-500/30"
      },
      {
        icon: "Building2",
        label: "University",
        value: "REVA University",
        color: "from-blue-500/20 to-indigo-500/20",
        border: "border-blue-500/30"
      },
      {
        icon: "Code2",
        label: "Programming",
        value: "C & Python",
        color: "from-purple-500/20 to-pink-500/20",
        border: "border-purple-500/30"
      },
      {
        icon: "Brain",
        label: "Strength",
        value: "Problem Solving",
        color: "from-emerald-500/20 to-teal-500/20",
        border: "border-emerald-500/30"
      },
      {
        icon: "Bug",
        label: "Skill",
        value: "Debugging",
        color: "from-amber-500/20 to-orange-500/20",
        border: "border-amber-500/30"
      },
      {
        icon: "Rocket",
        label: "Goal",
        value: "Software Development & AI",
        color: "from-cyan-500/20 to-purple-500/20",
        border: "border-cyan-500/30"
      }
    ]
  },

  skills: {
    programming: [
      { name: "C", icon: "Code", highlight: true },
      { name: "Python", icon: "FileCode2", highlight: true }
    ],
    coreSkills: [
      { name: "Programming", icon: "Terminal" },
      { name: "Debugging", icon: "Bug" },
      { name: "Problem Solving", icon: "BrainCircuit" },
      { name: "Logical Thinking", icon: "Cpu" },
      { name: "Analytical Thinking", icon: "Network" }
    ],
    foundation: [
      { name: "Basic Programming Concepts", icon: "Boxes" },
      { name: "Logical Reasoning", icon: "Workflow" },
      { name: "Algorithmic Thinking", icon: "GitFork" }
    ],
    currentlyLearning: [
      { name: "Python Programming", status: "In Progress" },
      { name: "C Programming", status: "In Progress" },
      { name: "Data Structures & Algorithms", status: "In Progress" }
    ]
  },

  projects: [
    {
      id: "01",
      number: "Project 01",
      title: "C Programming Practice",
      description:
        "A collection of programming exercises focused on strengthening C programming fundamentals, logical thinking, debugging, and problem solving.",
      technologies: ["C", "Algorithms", "Memory Basics", "Pointers"],
      category: "Programming",
      status: "Learning Project",
      statusVariant: "cyan",
      github: "YOUR_GITHUB_URL",
      codeSnippet: `// Example C logic exercise
#include <stdio.h>

void solveProblem(int n) {
    printf("[+] Processing logic for step %d\\n", n);
    // Focus on memory clarity and deterministic execution
}

int main() {
    printf("Executing C Programming Practice...\\n");
    solveProblem(42);
    return 0;
}`,
      highlights: [
        "Structured modular code with clean header separation",
        "Deep focus on pointers, arrays, and standard I/O",
        "Systematic debugging and step-by-step problem breakdown"
      ]
    },
    {
      id: "02",
      number: "Project 02",
      title: "Python Problem Solving",
      description:
        "Python programming exercises designed to improve programming fundamentals, logical reasoning, problem solving, and debugging skills.",
      technologies: ["Python", "Data Structures", "Logic Building", "Debugging"],
      category: "Programming",
      status: "Learning Project",
      statusVariant: "blue",
      github: "YOUR_GITHUB_URL",
      codeSnippet: `# Python problem solving & algorithm implementation
def find_optimal_solution(data_stream):
    """Clean, readable, and structured logic execution."""
    processed = [item for item in data_stream if item % 2 == 0]
    return {
        "status": "solved",
        "processed_count": len(processed),
        "debug_clean": True
    }

print("Running Python Problem Solving Suite...")`,
      highlights: [
        "Implementation of core control flows and function paradigms",
        "Clean error handling and unit test logic exercises",
        "Developing analytical mindset for algorithmic solutions"
      ]
    },
    {
      id: "03",
      number: "Project 03",
      title: "AI & Data Science — Future Project",
      description:
        "An upcoming project focused on applying Python and Artificial Intelligence & Data Science concepts to solve a practical problem.",
      technologies: ["Python", "AI", "Data Science", "Machine Learning"],
      category: "Future Project",
      status: "Coming Soon",
      statusVariant: "purple",
      github: "YOUR_GITHUB_URL",
      codeSnippet: `# Upcoming AI & Data Science Pipeline
import numpy as np

class IntelligentPipeline:
    def __init__(self, dataset_name="FutureData"):
        self.dataset = dataset_name
        self.model_status = "Architecture in Design"
        
    def prepare_pipeline(self):
        print(f"Initializing AI/DS model for {self.dataset}...")
        return "Ready for training"`,
      highlights: [
        "Applying Python fundamentals to real-world datasets",
        "Exploration of AI modeling techniques and evaluation metrics",
        "End-to-end data processing and predictive experimentation"
      ]
    }
  ],

  strengths: [
    {
      id: 1,
      title: "Problem Solving",
      description: "Ability to approach programming problems logically and systematically.",
      icon: "Brain",
      accent: "from-cyan-500 to-blue-500",
      glow: "group-hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]"
    },
    {
      id: 2,
      title: "Debugging",
      description: "Enjoy identifying errors and understanding how to improve code.",
      icon: "Bug",
      accent: "from-blue-500 to-indigo-500",
      glow: "group-hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]"
    },
    {
      id: 3,
      title: "Logical Thinking",
      description: "Strong interest in breaking complex problems into smaller steps.",
      icon: "Cpu",
      accent: "from-indigo-500 to-purple-500",
      glow: "group-hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]"
    },
    {
      id: 4,
      title: "Analytical Thinking",
      description: "Interested in understanding problems and developing structured solutions.",
      icon: "BarChart3",
      accent: "from-purple-500 to-pink-500",
      glow: "group-hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]"
    },
    {
      id: 5,
      title: "Continuous Learning",
      description: "Motivated to continuously improve programming and technical knowledge.",
      icon: "Sparkles",
      accent: "from-emerald-500 to-cyan-500",
      glow: "group-hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]"
    },
    {
      id: 6,
      title: "Adaptability",
      description: "Willing to learn new technologies and development practices.",
      icon: "Compass",
      accent: "from-amber-500 to-rose-500",
      glow: "group-hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]"
    }
  ],

  careerObjective: {
    statement:
      "To begin a career in software development, Artificial Intelligence, or data-driven technology where I can apply my programming and problem-solving skills, gain practical industry experience, and continuously grow as a technology professional.",
    focusAreas: [
      "Software Development",
      "Artificial Intelligence",
      "Data-Driven Technology",
      "Algorithmic Thinking"
    ]
  },

  education: [
    {
      degree: "B.Tech — Artificial Intelligence & Data Science",
      institution: "REVA University",
      location: "Karnataka, India",
      status: "Currently Pursuing",
      focus: "Artificial Intelligence, Data Science, Core Programming & Computer Science Fundamentals",
      icon: "GraduationCap"
    }
  ],

  learningJourney: {
    headline: "Roadmap to Software Development & AI",
    subheadline:
      "Currently focused on strengthening programming fundamentals, problem solving, debugging, algorithms, and Python while building a foundation for Artificial Intelligence and Data Science.",
    steps: [
      {
        id: 1,
        title: "C Programming",
        status: "Active Focus",
        desc: "Strengthening memory concepts, syntax rigor, logic construction, and debugging fundamentals.",
        isCurrent: true,
        tag: "Foundation"
      },
      {
        id: 2,
        title: "Python",
        status: "Active Focus",
        desc: "Mastering versatile syntax, standard library modules, object-oriented concepts, and fast prototyping.",
        isCurrent: true,
        tag: "Core Language"
      },
      {
        id: 3,
        title: "Data Structures & Algorithms",
        status: "Currently Building",
        desc: "Studying array manipulation, lists, trees, search/sort algorithms, and computational complexity.",
        isCurrent: true,
        tag: "Analytical Core"
      },
      {
        id: 4,
        title: "AI & Data Science",
        status: "Upcoming Milestone",
        desc: "Applying mathematics, statistics, data pipelines, and machine learning models to practical problems.",
        isCurrent: false,
        tag: "Specialization"
      },
      {
        id: 5,
        title: "Software Development",
        status: "Career Horizon",
        desc: "Building robust, scalable full-stack and AI-driven applications with modern industry practices.",
        isCurrent: false,
        tag: "Target Career"
      }
    ]
  },

  additionalInfo: {
    languages: [
      { name: "English", level: "Fluent / Professional" },
      { name: "Kannada", level: "Native / Conversational" },
      { name: "Hindi", level: "Fluent / Conversational" }
    ],
    interests: [
      { name: "Programming", icon: "Code" },
      { name: "Artificial Intelligence", icon: "Brain" },
      { name: "Technology", icon: "Laptop" },
      { name: "Problem Solving", icon: "Lightbulb" }
    ]
  },

  contact: {
    title: "Let's Connect",
    description: "I'm always interested in learning, building, and connecting with people in technology.",
    phone: "7676289340",
    email: "nikhilniki864@gmail.com",
    location: "India"
  },

  terminalSnippets: {
    "solver.py": `# Python Problem Solving & Debugging
def solve_challenge(problem_name):
    print(f">> Analyzing problem: {problem_name}")
    
    # Step 1: Deconstruct into logical units
    steps = ["Understand constraints", "Design algorithm", "Write clean code", "Debug edge cases"]
    
    for i, step in enumerate(steps, 1):
        print(f"   [{i}/4] {step} ... OK")
        
    return {
        "candidate": "S. Nikhil",
        "status": "Ready for real-world development",
        "focus": "AI & Software Engineering"
    }

# Execute
result = solve_challenge("Algorithmic Optimization")
print(result)`,

    "main.c": `/* C Programming Foundation & Memory Logic */
#include <stdio.h>
#include <stdbool.h>

typedef struct {
    char name[30];
    char university[30];
    char passion[40];
} Developer;

int main() {
    Developer nikhil = {
        .name = "S. Nikhil",
        .university = "REVA University",
        .passion = "AI & Software Development"
    };

    printf("========================================\\n");
    printf("Developer: %s\\n", nikhil.name);
    printf("Degree   : B.Tech AI & Data Science\\n");
    printf("Focus    : Problem Solving & Debugging\\n");
    printf("========================================\\n");

    return 0;
}`,

    "ai_pipeline.py": `# AI & Data Science Future Roadmap
import numpy as np

class AIDeveloperPath:
    def __init__(self):
        self.developer = "S. Nikhil"
        self.skills = ["C", "Python", "DSA", "Problem Solving"]
        self.next_goals = ["Machine Learning", "Neural Nets", "Data Modeling"]

    def evaluate_growth(self):
        print(f"Evaluating candidate: {self.developer}")
        print("Continuous Learning Rate: MAXIMUM")
        return "Growth trajectory verified."

pipeline = AIDeveloperPath()
print(pipeline.evaluate_growth())`
  }
};
