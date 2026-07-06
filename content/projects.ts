export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  overview: string;
  architecture: {
    title: string;
    description: string;
    diagramData?: string;
  };
  apiDesign?: string;
  dbSchema?: string;
  scalability: string[];
  tradeoffs: string[];
};

export const projects: Project[] = [
  {
    slug: "interview-easy",
    title: "Interview Easy",
    description: "Full-stack AI-powered platform automating the screening process for candidates using Gemini Flash 2.0 and Twilio.",
    tags: ["FastAPI", "React", "PostgreSQL", "Celery", "Redis", "Gemini API"],
    metrics: [
      { label: "Concurrent APIs", value: "1,000+" },
      { label: "Voice Latency", value: "<800ms" }
    ],
    overview: "A highly scalable AI-powered platform designed to automate initial candidate screening. By integrating real-time voice interactions and dynamically generating technical questions via Gemini Flash 2.0, it reduces manual interview preparation time by 80%.",
    architecture: {
      title: "Asynchronous Task Processing with Celery",
      description: "The platform handles long-running AI generation and TTS/STT conversions asynchronously. Celery brokers tasks via Redis, ensuring the main FastAPI event loop remains unblocked.",
      diagramData: `[Client React App] <--> (FastAPI Backend)
(FastAPI Backend) <--> [Redis Broker]
[Redis Broker] --> (Celery Worker A)
[Redis Broker] --> (Celery Worker B)
(Celery Workers) <--> [Gemini Flash 2.0]
(Celery Workers) <--> [Twilio / Azure TTS]`
    },
    scalability: [
      "Decoupled asynchronous task processing using Celery and Redis to handle 1,000+ concurrent API requests.",
      "Persistent data management for 500+ mock interviews using PostgreSQL.",
      "Secure archival of interview transcripts using Azure Blob Storage."
    ],
    tradeoffs: [
      "Latency vs Quality: Balancing the sub-second latency requirement (under 800ms) with the complexity of real-time TTS/STT and LLM generation.",
      "Redis memory management for Celery broker limits the total number of queued tasks before eviction."
    ]
  },
  {
    slug: "video-calling-application",
    title: "Video Calling Application",
    description: "Responsive video conferencing platform supporting HD video streams and real-time screen sharing.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stream SDK", "Clerk"],
    metrics: [
      { label: "Stream Latency", value: "<200ms" },
      { label: "Concurrent Users", value: "20/session" }
    ],
    overview: "A robust video conferencing application built with Next.js and the Stream SDK. Designed to facilitate one-click meeting creation, real-time screen sharing, recording, and cloud-based session backups.",
    architecture: {
      title: "Real-time Media Streaming with Stream SDK",
      description: "Leverages the Stream SDK for WebRTC connections and media routing, offloading heavy video encoding/decoding from the application server. Clerk handles JWT-based authentication and role-based permissions.",
      diagramData: `[Next.js Client] <--> (Stream SDK Edge Network)
[Next.js Client] --> (Clerk Auth)
(Stream SDK Edge Network) <--> [Participant B]
(Stream SDK Edge Network) <--> [Participant C]`
    },
    scalability: [
      "Offloaded media routing to Stream's global edge network to maintain <200ms latency.",
      "Stateless session management and authentication handled via Clerk for 100+ active user sessions.",
      "Cloud-based session backups stream directly to blob storage to avoid local memory exhaustion."
    ],
    tradeoffs: [
      "Reliance on third-party SDKs (Stream, Clerk) reduces infrastructure overhead but introduces vendor lock-in.",
      "Managing complex React state for 20 concurrent participant video tiles requires careful memoization."
    ]
  },
  {
    slug: "ai-powered-web-scraper",
    title: "AI-Powered Web Scraper",
    description: "Dynamic web scraper capable of extracting data from 100+ JavaScript-rendered pages per minute using Selenium and Gemini.",
    tags: ["Python", "Selenium", "Streamlit", "Gemini Flash 2.0"],
    metrics: [
      { label: "Throughput", value: "100+ pages/min" },
      { label: "Time Saved", value: "15 hrs/wk" }
    ],
    overview: "An automated data extraction pipeline built to parse and structure complex, JavaScript-rendered web content. It utilizes Selenium for infinite scrolling and Gemini Flash 2.0 to semantically enrich the scraped data.",
    architecture: {
      title: "Headless Browser Pipeline with Semantic Parsing",
      description: "Selenium drives headless browser instances to render client-side frameworks. Raw HTML is parsed via DOM trees and fed into Gemini for structuring and classification. Streamlit serves as the interactive dashboard.",
      diagramData: `[Streamlit Dashboard] --> (Python Scraper Orchestrator)
(Python Scraper Orchestrator) --> [Selenium Headless Worker 1]
(Python Scraper Orchestrator) --> [Selenium Headless Worker 2]
[Selenium Workers] --> (Raw HTML)
(Raw HTML) --> [Gemini Flash 2.0] --> (Structured JSON)`
    },
    scalability: [
      "Parallel headless browser execution to scale throughput to 100+ pages per minute.",
      "Automated DOM parsing rules combined with LLM fallback for highly robust extraction against changing website layouts."
    ],
    tradeoffs: [
      "High CPU/Memory cost of running multiple headless browser instances compared to simple HTTP scraping.",
      "Latency introduced by passing 10,000+ lines of HTML through an LLM for content enrichment."
    ]
  },
  {
    slug: "hardware-design-neural-network",
    title: "Hardware Design of Neural Network Architectures",
    description: "Designed a custom high-performance standard cell library using domino logic in SCL180nm CMOS technology.",
    tags: ["Verilog", "Cadence", "Hardware Design", "CMOS"],
    metrics: [
      { label: "Switching Speed", value: "+15%" },
      { label: "Power Consumption", value: "-10%" }
    ],
    overview: "A deep-tech hardware engineering project focusing on the design and characterization of a custom standard cell library using domino logic. The library was validated by synthesizing a deep neural network.",
    architecture: {
      title: "Domino Logic Cell Library in SCL180nm",
      description: "Created 10+ combinational and sequential digital logic blocks with multiple drive strengths to optimize signal integrity and reduce switching delays.",
      diagramData: `[Verilog RTL] --> (Synthesis Tool)
(Synthesis Tool) <--> [Custom Standard Cell Library]
(Synthesis Tool) --> (Optimized Gate-Level Netlist)
(Optimized Gate-Level Netlist) --> [Power/Timing Analysis]`
    },
    scalability: [
      "Multiple drive strengths engineered for cells to handle massive fan-out required in neural network routing.",
      "Validated library performance at scale by synthesizing a full DNN, resulting in a 10% overall power reduction."
    ],
    tradeoffs: [
      "Domino logic improves speed (+15%) but increases design complexity and vulnerability to noise compared to static CMOS.",
      "Strict timing constraints require careful clock distribution network design."
    ]
  },
  {
    slug: "gestational-diabetes-prediction",
    title: "Gestational Diabetes Prediction",
    description: "Built predictive ML models on maternal health datasets to classify gestational diabetes risk with 97% accuracy.",
    tags: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    metrics: [
      { label: "Accuracy", value: "97%" },
      { label: "Dataset Size", value: "1,000+ records" }
    ],
    overview: "A machine learning pipeline designed to predict gestational diabetes using maternal health datasets. Focused on robust feature engineering, data balancing, and clinical explainability.",
    architecture: {
      title: "Data Pipeline and Model Ensemble",
      description: "Utilized SMOTE for handling class imbalances. Trained an ensemble of Random Forest, Logistic Regression, and SVM models. Hyperparameters were tuned via GridSearchCV.",
      diagramData: `[Raw Patient Records] --> (Data Preprocessing & SMOTE)
(Data Preprocessing) --> [Feature Engineering]
[Feature Engineering] --> (GridSearchCV Tuning)
(GridSearchCV Tuning) --> [Model Ensemble: RF, SVM, LR]
[Model Ensemble] --> (ROC Curves & Feature Importances)`
    },
    scalability: [
      "Pipeline modularized using scikit-learn Pipelines to allow easy swapping of underlying algorithms.",
      "Automated hyperparameter tuning scales efficiently across multiple CPU cores."
    ],
    tradeoffs: [
      "Choosing SMOTE for synthetic data generation introduces the risk of overfitting to the minority class.",
      "Random Forest provides high accuracy but less direct interpretability compared to Logistic Regression, mitigated by using Feature Importances."
    ]
  },
  {
    slug: "avian-response-climate-change",
    title: "Avian Response to Climate Change",
    description: "Analyzed 50,000+ avian sighting records to model habitat shifts and forecast species vulnerability under IPCC scenarios.",
    tags: ["R", "ggplot2", "caret", "dplyr"],
    metrics: [
      { label: "Data Records", value: "50,000+" },
      { label: "Pipeline Speed", value: "+30%" }
    ],
    overview: "A comprehensive temporal-spatial data processing and species distribution modeling (SDM) project to forecast ecological trends and habitat shifts across the Scottish Highlands over 40 years.",
    architecture: {
      title: "Spatial Data Processing Pipeline",
      description: "Ingested meteorological data and sighting records. Used dplyr to optimize data manipulation, resulting in a 30% execution speedup. Modeled with Random Forest and SVM.",
      diagramData: `[Meteorological Data] --> (Data Aggregation via dplyr)
[Avian Sighting Records] --> (Data Aggregation via dplyr)
(Data Aggregation) --> [Species Distribution Model (SDM)]
[SDM] --> (IPCC Climate Scenarios)
(IPCC Scenarios) --> [Vulnerability Forecast Maps (ggplot2)]`
    },
    scalability: [
      "Vectorized operations in R (dplyr) to handle 40 years of continuous time-series data without memory bottlenecks.",
      "SDM framework designed to easily ingest new climate model inputs without rewriting the core pipeline."
    ],
    tradeoffs: [
      "R is excellent for statistical modeling and visualization (ggplot2) but lacks the general-purpose deployment ecosystem of Python.",
      "Modeling 3 distinct IPCC scenarios requires significant compute time for cross-validation."
    ]
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
