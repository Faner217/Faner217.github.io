// All site content lives here. Edit this file to update the website.
// Static files (images, PDFs) live in /public and are referenced by absolute path.

export const profile = {
  name: 'Yifan Li',
  role: 'Ph.D. Student',
  affiliation: 'The University of Tokyo',
  lab: 'Kawahara Lab',
  location: 'Tokyo, Japan',
  photo: '/images/portrait.webp',
  cv: '/assets/pdf/Yifan_CV.pdf',
  tagline:
    'Human–computer interaction researcher working on wearable computing, wireless devices, and ubiquitous & mobile computing.',
  interests: ['Human–Computer Interaction', 'Wearable Computing', 'Smart Rings', 'Wireless Devices', 'Ubiquitous & Mobile Computing'],
  facts: [
    { label: 'Industry', value: 'Apple', sub: 'System Electronic Engineer Intern, AirPods · 2026' },
    { label: 'Ph.D.', value: 'The University of Tokyo', sub: 'Advisor: Prof. Yoshihiro Kawahara' },
    { label: 'Published at', value: 'ACM UIST · CHI · TEI', sub: '45 citations · h-index 4' },
  ],
  bio: [
    'Yifan Li is a Ph.D. candidate at the University of Tokyo. His research focuses on human-computer interaction, particularly wearable computing, wireless devices, and ubiquitous and mobile computing.',
    'He received his B.S. degree in Electrical and Electronic Engineering from the <a href="https://www.gla.ac.uk/" target="_blank" rel="noreferrer">University of Glasgow</a> in 2023, and his M.S. degree in Electrical Engineering and Information Systems from <a href="https://www.u-tokyo.ac.jp/en/" target="_blank" rel="noreferrer">The University of Tokyo</a> in 2025.',
    'He is passionate about developing new hardware and software to enable intuitive and convenient interaction interfaces. Some of his work has been published in ACM UIST, TEI, CHI, etc. He loves indie music.',
  ],
};

export const contact = {
  email: 'yifan217@akg.t.u-tokyo.ac.jp',
  address: ['Room 112C1, Bldg #2', '7-3-1 Hongo, Bunkyo-ku', 'Tokyo 113-8656, Japan'],
  pitch:
    'I am open to research collaborations, internships and industry roles in wearable, wireless and ubiquitous computing. The fastest way to reach me is by email.',
  socials: [
    { id: 'scholar', label: 'Google Scholar', handle: 'Yifan Li', url: 'https://scholar.google.com/citations?user=zhvffBoAAAAJ' },
    { id: 'github', label: 'GitHub', handle: '@Faner217', url: 'https://github.com/Faner217' },
    { id: 'linkedin', label: 'LinkedIn', handle: 'in/yifan217', url: 'https://www.linkedin.com/in/yifan217/' },
    { id: 'orcid', label: 'ORCID', handle: '0009-0005-9261-6391', url: 'https://orcid.org/0009-0005-9261-6391' },
    { id: 'acm', label: 'ACM Digital Library', handle: 'Author profile', url: 'https://dl.acm.org/profile/99661569314' },
    { id: 'spotify', label: 'Spotify', handle: 'What I listen to', url: 'https://open.spotify.com/user/31wgrde4xe6iopebdylcagsyz3lq' },
    { id: 'steam', label: 'Steam', handle: 'Fanersama', url: 'https://steamcommunity.com/profiles/76561199613607062/' },
  ],
};

// Newest first. **text** renders bold.
export const news = [
  { date: '2026-04-14', text: 'See you at **CHI 2026** in Barcelona! We will show a demo of our lab.' },
  { date: '2026-01-18', text: 'I’m going to **Apple** for an internship! See you in Shanghai!' },
  {
    date: '2025-10-10',
    text: 'Our plug-n-play e-knit is accepted at the **UbiComp 2025** Intelligent Soft Wearables workshop, and we will show a demo of it. See you in Aalto!',
  },
  {
    date: '2025-09-06',
    text: 'Our picoRing mouse full paper is accepted at **UIST 2025**! We will also show a demo of it. See you in Busan!',
  },
  { date: '2025-04-30', text: 'See you at **CHI 2025** in Yokohama! I will show a demo of our picoRing mouse.' },
  { date: '2025-03-03', text: 'See you at **TEI 2025**! I will bring Plug-n-play e-knit.' },
];

const ME = 'Yifan Li';

// Google Scholar metrics. Update the numbers and `asOf` together.
export const scholar = {
  url: 'https://scholar.google.com/citations?user=zhvffBoAAAAJ',
  asOf: 'Nov 2026',
  citations: 45,
  hIndex: 4,
  i10: 2,
};

export const publications = [
  {
    id: 'li2025ultra',
    citations: 7,
    venue: 'UIST',
    series: 'UIST ’25',
    year: 2025,
    selected: true,
    title: 'Ultra-low-power ring-based wireless tinymouse',
    authors: [ME, 'Masaaki Fukumoto', 'Mohamed Kari', 'Shigemi Ishida', 'Akihito Noda', 'Tomoyuki Yokota', 'Takao Someya', 'Yoshihiro Kawahara', 'Ryo Takahashi'],
    booktitle: 'Proceedings of the 38th Annual ACM Symposium on User Interface Software and Technology',
    location: 'Busan, Republic of Korea',
    image: '/images/pub-picoring-mouse.webp',
    links: {
      pdf: '/assets/pdf/picoRing_mouse.pdf',
      doi: 'https://doi.org/10.1145/3746059.3747615',
      video: 'https://www.youtube.com/watch?v=7RazVNMx0Ms',
      code: 'https://github.com/KawaharaLab/picoRing_mouse',
    },
    abstract:
      'Wireless mouse rings offer subtle, reliable pointing interactions for wearable computing platforms. However, the small battery below 27 mAh in the miniature rings restricts the ring’s continuous lifespan to just 1-10 hours, because even low-powered wireless communication such as BLE is power-consuming for ring’s continuous use. The ring’s short lifespan frequently disrupts users’ mouse use with the need for frequent charging. This paper presents picoRing mouse, enabling a continuous ring-based mouse interaction with ultra-low-powered ring-to-wristband wireless connectivity. picoRing mouse employs a coil-based impedance sensing named semi-passive inductive telemetry, allowing a wristband coil to capture a unique frequency response of a nearby ring coil via a sensitive inductive coupling between the coils. The ring coil converts the corresponding user’s mouse input into the unique frequency response via an up to 449 uW mouse-driven modulation system. Therefore, the continuous use of picoRing mouse can last approximately 600 (8hrs use/day)-1000 (4hrs use/day) hours on a single charge of a 27 mAh battery while supporting subtle thumb-to-index scrolling and pressing interactions in real-world wearable computing situations.',
    bibtex: `@inproceedings{li2025ultra,
  author    = {Li, Yifan and Fukumoto, Masaaki and Kari, Mohamed and Ishida, Shigemi and Noda, Akihito and Yokota, Tomoyuki and Someya, Takao and Kawahara, Yoshihiro and Takahashi, Ryo},
  title     = {Ultra-low-power ring-based wireless tinymouse},
  booktitle = {Proceedings of the 38th Annual ACM Symposium on User Interface Software and Technology},
  series    = {UIST '25},
  year      = {2025},
  location  = {Busan, Republic of Korea},
  publisher = {Association for Computing Machinery},
  address   = {New York, NY, USA},
  isbn      = {9798400720376},
  doi       = {10.1145/3746059.3747615},
  url       = {https://doi.org/10.1145/3746059.3747615}
}`,
  },
  {
    id: 'li2025demo',
    citations: 4,
    venue: 'CHI',
    series: 'CHI EA ’25',
    year: 2025,
    selected: true,
    title:
      'Demo of picoRing mouse: ultra-low-powered wireless mouse ring with ring-to-wristband coil-based impedance sensing',
    authors: [ME, 'Masaaki Fukumoto', 'Mohamed Kari', 'Tomoyuki Yokota', 'Takao Someya', 'Yoshihiro Kawahara', 'Ryo Takahashi'],
    booktitle: 'Extended Abstracts of the CHI Conference on Human Factors in Computing Systems',
    location: 'Yokohama, Japan',
    image: '/images/pub-picoring-demo.webp',
    links: {
      pdf: '/assets/pdf/demo_picoRing_mouse.pdf',
      doi: 'https://doi.org/10.1145/3706599.3721183',
    },
    abstract:
      'Wireless mouse rings offer subtle, reliable pointing interactions for wearable computing platforms. However, the small battery below 27 mAh in the miniature rings restricts the ring’s continuous lifespan to just 1-2 hours, because current low-powered wireless communication such as BLE is power-consuming for ring’s continuous use. The ring’s short lifespan persistently disrupts users’ mouse use with the need for frequent charging. This interactivity demonstrates picoRing mouse, enabling a continuous ring-based mouse interaction with ultra-low-powered ring-to-wristband wireless communication. picoRing mouse employs a coil-based impedance sensing named semi-passive inductive telemetry, allowing a wristband coil to capture a unique frequency response of a nearby ring coil via a sensitive inductive coupling between the coils. The ring coil converts the corresponding user’s mouse input into the unique frequency response via an 820 uW mouse-driven modulation module. Therefore, continuous use of picoRing mouse can potentially last over 92 hours on a single charge of a 20-mAh small battery.',
    bibtex: `@inproceedings{li2025demo,
  author    = {Li, Yifan and Fukumoto, Masaaki and Kari, Mohamed and Yokota, Tomoyuki and Someya, Takao and Kawahara, Yoshihiro and Takahashi, Ryo},
  title     = {Demo of picoRing mouse: ultra-low-powered wireless mouse ring with ring-to-wristband coil-based impedance sensing},
  booktitle = {Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems},
  series    = {CHI EA '25},
  year      = {2025},
  articleno = {707},
  numpages  = {5},
  location  = {Yokohama, Japan},
  publisher = {Association for Computing Machinery},
  address   = {New York, NY, USA},
  isbn      = {9798400713958},
  doi       = {10.1145/3706599.3721183},
  url       = {https://doi.org/10.1145/3706599.3721183}
}`,
  },
  {
    id: 'li2025plug',
    citations: 20,
    venue: 'TEI',
    series: 'TEI ’25',
    year: 2025,
    selected: true,
    title:
      'Plug-n-play e-knit: prototyping large-area e-textiles using machine-knitted magnetically-repositionable sensor networks',
    authors: [ME, 'Ryo Takahashi', 'Wakako Yukita', 'Kanata Matsutani', 'Cedric Caremel', 'Yuhiro Iwamoto', 'Sunghoon Lee', 'Tomoyuki Yokota', 'Takao Someya', 'Yoshihiro Kawahara'],
    booktitle: 'Proceedings of the Nineteenth International Conference on Tangible, Embedded, and Embodied Interaction',
    location: 'Bordeaux, France',
    image: '/images/pub-eknit.webp',
    links: {
      pdf: '/assets/pdf/plug_n_play_eknit.pdf',
      doi: 'https://doi.org/10.1145/3689050.3705973',
    },
    abstract:
      'Prototyping electronic textile involves embedding electronic components into fabrics to develop smart clothing with specific functionalities. However, this process is still challenging since the complicated wiring setup is required during experimental phases. This paper presents plug-n-play e-knit, a large-scale, repositionable e-textile for providing trial-and-error prototyping platforms across the textile. Plug-n-play e-knit leverages industrial digital knitting machines loaded with conductive thread to automatically embed a communication and power supply network into garments, in addition to using soft magnet connectors to rearrange electronic components while preserving the stretchability of the garment. These combinations enable users to quickly establish e-textile sensor networks, and moreover test the performance and optimal placement of the electric devices on the textile. We demonstrated that our textiles leveraging custom I2C protocols could achieve the motion-resilient motion-tracking sensor network over a 2700 cm2 garment area.',
    bibtex: `@inproceedings{li2025plug,
  author    = {Li, Yifan and Takahashi, Ryo and Yukita, Wakako and Matsutani, Kanata and Caremel, Cedric and Iwamoto, Yuhiro and Lee, Sunghoon and Yokota, Tomoyuki and Someya, Takao and Kawahara, Yoshihiro},
  title     = {Plug-n-play e-knit: prototyping large-area e-textiles using machine-knitted magnetically-repositionable sensor networks},
  booktitle = {Proceedings of the Nineteenth International Conference on Tangible, Embedded, and Embodied Interaction},
  series    = {TEI '25},
  year      = {2025},
  articleno = {56},
  numpages  = {7},
  location  = {Bordeaux, France},
  publisher = {Association for Computing Machinery},
  address   = {New York, NY, USA},
  isbn      = {9798400711978},
  doi       = {10.1145/3689050.3705973},
  url       = {https://doi.org/10.1145/3689050.3705973}
}`,
  },
  {
    id: 'li2023privacy',
    citations: 14,
    venue: 'ICPECA',
    series: 'IEEE ICPECA 2023',
    year: 2023,
    selected: false,
    title: 'Privacy Preserved Federated Learning for Skin Cancer Diagnosis',
    authors: [ME, 'Yuechen He', 'Yufei Fu', 'Sizhe Shan'],
    booktitle: '2023 IEEE 3rd International Conference on Power, Electronics and Computer Applications (ICPECA), pp. 27–33',
    image: null,
    links: {
      doi: 'https://doi.org/10.1109/ICPECA56706.2023.10075862',
    },
    bibtex: `@inproceedings{li2023privacy,
  author    = {Li, Yifan and He, Yuechen and Fu, Yufei and Shan, Sizhe},
  title     = {Privacy Preserved Federated Learning for Skin Cancer Diagnosis},
  booktitle = {2023 IEEE 3rd International Conference on Power, Electronics and Computer Applications (ICPECA)},
  year      = {2023},
  pages     = {27--33},
  doi       = {10.1109/ICPECA56706.2023.10075862}
}`,
  },
];

export const projects = [
  {
    id: 'picoring',
    title: 'picoRing mouse',
    subtitle: 'Ultra-low-power ring-based wireless tinymouse',
    period: 'Oct 2024 – Apr 2025',
    role: 'Principal researcher',
    cover: '/images/picoring-cover.webp',
    tags: ['Ultra-low-power ring', 'Wearable wireless mouse', 'Coil-based impedance sensing'],
    body: [
      'picoRing mouse enables a continuous ring-based mouse interaction with ultra-low-powered ring-to-wristband wireless connectivity. picoRing mouse employs a coil-based impedance sensing named semi-passive inductive telemetry, allowing a wristband coil to capture a unique frequency response of a nearby ring coil via a sensitive inductive coupling between the coils.',
      'The ring coil converts the corresponding user’s mouse input into the unique frequency response via an up to 449 µW mouse-driven modulation system. Therefore, the continuous use of picoRing mouse can last approximately 600 (8 hrs use/day) – 1000 (4 hrs use/day) hours on a single charge of a 27 mAh battery while supporting subtle thumb-to-index scrolling and pressing interactions in real-world wearable computing situations.',
    ],
    figure: {
      src: '/images/picoring-teaser.webp',
      caption:
        'Overview of picoRing mouse, enabling 30–500 µW-class ultra-low-power wireless ring mouse for ubiquitous finger input. The ring can potentially operate over a month on a single charge of a 27 mAh battery.',
    },
    video: {
      youtubeId: '7RazVNMx0Ms',
      caption: 'Working principle, application and evaluation of picoRing mouse.',
    },
    papers: ['li2025ultra', 'li2025demo'],
  },
  {
    id: 'eknit',
    title: 'Plug-n-play e-knit',
    subtitle: 'Prototyping large-area e-textiles using machine-knitted magnetically-repositionable sensor networks',
    period: 'Mar 2024 – Oct 2024',
    role: 'Principal researcher',
    cover: '/images/eknit-cover.webp',
    tags: ['E-textiles', 'Magnetically-repositionable sensor networks', 'Rapid prototyping'],
    body: [
      'Plug-n-play e-knit is a large-scale, repositionable e-textile that provides trial-and-error prototyping platforms across the textile. It leverages industrial digital knitting machines loaded with conductive thread to automatically embed a communication and power supply network into garments, and uses soft magnet connectors to rearrange electronic components while preserving the stretchability of the garment.',
      'These combinations enable users to quickly establish e-textile sensor networks, and moreover test the performance and optimal placement of electronic devices on the textile. We demonstrated that our textiles leveraging custom I²C protocols could achieve a motion-resilient motion-tracking sensor network over a 2700 cm² garment area.',
    ],
    figure: {
      src: '/images/eknit-teaser.webp',
      caption:
        'Overview of plug-n-play e-knit: (a) a machine-knitted e-textile prototyping tool, which enables (b) large-area, reconfigurable and on-textile sensing. (c) It also provides a non-invasive sensor connection method by using soft magnets.',
    },
    papers: ['li2025plug'],
  },
];

export const education = [
  {
    degree: 'Ph.D.',
    period: 'Sep 2025 – Sep 2028 (expected)',
    school: 'The University of Tokyo',
    field: 'Electrical Engineering and Information Systems',
    url: 'https://www.u-tokyo.ac.jp/en/',
    notes: ['Advisor: Prof. Yoshihiro Kawahara'],
  },
  {
    degree: 'M.S.',
    period: 'Oct 2023 – Sep 2025',
    school: 'The University of Tokyo',
    field: 'Electrical Engineering and Information Systems',
    url: 'https://www.u-tokyo.ac.jp/en/',
    notes: ['Thesis: Ultra-low-powered wireless input ring and machine-knittable plug-and-play e-textiles'],
  },
  {
    degree: 'B.S.',
    period: 'Sep 2019 – Sep 2023',
    school: 'University of Glasgow',
    field: 'Electronics and Electrical Engineering (UESTC joint program)',
    url: 'https://www.gla.ac.uk/',
    notes: ['Honours of the First Class', 'Thesis: Federated learning algorithms for non-shared (non-IID) data scenarios'],
  },
];

export const experience = [
  {
    title: 'System Electronic Engineer Intern, AirPods',
    org: 'Apple',
    place: 'Shanghai, China',
    period: 'Feb 2026 – Aug 2026',
  },
];

export const awards = [
  {
    title: 'Best Master’s Thesis',
    org: 'The University of Tokyo',
    date: 'Sep 2025',
  },
  {
    title: 'World-leading Innovative Graduate Study Program “Co-designing Future Society”',
    org: 'The University of Tokyo',
    date: 'Apr 2024',
    note: 'UTokyo’s high-level research education program, with financial support and a research grant',
  },
  {
    title: 'The University of Tokyo Fellowship',
    org: 'The University of Tokyo',
    date: 'Oct 2023',
    note: 'Research grant-in-aid (4,800,000 JPY over two years) for outstanding international students',
    url: 'https://www.u-tokyo.ac.jp/en/prospective-students/fellowship.html',
  },
  {
    title: 'Best Bachelor’s Thesis',
    org: 'University of Glasgow',
    date: 'Sep 2023',
  },
];

export const skills = [
  {
    group: 'Hardware',
    items: [
      ['Electrical circuit design', 'Ultra-low-power circuits, RF circuits for wireless power transfer and inductive sensing, sensing circuits, designed for mass production'],
      ['RF measurements', 'Vector network analyzer, impedance analyzer, impedance matching, frequency response analyzer'],
      ['Embedded programming', 'Embedded systems (ARM, HAL)'],
    ],
  },
  {
    group: 'Software',
    items: [
      ['CAD tools', 'Autodesk EAGLE, Altium Designer, KiCad, Autodesk Fusion'],
      ['Languages', 'C, Python, MATLAB'],
      ['Simulation', 'MATLAB, LTspice, Ansys HFSS'],
      ['Others', 'Adobe CC (Illustrator, Photoshop, Premiere), MS Office, LaTeX'],
    ],
  },
  {
    group: 'HCI Research',
    items: [
      ['Wearable computing', 'Design and prototyping of wearable devices, user studies'],
      ['Academic writing', 'Papers, posters and presentations'],
      ['Hardware prototyping', '3D printing, sewing, knitting, circuit implementation and testing'],
      ['Others', 'Video editing, graphic design'],
    ],
  },
];

export const languages = [
  { name: 'Chinese', level: 'Native' },
  { name: 'English', level: 'Fluent (IELTS 7.5)' },
  { name: 'Japanese', level: 'Intermediate' },
];
