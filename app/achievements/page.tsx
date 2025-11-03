"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Quote, Sparkles, ArrowRight, Award, Target, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const recognitions = [
  {
    icon: Target,
    title: "From Product Manager",
    quote: "Thiliban has been consistently delivering high-quality work. One of the fastest to scale up in terms of speed and understanding. He has gained the trust of his peers and business owners in his reliability and execution. Given the lack of FE bandwidth, Thiliban has been picking up everything frontend in Plato and has shown immense ownership.",
    highlight: "#smallwinbell - High impact projects: Plato Migration, Cost Sheet, Visa Dashboard, CUES",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "From Co-Founder & CEO",
    quote: "Vignesh, Sangeetha, Thiliban have been real lifesavers and enablers who think about product features proactively.",
    highlight: "Recognition from leadership for proactive thinking and impact",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "From Manager",
    quote: "Congratulations Thiliban on your first tech blog 'React Query at the Heart of Pickyourtrail'. You set a high standard for clarity and quality.",
    highlight: "First engineer to write internal tech blogs, setting standards for the team",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    title: "From Backend Associate Director",
    quote: "Nice work Thiliban. You might get me started with FE works I guess. Congrats for bringing this initiative. Good step to motivate folks to think & solve engineering problems #MTGA (Make Tech Great Again)",
    highlight: "Cross-functional recognition for technical excellence and inspiring backend team",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Trophy,
    title: "From Core Product Manager",
    quote: "Thiliban - be it the AO dashboard, CUES, the speed at which he is executing, there is no limit to his potential. Amazing work!",
    highlight: "#smallwinbell recognition for unlimited potential and exceptional execution speed",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Award,
    title: "From Product Manager",
    quote: "Extremely reliable and contextually knowledgeable. Instead of saying 'I am not aware of this code', you have always said 'give me time to understand the code, I will fix/build this'. Showcasing this kind of mentality in a short span of time at the company makes it an even greater achievement. Inspired by your ownership and execution!",
    highlight: "#smallwinbell for exceptional reliability and problem-solving mindset",
    color: "from-teal-500 to-cyan-500",
  },
];

const teamAppreciation = [
  {
    quote: "Kudos bro! It's not easy to get good feedbacks consistently for quite a duration, especially when working on big projects back to back. It shows the commitment and your strength in the role. Keep pushing and set new heights for yourself in the future.",
    author: "Engineering Manager - Frontend",
  },
  {
    quote: "Thiliban is doing valuable work. Hearing your name a lot in meetings and discussions and almost all of them are positive ones. You have earned the respect and trust of your peers. Good job da. Continue the same and set a great bar for others.",
    author: "Associate Director - Backend",
  },
  {
    quote: "Excellent work! Keep up the great work, the attitude that you show towards work is always exemplary, thank you. To many more such wins!",
    author: "Product Manager",
  },
  {
    quote: "Your work has been outstanding! Your quick grasp of tasks and dedication are truly remarkable. Keep up the fantastic work, and know that your efforts are greatly appreciated!",
    author: "Associate Director - Frontend",
  },
  {
    quote: "Always loved your work ethic, keep it up!",
    author: "Product Manager",
  },
];

const blogs = [
  {
    title: "Mastering Form Handling with React Hook Form & Zod",
    description: "PickYourTrail's masterclass in form handling - optimizing user experience with React Hook Form, Zod, and TypeScript",
    url: "https://engineer.pickyourtrail.com/pickyourtrails-masterclass-in-form-handling-how-we-optimize-user-experience-with-react-hook-form-zod-and-typescript/",
  },
  {
    title: "From Complexity to Clarity: The Jotai Revolution",
    description: "How we transformed state management at PickYourTrail using Jotai for better performance and developer experience",
    url: "https://engineer.pickyourtrail.com/from-complexity-to-clarity-the-jotai-revolution-at-pickyourtrail/",
  },
  {
    title: "React Query at the Heart of PickYourTrail",
    description: "Optimizing travel websites - how React Query powers our data fetching and caching strategies",
    url: "https://engineer.pickyourtrail.com/optimizing-travel-websites-react-query-at-the-heart-of-pickyourtrail/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AchievementsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Animated Badge - Floating */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="fixed top-24 right-8 z-50 hidden lg:block"
      >
        <div className="relative">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(234, 179, 8, 0.3)",
                "0 0 40px rgba(234, 179, 8, 0.5)",
                "0 0 20px rgba(234, 179, 8, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-linear-to-r from-yellow-500 to-amber-500 text-black px-4 py-2 rounded-full font-bold flex items-center gap-2"
          >
            <Trophy className="h-5 w-5" />
            <span>Rookie of the Year 2024</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="inline-block mb-6"
        >
          <Trophy className="h-20 w-20 text-yellow-500" />
        </motion.div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Achievements & Recognition
        </h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-block"
        >
          <div className="bg-linear-to-r from-yellow-400 via-amber-500 to-yellow-600 text-black px-6 py-3 rounded-full font-bold text-xl mb-4">
            🏆 Rookie of the Year 2024
          </div>
        </motion.div>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          For delivering standout impact in revenue, cost, and brand — right out of the gate
        </p>
      </motion.div>

      {/* Award Highlights Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto mb-20"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Award Images */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative cursor-pointer group"
              onClick={() => setSelectedImage("/images/award.jpeg")}
            >
              <div className="absolute inset-0 bg-linear-to-r from-yellow-500/20 to-amber-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all" />
              <Card className="relative overflow-hidden border-2 border-yellow-500/20">
                <CardContent className="p-0">
                  <Image
                    src="/images/award.jpeg"
                    alt="Rookie of the Year Award"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, rotateY: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative cursor-pointer group"
              onClick={() => setSelectedImage("/images/achievement.jpeg")}
            >
              <div className="absolute inset-0 bg-linear-to-r from-green-500/20 to-emerald-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all" />
              <Card className="relative overflow-hidden border-2 border-green-500/20">
                <CardContent className="p-0">
                  <Image
                    src="/images/achievement.jpeg"
                    alt="Achievement Recognition"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Award Details */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Award className="h-8 w-8 text-yellow-500" />
                Rookie of the Year 2024
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                PickYourTrail — Outstanding Technical Contributions
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-yellow-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Velocity Hero 🏃‍♂️</h3>
                  <p className="text-muted-foreground">Consistently delivers at exceptional speed without compromising quality</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Delivers Before Due Date ⏰</h3>
                  <p className="text-muted-foreground">No task is too difficult — maintains &lt;2% post-release bug rate</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="h-6 w-6 text-blue-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">First Engineering Blog Author ✍️</h3>
                  <p className="text-muted-foreground">Set high standards for technical documentation and knowledge sharing</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Trophy className="h-6 w-6 text-purple-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Role Model for Frontend Team 💻</h3>
                  <p className="text-muted-foreground">Mentors junior developers and drives technical excellence</p>
                </div>
              </div>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <blockquote className="text-lg italic text-muted-foreground mb-4">
                  &quot;Your growth mindset, commitment to quality, and focus on mentorship are already 
                  making a difference. Keep pushing forward — you&apos;re well on track for a senior role.&quot;
                </blockquote>
                <blockquote className="text-lg italic text-muted-foreground">
                  &quot;I really appreciate how you&apos;ve embraced feedback and applied it so thoughtfully in your work. 
                  Your growth in communication, technical ownership, and mentorship has been very noticeable. 
                  Keep up the great work — you&apos;re making a strong impact on the team!&quot;
                </blockquote>
                <p className="text-sm text-primary mt-4 font-semibold">— Engineering Manager</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>

      {/* Recognition Wall */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-20"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Recognition Wall</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recognitions.map((recognition, index) => {
            const Icon = recognition.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-full bg-linear-to-r ${recognition.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">{recognition.title}</h3>
                    <Quote className="h-5 w-5 text-muted-foreground mb-2" />
                    <p className="text-muted-foreground italic mb-4">&quot;{recognition.quote}&quot;</p>
                    <div className="pt-4 border-t">
                      <p className="text-sm text-primary font-medium">{recognition.highlight}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Team Appreciation Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-20"
      >
        <h2 className="text-3xl font-bold text-center mb-4">Team Appreciation</h2>
        <p className="text-center text-muted-foreground mb-12">
          Feedback from engineering managers across the organization
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamAppreciation.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 bg-linear-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <Quote className="h-6 w-6 text-primary mb-3" />
                  <p className="text-muted-foreground italic mb-4">&quot;{item.quote}&quot;</p>
                  <p className="text-sm text-primary font-semibold">— {item.author}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tech Blogs Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-20"
      >
        <h2 className="text-3xl font-bold text-center mb-4">Technical Contributions</h2>
        <p className="text-center text-muted-foreground mb-12">
          Published on PickYourTrail Engineering Blog — setting standards for the team
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-semibold text-green-500">Engineering Blog</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {blog.description}
                  </p>
                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Closing Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <Card className="bg-linear-to-r from-yellow-500/10 via-amber-500/10 to-yellow-600/10 border-yellow-500/20">
          <CardContent className="p-12">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
            </motion.div>
            <blockquote className="text-2xl md:text-3xl font-bold mb-8">
              &quot;Awards follow effort — and effort builds legacy.&quot;
            </blockquote>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Read My Tech Blogs
              <ArrowRight className="h-5 w-5" />
            </Link>
          </CardContent>
        </Card>
      </motion.div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl max-h-[90vh]"
          >
            <Image
              src={selectedImage}
              alt="Achievement"
              width={1200}
              height={800}
              className="w-auto h-auto max-h-[90vh] object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
