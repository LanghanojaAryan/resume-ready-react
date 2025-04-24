
import { Award, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"]
    },
    {
      title: "Web Technologies",
      skills: ["React", "Node.js", "HTML5", "CSS3", "Express.js"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "VS Code", "Figma"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Leadership", "Communication", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgxNDcsIDUxLCAyMzQsIDAuMSkiLz48L3N2Zz4=')] opacity-50" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-12">
          <Award className="w-8 h-8 text-primary floating" />
          <h2 className="text-3xl font-bold text-center gradient-text">Skills</h2>
          <Sparkles className="w-8 h-8 text-primary floating" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card/80 backdrop-blur-sm p-6 rounded-lg fancy-border card-hover fade-in shimmer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300 glowing-text">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-center gap-2 transition-all duration-300 hover:translate-x-2 group/skill"
                  >
                    <div className="h-2 w-2 bg-primary rounded-full group-hover/skill:scale-150 transition-transform" />
                    <span className="text-muted-foreground group-hover/skill:text-primary transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
