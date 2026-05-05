export default function Home() {
  const profileImage =
    "https://ik.imagekit.io/dsnojmqf9/ChatGPT%20Image%20May%204,%202026,%2009_10_26%20PM.png";


  const skills = [
    "Flutter",
    "Next.js",
    "React",
    "Firebase",
    "Node.js",
    "Vue.js",
    "MongoDB",
    "PostgreSQL",
    "GCP",
    "BigQuery",
  ];


  const frameworks = [
    {
      name: "Flutter",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Firebase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Vue.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
  ];


  const experiences = [
    {
      role: "Full Stack Engineer",
      company: "Clicks® Real Estate",
      period: "Mar 2025 – Present",
      url: "https://web.clicks.realestate/",
      project: "Clicks App",
      logo: "https://ik.imagekit.io/dsnojmqf9/Screenshot%202026-05-05%20at%2018.18.02.png",
      projectDesc:
        "Property marketplace mobile app and web platform for selling, renting, buying, and investing in property across Singapore, Malaysia, Thailand, Indonesia, Australia, and the US.",
      desc:
        "Developed mobile app features, improved web product functionality, handled SEO improvements, and managed deployment release cycles.",
      tech: "Flutter, Firebase, React, Next.js, Node.js, MongoDB, Google Analytics, BigQuery, GCP",
    },
    {
      role: "Front End Developer",
      company: "PT Infosys Solusi Terpadu",
      period: "Feb 2024 – Mar 2025",
      url: "https://ist.id/",
      project: "Hibank",
      logo: "https://ik.imagekit.io/dsnojmqf9/Screenshot%202026-05-05%20at%2018.18.10.png",
      projectDesc:
        "Digital banking application for Hibank, a subsidiary of BNI.",
      desc:
        "Designed, built, and maintained client-facing applications and websites with strong frontend implementation.",
      tech: "Flutter, Firebase, React, Next.js, Git",
    },
    {
      role: "Mobile Application Developer",
      company: "Amartha",
      period: "Aug 2019 – Jan 2022",
      url: "https://amartha.com/",
      project: "Amartha Mobile App",
      logo: "https://ik.imagekit.io/dsnojmqf9/Screenshot%202026-05-05%20at%2018.18.42.png",
      projectDesc:
        "Mobile application for a P2P lending platform focused on supporting micro-entrepreneurs across Indonesia.",
      desc:
        "Led development and maintenance of the core mobile application, including new features and performance improvements.",
      tech: "Kotlin, Flutter, React Native",
    },
    {
      role: "Full Stack Application Engineer",
      company: "Bukalapak",
      period: "Feb 2022 – Aug 2022",
      url: "https://www.bukalapak.com/",
      project: "BMoney",
      projectDesc:
        "Investment and mutual fund management application.",
      logo: "https://ik.imagekit.io/dsnojmqf9/Screenshot%202026-05-05%20at%2018.18.31.png",
      desc:
        "Conducted mobile technology R&D and developed new features for the BMoney investment app.",
      tech: "Android, Kotlin, Flutter",
    },
    {
      role: "Full Stack Developer",
      company: "BPJS Ketenagakerjaan",
      period: "Oct 2023 – Feb 2024",
      url: "https://www.bpjsketenagakerjaan.go.id/",
      project: "Smile",
      projectDesc:
        "Internal finance, accounting, and investment management web application.",
      logo: "https://ik.imagekit.io/dsnojmqf9/Screenshot%202026-05-05%20at%2018.18.16.png",
      desc:
        "Developed new website features and internal REST APIs for company operations.",
      tech: "Node.js, Oracle DB, PHP, PostgreSQL, Vue.js",
    },
    {
      role: "Mobile Engineer",
      company: "Detrack",
      period: "Aug 2022 – Aug 2023",
      url: "https://www.detrack.com/",
      project: "Elastic Route",
      logo: "https://ik.imagekit.io/dsnojmqf9/Screenshot%202026-05-05%20at%2018.18.23.png",
      projectDesc:
        "Route optimization and delivery management application.",
      desc:
        "Developed mobile app features including route optimization and delivery management, and handled mobile release deployment.",
      tech: "Flutter, Android, iOS",
    },
  ];



  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #1e40af 0%, #020617 35%, #020617 100%)",
        color: "white",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 35px rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 70px rgba(14, 165, 233, 0.8); }
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 24px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 50,
          alignItems: "center",
          animation: "fadeUp 0.9s ease forwards",
        }}
      >
        <div>
          <p
            style={{
              color: "#93c5fd",
              fontSize: 16,
              fontWeight: 700,
              marginBottom: 16,
              letterSpacing: 1,
            }}
          >
            FULL STACK & MOBILE APPLICATION DEVELOPER
          </p>

          <h1
            style={{
              fontSize: "clamp(44px, 7vw, 78px)",
              lineHeight: 1,
              margin: 0,
              fontWeight: 900,
            }}
          >
            Hi, I’m{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #60a5fa, #22d3ee)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Azhar S
            </span>
          </h1>

          <p
            style={{
              marginTop: 24,
              fontSize: 18,
              lineHeight: 1.8,
              color: "#cbd5e1",
              maxWidth: 620,
            }}
          >
            I build scalable digital products across mobile, web, backend, and
            cloud. Experienced in Flutter, Next.js, React, Firebase, Node.js,
            and modern product development.
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              marginTop: 34,
              alignItems: "center",
            }}
          >
            <a
              href="mailto:azharshd2@gmail.com"
              style={{
                padding: "14px 24px",
                borderRadius: 999,
                background: "linear-gradient(90deg, #2563eb, #06b6d4)",
                color: "white",
                textDecoration: "none",
                fontWeight: 800,
              }}
            >
              Contact Me
            </a>

            <a
              href="#experience"
              style={{
                padding: "14px 24px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.25)",
                color: "white",
                textDecoration: "none",
                fontWeight: 800,
              }}
            >
              View Experience
            </a>

            <div
              style={{
                display: "flex",
                gap: 12,
                marginLeft: 10,
              }}
            >
              <a
                href="https://www.instagram.com/azhar.shd/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "0.3s ease",
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  style={{ width: 24, height: 24 }}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/azhar-suhada-939b44124/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "0.3s ease",
                }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  style={{ width: 24, height: 24 }}
                />
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: 330,
              height: 430,
              borderRadius: 36,
              padding: 8,
              background: "linear-gradient(135deg, #60a5fa, #22d3ee)",
              animation: "float 4s ease-in-out infinite, glow 3s infinite",
            }}
          >
            <img
              src={profileImage}
              alt="Azhar Suhada"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 30,
              }}
            />
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 18,
          }}
        >
          {[
            {
              number: "7+",
              label: "Years Experience",
              icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            },
            {
              number: "6+",
              label: "Industries",
              icon: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
            },
            {
              number: "20+",
              label: "Projects Delivered",
              icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
            },
            {
              number: "Mobile + Web",
              label: "Main Expertise",
              icon: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: 24,
                borderRadius: 24,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(16px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 12,
                transition: "0.3s ease",
              }}

            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  style={{
                    width: 26,
                    height: 26,
                    objectFit: "contain",
                   
                  }}
                />
              </div>

              <h2
                style={{
                  margin: 0,
                  fontSize: 34,
                  fontWeight: 900,
                }}
              >
                {item.number}
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#cbd5e1",
                  fontSize: 14,
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "50px 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 28,
            width: "max-content",
            animation: "marquee 22s linear infinite",
          }}
        >
          {[...frameworks, ...frameworks].map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "18px 26px",
                borderRadius: 28,
                background: "rgba(255,255,255,0.05)",
                color: "white",
                minWidth: 220,
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                transition: "0.3s ease",
              }}
            >
              <img
                src={item.logo}
                alt={item.name}
                style={{
                  width: 72,
                  height: 72,
                  objectFit: "contain",
                }}
              />

              <span
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  whiteSpace: "nowrap",
                }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 24px",
        }}
      >
        <h2 style={{ fontSize: 40, marginBottom: 24 }}>Technical Skills</h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          {skills.map((skill) => (
            <span
              key={skill}
              style={{
                padding: "12px 18px",
                borderRadius: 999,
                background: "rgba(59,130,246,0.18)",
                border: "1px solid rgba(147,197,253,0.35)",
                color: "#dbeafe",
                fontWeight: 700,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section
        id="experience"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "60px 24px 90px",
        }}
      >
        <h2 style={{ fontSize: 40, marginBottom: 30 }}>Work Experience</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 22,
          }}
        >
          {experiences.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: 26,
                borderRadius: 28,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(18px)",
                transition: "0.3s ease",
                animation: `fadeUp ${0.6 + index * 0.12}s ease forwards`,
                textDecoration: "none",
                color: "white",
                display: "block",
                cursor: "pointer",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#38bdf8",
                  fontWeight: 800,
                }}
              >
                {item.period}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginTop: 12,
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 12,
                    background: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 6,
                  }}
                >
                  <img
                    src={item.logo}
                    alt={item.company}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: 20,
                    }}
                  >
                    {item.role}
                  </h3>

                  <h4
                    style={{
                      margin: 0,
                      color: "#bfdbfe",
                      fontSize: 14,
                    }}
                  >
                    {item.company}
                  </h4>
                </div>
              </div>

              <div
                style={{
                  marginTop: 18,
                  padding: 18,
                  borderRadius: 20,
                  background: "rgba(15,23,42,0.65)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#22d3ee",
                    fontWeight: 900,
                    fontSize: 15,
                  }}
                >
                  Project: {item.project}
                </p>

                <p
                  style={{
                    color: "#dbeafe",
                    lineHeight: 1.7,
                    margin: "10px 0 0",
                    fontSize: 14,
                  }}
                >
                  {item.projectDesc}
                </p>
              </div>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: 1.7,
                  marginTop: 16,
                }}
              >
                {item.desc}
              </p>

              <p
                style={{
                  marginTop: 14,
                  color: "#93c5fd",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                Tech: {item.tech}
              </p>

              <p
                style={{
                  marginTop: 18,
                  color: "#38bdf8",
                  fontWeight: 800,
                }}
              >
                Visit company →
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}