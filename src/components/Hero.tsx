
import { Button } from './ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Hi, I'm Your Name
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Final Year Computer Science Student
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Passionate about building innovative solutions and creating impactful experiences through code.
          </p>
          
          <div className="flex justify-center space-x-4">
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90 transition-colors duration-300"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
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
