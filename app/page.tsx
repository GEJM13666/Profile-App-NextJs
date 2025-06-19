import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto my-5 font-sans">
      
      <div className="text-center text-[#2c3e50] mb-10 text-base leading-relaxed font-normal">
        Hello! I'm{" "}
        <span className="bg-yellow-400 px-2 py-0.5 font-semibold text-[#2c3e50]">
          Sakan Wokkum
        </span>
        , also known as{" "}
        <span className="bg-yellow-400 px-2 py-0.5 font-semibold text-[#2c3e50]">
          Gun
        </span>
        . I'm currently pursuing a degree in{" "}
        <span className="bg-cyan-200 px-2 py-0.5 font-semibold text-[#2c3e50]">
          Computer Science
        </span>
        . I was born on{" "}
        <span className="bg-yellow-400 px-2 py-0.5 font-semibold text-[#2c3e50]">
          24th November 2003
        </span>
        , and I'm passionate about technology, programming, and all things tech-related!
      </div>

      <div className="mb-10 space-y-5">
        {/* Academic Info */}
        <div className="bg-gray-50 p-6 border-l-4 border-[#2a5298]">
          <h3 className="text-[#2a5298] mb-5 text-xl font-semibold">Academic Information</h3>

          <div className="mb-4 text-base leading-relaxed">
            <span className="font-semibold text-[#2c3e50] inline-block min-w-[120px]">Faculty:</span>
            <span className="text-[#2a5298] font-medium">🌻Faculty of Science and Digital Innovation</span>
          </div>

          <div className="mb-4 text-base leading-relaxed">
            <span className="font-semibold text-[#2c3e50] inline-block min-w-[120px]">Program:</span>
            <span className="text-[#2a5298] font-medium">B.Sc. Computer Science</span>
          </div>

          <div className="mb-4 text-base leading-relaxed">
            <span className="font-semibold text-[#2c3e50] inline-block min-w-[120px]">Birth Date:</span>
            <span className="text-[#2a5298] font-medium">24th November 2003</span>
          </div>

           <div className="mb-4 text-base leading-relaxed">
            <span className="font-semibold text-[#2c3e50] inline-block min-w-[120px]">Phone:</span>
            <span className="text-[#000000] font-medium">+66 64 005 4724</span>
          </div>
        </div>

        {/* Personal Info */}
        <div className="bg-gray-50 p-6 border-l-4 border-[#2a5298]">
          <h3 className="text-[#2a5298] mb-5 text-xl font-semibold">Personal Information</h3>

          <div className="mb-4 text-base leading-relaxed">
            <span className="font-semibold text-[#2c3e50] inline-block min-w-[120px]">MBTI Type:</span>
            <span className="text-[#2a5298] font-medium">INFP</span>
          </div>

          <div className="mb-4 text-base leading-relaxed">
            <span className="font-semibold text-[#2c3e50] inline-block min-w-[120px]">Hobbies:</span>
            <span className="text-[#2a5298] font-medium">
              Coding, Gaming, Movies, Podcasts, Tech Exploration
            </span>
          </div>

          <div className="mb-4 text-base leading-relaxed">
            <span className="font-semibold text-[#2c3e50] inline-block min-w-[120px]">Favorite Colors:</span>
            <span className="text-[#2a5298] font-medium">Black and Grey</span>
          </div>

          <div className="mb-4 text-base leading-relaxed">
            <span className="font-semibold text-[#2c3e50] inline-block min-w-[120px]">Career Goal:</span>
            <span className="text-[#2a5298] font-medium">Whatever I Like</span>
          </div>

      
          <div className="mt-6 text-base leading-relaxed italic text-[#555] border-t border-gray-300 pt-4">
            “The only way to do great work is to love what you do.” – Steve Jobs
          </div>
        </div>
      </div>
    </div>
  );
}
