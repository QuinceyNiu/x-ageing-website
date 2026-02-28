export type NewsItem = {
  slug: string;
  category: "company" | "industry" | "articles";
  date: string;
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
  image?: string;
  contentZh: string[];
  contentEn: string[];
};

// 最新的排在最前面
export const newsItems: NewsItem[] = [
  {
    slug: "seed-funding",
    category: "company",
    date: "2025-12",
    titleZh: "小龄生物完成种子轮融资，获和元生物战略投资",
    titleEn: "X-AGEING Completes Seed Round, Secures Strategic Investment from OBiO Technology",
    descZh:
      "上海小龄生物医药技术有限公司宣布完成种子轮融资，由和元生物领投。本轮融资将用于外泌体工程化平台建设及AI数字孪生系统开发。",
    descEn:
      "Shanghai Xiaoling Biomedical Technology Co., Ltd. announced completion of seed round financing, led by OBiO Technology. Funds will be used for exosome engineering platform construction and AI digital twin system development.",
    contentZh: [
      "上海小龄生物医药技术有限公司（X-AGEING）宣布完成种子轮融资，由和元生物技术（上海）股份有限公司领投。",
      "本轮融资将主要用于外泌体工程化技术平台的建设、AI数字孪生智能抗衰系统的开发，以及核心团队的扩充。",
      "公司成立于2025年1月，总部位于上海张江科学城，专注于外泌体技术与AI数字孪生在抗衰老领域的研发与应用，致力于打造全球领先的精准抗衰解决方案提供商。",
    ],
    contentEn: [
      "Shanghai Xiaoling Biomedical Technology Co., Ltd. (X-AGEING) announced completion of its seed round financing, led by OBiO Technology (Shanghai) Co., Ltd.",
      "The funds will be primarily used for building an exosome engineering technology platform, developing the AI digital twin intelligent anti-aging system, and expanding the core team.",
      "Founded in January 2025 and headquartered in Zhangjiang Science City, Shanghai, the company focuses on R&D and application of exosome technology and AI digital twins in the anti-aging field, committed to becoming a globally leading provider of precision anti-aging solutions.",
    ],
  },
  {
    slug: "gold-award-2025",
    category: "company",
    date: "2025-10",
    titleZh: "喜讯｜小龄生物获「2025生命健康科技概念验证大赛」金奖",
    titleEn: "X-AGEING Wins Gold Award at 2025 Life & Health Tech Proof-of-Concept Competition",
    descZh:
      "近日，小龄生物（X-AGEING）在「2025生命健康科技概念验证大赛」中荣获金奖，充分体现了公司在\"AI × 外泌体\"融合创新与产业化转化方面的技术实力与应用潜力。",
    descEn:
      "X-AGEING recently won the Gold Award at the 2025 Life & Health Tech Proof-of-Concept Competition, demonstrating the company's technological strength and commercial potential in the fusion of AI and exosome innovation.",
    image: "/news/gold-award-2025.jpg",
    contentZh: [
      "近日，小龄生物（X-AGEING）在「2025生命健康科技概念验证大赛」中荣获金奖。该奖项充分体现了公司在\"AI × 外泌体\"融合创新与产业化转化方面的技术实力与应用潜力。",
      "未来我们将继续聚焦核心研发与落地合作，推动抗衰创新从概念验证走向真实世界应用。",
    ],
    contentEn: [
      "X-AGEING recently won the Gold Award at the 2025 Life & Health Tech Proof-of-Concept Competition. The award fully demonstrates the company's technological strength and application potential in the fusion innovation and industrialization of 'AI × Exosome'.",
      "Going forward, we will continue to focus on core R&D and implementation partnerships, driving anti-aging innovation from proof-of-concept to real-world application.",
    ],
  },
];
