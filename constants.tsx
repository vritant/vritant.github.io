
import { Experience, Article, Hobby, Project } from './types';
import bmcImage from './images/BMC.png';
import isbImage from './images/isb.png';
import startupImage from './images/startup.png';

// Generic local asset patterns for other items
const LOCAL_ASSET_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%231a1a1a'/%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23333'/%3E%3Cstop offset='1' stop-color='%23000'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='400' cy='300' r='200' fill='url(%23a)' opacity='0.5'/%3E%3C/svg%3E";

export const BIO_MARKDOWN = `
# Hi, I'm Vritant Jain.

15 years of global experience building **Enterprise SaaS**. Ex Co-founder, ISB Valedictorian. 

I specialize in **0-1 journeys**, platform products, and AI-led competitive displacement. Currently focusing on multi-agent AI native systems.
`;

export const EXPERIENCES: Experience[] = [
  {
    role: "Principal Product Manager",
    company: "BrowserStack",
    period: "2023 - Present",
    oneLiner: "Scaling Test Management from $200K to $3M ARR, leading 5 PMs and 40+ developers."
  },
  {
    role: "Sr. Product Manager",
    company: "Gainsight",
    period: "2021 - 2023",
    oneLiner: "Launched Master Data Management platform; reduced onboarding from 3 weeks to 5 minutes."
  },
  {
    role: "Co-Founder",
    company: "Gaadiman.com",
    period: "2018 - 2021",
    oneLiner: "Built and scaled a two-sided marketplace for roadside assistance with 50% MoM growth."
  },
  {
    role: "Senior SW Engineer",
    company: "Red Hat",
    period: "2012 - 2018",
    oneLiner: "Led integration of Oracle & Salesforce; delivered 20+ releases across 40+ REST services."
  },
  {
    role: "Graduate Assistant",
    company: "UT Arlington",
    period: "2010 - 2012",
    oneLiner: "Conducted research on distributed systems and supported undergraduate CS coursework."
  }
];

export const EDUCATION = [
  {
    degree: "Executive MBA",
    school: "Indian School of Business (ISB)",
    period: "2018 - 2020",
    achievement: "Valedictorian, Scholar of Excellence, Dean's List"
  },
  {
    degree: "MSc. Computer Science",
    school: "University of Texas, Arlington",
    period: "2010 - 2012",
    achievement: "Gold Standard GPA (4.0/4.0)"
  },
  {
    degree: "BTech Computer Science",
    school: "SMEC @ JNTU",
    period: "2005 - 2009",
    achievement: "Cofounder Linux User Group"
  }
];

export const ACHIEVEMENTS = [
  "HULT Finalist @ ISB",
  "Published Master's Thesis @ UTA",
  "Teach For India Volunteer",
  "Incubated @ IIT Hyd"
];

export const FEATURED_PROJECT: Project = {
  name: "AI Business Model Canvas",
  description: "A multi-agent AI native product that helps founders systematically evaluate business ideas using the power of agentic workflows. As seen in the Swiggy case study analysis below.",
  link: "https://businessmodelcanvas.vritant.com",
  tags: ["Multi Agent Architecture", "LLM Fine-tuning", "Idea Evaluation", "Product Strategy"],
  imageUrl: bmcImage
};

export const ARTICLES: Article[] = [
  {
    title: "8 things I loved doing at my start-up",
    date: "March 2022",
    link: "https://www.linkedin.com/posts/vritant_8-things-i-loved-doing-at-my-start-up-ugcPost-6788854094833438721-eDbM",
    platform: "LinkedIn",
    imageUrl: startupImage
  },
  {
    title: "Valedictorian at ISB",
    date: "Jan 2021",
    link: "https://www.linkedin.com/posts/vritant_isbgradday-isbpgpmax-isbpgpmfab-activity-6627017135656923137-Ut4A",
    platform: "LinkedIn",
    imageUrl: isbImage
  }
];

export const HOBBIES: Hobby[] = [
  {
    name: "Dungeons & Dragons",
    description: "I'm a long-time Dungeon Master, weaving complex narratives and managing 'stat blocks' for groups of 5+ players.",
    imageUrl: LOCAL_ASSET_PLACEHOLDER
  },
  {
    name: "Data-Driven Coffee",
    description: "Applying engineering rigor to the morning ritual. I track extraction yields and TDS levels for the perfect cup.",
    imageUrl: LOCAL_ASSET_PLACEHOLDER
  },
  {
    name: "Hydroponics Gardening",
    description: "Building automated nutrient delivery systems for indoor farming. Currently growing heirloom basil.",
    imageUrl: LOCAL_ASSET_PLACEHOLDER
  },
  {
    name: "Brewing & Fermentation",
    description: "Managing biological state machines. I brew small batches of cider, water kefir, and kombucha.",
    imageUrl: LOCAL_ASSET_PLACEHOLDER
  },
  {
    name: "Guitar",
    description: "Self-taught fingerstyle guitarist. Finding patterns in music theory similar to logic structures.",
    imageUrl: LOCAL_ASSET_PLACEHOLDER
  }
];
