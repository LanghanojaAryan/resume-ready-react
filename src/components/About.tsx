
const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              I am a final year Computer Science student at [Your University], passionate about software development and problem-solving. With a strong foundation in both theory and practical application, I am constantly seeking new challenges and opportunities to grow.
            </p>
            <p className="text-lg text-muted-foreground">
              Throughout my academic journey, I've maintained a strong academic record while actively participating in various technical projects and extracurricular activities.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Education</h3>
              <p className="text-muted-foreground">B.S. in Computer Science</p>
              <p className="text-sm text-muted-foreground">Expected Graduation: 2024</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Interests</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Web Development</li>
                <li>Software Architecture</li>
                <li>Machine Learning</li>
                <li>Open Source</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
