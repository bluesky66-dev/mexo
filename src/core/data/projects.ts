export const users1 = [
  { name: "Emma Smith", src: "media/avatars/150-1.jpg" },
  { name: "Rudy Stone", src: "media/avatars/150-2.jpg" },
  { name: "Susan Redwood", initials: "S", state: "primary" },
];

export const users2 = [
  { name: "Alan Warden", initials: "A", state: "warning" },
  { name: "Brian Cox", src: "media/avatars/150-4.jpg" },
];

export const users3 = [
  { name: "Mad Masy", src: "media/avatars/150-1.jpg" },
  { name: "Cris Willson", src: "media/avatars/150-2.jpg" },
  { name: "Mike Garcie", initials: "M", state: "info" },
];

export const users4 = [
  { name: "Nich Warden", initials: "N", state: "warning" },
  { name: "Rob Otto", initials: "R", state: "success" },
];

export const users5 = [
  { name: "Francis Mitcham", src: "media/avatars/150-5.jpg" },
  { name: "Michelle Swanston", src: "media/avatars/150-13.jpg" },
  { name: "Susan Redwood", initials: "S", state: "primary" },
];

export const users6 = [
  { name: "Emma Smith", src: "media/avatars/150-1.jpg" },
  { name: "Rudy Stone", src: "media/avatars/150-2.jpg" },
  { name: "Susan Redwood", initials: "S", state: "primary" },
];

export const users7 = [
  { name: "Meloday Macy", src: "media/avatars/150-3.jpg" },
  { name: "Rabbin Watterman", initials: "S", state: "success" },
];

export const users8 = [
  { name: "Emma Smith", src: "media/avatars/150-1.jpg" },
  { name: "Rudy Stone", src: "media/avatars/150-2.jpg" },
  { name: "Susan Redwood", initials: "S", state: "primary" },
];

export const users9 = [
  { name: "Meloday Macy", src: "media/avatars/150-3.jpg" },
  { name: "Rabbin Watterman", initials: "S", state: "danger" },
];

const projects = [
  {
    id: 1,
    logo: 'media/svg/brand-logos/plurk.svg',
    title: 'Fitnes App',
    budget: 36400,
    description: 'CRM App application to HR efficiency',
    progress: 50,
    company: "Mexo",
    users: users1,
    status: 'Pending',
    files: [
      {
        id: 1,
        title: "Project Reqs..",
        type: "pdf",
        createdAt: "3 days ago"
      },
      {
        id: 2,
        title: "CRM App Docs..",
        type: "doc",
        createdAt: "3 days ago"
      },
      {
        id: 3,
        title: "User CRUD Styles",
        type: "css",
        createdAt: "4 days ago"
      },
    ],
    overtimes: [
      {
        name: "Incomplete",
				data: [70, 70, 80, 80, 75, 75, 75]
      },
      {
        name: "Complete",
				data: [55, 55, 60, 60, 55, 55, 60]
      }
    ],
    summary: [50, 25, 25],
    totalTasks: 230
  },
  {
    id: 2,
    logo: 'media/svg/brand-logos/figma-1.svg',
    title: 'Atica Banking',
    budget: 605100,
    description: 'Figma application to HR efficiency',
    progress: 100,
    company: "Mexo",
    users: users3,
    status: 'Overdue',
    files: [
      {
        id: 5,
        title: "Orders backup",
        type: "sql",
        createdAt: "1 week ago"
      },
      {
        id: 6,
        title: "UTAIR CRM API Co..",
        type: "tif",
        createdAt: "3 weeks ago"
      }
    ],
    overtimes: [
      {
        name: "Incomplete",
				data: [40, 50, 80, 80, 35, 75, 75]
      },
      {
        name: "Complete",
				data: [55, 55, 60, 60, 55, 55, 60]
      }
    ],
    summary: [80, 5, 15],
    totalTasks: 130
  },
  {
    id: 3,
    logo: 'media/svg/brand-logos/disqus.svg',
    title: 'Leaf CRM',
    budget: 605100,
    description: 'Leaf CRM application to HR efficiency',
    progress: 30,
    company: "Mexo",
    users: users2,
    status: 'Completed',
    files: [
      {
        id: 2,
        title: "CRM App Docs..",
        type: "doc",
        createdAt: "3 days ago"
      },
      {
        id: 3,
        title: "User CRUD Styles",
        type: "css",
        createdAt: "4 days ago"
      }
    ],
    overtimes: [
      {
        name: "Incomplete",
				data: [70, 70, 80, 50, 75, 75, 75]
      },
      {
        name: "Complete",
				data: [55, 55, 60, 80, 55, 55, 60]
      }
    ],
    summary: [5, 45, 50],
    totalTasks: 342
  },
  {
    id: 4,
    logo: 'media/svg/brand-logos/disqus.svg',
    title: 'Leaf CRM',
    budget: 400389,
    description: 'Leaf CRM application to HR efficiency',
    progress: 30,
    company: "Mexo",
    users: users2,
    status: "In Progress",
    files: [
      {
        id: 4,
        title: "Metronic Logo",
        type: "ai",
        createdAt: "5 days ago"
      }
    ],
    overtimes: [
      {
        name: "Incomplete",
				data: [70, 70, 80, 80, 75, 75, 75]
      },
      {
        name: "Complete",
				data: [55, 55, 60, 60, 55, 55, 60]
      }
    ],
    summary: [30, 45, 25],
    totalTasks: 230
  },
  {
    id: 5,
    logo: 'media/svg/brand-logos/figma-1.svg',
    title: 'Atica Banking',
    budget: 605100,
    description: 'Leaf CRM application to HR efficiency',
    progress: 30,
    company: "Mexo",
    users: users5,
    status: "In Progress",
    files: [
      {
        id: 6,
        title: "UTAIR CRM API Co..",
        type: "tif",
        createdAt: "3 weeks ago"
      }
    ],
    overtimes: [
      {
        name: "Incomplete",
				data: [70, 70, 80, 80, 75, 75, 75]
      },
      {
        name: "Complete",
				data: [55, 55, 60, 60, 55, 55, 60]
      }
    ],
    summary: [30, 45, 25],
    totalTasks: 230
  },
  {
    id: 6,
    logo: 'media/svg/brand-logos/sentry-3.svg',
    title: 'Finance Dispatch',
    budget: 605100,
    description: 'Leaf CRM application to HR efficiency',
    progress: 60,
    company: "Mexo",
    users: users4,
    status: "Pending",
    files: [
      {
        id: 2,
        title: "CRM App Docs..",
        type: "doc",
        createdAt: "3 days ago"
      }
    ],
    overtimes: [
      {
        name: "Incomplete",
				data: [70, 70, 80, 80, 75, 75, 75]
      },
      {
        name: "Complete",
				data: [55, 55, 60, 60, 55, 55, 60]
      }
    ],
    summary: [50, 45, 5],
    totalTasks: 230
  },
  {
    id: 7,
    logo: 'media/svg/brand-logos/xing-icon.svg',
    title: '9 Degree',
    budget: 605100,
    description: 'Leaf CRM application to HR efficiency',
    progress: 40,
    company: "Mexo",
    users: users8,
    status: "In Progress",
    files: [
      {
        id: 3,
        title: "User CRUD Styles",
        type: "css",
        createdAt: "4 days ago"
      }
    ],
    overtimes: [
      {
        name: "Incomplete",
				data: [70, 70, 80, 80, 75, 75, 75]
      },
      {
        name: "Complete",
				data: [55, 55, 60, 60, 55, 55, 60]
      }
    ],
    summary: [10, 45, 45],
    totalTasks: 230
  },
  {
    id: 8,
    logo: 'media/svg/brand-logos/tvit.svg',
    title: 'GoPro App',
    budget: 605100,
    description: 'Leaf CRM application to HR efficiency',
    progress: 70,
    company: "Mexo",
    users: users6,
    status: "In Progress",
    files: [
      {
        id: 5,
        title: "Orders backup",
        type: "sql",
        createdAt: "1 week ago"
      }
    ],
    overtimes: [
      {
        name: "Incomplete",
				data: [70, 70, 80, 80, 75, 75, 75]
      },
      {
        name: "Complete",
				data: [55, 55, 60, 60, 55, 55, 60]
      }
    ],
    summary: [20, 65, 15],
    totalTasks: 230
  },
  {
    id: 9,
    logo: 'media/svg/brand-logos/aven.svg',
    title: 'Buldozer CRM',
    budget: 605100,
    description: 'Leaf CRM application to HR efficiency',
    progress: 30,
    company: "Mexo",
    users: users9,
    status: "In Progress",
    files: [
      {
        id: 6,
        title: "UTAIR CRM API Co..",
        type: "tif",
        createdAt: "3 weeks ago"
      }
    ],
    overtimes: [
      {
        name: "Incomplete",
				data: [70, 70, 80, 80, 75, 75, 75]
      },
      {
        name: "Complete",
				data: [55, 55, 60, 60, 55, 55, 60]
      }
    ],
    summary: [30, 45, 25],
    totalTasks: 230
  },
  {
    id: 10,
    logo: 'media/svg/brand-logos/treva.svg',
    title: 'Aviasales App',
    budget: 605100,
    description: 'Leaf CRM application to HR efficiency',
    progress: 10,
    company: "Mexo",
    users: users7,
    status: "In Progress",
    files: [
      {
        id: 2,
        title: "CRM App Docs..",
        type: "doc",
        createdAt: "3 days ago"
      }
    ],
    overtimes: [
      {
        name: "Incomplete",
				data: [70, 70, 80, 80, 75, 75, 75]
      },
      {
        name: "Complete",
				data: [55, 55, 60, 60, 55, 55, 60]
      }
    ],
    summary: [30, 45, 25],
    totalTasks: 230
  },
  {
    id: 10,
    logo: 'media/svg/brand-logos/kanba.svg',
    title: 'Oppo CRM',
    budget: 605100,
    description: 'Leaf CRM application to HR efficiency',
    progress: 10,
    company: "Mexo",
    users: users7,
    status: "Completed",
    files: [
      {
        id: 3,
        title: "User CRUD Styles",
        type: "css",
        createdAt: "4 days ago"
      }
    ],
    overtimes: [
      {
        name: "Incomplete",
				data: [70, 70, 80, 80, 75, 75, 75]
      },
      {
        name: "Complete",
				data: [55, 55, 60, 60, 55, 55, 60]
      }
    ],
    summary: [30, 45, 25],
    totalTasks: 230
  }

]

export default projects
