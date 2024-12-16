export const tasks = [
    {
        "id": "task-001",
        "name": "Implement User Authentication",
        "description": "Create login and signup features for the app, including email verification.",
        "createdAt": "2024-12-12",
        "createdBy": "Stefan",
        "dueDate": "2024-12-20",
        "dueHour": "18:00",
        "priority": "high",
        "color": "blue",
        "status": "in-progress",
        "progress": 40,
        "tags": [
            { "name": "Authentication", "color": "green" },
            { "name": "Backend", "color": "purple" }
        ],
        "notes": ["note-001", "note-002"],
        "project": ["project-001"],
        "list": ["list-001"],
        isCompleted: false,
        "subtasks": [
            { "id": "subtask-001", "name": "Design UI for login", "description": "Create mockups for login screen", "isCompleted": false },
            { "id": "subtask-002", "name": "Set up backend API", "description": "Create endpoints for login and signup", "isCompleted": true }
        ]
    },
    {
        "id": "task-002",
        "name": "Update Documentation",
        "description": "Ensure the README file is up to date with all the recent changes in the project.",
        "createdAt": "2024-12-12",
        "createdBy": "Stefan",
        "dueDate": "2024-12-14",
        "dueHour": "12:00",
        "priority": "normal",
        "color": "yellow",
        "status": "pending",
        "progress": 0,
        "tags": [
            { "name": "Documentation", "color": "orange" },
            { "name": "Project", "color": "blue" }
        ],
        "notes": ["note-003"],
        "project": ["project-002"],
        "list": ["list-002"],
        isCompleted: false,
        "subtasks": [
            { "id": "subtask-003", "name": "Review recent changes", "description": "Go through the latest code commits", "isCompleted": false },
            { "id": "subtask-004", "name": "Update README sections", "description": "Add details about new features and setup instructions", "isCompleted": false }
        ]
    },
    {
        "id": "task-003",
        "name": "Client Meeting Preparation",
        "description": "Prepare agenda and presentation for the upcoming client meeting.",
        "createdAt": "2024-12-12",
        "createdBy": "Stefan",
        "dueDate": "2024-12-15",
        "dueHour": "10:00",
        "priority": "very-high",
        "color": "red",
        "status": "pending",
        "progress": 0,
        "tags": [
            { "name": "Meeting", "color": "pink" },
            { "name": "Client", "color": "blue" }
        ],
        "notes": ["note-004"],
        "project": ["project-003"],
        "list": ["list-003"],
        isCompleted: false,
        "subtasks": [
            { "id": "subtask-005", "name": "Create presentation slides", "description": "Design slides to showcase key points", "isCompleted": false },
            { "id": "subtask-006", "name": "Write meeting agenda", "description": "Outline key topics for discussion", "isCompleted": false }
        ]
    },
    
    {
        "id": "task-004",
        "name": "Optimize Website Performance",
        "description": "Improve website load time by optimizing images and minimizing CSS/JS files.",
        "createdAt": "2024-12-12",
        "createdBy": "Stefan",
        "dueDate": "2024-12-18",
        "dueHour": "15:00",
        "priority": "high",
        "color": "orange",
        "status": "in-progress",
        "progress": 50,
        "tags": [
            { "name": "Performance", "color": "green" },
            { "name": "Web Development", "color": "blue" }
        ],
        "notes": ["note-005"],
        "project": ["project-004"],
        "list": ["list-004"],
        isCompleted: false,
        "subtasks": [
            { "id": "subtask-007", "name": "Compress images", "description": "Use tools to compress large images", "isCompleted": false },
            { "id": "subtask-008", "name": "Minify CSS/JS", "description": "Remove unnecessary whitespace and comments from files", "isCompleted": false }
        ]
    },
    {
        "id": "task-005",
        "name": "Prepare Marketing Strategy",
        "description": "Plan the marketing strategy for the product launch next month.",
        "createdAt": "2024-12-12",
        "createdBy": "Stefan",
        "dueDate": "2024-12-16",
        "dueHour": "09:00",
        "priority": "very-high",
        "color": "red",
        "status": "pending",
        "progress": 0,
        "tags": [
            { "name": "Marketing", "color": "purple" },
            { "name": "Strategy", "color": "yellow" }
        ],
        "notes": ["note-006"],
        "project": ["project-005"],
        "list": ["list-005"],
        isCompleted: false,
        "subtasks": [
            { "id": "subtask-009", "name": "Market research", "description": "Analyze competitors and target audience", "isCompleted": false },
            { "id": "subtask-010", "name": "Create marketing plan", "description": "Develop detailed timeline and goals for marketing campaigns", "isCompleted": false }
        ]
    },
    {
        "id": "task-006",
        "name": "Bug Fixing Sprint",
        "description": "Fix critical bugs reported by QA before the release.",
        "createdAt": "2024-12-12",
        "createdBy": "Stefan",
        "dueDate": "2024-12-14",
        "dueHour": "17:00",
        "priority": "high",
        "color": "blue",
        "status": "in-progress",
        "progress": 60,
        "tags": [
            { "name": "Bug Fixes", "color": "red" },
            { "name": "QA", "color": "green" }
        ],
        "notes": ["note-007"],
        "project": ["project-006"],
        "list": ["list-006"],
        isCompleted: false,
        "subtasks": [
            { "id": "subtask-011", "name": "Fix login bug", "description": "Resolve issue where users cannot log in", "isCompleted": false },
            { "id": "subtask-012", "name": "Fix payment gateway bug", "description": "Ensure the payment system works correctly", "isCompleted": false }
        ]
    },
    {
        "id": "task-007",
        "name": "Create Blog Post",
        "description": "Write and publish a blog post on the company's website about the latest product updates.",
        "createdAt": "2024-12-12",
        "createdBy": "Stefan",
        "dueDate": "2024-12-17",
        "dueHour": "11:00",
        "priority": "normal",
        "color": "yellow",
        "status": "pending",
        "progress": 0,
        "tags": [
            { "name": "Content Creation", "color": "orange" },
            { "name": "Blog", "color": "green" }
        ],
        "notes": ["note-008"],
        "project": ["project-007"],
        "list": ["list-007"],
        isCompleted: false,
        "subtasks": [
            { "id": "subtask-013", "name": "Outline blog post", "description": "Create a draft outline for the blog post", "isCompleted": false },
            { "id": "subtask-014", "name": "Write blog post", "description": "Write the content based on the outline", "isCompleted": false }
        ]
    },
    {
        "id": "task-008",
        "name": "Conduct User Testing",
        "description": "Organize user testing sessions for the new app features and collect feedback.",
        "createdAt": "2024-12-12",
        "createdBy": "Stefan",
        "dueDate": "2024-12-19",
        "dueHour": "14:00",
        "priority": "very-high",
        "color": "red",
        "status": "pending",
        "progress": 0,
        "tags": [
            { "name": "User Testing", "color": "blue" },
            { "name": "Feedback", "color": "green" }
        ],
        "notes": ["note-009"],
        "project": ["project-008"],
        "list": ["list-008"],
        isCompleted: false,
        "subtasks": [
            { "id": "subtask-015", "name": "Prepare test scenarios", "description": "Write down test scenarios to be used during testing", "isCompleted": false },
            { "id": "subtask-016", "name": "Invite testers", "description": "Reach out to users for participation in the test", "isCompleted": false }
        ]
    }
    
    
    
    
    
]