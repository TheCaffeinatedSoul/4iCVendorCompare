export type Vendor = {
  vendorName: string;
  companyStrength: string;
  fieldExp: string;
  revUSD: number;
  projDuration: string;
  projEfforts: string;
  subDate: string;
  delModel: string;
  rating: number;
  milestone: string;
  location: string;
  pdfPath: string;
  logoPath: string;
  about: string;
};

export const vendors: Vendor[] = [
  {
    vendorName: "AirBNB",
    companyStrength: "500 employees",
    fieldExp: "10 years",
    revUSD: 150000,
    projDuration: "6 months",
    projEfforts: "2000 hours",
    subDate: "2024-05-20",
    delModel: "Onsite",
    rating: 4.5,
    milestone: "Completed 50+ projects",
    location: "New York, USA",
    pdfPath: "/assets/Files/Get_Started_With_Smallpdf.pdf",
    logoPath: "/assets/Logos/airbnb.svg",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac velit quis neque dictum vulputate. Fusce nec metus at quam cursus hendrerit ut id risus. Cras sit amet convallis velit. Phasellus feugiat orci vel odio aliquet, vel facilisis dolor consequat. Aenean sit amet justo id est convallis tempus. Aliquam erat volutpat. Sed et convallis enim, in dictum libero. Nulla facilisi. Praesent eget dignissim orci. Etiam pharetra eros nec sapien ultrices, sit amet feugiat leo fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent a faucibus mauris. Cras vehicula, nisl sit amet vehicula scelerisque, mi libero scelerisque lectus, ut tincidunt lectus metus ut nulla. Suspendisse et orci mauris. Sed pharetra justo vitae est tincidunt, sit amet lacinia felis porttitor.",
  },
  {
    vendorName: "Apple",
    companyStrength: "1200 employees",
    fieldExp: "15 years",
    revUSD: 300000,
    projDuration: "8 months",
    projEfforts: "3500 hours",
    subDate: "2024-05-21",
    delModel: "Hybrid",
    rating: 4.8,
    milestone: "Achieved 100% client satisfaction",
    location: "San Francisco, USA",
    pdfPath: "/assets/Files/dummy.pdf",
    logoPath: "/assets/Logos/apple-black.svg",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac velit quis neque dictum vulputate. Fusce nec metus at quam cursus hendrerit ut id risus. Cras sit amet convallis velit. Phasellus feugiat orci vel odio aliquet, vel facilisis dolor consequat. Aenean sit amet justo id est convallis tempus. Aliquam erat volutpat. Sed et convallis enim, in dictum libero. Nulla facilisi. Praesent eget dignissim orci. Etiam pharetra eros nec sapien ultrices, sit amet feugiat leo fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent a faucibus mauris. Cras vehicula, nisl sit amet vehicula scelerisque, mi libero scelerisque lectus, ut tincidunt lectus metus ut nulla. Suspendisse et orci mauris. Sed pharetra justo vitae est tincidunt, sit amet lacinia felis porttitor.",
  },
  {
    vendorName: "McDonald's",
    companyStrength: "800 employees",
    fieldExp: "12 years",
    revUSD: 200000,
    projDuration: "7 months",
    projEfforts: "2500 hours",
    subDate: "2024-05-22",
    delModel: "Remote",
    rating: 4.6,
    milestone: "Delivered 200+ software solutions",
    location: "Austin, USA",
    pdfPath: "/assets/Files/c4611_sample_explain.pdf",
    logoPath: "/assets/Logos/mcdonalds.svg",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac velit quis neque dictum vulputate. Fusce nec metus at quam cursus hendrerit ut id risus. Cras sit amet convallis velit. Phasellus feugiat orci vel odio aliquet, vel facilisis dolor consequat. Aenean sit amet justo id est convallis tempus. Aliquam erat volutpat. Sed et convallis enim, in dictum libero. Nulla facilisi. Praesent eget dignissim orci. Etiam pharetra eros nec sapien ultrices, sit amet feugiat leo fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent a faucibus mauris. Cras vehicula, nisl sit amet vehicula scelerisque, mi libero scelerisque lectus, ut tincidunt lectus metus ut nulla. Suspendisse et orci mauris. Sed pharetra justo vitae est tincidunt, sit amet lacinia felis porttitor.",
  },
  {
    vendorName: "Microsoft",
    companyStrength: "450 employees",
    fieldExp: "8 years",
    revUSD: 120000,
    projDuration: "5 months",
    projEfforts: "1800 hours",
    subDate: "2024-05-23",
    delModel: "Onsite",
    rating: 4.4,
    milestone: "Pioneered new AI technologies",
    location: "Seattle, USA",
    pdfPath: "/assets/Files/sample-pdf-file.pdf",
    logoPath: "/assets/Logos/microsoft.svg",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac velit quis neque dictum vulputate. Fusce nec metus at quam cursus hendrerit ut id risus. Cras sit amet convallis velit. Phasellus feugiat orci vel odio aliquet, vel facilisis dolor consequat. Aenean sit amet justo id est convallis tempus. Aliquam erat volutpat. Sed et convallis enim, in dictum libero. Nulla facilisi. Praesent eget dignissim orci. Etiam pharetra eros nec sapien ultrices, sit amet feugiat leo fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent a faucibus mauris. Cras vehicula, nisl sit amet vehicula scelerisque, mi libero scelerisque lectus, ut tincidunt lectus metus ut nulla. Suspendisse et orci mauris. Sed pharetra justo vitae est tincidunt, sit amet lacinia felis porttitor.",
  },
  {
    vendorName: "Netflix",
    companyStrength: "1000 employees",
    fieldExp: "20 years",
    revUSD: 250000,
    projDuration: "9 months",
    projEfforts: "3000 hours",
    subDate: "2024-05-24",
    delModel: "Hybrid",
    rating: 4.7,
    milestone: "Expanded to 10+ countries",
    location: "Boston, USA",
    pdfPath: "/assets/Files/sample-pdf-with-images.pdf",
    logoPath: "/assets/Logos/netflix.svg",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac velit quis neque dictum vulputate. Fusce nec metus at quam cursus hendrerit ut id risus. Cras sit amet convallis velit. Phasellus feugiat orci vel odio aliquet, vel facilisis dolor consequat. Aenean sit amet justo id est convallis tempus. Aliquam erat volutpat. Sed et convallis enim, in dictum libero. Nulla facilisi. Praesent eget dignissim orci. Etiam pharetra eros nec sapien ultrices, sit amet feugiat leo fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent a faucibus mauris. Cras vehicula, nisl sit amet vehicula scelerisque, mi libero scelerisque lectus, ut tincidunt lectus metus ut nulla. Suspendisse et orci mauris. Sed pharetra justo vitae est tincidunt, sit amet lacinia felis porttitor.",
  },
];
