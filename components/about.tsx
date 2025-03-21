"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function About() {
  return (
    <section id="about" className="pt-28 pb-20">
      {" "}
      {/* Changed from py-20 to pt-28 pb-20 */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="cursor-pointer text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            About Me
          </h2>
          <div className="h-1 w-48 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

          <p className="text-white/70 text-center max-w-2xl">
            Get to know more about my background, skills, and GitHub
            contributions.
          </p>
        </div>

        {/* Updated journey section - centered on all screen sizes */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-3xl text-center"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-6">My Journey</h3>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-zinc-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-blue-500/50 transition-all duration-300"
              >
                <h4 className="text-white/80 leading-relaxed">
                  Software engineer with a proven track record in developing
                  <span> scalable web applications </span>
                  and optimizing business processes. Equipped with a
                  <span > Computer Science degree </span>
                  and specialized training from Moringa School, I bring expertise in
                  <span > full-stack development </span>
                  using React and Flask frameworks. My technical arsenal includes
                  database management (SQLAlchemy, MongoDB) and automation solutions
                  with Docker and web scraping technologies.
                </h4>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-zinc-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-purple-500/50 transition-all duration-300"
              >
                <h4 className="text-white/80 leading-relaxed">
                  I excel in
                  <span > collaborative environments </span>
                  where I can apply my technical problem-solving abilities to create
                  <span> impactful solutions</span>.
                  Seeking opportunities to leverage my skills in building
                  <span className="font-semibold text-white"> innovative digital products </span>
                  while continuing to grow professionally in a dynamic technology landscape.
                </h4>
              </motion.div>
            </div>
            <div className="pt-4">
              <a
                href="/cv/PatrickCV.pdf"
                download="PatrickCV.pdf"
                className="rounded-lg px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 
                          hover:from-purple-500 hover:to-blue-500 text-white transition-all duration-500"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        <div className="space-y-12">
          {/* GitHub Trophies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/5"
          >
            <h3 className="cursor-pointer text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              GitHub Trophies
            </h3>
            <div className="flex justify-center overflow-x-auto py-2">
              <iframe
                src="https://github-profile-trophy.vercel.app/?username=koskei-kipkoech&theme=dark&no-frame=true&no-bg=true&row=2"
                width="800"
                height="200"
                frameBorder="0"
                title="GitHub Trophies"
                className="min-w-full"
              />
            </div>
          </motion.div>

          <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent md:grid lg:grid-cols-3 md:gap-8 md:overflow-visible">
            {/* GitHub Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/5 min-w-[300px] md:min-w-[400px] lg:min-w-full flex-1"
            >
              <h3 className="cursor-pointer text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                GitHub Stats
              </h3>
              <div className="flex justify-center overflow-x-auto py-2">
                <iframe
                  src="https://github-readme-stats.vercel.app/api?username=koskei-kipkoech&show_icons=true&theme=dark&hide_border=false&count_private=true"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  title="GitHub Stats"
                  className="min-w-full max-w-[500px]"
                />
              </div>
            </motion.div>

            {/* Contribution Streak */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/5 min-w-[300px] md:min-w-[400px] lg:min-w-full flex-1"
            >
              <h3 className="cursor-pointer text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Contribution Streak
              </h3>
              <div className="flex justify-center overflow-x-auto py-2">
                <iframe
                  src="https://github-readme-streak-stats.herokuapp.com/?user=koskei-kipkoech&theme=dark&hide_border=false"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  title="GitHub Streak Stats"
                  className="min-w-full max-w-[500px]"
                />
              </div>
            </motion.div>

            {/* Most Used Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/5 min-w-[300px] md:min-w-[400px] lg:min-w-full flex-1"
            >
              <h3 className="cursor-pointer text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Most Used Languages
              </h3>
              <div className="flex justify-center overflow-x-auto py-2">
                <iframe
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=koskei-kipkoech&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  title="Top Languages"
                  className="min-w-full max-w-[500px]"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* GitHub Activity Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/5"
        >
          <h3 className="cursor-pointer text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            GitHub Activity
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-800/50 rounded-lg p-4 flex flex-col items-center">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-2">
                500+
              </div>
              <p className="text-white/70 text-center">Contributions</p>
            </div>

            <div className="bg-zinc-800/50 rounded-lg p-4 flex flex-col items-center">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-2">
                100+
              </div>
              <p className="text-white/70 text-center">Repositories</p>
            </div>

            <div className="bg-zinc-800/50 rounded-lg p-4 flex flex-col items-center">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-2">
                15+
              </div>
              <p className="text-white/70 text-center">Pull Requests</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://github.com/koskei-kipkoech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 px-6 py-2 rounded-lg transition-all duration-300"
            >
              View GitHub Profile
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
