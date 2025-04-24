
import { Button } from './ui/button';
import { Github, Linkedin, Mail, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="inline-block p-2 bg-primary/10 rounded-full mb-4 fade-in">
            <Rocket className="w-6 h-6 text-primary animate-pulse" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text fade-in" style={{ animationDelay: '0.2s' }}>
            Hi, I'm Your Name
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 hover-scale fade-in" style={{ animationDelay: '0.4s' }}>
            Final Year Computer Science Student
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto hover-scale fade-in" style={{ animationDelay: '0.6s' }}>
            Passionate about building innovative solutions and creating impactful experiences through code.
          </p>
          
          <div className="flex justify-center space-x-4 fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                GitHub
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
