export const portfolioData = {
  personalInfo: {
    name: "S. Nikhil",
    shortName: "Nikhil",
    title: "Aspiring Software / Electronics Engineer",
    badge: "Aspiring Software / Electronics Engineer",
    heroHeading: "Hi, I'm S. Nikhil",
    heroSubheading: "Aspiring Software / Electronics Engineer",
    heroDescription:
      "Motivated engineering student with hands-on experience in programming, electronics, embedded systems, and basic web deployment. Comfortable learning new technologies and building practical projects.",
    location: "Bengaluru, Karnataka, India",
    email: "nikhilniki864@gmail.com",
    phone: "7676289340",
    university: "REVA University, Karnataka, India",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    status: "Currently Pursuing",
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    resumePath: "/S_Nikhil_Resume.pdf",
    resumeFilename: "S_Nikhil_Resume.pdf",
    profileSummary:
      "Motivated engineering student with hands-on experience in programming, electronics, embedded systems, and basic web deployment. Comfortable learning new technologies and building practical projects. Interested in software development, embedded systems, and technology-driven problem solving."
  },

  about: {
    paragraphs: [
      "I am a motivated engineering student based in Bengaluru, Karnataka, with hands-on experience across software programming, electronics, embedded systems, and modern web deployment.",
      "I enjoy bridging the physical and digital worlds — from low-level C programming with dynamic memory management and Arduino microcontroller hardware integration (Bluetooth, relays, and solenoid locks) to Python problem solving and deploying web projects with Git/GitHub and Vercel.",
      "Comfortable learning new technologies rapidly, I focus on building reliable, well-documented, and practical technology-driven solutions."
    ],
    atAGlance: [
      {
        icon: "GraduationCap",
        label: "Domain",
        value: "Software / Electronics",
        color: "from-cyan-500/20 to-blue-500/20",
        border: "border-cyan-500/30"
      },
      {
        icon: "MapPin",
        label: "Location",
        value: "Bengaluru, India",
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
        icon: "Cpu",
        label: "Embedded / IoT",
        value: "Arduino Nano & HC-05",
        color: "from-emerald-500/20 to-teal-500/20",
        border: "border-emerald-500/30"
      },
      {
        icon: "Globe",
        label: "Web & Tools",
        value: "HTML/CSS, GitHub, Vercel",
        color: "from-amber-500/20 to-orange-500/20",
        border: "border-amber-500/30"
      },
      {
        icon: "Brain",
        label: "Strength",
        value: "Problem Solving & Logic",
        color: "from-cyan-500/20 to-purple-500/20",
        border: "border-cyan-500/30"
      }
    ]
  },

  skills: {
    programming: [
      { 
        name: "C Programming", 
        icon: "Code", 
        detail: "Dynamic memory allocation (malloc, calloc, realloc, free), pointers, structures, data structures basics" 
      },
      { 
        name: "Python", 
        icon: "FileCode2", 
        detail: "Lists, functions, control flow, problem-solving exercises, data handling & algorithms" 
      }
    ],
    webAndTools: [
      { name: "HTML / CSS", icon: "Layout", detail: "Semantic markup, modern styling, responsive web design" },
      { name: "GitHub", icon: "GitFork", detail: "Source-code management, branching, commit discipline & repositories" },
      { name: "Vercel", icon: "Globe", detail: "Continuous web deployment, domain linking & live project hosting" },
      { name: "Web Deployment", icon: "Workflow", detail: "Troubleshooting build configs, environment setup & live optimization" }
    ],
    embeddedAndElectronics: [
      { name: "Arduino Nano", icon: "Cpu", detail: "Microcontroller architecture, pin mappings, serial communication & I/O logic" },
      { name: "HC-05 Bluetooth", icon: "Radio", detail: "Wireless UART communication, pairing, and serial command decoding" },
      { name: "Relay & Solenoid", icon: "Zap", detail: "Low-voltage switching circuitry, solenoid lock actuation & power isolation" },
      { name: "Digital Electronics", icon: "Binary", detail: "Circuit fundamentals, multiplexers, ripple-carry adders & logic gates" }
    ],
    coreConcepts: [
      { name: "Data Structures Basics", icon: "Boxes", detail: "Arrays, lists, structures, stack concepts, algorithmic complexity" },
      { name: "Dynamic Memory in C", icon: "MemoryStick", detail: "Heap allocation, pointers arithmetic, memory safety & resource cleanup" },
      { name: "Problem Solving", icon: "BrainCircuit", detail: "Structured debugging, logical reasoning & modular problem decomposition" },
      { name: "Digital Logic Design", icon: "Network", detail: "Combinational circuits, adders, multiplexing & Boolean logic" }
    ]
  },

  projects: [
    {
      id: "01",
      number: "Project 01",
      title: "Smart Lock — Arduino-Based Security Prototype",
      badge: "Embedded / Hardware",
      description:
        "Developed a smart electronic locking prototype utilizing an Arduino Nano, HC-05 Bluetooth module, switching relay module, and a solenoid lock for wireless access control.",
      technologies: ["Arduino Nano", "HC-05 Bluetooth", "Relay Module", "Solenoid Lock", "Embedded C++", "Circuit Design"],
      category: "Embedded & IoT",
      status: "Completed Prototype",
      statusVariant: "cyan",
      github: "https://github.com",
      highlights: [
        "Developed a smart locking prototype using an Arduino Nano, HC-05 Bluetooth module, relay, and solenoid lock.",
        "Worked on the control flow, hardware integration, and Bluetooth-based wireless access authentication concept.",
        "Prepared comprehensive project documentation covering aim, problem statement, methodology, components, results, advantages, and future scope."
      ],
      codeSnippet: `// Smart Lock Control Flow — Arduino Nano + HC-05 Bluetooth
#include <SoftwareSerial.h>

SoftwareSerial BTSerial(10, 11); // RX, TX
const int RELAY_PIN = 7;
const int STATUS_LED = 13;

void setup() {
  pinMode(RELAY_PIN, OUTPUT);
  pinMode(STATUS_LED, OUTPUT);
  digitalWrite(RELAY_PIN, HIGH); // Normally locked
  
  Serial.begin(9600);
  BTSerial.begin(9600);
  Serial.println("[READY] Smart Lock System Initialized.");
}

void loop() {
  if (BTSerial.available()) {
    char command = BTSerial.read();
    Serial.print("[AUTH] Received command: ");
    Serial.println(command);
    
    if (command == 'U' || command == '1') {
      unlockDoor();
    }
  }
}

void unlockDoor() {
  digitalWrite(RELAY_PIN, LOW); // Trigger relay -> Solenoid opens
  digitalWrite(STATUS_LED, HIGH);
  BTSerial.println("STATUS: UNLOCKED");
  delay(4000); // 4-second unlock duration
  digitalWrite(RELAY_PIN, HIGH); // Re-lock
  digitalWrite(STATUS_LED, LOW);
  BTSerial.println("STATUS: LOCKED");
}`
    },
    {
      id: "02",
      number: "Project 02",
      title: "Personal Web Project — GitHub & Vercel Deployment",
      badge: "Web & Deployment",
      description:
        "Engineered and deployed a responsive personal portfolio and web project with structured Git source-code management and automated Vercel cloud deployment.",
      technologies: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "GitHub", "Vercel"],
      category: "Web & Cloud",
      status: "Live Project",
      statusVariant: "blue",
      github: "https://github.com",
      highlights: [
        "Worked with a web project and used GitHub for source-code management and repository organization.",
        "Explored deployment through Vercel and troubleshooting of repository, build, and deployment issues.",
        "Implemented clean UI architecture, dynamic dark themes, and responsive mobile-first design."
      ],
      codeSnippet: `// Personal Web Project — Deployment & CI/CD Pipeline
export const siteConfig = {
  name: "S. Nikhil Portfolio",
  domain: "s-nikhil.vercel.app",
  repository: "github.com/nikhil/portfolio",
  build: {
    engine: "Vite + React",
    styling: "Tailwind CSS + Glassmorphism",
    deployment: "Vercel Automatic CI/CD"
  }
};

export function handleDeploymentStatus() {
  console.log("[+] Synchronizing GitHub commits with Vercel edge...");
  return {
    status: "200 OK",
    deployedUrl: "https://s-nikhil.vercel.app",
    sslActive: true
  };
}`
    },
    {
      id: "03",
      number: "Project 03",
      title: "C & Python Algorithmic & Systems Practice",
      badge: "Academic & Systems",
      description:
        "Rigorous hands-on practice in C programming with dynamic memory management (malloc, calloc, realloc, free) and algorithmic Python problem-solving exercises.",
      technologies: ["C", "Python", "Dynamic Memory", "Pointers", "Data Structures", "Digital Electronics"],
      category: "Programming",
      status: "Academic / Practice",
      statusVariant: "purple",
      github: "https://github.com",
      highlights: [
        "Hands-on practice with C programming, including dynamic memory allocation using malloc, calloc, realloc, and free.",
        "Python programming practice involving lists, functions, data structures, and algorithmic problem-solving exercises.",
        "Academic exposure to digital electronics topics including multiplexers, ripple-carry adders, and logic gates."
        {
      id: "04",
      number: "Project 04",
      title: "Personal Portfolio Website",
      badge: "Web Development",
      description:
        "A responsive personal portfolio website built with React to showcase my skills, projects, education, and technical journey.",
      technologies: ["React", "JavaScript", "HTML", "CSS", "GitHub"],
      category: "Web Development",
      status: "Active Project",
      statusVariant: "cyan",
      github: "https://github.com/nikhil-debug-lab/R25EH104-nikhil",
      highlights: [
        "Built a responsive portfolio website using React components.",
        "Created a dedicated Projects section to showcase technical work.",
        "Used GitHub for version control and project collaboration."
      ],
      codeSnippet: `// Personal Portfolio — React
function Portfolio() {
  return (
    <section>
      <h2>Projects</h2>
      <p>Showcasing my technical projects and learning journey.</p>
    </section>
  );
}`
    } ],
      codeSnippet: `/* C Dynamic Memory Management & Pointer Logic */
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int id;
    float reading;
} SensorData;

int main() {
    int count = 5;
    SensorData *buffer = (SensorData *)malloc(count * sizeof(SensorData));
    
    if (buffer == NULL) {
        printf("[-] Memory allocation failed!\\n");
        return 1;
    }
    
    for (int i = 0; i < count; i++) {
        buffer[i].id = i + 1;
        buffer[i].reading = (i + 1) * 12.5f;
    }
    
    printf("[+] Allocated and verified %d sensor nodes in heap.\\n", count);
    
    // Clean memory safety practices
    free(buffer);
    buffer = NULL;
    return 0;
}`
    }
  ],

  academicExperience: {
    title: "Academic & Practical Experience",
    points: [
      {
        title: "Dynamic Memory Allocation in C",
        desc: "Hands-on practice with C programming, including dynamic memory allocation using malloc, calloc, realloc, and free with careful memory safety and pointer verification."
      },
      {
        title: "Python Problem Solving & Data Structures",
        desc: "Python programming exercises involving lists, dictionaries, modular functions, algorithmic thinking, and debugging logic."
      },
      {
        title: "Digital Electronics & Logic Circuits",
        desc: "Academic exposure to fundamental digital electronics topics such as multiplexers (MUX), ripple-carry adders, Boolean logic minimization, and combinational circuits."
      }
    ]
  },

  strengths: [
    {
      id: 1,
      title: "Problem Solving",
      description: "Approaching programming and hardware challenges with structured, systematic thinking.",
      icon: "Brain",
      accent: "from-cyan-500 to-blue-500"
    },
    {
      id: 2,
      title: "Practical Learning",
      description: "Hands-on experience building working prototypes and testing tangible solutions.",
      icon: "Cpu",
      accent: "from-blue-500 to-indigo-500"
    },
    {
      id: 3,
      title: "Technical Curiosity",
      description: "Enthusiastic about exploring embedded hardware, IoT protocols, and modern development stacks.",
      icon: "Sparkles",
      accent: "from-indigo-500 to-purple-500"
    },
    {
      id: 4,
      title: "Project Development",
      description: "End-to-end focus on circuit design, control flow code, testing, and comprehensive documentation.",
      icon: "FolderGit2",
      accent: "from-purple-500 to-pink-500"
    },
    {
      id: 5,
      title: "Adaptability",
      description: "Comfortable adapting to new tools, troubleshooting deployment errors, and learning new concepts.",
      icon: "Compass",
      accent: "from-emerald-500 to-cyan-500"
    }
  ],

  careerInterests: [
    {
      title: "Software Development",
      description: "Building clean, maintainable software and core computational systems.",
      icon: "Code"
    },
    {
      title: "Embedded Systems",
      description: "Programming microcontrollers, sensors, actuators, and hardware control flow.",
      icon: "Cpu"
    },
    {
      title: "IoT (Internet of Things)",
      description: "Connecting smart devices, wireless communication modules (Bluetooth/WiFi), and automation.",
      icon: "Radio"
    },
    {
      title: "Web Technologies",
      description: "Developing modern web interfaces and deploying full-stack web applications.",
      icon: "Globe"
    },
    {
      title: "Electronics & Automation",
      description: "Digital electronics, circuit design, automated switching, and hardware-software integration.",
      icon: "Zap"
    }
  ],

  careerObjective: {
    statement:
      "Motivated engineering student with hands-on experience in programming, electronics, embedded systems, and basic web deployment. Interested in software development, embedded systems, and technology-driven problem solving.",
    focusAreas: [
      "Software Development",
      "Embedded Systems",
      "IoT & Automation",
      "Web Technologies",
      "Digital Electronics"
    ]
  },

  education: [
    {
      degree: "B.Tech in Engineering",
      institution: "REVA University",
      location: "Bengaluru, Karnataka, India",
      status: "Currently Pursuing",
      focus: "Programming Fundamentals, Embedded Systems, Digital Electronics, and Technology-Driven Problem Solving",
      icon: "GraduationCap"
    }
  ],

  learningJourney: {
    headline: "Engineering & Technical Roadmap",
    subheadline:
      "Continuous growth across C programming, Python problem solving, embedded microcontrollers, and modern web deployment.",
    steps: [
      {
        id: 1,
        title: "C Programming & Dynamic Memory",
        status: "Active Foundation",
        desc: "Mastering malloc, calloc, realloc, free, pointers, structures, and low-level memory efficiency.",
        isCurrent: true,
        tag: "Core Language"
      },
      {
        id: 2,
        title: "Embedded Systems & Arduino",
        status: "Practical Focus",
        desc: "Building prototypes with Arduino Nano, HC-05 Bluetooth, relays, solenoid locks, and circuit integration.",
        isCurrent: true,
        tag: "Hardware & IoT"
      },
      {
        id: 3,
        title: "Python Problem Solving",
        status: "Active Practice",
        desc: "Solving algorithmic problems, working with lists, functions, and modular logic paradigms.",
        isCurrent: true,
        tag: "Algorithms"
      },
      {
        id: 4,
        title: "Web & Deployment (GitHub & Vercel)",
        status: "Active Skill",
        desc: "Source code management with Git/GitHub, continuous deployment with Vercel, and modern UI development.",
        isCurrent: true,
        tag: "Web & Cloud"
      },
      {
        id: 5,
        title: "Digital Electronics & Systems",
        status: "Academic Exposure",
        desc: "Studying multiplexers, ripple-carry adders, digital logic design, and automated electronics.",
        isCurrent: true,
        tag: "Electronics"
      }
    ]
  },

  additionalInfo: {
    languages: [
      { name: "English", level: "Fluent / Professional" },
      { name: "Kannada", level: "Native / Conversational" },
      { name: "Hindi", level: "Conversational" }
    ],
    interests: [
      { name: "Embedded Systems", icon: "Cpu" },
      { name: "Software Development", icon: "Code" },
      { name: "IoT & Automation", icon: "Radio" },
      { name: "Problem Solving", icon: "Brain" }
    ]
  },

  contact: {
    title: "Let's Connect",
    description: "I'm always open to discussing technology, embedded systems, software engineering, and practical project collaborations.",
    location: "Bengaluru, Karnataka, India",
    email: "nikhilniki864@gmail.com",
    phone: "7676289340"
  },

  terminalSnippets: {
    "smart_lock.ino": `// Arduino Nano + HC-05 Bluetooth Smart Lock Prototype
#include <SoftwareSerial.h>

SoftwareSerial BTSerial(10, 11); // RX, TX
const int RELAY_PIN = 7;
const int STATUS_LED = 13;

void setup() {
  pinMode(RELAY_PIN, OUTPUT);
  pinMode(STATUS_LED, OUTPUT);
  digitalWrite(RELAY_PIN, HIGH); // Default: locked
  
  Serial.begin(9600);
  BTSerial.begin(9600);
  Serial.println("[READY] Smart Lock Prototype Initialized.");
}

void loop() {
  if (BTSerial.available()) {
    char cmd = BTSerial.read();
    if (cmd == 'U' || cmd == '1') {
      digitalWrite(RELAY_PIN, LOW); // Solenoid opens
      digitalWrite(STATUS_LED, HIGH);
      BTSerial.println("STATUS: ACCESS_GRANTED");
      delay(4000);
      digitalWrite(RELAY_PIN, HIGH); // Relock
      digitalWrite(STATUS_LED, LOW);
      BTSerial.println("STATUS: LOCKED");
    }
  }
}`,

    "memory_dsa.c": `/* C Programming: Dynamic Memory Allocation & Safety */
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int nodeId;
    char label[32];
    double signalStrength;
} Node;

int main() {
    int totalNodes = 4;
    // Dynamic memory allocation with calloc (zero initialized)
    Node *nodes = (Node *)calloc(totalNodes, sizeof(Node));
    
    if (nodes == NULL) {
        printf("[-] Memory allocation failed.\\n");
        return 1;
    }
    
    printf("[+] Memory allocated successfully at: %p\\n", (void *)nodes);
    
    for (int i = 0; i < totalNodes; i++) {
        nodes[i].nodeId = i + 1;
        snprintf(nodes[i].label, sizeof(nodes[i].label), "Sensor_Node_%d", i + 1);
        nodes[i].signalStrength = 95.5 - (i * 4.2);
        printf("   -> Node %d: %s | Signal: %.1fdB\\n", nodes[i].nodeId, nodes[i].label, nodes[i].signalStrength);
    }
    
    // Resource cleanup
    free(nodes);
    nodes = NULL;
    printf("[✓] Memory freed safely (No leaks).\\n");
    return 0;
}`,

    "solver.py": `# Python Algorithmic Problem Solving & Data Structures
def analyze_sensor_telemetry(readings):
    """Clean, structured data processing in Python."""
    valid_readings = [r for r in readings if r.get("valid", False)]
    average_signal = sum(r["signal"] for r in valid_readings) / max(len(valid_readings), 1)
    
    return {
        "candidate": "S. Nikhil",
        "role": "Aspiring Software / Electronics Engineer",
        "processed_samples": len(valid_readings),
        "mean_signal_db": round(average_signal, 2),
        "status": "Optimal Execution"
    }

data = [
    {"id": 1, "signal": 92.4, "valid": True},
    {"id": 2, "signal": 88.1, "valid": True},
    {"id": 3, "signal": 0.0, "valid": False}
]

print(analyze_sensor_telemetry(data))`
  }
};
