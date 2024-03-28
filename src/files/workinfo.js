import Pic1 from "../images/app-pic1.PNG";
import Pic2 from "../images/app-pic2.jpg";
import Pic3 from "../images/app-pic3.jpg";
import Pic4 from "../images/app-pic4.jpg";
import Pic5 from "../images/app-pic5.jpg";

export const workInfo = [
  {
    title: "Hotspot App",
    description: "Fullstack app",
    titlePic: Pic1,
    key: 1,

    modalInfo: {
      title: "Hotspot Web-App Design",
      description:
        "Built with a Reactjs frontend and a Nodejs backend. Integradable with with a Mikrotik router and Freeradius server to provide Authentication, Authorization and Accounting to. Hoptspot Clients.Once integrated with a Mikrotik Router hotspot clients earn bundles by watching short advertisments and use the earned bundles to go online",
      tableInfo: {
        type: "Web-app",
        stack: "MERN (React, Node, Express, MondoDB)",
        radius: "Freeradius & MYSQL",
        Hosting: "Digital Ocean (Ubuntu VPC)",
        Visit: "Livecrib",
      },
      pics: [Pic1, Pic2, Pic3, Pic4, Pic5],
      modalKey: 1,
    },
  },
];
