export const menu = [
  {
    id: 1,
    title: "Main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "/home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "/user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "/user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "/product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "/order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "/post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "General",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "/element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "/note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "/form.svg",
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: "/calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "/setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "/backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "/chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "/log.svg",
      },
    ],
  },
];

export const topGainers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Elva McDonald",
    email: "elva@gmail.com",
    amount: "3.668",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    amount: "3.256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    amount: "2.512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    amount: "2.134",
  }
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const users = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Hubbard",
    firstName: "Eula",
    email: "kewez@@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Manning",
    firstName: "Stella",
    email: "comhuhmit@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Greer",
    firstName: "Mary",
    email: "ujudokon@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williamson",
    firstName: "Mildred",
    email: "tinhavabe@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sharp",
    firstName: "Jeremy",
    email: "vulca.eder@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lowe",
    firstName: "Christina",
    email: "reso.bilic@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dean",
    firstName: "Garrett",
    email: "codaic@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Parsons",
    firstName: "Leah",
    email: "uzozor@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Reid",
    firstName: "Elnora",
    email: "tuhkabapu@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dunn",
    firstName: "Gertrude",
    email: "gibo@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williams",
    firstName: "Mark",
    email: "tic.harvey@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Cruz",
    firstName: "Charlotte",
    email: "ceuc@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    firstName: "Sara",
    email: "bafuv@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    firstName: "Eric",
    email: "ubi@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
];

export const products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    producer: "Dell",
    price: "$499.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    producer: "Samsung",
    price: "$999.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    producer: "Apple",
    price: "$799.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "$39.99",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "$59.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "$119.49",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "$899.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "$970.49",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    producer: "Acer",
    price: "$599.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
];

export const activities = [
  {
    id: 1,
    userId: 1,
    text: "purchased Playstation 5 Digital Edition",
    time: "3 day ago",
  },
  {
    id: 2,
    userId: 1,
    text: "added 3 items into their wishlist",
    time: "1 week ago",
  },
  {
    id: 3,
    userId: 1,
    text: "purchased Sony Bravia KD-32w800",
    time: "2 weeks ago",
  },
  {
    id: 4,
    userId: 1,
    text: "reviewed a product",
    time: "1 month ago",
  },
  {
    id: 5,
    userId: 1,
    text: "added 1 item into their wishlist",
    time: "1 month ago",
  },
  {
    id: 6,
    userId: 1,
    text: "reviewed a product",
    time: "2 months ago",
  },
  {
    id: 7,
    userId: 2,
    text: "purchased iPhone 13 Pro Max",
    time: "1 day ago",
  },
  {
    id: 8,
    userId: 2,
    text: "added 2 items into their wishlist",
    time: "3 weeks ago",
  },
  {
    id: 9,
    userId: 2,
    text: "purchased Apple Watch Series 7",
    time: "1 month ago",
  },
  {
    id: 10,
    userId: 3,
    text: "purchased Samsung Galaxy S22",
    time: "2 days ago",
  },
  {
    id: 11,
    userId: 3,
    text: "added 1 item into their wishlist",
    time: "2 weeks ago",
  },
  {
    id: 12,
    userId: 3,
    text: "purchased Samsung 55-inch 4K TV",
    time: "3 weeks ago",
  },
  {
    id: 13,
    userId: 3,
    text: "reviewed a product",
    time: "1 month ago",
  },
];

export const statistics = [
  {
    id: 1,
    userId: 1,
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  {
    id: 2,
    userId: 2,
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 3200,
        clicks: 2100,
      },
      {
        name: "Mon",
        visits: 2800,
        clicks: 1500,
      },
      {
        name: "Tue",
        visits: 1900,
        clicks: 3400,
      },
      {
        name: "Wed",
        visits: 2600,
        clicks: 3700,
      },
      {
        name: "Thu",
        visits: 1790,
        clicks: 4600,
      },
      {
        name: "Fri",
        visits: 2200,
        clicks: 3600,
      },
      {
        name: "Sat",
        visits: 3300,
        clicks: 4100,
      },
    ],
  },
  {
    id: 3,
    userId: 3,
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 3600,
        clicks: 2300,
      },
      {
        name: "Mon",
        visits: 3100,
        clicks: 1800,
      },
      {
        name: "Tue",
        visits: 2200,
        clicks: 4100,
      },
      {
        name: "Wed",
        visits: 2980,
        clicks: 4308,
      },
      {
        name: "Thu",
        visits: 2100,
        clicks: 5200,
      },
      {
        name: "Fri",
        visits: 2600,
        clicks: 4200,
      },
      {
        name: "Sat",
        visits: 3700,
        clicks: 4700,
      },
    ],
  },
];

export const CandleStickData =  [
  {
    x: new Date(1538778600000).toISOString(),
    y: [6629.81, 6650.5, 6623.04, 6633.33]
  },
  {
    x: new Date(1538780400000).toISOString(),
    y: [6632.01, 6643.59, 6620, 6630.11]
  },
  {
    x: new Date(1538782200000).toISOString(),
    y: [6630.71, 6648.95, 6623.34, 6635.65]
  },
  {
    x: new Date(1538784000000).toISOString(),
    y: [6635.65, 6651, 6629.67, 6638.24]
  },
  {
    x: new Date(1538785800000).toISOString(),
    y: [6638.24, 6640, 6620, 6624.47]
  },
  {
    x: new Date(1538787600000).toISOString(),
    y: [6624.53, 6636.03, 6621.68, 6624.31]
  },
  {
    x: new Date(1538789400000).toISOString(),
    y: [6624.61, 6632.2, 6617, 6626.02]
  },
  {
    x: new Date(1538791200000).toISOString(),
    y: [6627, 6627.62, 6584.22, 6603.02]
  },
  {
    x: new Date(1538793000000).toISOString(),
    y: [6605, 6608.03, 6598.95, 6604.01]
  },
  {
    x: new Date(1538794800000).toISOString(),
    y: [6604.5, 6614.4, 6602.26, 6608.02]
  },
  {
    x: new Date(1538796600000).toISOString(),
    y: [6608.02, 6610.68, 6601.99, 6608.91]
  },
  {
    x: new Date(1538798400000).toISOString(),
    y: [6608.91, 6618.99, 6608.01, 6612]
  },
  {
    x: new Date(1538800200000).toISOString(),
    y: [6612, 6615.13, 6605.09, 6612]
  },
  {
    x: new Date(1538802000000).toISOString(),
    y: [6612, 6624.12, 6608.43, 6622.95]
  },
  {
    x: new Date(1538803800000).toISOString(),
    y: [6623.91, 6623.91, 6615, 6615.67]
  },
  {
    x: new Date(1538805600000).toISOString(),
    y: [6618.69, 6618.74, 6610, 6610.4]
  },
  {
    x: new Date(1538807400000).toISOString(),
    y: [6611, 6622.78, 6610.4, 6614.9]
  },
  {
    x: new Date(1538809200000).toISOString(),
    y: [6614.9, 6626.2, 6613.33, 6623.45]
  },
  {
    x: new Date(1538811000000).toISOString(),
    y: [6623.48, 6627, 6618.38, 6620.35]
  },
  {
    x: new Date(1538812800000).toISOString(),
    y: [6619.43, 6620.35, 6610.05, 6615.53]
  },
  {
    x: new Date(1538814600000).toISOString(),
    y: [6615.53, 6617.93, 6610, 6615.19]
  },
  {
    x: new Date(1538816400000).toISOString(),
    y: [6615.19, 6621.6, 6608.2, 6620]
  },
  {
    x: new Date(1538818200000).toISOString(),
    y: [6619.54, 6625.17, 6614.15, 6620]
  },
  {
    x: new Date(1538820000000).toISOString(),
    y: [6620.33, 6634.15, 6617.24, 6624.61]
  },
  {
    x: new Date(1538821800000).toISOString(),
    y: [6625.95, 6626, 6611.66, 6617.58]
  },
  {
    x: new Date(1538823600000).toISOString(),
    y: [6619, 6625.97, 6595.27, 6598.86]
  },
  {
    x: new Date(1538825400000).toISOString(),
    y: [6598.86, 6598.88, 6570, 6587.16]
  },
  {
    x: new Date(1538827200000).toISOString(),
    y: [6588.86, 6600, 6580, 6593.4]
  },
  {
    x: new Date(1538829000000).toISOString(),
    y: [6593.99, 6598.89, 6585, 6587.81]
  },
  {
    x: new Date(1538830800000).toISOString(),
    y: [6587.81, 6592.73, 6567.14, 6578]
  },
  {
    x: new Date(1538832600000).toISOString(),
    y: [6578.35, 6581.72, 6567.39, 6579]
  },
  {
    x: new Date(1538834400000).toISOString(),
    y: [6579.38, 6580.92, 6566.77, 6575.96]
  },
  {
    x: new Date(1538836200000).toISOString(),
    y: [6575.96, 6589, 6571.77, 6588.92]
  },
  {
    x: new Date(1538838000000).toISOString(),
    y: [6588.92, 6594, 6577.55, 6589.22]
  },
  {
    x: new Date(1538839800000).toISOString(),
    y: [6589.3, 6598.89, 6589.1, 6596.08]
  },
  {
    x: new Date(1538841600000).toISOString(),
    y: [6597.5, 6600, 6588.39, 6596.25]
  },
  {
    x: new Date(1538843400000).toISOString(),
    y: [6598.03, 6600, 6588.73, 6595.97]
  },
  {
    x: new Date(1538845200000).toISOString(),
    y: [6595.97, 6602.01, 6588.17, 6602]
  },
  {
    x: new Date(1538847000000).toISOString(),
    y: [6602, 6607, 6596.51, 6599.95]
  },
  {
    x: new Date(1538848800000).toISOString(),
    y: [6600.63, 6601.21, 6590.39, 6591.02]
  },
  {
    x: new Date(1538850600000).toISOString(),
    y: [6591.02, 6603.08, 6591, 6591]
  },
  {
    x: new Date(1538852400000).toISOString(),
    y: [6591, 6601.32, 6585, 6592]
  },
  {
    x: new Date(1538854200000).toISOString(),
    y: [6593.13, 6596.01, 6590, 6593.34]
  },
  {
    x: new Date(1538856000000).toISOString(),
    y: [6593.34, 6604.76, 6582.63, 6593.86]
  },
  {
    x: new Date(1538857800000).toISOString(),
    y: [6593.86, 6604.28, 6586.57, 6600.01]
  },
  {
    x: new Date(1538859600000).toISOString(),
    y: [6601.81, 6603.21, 6592.78, 6596.25]
  },
  {
    x: new Date(1538861400000).toISOString(),
    y: [6596.25, 6604.2, 6590, 6602.99]
  },
  {
    x: new Date(1538863200000).toISOString(),
    y: [6602.99, 6606, 6584.99, 6587.81]
  },
  {
    x: new Date(1538865000000).toISOString(),
    y: [6587.81, 6595, 6583.27, 6591.96]
  },
  {
    x: new Date(1538866800000).toISOString(),
    y: [6591.97, 6596.07, 6585, 6588.39]
  },
  {
    x: new Date(1538868600000).toISOString(),
    y: [6587.6, 6598.21, 6587.6, 6594.27]
  },
  {
    x: new Date(1538870400000).toISOString(),
    y: [6596.44, 6601, 6590, 6596.55]
  },
  {
    x: new Date(1538872200000).toISOString(),
    y: [6598.91, 6605, 6596.61, 6600.02]
  },
  {
    x: new Date(1538874000000).toISOString(),
    y: [6600.55, 6605, 6589.14, 6593.01]
  },
  {
    x: new Date(1538875800000).toISOString(),
    y: [6593.15, 6605, 6592, 6603.06]
  },
  {
    x: new Date(1538877600000).toISOString(),
    y: [6603.07, 6604.5, 6599.09, 6603.89]
  },
  {
    x: new Date(1538879400000).toISOString(),
    y: [6604.44, 6604.44, 6600, 6603.5]
  },
  {
    x: new Date(1538881200000).toISOString(),
    y: [6603.5, 6603.99, 6597.5, 6603.86]
  },
  {
    x: new Date(1538883000000).toISOString(),
    y: [6603.85, 6605, 6600, 6604.07]
  },
  {
    x: new Date(1538884800000).toISOString(),
    y: [6604.98, 6606, 6604.07, 6606]
  },
];