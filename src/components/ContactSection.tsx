import { MapPin, Phone, Clock, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 text-thai-heading">
            ติดต่อเรา
          </h2>
          <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-thai-body">
            พร้อมให้บริการและตอบคำถามของคุณ
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">ที่อยู่</h3>
                <p className="text-muted-foreground text-thai-body">
                  123/45 ถนนรัชดาภิเษก แขวงดินแดง<br />
                  เขตดินแดง กรุงเทพมหานคร 10400<br />
                  ใกล้ MRT รัชดาภิเษก (ทางออก 3)
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">เบอร์โทรศัพท์</h3>
                <p className="text-muted-foreground text-thai-body">
                  02-XXX-XXXX<br />
                  08X-XXX-XXXX (มือถือ)
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">อีเมล</h3>
                <p className="text-muted-foreground text-thai-body">
                  info@parnsakarn-clinic.com<br />
                  appointment@parnsakarn-clinic.com
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">เวลาทำการ</h3>
                <div className="space-y-2 text-muted-foreground text-thai-body">
                  <div className="flex justify-between">
                    <span>จันทร์ - ศุกร์:</span>
                    <span>08:00 - 18:00 น.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>เสาร์:</span>
                    <span>08:00 - 16:00 น.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>อาทิตย์:</span>
                    <span>09:00 - 15:00 น.</span>
                  </div>
                  <div className="text-sm text-primary mt-4">
                    * รับนัดหมายล่วงหน้า 1-2 วัน
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-gentle rounded-2xl p-8 shadow-gentle">
              <h3 className="text-xl font-semibold text-primary mb-4 text-thai-heading">
                จองนัดหมายออนไลน์
              </h3>
              <p className="text-muted-foreground mb-6 text-thai-body">
                สะดวก รวดเร็ว ไม่ต้องรอคิว
              </p>
              <button className="btn-medical w-full hover-glow">
                จองนัดหมายตอนนี้
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Google Maps Placeholder */}
            <div className="w-full h-[500px] bg-gradient-gentle rounded-2xl shadow-elevated flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  แผนที่ Google Maps
                </h3>
                <p className="text-muted-foreground text-thai-body mb-6">
                  คลิกเพื่อดูเส้นทางไปคลินิก
                </p>
                <button className="btn-medical-outline">
                  เปิดใน Google Maps
                </button>
              </div>
            </div>

            {/* Transportation Info */}
            <div className="mt-8 bg-card rounded-xl p-6 shadow-gentle">
              <h4 className="font-semibold text-primary mb-4">การเดินทาง</h4>
              <div className="space-y-3 text-sm text-muted-foreground text-thai-body">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-glow rounded-full mr-3"></div>
                  <span>MRT รัชดาภิเษก ทางออก 3 (เดิน 5 นาที)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-glow rounded-full mr-3"></div>
                  <span>รถเมล์สาย 73, 136, 157</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-glow rounded-full mr-3"></div>
                  <span>มีที่จอดรถ 20 คัน</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;