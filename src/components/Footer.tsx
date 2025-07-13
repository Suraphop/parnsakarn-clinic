import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-thai-heading">
              Pansakarn Clinic
            </h3>
            <p className="text-primary-foreground/80 mb-6 text-thai-body leading-relaxed">
              การรักษาแบบแพทย์แผนจีนดั้งเดิม ด้วยผู้เชี่ยวชาญด้านแพทย์แผนจีน
              เพื่อสุขภาพที่ดีของคุณและครอบครัว
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <span className="text-sm font-semibold">TCM</span>
              </div>
              <span className="text-sm text-primary-foreground/80">
                Traditional Chinese Medicine Clinic
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-thai-heading">บริการ</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">
                การฝังเข็ม
              </li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">
                การครอบแก้ว
              </li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">
                ยาจีน
              </li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">
                ตรวจโรคทั่วไป
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-thai-heading">ติดต่อ</h4>
            <div className="space-y-3 text-primary-foreground/80 text-sm">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <span>123/45 ถนนณรงค์วิถี (สวน 200ปี)<br />ต.อทัยใหม่ อ.เมือง จ.อุทัยธานี 61000</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>063-435-3433</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>info@parnsakarn-clinic.com</span>
              </div>
              <div className="flex items-start">
                <Clock className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <span>จ-ศ: 08:00-18:00<br />ส: 08:00-16:00<br />อา: 09:00-15:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm text-thai-body">
            © 2024 Pansakarn Clinic สงวนลิขสิทธิ์ทุกอย่าง | Traditional Chinese Medicine Clinic
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;