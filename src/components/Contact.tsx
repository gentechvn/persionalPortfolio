
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Liên <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">hệ</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg">
            Có dự án thú vị? Hãy cùng nhau tạo ra điều gì đó tuyệt vời!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-900/50 to-purple-900/30 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Thông tin liên hệ</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">ngkhacthinh@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Điện thoại</p>
                    <p className="text-white font-medium">+84 911 091 506</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Địa chỉ</p>
                    <p className="text-white font-medium">DaNang, VietNam</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900/50 to-purple-900/30 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Sẵn sàng hợp tác</h3>
              <p className="text-gray-400 mb-4">
                Tôi luôn tìm kiếm những cơ hội mới và thú vị. Hãy kết nối với tôi!
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center animate-pulse">
                  <span className="text-white font-bold">●</span>
                </div>
                <span className="text-green-400 font-medium">Đang online</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-900/50 to-purple-900/30 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Gửi tin nhắn</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Tên của bạn</label>
                  <Input 
                    placeholder="Nhập tên của bạn"
                    className="bg-slate-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    className="bg-slate-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm">Chủ đề</label>
                <Input 
                  placeholder="Tiêu đề tin nhắn"
                  className="bg-slate-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm">Tin nhắn</label>
                <Textarea 
                  placeholder="Nội dung tin nhắn của bạn..."
                  rows={5}
                  className="bg-slate-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 resize-none"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Send size={20} className="mr-2" />
                Gửi tin nhắn
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-purple-500/20">
          <p className="text-gray-400">
            © GenTech
          </p>
        </div>
      </div>
    </section>
  );
};
