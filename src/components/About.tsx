import { FC } from 'react';
import {
  Code, Database, Globe, Award, BookOpen, Users, Briefcase, GraduationCap, Cpu, Layers, Palette, Terminal
  , Package, ExternalLink, Download
} from 'lucide-react';

export const About: FC = () => {
  const achievements = [
    { number: "2.3+", label: "Years Experience", icon: Briefcase },
    { number: "13+", label: "Projects Completed", icon: Code },
    { number: "5+", label: "Happy Clients", icon: Users },
    { number: "3+", label: "Certifications", icon: Award }
  ];

  const packages = [
    {
      name: 'last-active',
      link: 'https://www.npmjs.com/package/last-active',
      description: "A package to format dates as 'X ago' (e.g., '1 minute ago', '2 hours ago').",
    },
    {
      name: 'websocket-bridge',
      link: 'https://www.npmjs.com/package/websocket-bridge',
      description: 'WebSocket bridge between Node.js backend and React frontend.',
    },
    {
      name: 'multer-upload-helper',
      link: 'https://www.npmjs.com/package/multer-upload-helper',
      description: 'Multer file upload middleware for Node.js and Express apps.',
    },
    {
      name: 'auth-helper-jwt',
      link: 'https://www.npmjs.com/package/auth-helper-jwt',
      description: 'JWT utility for generating, helper for JWT authentication and password hashing in Node.js with Express.',
    },
  ];


  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science",
      year: "2016-2020",
      institution: "Sri Aurobindo Institute of Technology"
    },
    {
      degree: "MERN Stack Development",
      field: "Web Development",
      year: "2022",
      institution: "Ypsilon IT Solutions Pvt Ltd"
    }
  ];

  const skillMatrix = [
    {
      category: "Frontend",
      icon: Cpu,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Next.js", level: 75 }
      ]
    },
    {
      category: "Backend",
      icon: Layers,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Laravel", level: 70 }
      ]
    },
    {
      category: "Design",
      icon: Palette,
      skills: [
        { name: "Tailwind", level: 90 },
        { name: "Material-UI", level: 85 },
        { name: "Figma", level: 75 },
        { name: "Bootstrap", level: 85 }
      ]
    },
    {
      category: "DevOps",
      icon: Terminal,
      skills: [
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "CI/CD", level: 75 },
        { name: "Git", level: 85 }
      ]
    }
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-secondary/80">
              <p>
                Hi, I'm Prashant Sharma, a passionate Software Developer with expertise in creating innovative digital solutions. I specialize in full-stack development, focusing on building scalable and user-centric applications.
              </p>
              <p>
                With a strong foundation in modern web technologies and a keen eye for design, I bring ideas to life through clean code and intuitive user experiences.
              </p>
              <p>
                Experienced in responsive web design
                and ensuring cross-browser compatibility. Proficient in API development and integration, delivering high-quality, maintainable code
                within deadlines.
              </p>
              <p>
                Committed to continuous learning and contributing to projects with innovative approaches to improve user experience
                and system functionality.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-6 bg-secondary/5 rounded-lg backdrop-blur-sm">
                  <Code className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                  <p className="text-sm">React, Vue, TypeScript</p>
                </div>
                <div className="p-6 bg-secondary/5 rounded-lg backdrop-blur-sm">
                  <Database className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Backend</h3>
                  <p className="text-sm">Node.js, Laravel </p>
                </div>
                <div className="p-6 bg-secondary/5 rounded-lg backdrop-blur-sm">
                  <Globe className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">DevOps</h3>
                  <p className="text-sm">Docker, AWS, CI/CD</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="p-6 bg-secondary/5 rounded-lg backdrop-blur-sm hover:bg-secondary/10 transition-all duration-300 transform hover:-translate-y-1">
                  <achievement.icon className="w-8 h-8 text-primary mb-3" />
                  <div className="text-3xl font-bold gradient-text mb-1">{achievement.number}</div>
                  <div className="text-sm text-secondary/80">{achievement.label}</div>
                </div>
              ))}
            </div>

            {/* Education Timeline */}
            <div className="bg-secondary/5 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="text-sm text-primary mb-1">{edu.year}</div>
                    <div className="font-semibold">{edu.degree}</div>
                    <div className="text-sm text-secondary/80">{edu.field}</div>
                    <div className="text-sm text-secondary/60">{edu.institution}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="text-center mb-12 animate-fade-in-up">
          <h3 className="text-3xl font-bold bg-transparent mb-4">NPM Package Contributions</h3>
          <p className="text-lg text-white-600">Open source packages I've contributed to the JavaScript ecosystem</p>
        </div>

        <div className="bg-transparent from-white  rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {packages.map((pkg, index) => (
              <a
                key={index}
                href={pkg.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-secondary/5 rounded-lg backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-white-200"
              >
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-md">
                      <Package className="text-white w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white-900 group-hover:text-green-600 transition-colors duration-200 flex items-center gap-2">
                        {pkg.name}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-white-600 mb-4 line-clamp-2 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Downloads Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-white-100">
                  <div className="flex items-center gap-2 text-xs text-white-500">
                    <Download className="w-3 h-3" />
                    <span>{pkg.downloads} weekly downloads</span>
                  </div>
                  <div className="text-xs text-blue-600 font-medium group-hover:text-blue-700">
                    View Package →
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
              </a>
            ))}
          </div>

          {/* View All Packages Link */}
          <div className="text-center mt-8">
            <a
              href="https://www.npmjs.com/~prashants565"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <Package className="w-4 h-4" />
              View All My Packages
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};