const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Weekly Report",
        description: "Compile all departmental updates for weekly summary.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-07-09",
        category: "Reporting"
      },
      {
        title: "Update CRM Data",
        description: "Ensure all client interactions are logged.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-07-07",
        category: "Data Entry"
      },
      {
        title: "Client Follow-up Call",
        description: "Check in with client after last support ticket.",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2025-07-08",
        category: "Client Service"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Database Backup",
        description: "Run full backup on production DB.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-07-05",
        category: "IT"
      },
      {
        title: "Network Health Check",
        description: "Monitor traffic and server load.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-07-09",
        category: "Maintenance"
      },
      {
        title: "Fix Login Bug",
        description: "Resolve authentication issue on login page.",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        date: "2025-07-06",
        category: "Bug Fix"
      },
      {
        title: "Deploy Patch 1.2",
        description: "Push security updates to production.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-07-04",
        category: "Deployment"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Team Meeting",
        description: "Discuss Q3 goals and team feedback.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-07-01",
        category: "Meeting"
      },
      {
        title: "Organize Documents",
        description: "Sort contracts into shared drive.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-07-09",
        category: "Admin"
      },
      {
        title: "Email Cleanup",
        description: "Delete spam and organize inbox.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-07-06",
        category: "Maintenance"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Research Market Trends",
        description: "Gather data on competitors’ strategies.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-07-09",
        category: "Research"
      },
      {
        title: "Prepare Presentation",
        description: "Slides for monthly board meeting.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-07-07",
        category: "Reporting"
      },
      {
        title: "Social Media Post",
        description: "Design and schedule LinkedIn campaign.",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        date: "2025-07-06",
        category: "Marketing"
      },
      {
        title: "Survey Feedback Review",
        description: "Analyze customer satisfaction results.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-07-04",
        category: "Analytics"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Write Blog Article",
        description: "Post about recent product update.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-07-09",
        category: "Content"
      },
      {
        title: "Customer Onboarding",
        description: "Guide new users through platform.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-07-05",
        category: "Support"
      },
      {
        title: "Internal Training",
        description: "Attend workshop on new CRM features.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-07-03",
        category: "Training"
      },
      {
        title: "Support Ticket Follow-up",
        description: "Resolve pending high-priority issue.",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        date: "2025-07-06",
        category: "Support"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setlocalStorage = ()=>{
    
}
export const getlocalStorage = ()=>{

}

