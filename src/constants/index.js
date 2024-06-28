import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    teamwork,
    salary,
    coding,
    zahirah,
    koperasisyariah,
    muamalat,
    gs,
    excel,
    pph21,
    pphter,
    data,
    techin,
    web3d
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Payroll",
      icon: salary,
    },


    {
      title: "Web Developer",
      icon: coding,
    },
   
    {
      title: "HRGA",
      icon: teamwork,
    },
   
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
  ];


  const technologies1 = [
    {
      name: "Excel",
      icon: excel,
    },
    {
      name: "Google Sheets",
      icon: gs,
    },
    {
      name: "PPh 21",
      icon: pph21,
    },
  ];


  const experiences = [
    {
      title: "Student Intern",
      company_name: "Koperasi Syariah Manfaat",
      icon: koperasisyariah,
      iconBg: "#f1f1f1",
      date: "Mei 2018 - Juni 2018",
      points: [
        "Mempelajari praktek Koperasi Syariah.",
        "Front Office - Menyambut dan berinteraksi dengan customers.",
        "Mempelajari proses alur zakat dan dana sosial di Koperasi Syariah Manfaat.",
        "Membuat pembukuan sederhana.",

      ],
    },
    {
      title: "Student Intern",
      company_name: "Bank Muamalat",
      icon: muamalat,
      iconBg: "#E6DEDD",
      date: "Juli 2018 - September 2018",
      points: [
        "Mengikuti berbagai event Outdoor maupun Indoor yang diadakan oleh Bank Muamalat.",
        "Mempelajari Akuntasi Bank Sederhana.",
        "Mempelajari cara berinteraksi dengan customers untuk mempromosikan produk dari Bank Muamalat.",
        "Menyusun dan Merekap dokumen jaminan kredit Bank Muamalat.",
      ],
    },
   
    {
      title: "Payroll Officer",
      company_name: "Rumah Sakit Umum Zahirah",
      icon: zahirah,
      iconBg: "#E6DEDD",
      date: "September 2019 - Present",
      points: [
        "Menyiapkan Berkas dan Dokumentasi Apapun yang Berhubungan dengan Payroll.",
        "Membuat Laporan Gaji Bulanan Karyawan.",
        "Melakukan Update Data Karyawan, Masuk dan Keluar.",
        "Melakukan Perhitungan BPJS Kesehatan dan BPJS TK.",
        "Melakukan Perhitungan PPH21.",
      ],
    },
  ];
  

  const projects = [
    {
      name: "PPh 21 TER 2024",
      description:
        "Terdapat perubahan perumusan perhitungan PPh 21 dari tahun 2024 dengan tahun sebelumnya. Disini saya buatkan tabel dan contoh pengaplikasian sederhananya.",
      tags: [
        {
          name: "excel",
          color: "green-text-gradient",
        },
        {
          name: "pph21",
          color: "blue-text-gradient",
        },
      ],
      image: pphter,
      source_code_link: "https://github.com/Basyar-Portofolio/PPh-TER-2024",
    },
    {
      name: "Data Karyawan & Payroll",
      description:
        "Format Excel yang memiliki berbagai sheet dari data karyawan, proses payroll hingga slip gaji. Cocok untuk perusahaan yg belum memakai Software Payroll.",
      tags: [
      
        {
          name: "Excel",
          color: "green-text-gradient",
        },
        
      ],
      image:data,
      source_code_link: "https://github.com/Basyar-Portofolio/Format-Data-Karyawan",
    },
    {
      name: "TikTok Affiliate",
      description:
        "Hanya project iseng, ditengah booming nya tiktok affiliate saat itu pada tahun 2023, saya tertarik untuk mencobanya karena penasaran .",
      tags: [
        {
          name: "tiktok",
          color: "pink-text-gradient",
        },
      ],
      image: techin,
      source_code_link: "https://github.com/Basyar-Portofolio/Tiktok-Affiliate",
    },
    {
      name: "Website Portofolio ",
      description:
        "3D Website Portofolio pribadi saya, Website ini saya khususnya untuk diri saya sendiri sebagai dokumentasi Pengalaman karir saya .",
      tags: [
        {
          name: "Next.js",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "blue-text-gradient",
        },
      ],
      image: web3d,
      source_code_link: "https://github.com/Basyar-Portofolio/Website-Portofolio",
    },
  ];
  
  export { services, technologies, experiences, projects, technologies1 };