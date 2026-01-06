export interface Server {
  id: string
  name: string
  type: string
  location: string
  category: string
  status: "operational" | "degraded" | "outage" | "maintenance"
  uptime: string
  lastReboot: string
  metrics: {
    cpu: {
      current: number
      max: number
    }
    memory: {
      current: number
      max: number
    }
    network: {
      current: number
      max: number
    }
  }
  uptimeHistory: {
    last30Days: number[]
    average: number
  }
}

export interface ServerStatusData {
  servers: Server[]
  averageResponseTime: number
}

export interface MaintenanceEvent {
  id: string
  title: string
  description: string
  startDate: string
  endDate: string
  status: "scheduled" | "in-progress" | "completed" | "cancelled"
  impact: "none" | "minor" | "major" | "critical"
  affectedServers: string[]
}

export const serverStatusData: ServerStatusData = {
  servers: [
    {
      id: "us-east-1",
      name: "US East (New York)",
      type: "Game Server",
      location: "New York",
      category: "Gaming",
      status: "operational",
      uptime: "99.95%",
      lastReboot: "14 days ago",
      metrics: {
        cpu: {
          current: 42,
          max: 100,
        },
        memory: {
          current: 58,
          max: 100,
        },
        network: {
          current: 75,
          max: 200,
        },
      },
      uptimeHistory: {
        last30Days: [
          99.8, 100, 99.9, 100, 99.7, 100, 99.8, 100, 100, 99.9, 100, 99.8, 100, 99.9, 100, 99.7, 100, 100, 99.9, 100,
          99.8, 100, 99.7, 100, 99.9, 100, 99.8, 100, 99.9, 100,
        ],
        average: 99.87,
      },
    },
    {
      id: "eu-west-1",
      name: "EU West (London)",
      type: "VPS Hosting",
      location: "London",
      category: "VPS",
      status: "operational",
      uptime: "99.98%",
      lastReboot: "21 days ago",
      metrics: {
        cpu: {
          current: 35,
          max: 100,
        },
        memory: {
          current: 42,
          max: 100,
        },
        network: {
          current: 62,
          max: 200,
        },
      },
      uptimeHistory: {
        last30Days: [
          100, 100, 99.9, 100, 100, 100, 99.9, 100, 100, 100, 99.8, 100, 100, 100, 99.9, 100, 100, 100, 99.9, 100, 100,
          100, 99.9, 100, 100, 100, 99.9, 100, 100, 100,
        ],
        average: 99.94,
      },
    },
    {
      id: "ap-northeast-1",
      name: "Asia Pacific (Tokyo)",
      type: "Dedicated Server",
      location: "Tokyo",
      category: "Dedicated",
      status: "degraded",
      uptime: "98.72%",
      lastReboot: "2 days ago",
      metrics: {
        cpu: {
          current: 78,
          max: 100,
        },
        memory: {
          current: 85,
          max: 100,
        },
        network: {
          current: 120,
          max: 200,
        },
      },
      uptimeHistory: {
        last30Days: [
          99.9, 99.8, 99.7, 99.6, 98.5, 97.2, 96.8, 97.5, 98.2, 98.5, 98.7, 99.1, 99.3, 99.5, 99.6, 99.7, 99.8, 99.9,
          100, 99.9, 99.8, 99.7, 99.6, 99.5, 99.4, 99.3, 99.2, 99.1, 99.0, 98.9,
        ],
        average: 99.01,
      },
    },
    {
      id: "ap-southeast-1",
      name: "Asia Pacific (Singapore)",
      type: "Game Server",
      location: "Singapore",
      category: "Gaming",
      status: "outage",
      uptime: "95.43%",
      lastReboot: "1 day ago",
      metrics: {
        cpu: {
          current: 92,
          max: 100,
        },
        memory: {
          current: 95,
          max: 100,
        },
        network: {
          current: 180,
          max: 200,
        },
      },
      uptimeHistory: {
        last30Days: [
          99.9, 99.8, 99.7, 99.6, 99.5, 99.4, 99.3, 99.2, 99.1, 99.0, 98.5, 98.0, 97.5, 97.0, 96.5, 96.0, 95.5, 95.0,
          94.5, 94.0, 93.5, 93.0, 92.5, 92.0, 91.5, 91.0, 90.5, 90.0, 89.5, 89.0,
        ],
        average: 95.87,
      },
    },
    {
      id: "eu-central-1",
      name: "EU Central (Frankfurt)",
      type: "VPS Hosting",
      location: "Frankfurt",
      category: "VPS",
      status: "maintenance",
      uptime: "99.12%",
      lastReboot: "5 hours ago",
      metrics: {
        cpu: {
          current: 15,
          max: 100,
        },
        memory: {
          current: 25,
          max: 100,
        },
        network: {
          current: 30,
          max: 200,
        },
      },
      uptimeHistory: {
        last30Days: [
          99.9, 99.9, 99.9, 99.8, 99.8, 99.8, 99.7, 99.7, 99.7, 99.6, 99.6, 99.6, 99.5, 99.5, 99.5, 99.4, 99.4, 99.4,
          99.3, 99.3, 99.3, 99.2, 99.2, 99.2, 99.1, 99.1, 99.1, 99.0, 99.0, 99.0,
        ],
        average: 99.47,
      },
    },
    {
      id: "ap-southeast-2",
      name: "Australia (Sydney)",
      type: "Game Server",
      location: "Sydney",
      category: "Gaming",
      status: "operational",
      uptime: "99.89%",
      lastReboot: "8 days ago",
      metrics: {
        cpu: {
          current: 38,
          max: 100,
        },
        memory: {
          current: 45,
          max: 100,
        },
        network: {
          current: 65,
          max: 200,
        },
      },
      uptimeHistory: {
        last30Days: [
          99.9, 99.9, 99.9, 99.9, 99.9, 99.9, 99.9, 99.9, 99.9, 99.9, 99.9, 99.9, 99.8, 99.8, 99.8, 99.8, 99.8, 99.8,
          99.8, 99.8, 99.8, 99.8, 99.8, 99.8, 99.9, 99.9, 99.9, 99.9, 99.9, 99.9,
        ],
        average: 99.86,
      },
    },
  ],
  averageResponseTime: 42,
}
