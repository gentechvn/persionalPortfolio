
import { Code, Palette, Zap, Heart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Về <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">tôi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Tôi là một developer đam mê với hơn 3 năm kinh nghiệm trong việc xây dựng các ứng dụng web hiện đại. 
              Tôi yêu thích việc chuyển đổi những ý tưởng sáng tạo thành những sản phẩm số hoàn chỉnh.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Với background mạnh về cả Frontend và Backend, tôi có thể tạo ra những giải pháp toàn diện từ UI/UX 
              cho đến database và API. Tôi luôn theo đuổi những công nghệ mới nhất và best practices trong ngành.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Khi không code, tôi thích khám phá những xu hướng thiết kế mới, đọc sách về công nghệ, 
              và chia sẻ kiến thức với cộng đồng developer.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:scale-105 transition-transform duration-300">
              <Code className="text-purple-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-400 text-sm">Viết code sạch, dễ maintain và scalable</p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/50 to-blue-900/50 p-6 rounded-2xl backdrop-blur-sm border border-pink-500/20 hover:scale-105 transition-transform duration-300">
              <Palette className="text-pink-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-400 text-sm">Thiết kế giao diện đẹp và trải nghiệm tốt</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/20 hover:scale-105 transition-transform duration-300">
              <Zap className="text-blue-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Performance</h3>
              <p className="text-gray-400 text-sm">Tối ưu hiệu suất và tốc độ tải</p>
            </div>

            <div className="bg-gradient-to-br from-green-900/50 to-purple-900/50 p-6 rounded-2xl backdrop-blur-sm border border-green-500/20 hover:scale-105 transition-transform duration-300">
              <Heart className="text-green-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Passion</h3>
              <p className="text-gray-400 text-sm">Đam mê và yêu thích công việc</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
