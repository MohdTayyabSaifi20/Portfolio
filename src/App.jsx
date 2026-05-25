export default function FinalPremiumQAPortfolioWebsite() {
  const projects = [
    {
      title: 'Hybrid QA Automation Framework',
      description:
        'Scalable hybrid automation framework built for UI and API testing using Selenium, Pytest, Requests, and maintainable QA architecture.',
      tech: ['Selenium', 'Pytest', 'Python', 'API Testing'],
      link: 'https://github.com/MohdTayyabSaifi20/hybrid-qa-automation-framework.git',
    },
    {
      title: 'API Test Framework',
      description:
        'Automation-focused API testing framework with reusable validations, reporting, and scalable test execution workflows.',
      tech: ['Postman', 'REST Assured', 'Automation'],
      link: 'https://github.com/MohdTayyabSaifi20/API-Test-Framework.git',
    },
    {
      title: 'HireHub',
      description:
        'Feature-rich modern job portal platform built using React.js, Tailwind CSS, Supabase, Clerk, and Web3Forms.',
      tech: ['React', 'Tailwind', 'Supabase'],
      link: 'https://hire-hub-4c2p.vercel.app/',
    },
    {
      title: 'Python Automation Framework',
      description:
        'Reusable automation framework designed for scalable execution and maintainable testing workflows.',
      tech: ['Python', 'Automation', 'Framework'],
      link: 'https://github.com/MohdTayyabSaifi20/Python-Automation-Framework.git',
    },
  ];

  const skills = [
    'Selenium',
    'Java',
    'Python',
    'Postman',
    'REST Assured',
    'TestNG',
    'JMeter',
    'Playwright',
    'Appium',
    'Jira',
    'MySQL',
    'GitHub Actions',
  ];

  const articles = [
    {
      title: '5 Practical Ways to Reduce Regression Testing Time',
      desc: 'A practical breakdown of reducing repetitive regression cycles while maintaining release confidence.',
    },
    {
      title: 'How I Structure API Test Cases for Better Coverage',
      desc: 'A real-world workflow for scalable API testing using Postman and automation-friendly validation.',
    },
    {
      title: 'Cross-Platform Testing Challenges Across Android & iOS',
      desc: 'Lessons learned while validating responsive UI behavior across multiple devices and environments.',
    },
  ];

  return (
    <div className="bg-[#0b1120] text-white min-h-screen overflow-x-hidden font-sans selection:bg-yellow-400 selection:text-black">
      <div className="fixed inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-300/10 blur-3xl rounded-full" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0b1120]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-yellow-400 tracking-wide">
            Mohd Tayyab
          </h1>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-yellow-400 transition">About</a>
            <a href="#experience" className="hover:text-yellow-400 transition">Experience</a>
            <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
            <a href="#articles" className="hover:text-yellow-400 transition">Articles</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-28 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm mb-5">
            QA Engineer
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Building Reliable <span className="text-yellow-400">Quality</span>
            <br /> Software Experiences.
          </h1>

          <p className="text-gray-400 text-lg leading-8 max-w-xl mb-10">
            QA Engineer with hands-on experience in Manual Testing,
            Automation Testing, API Validation, Cross-Platform Testing,
            Regression Testing, and Agile workflows across Web, Mobile,
            Console, and VR applications.
          </p>

          <div className="flex flex-wrap gap-5 mb-10">
            <a
              href="#projects"
              className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300"
            >
              Explore Projects
            </a>

            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Mohd_Tayyab_Resume.pdf';
                link.download = 'Mohd_Tayyab_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              type="button"
              className="border border-white/10 hover:border-yellow-400 hover:text-yellow-400 px-8 py-4 rounded-2xl font-semibold transition duration-300"
            >
              Download Resume
            </button>
          </div>

          <div className="text-sm text-gray-400">
            Available for On-site, Hybrid, Remote Roles
          </div>
        </div>

        {/* Profile Card */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative bg-[#111827] border border-white/10 rounded-[40px] p-5 max-w-md shadow-2xl">
            <img
              src="https://i.postimg.cc/7Y4sgPSk/Profile-Photo.jpg"
              alt="Mohd Tayyab"
              className="rounded-[32px] h-[620px] w-full object-cover"
            />

            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#0f172a] border border-white/10 rounded-3xl px-8 py-5 flex gap-8 shadow-2xl">
              <div className="text-center min-w-[90px]">
                <h3 className="text-3xl font-bold text-yellow-400">2+</h3>
                <p className="text-xs text-gray-400 mt-1">Years Experience</p>
              </div>

              <div className="text-center min-w-[90px]">
                <h3 className="text-3xl font-bold text-yellow-400">50+</h3>
                <p className="text-xs text-gray-400 mt-1">Critical Defects Resolved</p>
              </div>

              <div className="text-center min-w-[90px]">
                <h3 className="text-3xl font-bold text-yellow-400">5+</h3>
                <p className="text-xs text-gray-400 mt-1">Platforms Validated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm mb-5">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Delivering stable, scalable, and production-ready software quality.
            </h2>
          </div>

          <div>
            <p className="text-gray-400 leading-8 text-lg mb-10">
              Experienced QA Engineer skilled in Manual Testing, Automation,
              API Testing, Cross-Browser Validation, and Agile Methodologies.
              Worked on Admin Tools, B2B/B2C platforms, CRM systems, and
              multi-platform applications while collaborating closely with
              developers and product teams.
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 hover:border-yellow-400/30 transition">
                <h3 className="text-yellow-400 text-3xl font-bold mb-2">Agile</h3>
                <p className="text-gray-400 text-sm">Scrum Methodology</p>
              </div>

              <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 hover:border-yellow-400/30 transition">
                <h3 className="text-yellow-400 text-3xl font-bold mb-2">API</h3>
                <p className="text-gray-400 text-sm">Postman & Validation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-[#111827] py-28 px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm mb-5">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Professional Journey
          </h2>

          <div className="space-y-10">
            <div className="bg-[#0b1120] border border-white/10 rounded-[32px] p-8 hover:border-yellow-400/30 transition duration-300">
              <div className="flex flex-col md:flex-row justify-between gap-5 mb-6">
                <div>
                  <h3 className="text-2xl font-bold">Quality Assurance Engineer</h3>
                  <p className="text-yellow-400 mt-2">Keywords Studios</p>
                </div>

                <span className="text-gray-400">2025 — Present</span>
              </div>

              <ul className="space-y-3 text-gray-400 leading-7">
                <li>• Worked across Web, Mobile, Console, and VR applications.</li>
                <li>• Performed functional, integration, regression, and API testing.</li>
                <li>• Executed cross-platform validation across Android, iOS, and macOS.</li>
                <li>• Built automation solutions using Selenium and TestNG.</li>
                <li>• Collaborated with developers on defect triaging and release validation.</li>
              </ul>
            </div>

            <div className="bg-[#0b1120] border border-white/10 rounded-[32px] p-8 hover:border-yellow-400/30 transition duration-300">
              <div className="flex flex-col md:flex-row justify-between gap-5 mb-6">
                <div>
                  <h3 className="text-2xl font-bold">QA Tester</h3>
                  <p className="text-yellow-400 mt-2">Updoer Technology</p>
                </div>

                <span className="text-gray-400">2024 — 2025</span>
              </div>

              <ul className="space-y-3 text-gray-400 leading-7">
                <li>• Tested B2B, B2C, and CRM platforms across Web and Mobile.</li>
                <li>• Worked on API, UAT, Regression, and Database Testing.</li>
                <li>• Participated in Agile/Scrum workflows using Jira and ClickUp.</li>
              </ul>
            </div>

            <div className="bg-[#0b1120] border border-white/10 rounded-[32px] p-8 hover:border-yellow-400/30 transition duration-300">
              <div className="flex flex-col md:flex-row justify-between gap-5 mb-6">
                <div>
                  <h3 className="text-2xl font-bold">
                    Summer Intern - Software Testing and Software Development
                  </h3>
                  <p className="text-yellow-400 mt-2">QSpiders</p>
                </div>

                <span className="text-gray-400">2023</span>
              </div>

              <ul className="space-y-3 text-gray-400 leading-7">
                <li>• Learned software testing fundamentals and QA workflows.</li>
                <li>• Practiced defect reporting, Agile concepts, and SDLC/STLC.</li>
                <li>• Improved Java programming and automation testing concepts.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-28">
        <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm mb-5">
          Projects
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Featured QA & Development Work
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#111827] border border-white/10 rounded-[32px] p-8 hover:border-yellow-400/30 hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-5">{project.title}</h3>

              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-7">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-black/30 border border-white/10 text-sm text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                className="text-yellow-400 font-semibold hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* GitHub */}
      <section className="bg-[#111827] py-28 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm mb-5">
            GitHub
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Contributions & Repositories
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-[#0b1120] border border-white/10 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold mb-5">Contribution Activity</h3>

              <p className="text-gray-400 leading-7 mb-6">
                Consistently working on automation frameworks, QA utilities,
                scalable testing architecture, and modern development projects.
              </p>

              <div className="rounded-2xl border border-white/10 p-6 bg-[#111827] overflow-hidden">
                <div className="grid grid-cols-12 gap-2">
                  {Array.from({ length: 84 }).map((_, i) => {
                    const levels = [
                      'bg-[#1f2937]',
                      'bg-yellow-400/30',
                      'bg-yellow-400/50',
                      'bg-yellow-400/70',
                      'bg-yellow-400'
                    ];

                    const randomLevel = levels[Math.floor(Math.random() * levels.length)];

                    return (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-sm ${randomLevel} hover:scale-125 transition duration-200`}
                      />
                    );
                  })}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mt-6">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-sm bg-[#1f2937]" />
                    <div className="w-3 h-3 rounded-sm bg-yellow-400/30" />
                    <div className="w-3 h-3 rounded-sm bg-yellow-400/50" />
                    <div className="w-3 h-3 rounded-sm bg-yellow-400/70" />
                    <div className="w-3 h-3 rounded-sm bg-yellow-400" />
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0b1120] border border-white/10 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold mb-6">Pinned Repositories</h3>

              <div className="space-y-5">
                {[
                  'Hybrid QA Automation Framework',
                  'API Test Framework',
                  'HireHub',
                  'Python Automation Framework',
                ].map((repo) => (
                  <div
                    key={repo}
                    className="flex items-center justify-between border border-white/10 rounded-2xl px-5 py-4 hover:border-yellow-400/30 transition"
                  >
                    <span>{repo}</span>
                    <span className="text-yellow-400">↗</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="max-w-7xl mx-auto px-6 py-28">
        <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm mb-5">
          Articles
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          QA Engineering Insights
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.title}
              className="bg-[#111827] border border-white/10 rounded-[32px] p-8 hover:border-yellow-400/30 transition duration-300"
            >
              <p className="text-yellow-400 text-sm mb-4">QA Engineering</p>

              <h3 className="text-2xl font-bold leading-tight mb-5">
                {article.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {article.desc}
              </p>

              <button className="text-yellow-400 font-semibold hover:underline">
                Read Article →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="bg-[#111827] py-28 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm mb-5">
            Skills & Certifications
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Technical Expertise
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="grid grid-cols-2 gap-5">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-[#0b1120] border border-white/10 rounded-2xl px-5 py-4 hover:border-yellow-400/30 transition"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {[
                '🤖 Anthropic Claude Certification — Anthropic · 2025',
                '⚡ Claude Code in Action — Anthropic · 2025',
                '🧠 AI Fluency: Framework — Anthropic · 2025',
                '🔗 MCP — Model Context Protocol — Anthropic · 2025',
                '🛠️ Building with the Claude API — Anthropic · 2025',
                '🕵️ AI Agents — Anthropic · 2025',
                '☕ Introduction to Programming Using Java — Udemy · Core Java',
                '🐍 Python Development & Data Science — Udemy · Python, Data Science',
                '🌎 Certified Web Professional — Web Developer — Udemy · CWP',
              ].map((cert) => (
                <div
                  key={cert}
                  className="bg-[#0b1120] border border-white/10 rounded-[28px] p-6 hover:border-yellow-400/30 transition"
                >
                  <h3 className="text-xl font-semibold leading-8">{cert}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-28 text-center">
        <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm mb-5">
          Contact
        </p>

        <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
          Let’s Build Better Software Together.
        </h2>

        <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto mb-12">
          Looking for a QA Engineer passionate about automation, software
          quality, scalable testing, and reliable user experiences? Let’s connect.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mb-14">
          <button
            onClick={() => {
              window.location.href = 'mailto:mohdtayyabh39@gmail.com';
            }}
            type="button"
            className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Email Me
          </button>

          <button
            onClick={() => {
              window.open('https://github.com/MohdTayyabSaifi20', '_blank', 'noopener,noreferrer');
            }}
            type="button"
            className="border border-white/10 hover:border-yellow-400 hover:text-yellow-400 px-8 py-4 rounded-2xl font-semibold transition"
          >
            GitHub
          </button>

          <button
            onClick={() => {
              window.open('https://www.linkedin.com/in/mohd-t-159404255/', '_blank', 'noopener,noreferrer');
            }}
            type="button"
            className="border border-white/10 hover:border-yellow-400 hover:text-yellow-400 px-8 py-4 rounded-2xl font-semibold transition"
          >
            LinkedIn
          </button>
        </div>

        <div className="text-gray-500 text-sm space-y-2">
          <p>mohdtayyab.dev</p>
          <p>Premium QA Engineer Portfolio • Netlify Ready</p>
        </div>
      </section>
    </div>
  );
}
